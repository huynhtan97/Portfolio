// Base modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Angular Material
import { AppMaterialModules } from './material.module';

// ngx-bootstrap
import { AccordionModule, AlertModule, ButtonsModule, CarouselModule, CollapseModule, BsDatepickerModule,
  BsDropdownModule, ModalModule, PaginationModule, PopoverModule, ProgressbarModule, RatingModule,
  SortableModule, TabsModule, TimepickerModule, TooltipModule, TypeaheadModule } from 'ngx-bootstrap';

// Pages for website

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModules,
    // ngx-bootstrap modules
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
