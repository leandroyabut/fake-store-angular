import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faAngleLeft, faShoppingBag, IconDefinition} from "@fortawesome/free-solid-svg-icons";

const icons: IconDefinition[] = [
  faAngleLeft,
  faShoppingBag
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class AppIconModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(...icons);
  }
}
