import { Component, Input, computed, signal } from '@angular/core';

/**
 * CalendarCardComponent
 * A reusable calendar card that renders a month grid and header with navigation icons.
 * Supports light and dark variants to match the Figma design and Ocean Professional theme.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-calendar-card',
  standalone: true,
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss']
})
export class CalendarCardComponent {
  /**
   * Variant of the card: 'light' or 'dark'
   */
  // PUBLIC_INTERFACE
  @Input() variant: 'light' | 'dark' = 'light';

  /**
   * Month label to display in header (e.g., "September 2021")
   */
  // PUBLIC_INTERFACE
  @Input() monthLabel = 'September 2021';

  /**
   * Active date to highlight with a pill (e.g., 19)
   */
  // PUBLIC_INTERFACE
  @Input() activeDate: number | null = 19;

  /**
   * Weekday labels (3-letter uppercase per extracted design)
   */
  // PUBLIC_INTERFACE
  @Input() weekdays: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  /**
   * Matrix of dates to render in the card grid.
   * This is a 5-row grid of up to 7 items, using null for empty cells.
   */
  // PUBLIC_INTERFACE
  @Input() weeks: (number | null)[][] = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, null, null, null, null],
  ];

  // local signals for css helpers
  isDark = computed(() => this.variant === 'dark');

  // PUBLIC_INTERFACE
  isActive = (value: number | null): boolean => {
    if (value == null || this.activeDate == null) return false;
    return value === this.activeDate;
  };
}
