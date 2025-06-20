import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/* Components */
import { HomeComponent } from './views/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  readonly title = 'Branchbit';
}
