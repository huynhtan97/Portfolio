import { Component, OnInit } from '@angular/core';

export interface Step {
  label: String;
  role: String;
  date: String;
  description: String;
}
@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  WorkExperiences: Step[] = [
    {
      label: 'Staples, Inc',
      role: 'Digital Solutions Intern',
      date: 'June 2017 - Auguest 2017',
      description: `AngularJs, Javascript, REST APIs, Python`,
    },
    {
      label: 'Visible Systems Corporation',
      role: 'Product and Platform Developer Intern',
      date: 'September 2017 - December 2017',
      description: `Big Data Applications (Hadoop + Presto), Mendix, AWS Athena and Quicksight`,
    },
    {
      label: 'Eaton Vance',
      role: 'IT Distribution Systems Intern',
      date: 'January 2018 - May 2018',
      description: `Angular 5, PL/SQL, PHP, Oracle Database`,
    },
    {
      label: 'Pegasystems',
      role: 'Junior System Architect Intern',
      date: 'May 2018 - August 2018',
      description: `Jenkins, Python, Agile-Scrum methodology`,
    },
    {
      label: 'Amazon Robotics',
      role: 'Solution Analytics Intern',
      date: 'September 2018 - December 2018',
      description: `Java, AngularJs, Webpack, Coral Service Framework, AWS Lambda, DynamoDB`,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
