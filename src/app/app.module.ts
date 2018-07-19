// Base Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Angular Material
import { AppMaterialModules } from './material.module';
import { MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

// ngx-bootstrap
import {AccordionModule, AlertModule, BsDatepickerModule, BsDropdownModule, ButtonsModule, CarouselModule,
  CollapseModule, ModalModule, PaginationModule, PopoverModule, ProgressbarModule, RatingModule, SortableModule,
  TabsModule, TimepickerModule, TooltipModule, TypeaheadModule } from 'ngx-bootstrap';

// Different pages


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModules,
    FlexLayoutModule,
    // ngx-bootstrap modules
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
