import { Component, OnInit } from '@angular/core';

export interface Step {
  label: String;
  role: String;
  date: String;
  description: String;
}
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  Achievements: Step[] = [
    {
      label: 'Wentworth\'s Computer Science Society',
      role: 'Treasurer',
      date: 'September 2016',
      description: `Elected Treasurer for Wentworth's first Computer Science organization that is a Chapter of ACM`,
    },
    {
      label: 'HackWITUs 1',
      role: 'Head of Finance',
      date: 'March 2017',
      description: `https://hackwit.us/ - Helped raise more than $10,000 in sponsorships through reaching out to personal network and
                    company representatives. Managed event's cash flow (Food, Venue ..etc) and maintained transparency with spreadsheets`,
    },
    {
      label: 'LeaderShape',
      role: 'Sponsored by Wentworth',
      date: 'May 2017',
      description: `https://www.leadershape.org/ - Learned how to become an impactful leader in my community and be inclusive of
                    team members`,
    },
    {
      label: 'Wentworth\'s Student Government',
      role: 'Treasurer',
      date: 'September 2017',
      description: `First female elected Treasurer in 7+ years. Directed co-sponsorship program and managed annual $8500 budget`,
    },
    {
      label: 'Node.js Interactive 2017',
      role: 'Sponsored by Wentworth',
      date: 'October 2017',
      description: `Sponsored by Wentworth to attend Node.js Interactive conference 2017 in Vancouver, Canada.
                    Networked with developers in industry, learned how various companies utilize Javascript frameworks,
                    and attended live demos`,
    },
    {
      label: 'HackWITUs 2',
      role: 'Head of Finance',
      date: 'November 2017',
      description: `Served as Head of Finance again for Wentworth's second annual hackathon.
                    Helped raise more than $10,000 in sponsorships`,
    },
    {
      label: 'CIO Search Committee',
      role: 'Student Representative',
      date: 'December 2017',
      description: `Recommended by Dean of Students to serve as Student Representative. Interviewed 9 candidates and helped narrow to 1`,
    },
    {
      label: 'Community Standards Board',
      role: 'Council Member',
      date: 'April 2018',
      description: `Elected Treasurer for Wentworth's first Computer Science Society - Chapter of ACM`,
    },
    {
      label: 'HackWITUs 3',
      role: 'Head of Sponsorship',
      date: 'November 2018',
      description: `New position to soley focus on sponsorship management (inspired by SheHacks organization team)`,
    },
    {
      label: 'Information Security Council',
      role: 'Student Representative',
      date: 'January 2019',
      description: `Recommended by Director of Student Engagement. Brainstorm with CIO and various faculty members on how to
                    increase campus data security`,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
