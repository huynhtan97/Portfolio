import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Import pages to navigate to
import { HomepageComponent } from '../app/homepage/homepage.component';
import { SkillsComponent } from '../app/skills/skills.component';
import { ProjectsComponent } from '../app/projects/projects.component';
import { AchievementsComponent } from '../app/achievements/achievements.component';

// Specify paths here
const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'Skills', component: SkillsComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Achievements', component: AchievementsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
