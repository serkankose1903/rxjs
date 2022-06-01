import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadUserData } from "../../models/data.model";
import { AppState } from '../../store/app.state';
import { getLastView } from '../../store/app/store.selector';

@Component({
  selector: 'app-last-view',
  templateUrl: './last-view.component.html',
  styleUrls: ['./last-view.component.scss']
})
export class LastViewComponent implements OnInit {
  viewList!: LoadUserData[];
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getLastView).subscribe((data)=>{
      this.viewList = data
    })
  }

}
