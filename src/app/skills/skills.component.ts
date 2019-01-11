import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface TechSkills {
  skill: String;
  years: String;
  color: ThemePalette;
}

export interface SoftSkills {
  skill: String;
  from: String;
  color: ThemePalette;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  constructor() { }
  // To populate mat-chips
  languagesAndColors: TechSkills[] = [
    {skill: 'Java', years: '4+ years', color: 'accent'},
    {skill: 'Javascript', years: '2+ years', color: 'primary'},
    {skill: 'jQuery', years: '2+ years', color: 'accent'},
    {skill: 'Python', years: '2+ years', color: 'warn'},
    {skill: 'PHP', years: '1+ years', color: 'accent'},
    {skill: 'HTML', years: '2+ years', color: 'primary'},
    {skill: 'CSS/Sass/Bootstrap', years: '2+ years', color: 'accent'},
    {skill: 'C', years: '1+ years', color: 'warn'},
    {skill: 'C++', years: '3+ years', color: 'accent'},
    {skill: 'Shell scripting', years: '1+ years', color: 'primary'},
    {skill: 'Scala', years: '1+ years', color: 'accent'},
    {skill: 'Ruby', years: '2+ years', color: 'warn'}
  ];

  frameworksAndColors: TechSkills[] = [
    {skill: 'AngularJS', years: '2+ years', color: 'accent'},
    {skill: 'Rails', years: '2+ years', color: 'primary'}
  ];

  softwareAndColors: TechSkills[] = [
    {skill: 'AngularJS', years: '2+ years', color: 'accent'},
    {skill: 'Rails', years: '2+ years', color: 'primary'},
    {skill: 'AngularJS', years: '2+ years', color: 'accent'},
    {skill: 'Rails', years: '2+ years', color: 'primary'},
    {skill: 'AngularJS', years: '2+ years', color: 'accent'},
    {skill: 'Rails', years: '2+ years', color: 'primary'}
  ];

  softskillsAndColor: SoftSkills[] = [
    {skill: 'Organization', from: '4+ years', color: 'accent'},
    {skill: 'Teamwork', from: '4+ years', color: 'primary'},
    {skill: 'Team leadership', from: '4+ years', color: 'accent'},
    {skill: 'Warn', from: '4+ years', color: 'warn'},
    {skill: 'none', from: '4+ years', color: 'accent'},
    {skill: 'Primary', from: '4+ years', color: 'primary'},
    {skill: 'Accent', from: '4+ years', color: 'accent'},
    {skill: 'Warn', from: '4+ years', color: 'warn'},
    {skill: 'none', from: '4+ years', color: 'accent'},
    {skill: 'Primary', from: '4+ years', color: 'primary'},
    {skill: 'Accent', from: '4+ years', color: 'accent'},
    {skill: 'Warn', from: '4+ years', color: 'warn'}
  ];

}
