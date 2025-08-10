import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { ScoreBugComponent } from "./score-bug/score-bug.component";

@Component({
  selector: 'app-root',
  imports: [ ScoreBugComponent],
  templateUrl: './app.component.html',
  template: ' <app-score-bug>  </app-score-bug>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fox2006-score-bug';
}
