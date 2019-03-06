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
   * if years >= 3, then color = primary
   * if years == 2, then color = accent
   * if years < 2, then color = warn
   */
  languagesAndColors: TechSkills[] = [
    {skill: 'Java', years: '5+ years', color: 'primary'},
    {skill: 'Javascript', years: '3+ years', color: 'primary'},
    {skill: 'Typescript', years: '2+ years', color: 'accent'},
    {skill: 'jQuery', years: '1+ years', color: 'warn'},
    {skill: 'Python', years: '2+ years', color: 'accent'},
    {skill: 'PHP', years: '1+ years', color: 'warn'},
    {skill: 'HTML', years: '3+ years', color: 'primary'},
    {skill: 'CSS/Bootstrap', years: '3+ years', color: 'primary'},
    {skill: 'C', years: '1+ years', color: 'warn'},
    {skill: 'C++', years: '1+ years', color: 'warn'},
    {skill: 'Shell scripting', years: '1+ years', color: 'warn'},
    {skill: 'Scala', years: '1+ years', color: 'warn'},
    {skill: 'Ruby', years: '2+ years', color: 'accent'},
    {skill: 'Matlab', years: '2+ years', color: 'accent'},
    {skill: 'Markdown', years: '3+ years', color: 'primary'},
    {skill: 'LaTeX', years: '1+ years', color: 'warn'},
    {skill: 'R', years: '1+ years', color: 'warn'},
    {skill: 'SQL', years: '3+ years', color: 'primary'},
  ];

  toolsAndColors: TechSkills[] = [
    {skill: 'AWS', years: '2+ years', color: 'accent'},
    {skill: 'Google Cloud Platform', years: '1+ years', color: 'warn'},
    {skill: 'IBM Cloud', years: '1+ years', color: 'warn'}
  ];

  frameworksAndColors: TechSkills[] = [
    {skill: 'AngularJS', years: '2+ years', color: 'accent'},
    {skill: 'Rails', years: '2+ years', color: 'accent'},
    {skill: 'React', years: '1+ years', color: 'warn'},
  ];

  softwareAndColors: TechSkills[] = [
    {skill: 'Android Studio', years: '2+ years', color: 'primary'},
    {skill: 'XCode', years: '2+ years', color: 'accent'},
    {skill: 'MySQL', years: '3+ years', color: 'primary'},
    {skill: 'MongoDB', years: '2+ years', color: 'accent'},
    {skill: 'Microsoft SQL Server', years: '2+ years', color: 'accent'},
    {skill: 'Github', years: '4+ years', color: 'primary'},
    {skill: 'Heroku', years: '2+ years', color: 'accent'},
    {skill: 'Spring Tool Suite', years: '2+ years', color: 'accent'},
    {skill: 'ServiceNow', years: '1+ years', color: 'warn'},
    {skill: 'Unity', years: '3+ years', color: 'primary'},
    {skill: 'Microsoft Office', years: '8+ years', color: 'primary'},
    {skill: 'VMWare', years: '1+ years', color: 'warn'},
  ];

  /**
   * @type {SoftSkills[]}
   * @memberof SkillsComponent
   * if from == Internships, then color = primary
   * if from == School Clubs, then color = accent
   * if from == (Anything else), then color = warn
   */
  softskillsAndColor: SoftSkills[] = [
    {skill: 'Organization', from: 'School', color: 'primary'},
    {skill: 'Teamwork', from: 'School Clubs', color: 'accent'},
    {skill: 'Team Leadership', from: 'School Clubs', color: 'accent'},
    {skill: 'Public Speaking', from: 'Self-taught', color: 'warn'},
    {skill: 'Communication', from: 'School+Internships', color: 'primary'},
    {skill: 'Accountability', from: 'School Clubs+Internships', color: 'primary'},
    {skill: 'Time Management', from: 'School Clubs', color: 'accent'},
    {skill: 'Listening', from: 'School', color: 'primary'},
    {skill: 'Adaptability', from: 'School Clubs+Internships', color: 'primary'},
    {skill: 'Quick Learner', from: 'Internships', color: 'primary'},
    {skill: 'Problem-Solving', from: 'School Clubs+Internships', color: 'primary'},
    {skill: 'Self-Motivation', from: 'School', color: 'primary'}
  ];

}
