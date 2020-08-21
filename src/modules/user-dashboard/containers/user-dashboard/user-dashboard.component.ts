import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'sb-user-dashboard',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  public userName;
  public dashboardTitle;

  constructor() { }

  ngOnInit(): void {
    this.userName=Cookie.get('userName');
    this.dashboardTitle="Hello,"+this.userName;

  }

}
