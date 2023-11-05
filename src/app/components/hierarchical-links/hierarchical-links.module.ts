import { NgModule } from "@angular/core";
import { HierarchicalLinksComponent } from "./hierarchical-links.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HierarchicalLinksComponent
  ],
  imports: [FormsModule],
  exports: [HierarchicalLinksComponent],
  providers: []

})
export class HierarchicalLinksModule { }
