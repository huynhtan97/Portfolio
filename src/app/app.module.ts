// Base modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// For flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModules } from './material.module';

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
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppMaterialModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
