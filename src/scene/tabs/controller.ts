import { Component } from '@angular/core';

import { HomeScene } from '../home/controller';
import { DashboardScene } from '../dashboard/controller';
import { ContactScene } from '../contact/controller';

@Component({
  templateUrl: 'tabs.html'
})
export class Tabs {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomeScene;
  tab2Root: any = DashboardScene;
  tab3Root: any = ContactScene;

  constructor() {

  }
}
