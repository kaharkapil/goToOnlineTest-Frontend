import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { sideNavItems, sideNavSections, userSideNavItems, userSideNavSections } from '@modules/navigation/data';
import { NavigationService } from '@modules/navigation/services';

@Component({
  selector: 'sb-layout-user-dashboard',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './layout-user-dashboard.component.html',
  styleUrls: ['./layout-user-dashboard.component.scss']
})
export class LayoutUserDashboardComponent implements OnInit {

  @Input() static = false;
  @Input() light = false;
  @HostBinding('class.sb-sidenav-toggled') sideNavHidden = false;
  subscription: Subscription = new Subscription();
  sideNavItems = userSideNavItems;
  sideNavSections = userSideNavSections;
  sidenavStyle = 'sb-sidenav-dark';

  constructor(
    public navigationService: NavigationService,
        private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.subscription.add(
      this.navigationService.sideNavVisible$().subscribe(isVisible => {
          this.sideNavHidden = !isVisible;
          this.changeDetectorRef.markForCheck();
      })
  );

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();

}
}
