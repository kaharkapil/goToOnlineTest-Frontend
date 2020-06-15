import {ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-dashboard-cards',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './user-dashboard-cards.component.html',
  styleUrls: ['./user-dashboard-cards.component.scss']
})
export class UserDashboardCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
