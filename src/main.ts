import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
import { ScoreBugComponent } from './app/score-bug/score-bug.component';

bootstrapApplication(ScoreBugComponent, appConfig)
  .catch((err) => console.error(err));
