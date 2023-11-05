import { Component } from "@angular/core";
import { fromEvent } from "rxjs";
import { PLEXUS_CONTEXT } from "src/app/constants/constants";
import { Context } from "src/app/model/context.model";

@Component({
  selector: 'event-listener',
  template: ''
})
export class EventListenerComponent {

  ngOnInit() {

    window.addEventListener(PLEXUS_CONTEXT, ((e: CustomEvent<Context>) => {
      console.log(e.detail);
    }) as EventListener);
  }
}
