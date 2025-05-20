import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
  <app-header />
    <main>
    <router-outlet />
    </main>
  `,
  styles: [`
    main {
      padding-inline: 16px;
    }
    `],
})
export class AppComponent {
  title = 'first-ng-app';
}
