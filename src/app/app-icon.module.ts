import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faAngleLeft, faAngleRight, faShoppingBag, IconDefinition} from "@fortawesome/free-solid-svg-icons";

const icons: IconDefinition[] = [
  faAngleLeft,
  faShoppingBag,
  faAngleRight
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
