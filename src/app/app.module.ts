// Base modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModules } from './material.module';

// ngx-bootstrap
import { AccordionModule, AlertModule, ButtonsModule, CarouselModule, CollapseModule, BsDatepickerModule,
  BsDropdownModule, ModalModule, PaginationModule, PopoverModule, ProgressbarModule, RatingModule,
  SortableModule, TabsModule, TimepickerModule, TooltipModule, TypeaheadModule } from 'ngx-bootstrap';

// For page navigation
import { AppRoutingModule } from './/app-routing.module';
import { HomebarComponent } from './homebar/homebar.component';

// Pages for website
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomebarComponent,
    SkillsComponent,
    ProjectsComponent,
    AchievementsComponent,
    HomepageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
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
    TypeaheadModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
