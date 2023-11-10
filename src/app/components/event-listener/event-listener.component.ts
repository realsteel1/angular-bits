import { Component } from "@angular/core";
import { Context } from "steel-lib/model/context";
import { PLEXUS_CONTEXT } from "steel-lib/constants/constants";

@Component({
  selector: 'event-listener',
  template: ''
})
export class EventListenerComponent {

  ngOnInit() {

    window.document.addEventListener(PLEXUS_CONTEXT, ((e: CustomEvent<Context>) => {
      console.log(e.detail);
    }) as EventListener);
  }
}
