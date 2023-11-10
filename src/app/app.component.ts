import { Component } from '@angular/core';
import { ContextManager } from 'steel-lib/ContextManager';
import { Context } from 'steel-lib/model/context';

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

  ngOnInit() {}

  fireEvent() {
    ContextManager.setContext(this.testData);
  }
}
