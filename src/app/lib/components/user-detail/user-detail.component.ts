import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userDetail: any;
  isDisplay = false
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.apiService.getUserDetail(id)
      .pipe(map((data) => { return data.data }))
      .subscribe((data) => {
        this.userDetail = data;
        this.isDisplay = data.length > 0;
      })
  }


}
