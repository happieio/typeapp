import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { DashboardScene } from '../scene/dashboard/controller';
import { ContactScene } from '../scene/contact/controller';
import { HomeScene } from '../scene/home/controller';
import { Tabs } from '../scene/tabs/controller';

@NgModule({
  declarations: [
    MyApp,
    DashboardScene,
    ContactScene,
    HomeScene,
    Tabs
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardScene,
    ContactScene,
    HomeScene,
    Tabs
  ],
  providers: []
})
export class AppModule {}
