import { Routes } from '@angular/router';
import { CalendarViewComponent } from './calendar/calendar-view/calendar-view.component';

export const routes: Routes = [
  { path: '', component: CalendarViewComponent },
  { path: '**', redirectTo: '' }
];
