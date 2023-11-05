import { Component } from '@angular/core';
import { Context } from './model/context.model';
import { PLEXUS_CONTEXT } from './constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'phil-test';

  testData: Context = {
    type: 'fdc3.instrument',
    name: 'Apple',
    id: {
      ticker: 'aapl',
      ISIN: 'US0378331005',
      CUSIP: '037833100',
      FIGI: 'BBG000B9XRY4',
    },
  };

  ngOnInit() {

  }

  fireEvent() {
    const instrumentTraded = new CustomEvent<Context>(PLEXUS_CONTEXT, {
      detail: this.testData
    });

    // dispatch the events
    window.dispatchEvent(instrumentTraded);
  }

  ngOnDestroy() {
    // window.removeEventListener(this.customEventName, this.handleEvent);
  }
}
