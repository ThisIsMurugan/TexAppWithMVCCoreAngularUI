import { BaseLogger, ConsoleLogger, FileLogger, DbLogger } from './../Utility/Utility.Logger';
import { HomePageComponent } from './Home.HomePageComponent';
import { MasterPageComponent } from './Home.MasterPageComponent';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from 'src/Routing/Home-HomeRouting.module';

@NgModule({
  declarations: [
    HomePageComponent,
    MasterPageComponent
  ],
  imports: [
    HomeRoutingModule,
    BrowserModule
  ],
  providers: [
    {
    provide: BaseLogger,
    useClass: FileLogger
    },
    {provide: '1', useClass: DbLogger},
    {provide: '2', useClass: ConsoleLogger}
],
  bootstrap: [MasterPageComponent]
})
export class HomeModule { }
