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
  /**
   * @type {TechSkills[]}
   * @memberof SkillsComponent
   * if years >= 3, then color = warn
   * if years == 2, then color = accent
   * if years < 2, then color = primary
   */
  languagesAndColors: TechSkills[] = [
    {skill: 'Java', years: '4+ years', color: 'warn'},
    {skill: 'Javascript', years: '3+ years', color: 'warn'},
    {skill: 'jQuery', years: '1+ years', color: 'primary'},
    {skill: 'Python', years: '2+ years', color: 'accent'},
    {skill: 'PHP', years: '1+ years', color: 'primary'},
    {skill: 'HTML', years: '3+ years', color: 'warn'},
    {skill: 'CSS/Sass/Bootstrap', years: '3+ years', color: 'warn'},
    {skill: 'C', years: '1+ years', color: 'primary'},
    {skill: 'C++', years: '1+ years', color: 'primary'},
    {skill: 'Shell scripting', years: '1+ years', color: 'primary'},
    {skill: 'Scala', years: '1+ years', color: 'primary'},
    {skill: 'Ruby', years: '2+ years', color: 'accent'},
    {skill: 'Matlab', years: '2+ years', color: 'accent'},
    {skill: 'Markdown', years: '3+ years', color: 'warn'},
    {skill: 'LaTeX', years: '1+ years', color: 'primary'},
  ];

  toolsAndColors: TechSkills[] = [
    {skill: 'AWS', years: '2+ years', color: 'accent'},
    {skill: 'Google Cloud', years: '1+ years', color: 'primary'},
    {skill: 'IBM Cloud', years: '1+ years', color: 'primary'}
  ];

  frameworksAndColors: TechSkills[] = [
    {skill: 'AngularJS', years: '2+ years', color: 'accent'},
    {skill: 'Rails', years: '2+ years', color: 'accent'}
  ];

  softwareAndColors: TechSkills[] = [
    {skill: 'Microsoft Office', years: '8+ years', color: 'warn'},
    {skill: 'Rails', years: '2+ years', color: 'primary'},
    {skill: 'AngularJS', years: '2+ years', color: 'accent'},
    {skill: 'Rails', years: '2+ years', color: 'primary'},
    {skill: 'AngularJS', years: '2+ years', color: 'accent'},
    {skill: 'Rails', years: '2+ years', color: 'primary'}
  ];

  /**
   * @type {SoftSkills[]}
   * @memberof SkillsComponent
   * if from == Internships, then color = warn
   * if from == School Clubs, then color = accent
   * if from == (Anything else), then color = primary
   */
  softskillsAndColor: SoftSkills[] = [
    {skill: 'Organization', from: 'School', color: 'primary'},
    {skill: 'Teamwork', from: 'School Clubs', color: 'accent'},
    {skill: 'Team Leadership', from: 'School Clubs', color: 'accent'},
    {skill: 'Public Speaking', from: 'Self-taught', color: 'primary'},
    {skill: 'Communication', from: 'School+Internships', color: 'warn'},
    {skill: 'Accountability', from: 'School Clubs+Internships', color: 'warn'},
    {skill: 'Time Management', from: 'School Clubs', color: 'accent'},
    {skill: 'Listening', from: 'School', color: 'primary'},
    {skill: 'Adaptability', from: 'School Clubs+Internships', color: 'warn'},
    {skill: 'Quick Learner', from: 'Internships', color: 'primary'},
    {skill: 'Problem-Solving', from: 'School Clubs+Internships', color: 'warn'},
    {skill: 'Self-Motivation', from: 'School', color: 'primary'}
  ];

}
