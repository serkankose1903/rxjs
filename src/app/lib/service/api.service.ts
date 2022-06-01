import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { getUserInputSearch, setPageData } from '../store/app/store.selector';
import { switchMap, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  page$ = new Observable<number>();
  input$ = new Observable<string>();
  destroy$ = new Subject()

  private endpoint = 'https://gorest.co.in/public-api/users';
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }
  getLoad() {
    this.page$ = this.store.select(setPageData);
    this.input$ = this.store.select(getUserInputSearch);
    return combineLatest([this.page$, this.input$]).pipe(
      takeUntil(this.destroy$),
      switchMap(([page, input]) => {
        return this.http.get<any>(this.endpoint + '?name=' + input + '&page=' + page);
      })
    )
  }

  getUserDetail(id: string) {
    return this.http.get<any>(this.endpoint + '/' + id + '/posts');
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
