import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CalendarModule } from 'angular-calendar';
import { EventsService } from '../services/events/events.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CalendarModule.forRoot()
  ],
  providers: [EventsService]
})
export class DashboardModule { }
