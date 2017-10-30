import { Component } from '@angular/core';

import { EventsPage } from '../events/events';
import { AccountPage } from '../account/account';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EventsPage;
  tab3Root = AccountPage;

  constructor() {

  }
}
