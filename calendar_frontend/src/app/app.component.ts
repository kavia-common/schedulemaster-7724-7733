import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Root component that hosts the routed views.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /** Application title used for metadata in future */
  // PUBLIC_INTERFACE
  title = 'ScheduleMaster';
}
