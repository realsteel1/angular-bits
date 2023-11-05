import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EventListenerModule } from './components/event-listener/event-listener.module';
import { HierarchicalLinksModule } from './components/hierarchical-links/hierarchical-links.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EventListenerModule,
    HierarchicalLinksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
