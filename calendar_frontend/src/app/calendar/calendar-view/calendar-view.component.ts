import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CalendarCardComponent } from '../calendar-card/calendar-card.component';

/**
 * CalendarViewComponent
 * Renders the extracted design layout with a left light calendar card,
 * a right dark panel background, and a dark calendar card on that panel.
 * Applies the Ocean Professional theme and minimalist layout.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-calendar-view',
  standalone: true,
  imports: [CalendarCardComponent, RouterLink],
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent {
  // Data for both cards; in a real app, data would come from services/store.
  lightWeekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  darkWeekdays = this.lightWeekdays;

  lightWeeks = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, null, null, null, null],
  ];

  darkWeeks = this.lightWeeks;
}
