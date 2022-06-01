import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime,map, takeUntil, tap } from 'rxjs/operators';
import { Subject, BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { ApiService } from '../../service/api.service';
import { LoadUserData } from "../../models/data.model";
import { Pagination } from "../../models/pagination.model";
import { setPageNumber, addLastView, setUserInputSearch } from '../../store/app/store.actions';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  LoadUserData$?: Observable<LoadUserData[]> | undefined;
  page$ = new BehaviorSubject<number>(1);
  paginationData$ = new BehaviorSubject<Pagination>({} as Pagination);
  private inputSearch$ = new BehaviorSubject<string>('');
  private destroy$ = new Subject();

  //pagination
  currentPage = 1;
  constructor(private apiService: ApiService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage() {
    this.LoadUserData$ = this.apiService.getLoad().pipe(
      tap(({ meta: { pagination } }: any) => {
        this.paginationData$.next(pagination);
      }),
      map((data: any) => {
        return data.data.length ? data.data: null;
      })
    );
    combineLatest([this.page$, this.inputSearch$])
      .pipe(takeUntil(this.destroy$), debounceTime(100))
      .subscribe(([page, inputData]) => {
        this.store.dispatch(setPageNumber({ page: page }))
        this.store.dispatch(setUserInputSearch({ input: inputData }));
      })
  }

  //pagination
  pageChanged() {
    this.store.dispatch(setPageNumber({ page: this.currentPage }))
  }

  //view
  latestView(post: LoadUserData) {
    this.store.dispatch(addLastView({ lastViewedUsers: post }))
  }

  //search
  changes($event: string) {
    this.inputSearch$.next($event && $event.length > 2 ? $event : '');
  }


  ngOnDestroy() {
    this.destroy$.next();
  }
}
