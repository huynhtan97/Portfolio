import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // Initial value with the default number of columns
  numOfCols: any = 2;

  Projects: any = [
      {
        title: 'SheFightsBack',
        img_src: 'https://huynhtan97.github.io/Portfolio/assets/images/sheFightsBack.png',
        alt: 'shefightsback',
        link: 'https://github.com/huynhtan97/sheFightsBack',
      },
      {
        title: 'IBM Cloud Image Recognition',
        img_src: '../../assets/images/imageRecognitionApp.png',
        alt: 'imageRecognition',
        link: 'https://github.com/huynhtan97/nodeRedFaceRecognition'
      },
      {
        title: 'IBM AI Chatbot',
        img_src: '../../assets/images/chatBotApp.jpg',
        alt: 'AIChatbot',
        link: 'https://github.com/huynhtan97/mood-bot',
      },
      {
        title: 'Everlead',
        img_src: '../../assets/images/everlead.png',
        alt: 'everlead',
        link: 'https://github.com/huynhtan97/Everlead',
      },
    ]

  constructor() { }

  ngOnInit() {
  }

  // Help grid list become more responsive
  onResize(event) {
    const element = event.target.innerWidth;
    if (element < 750) {
      this.numOfCols = 1;
    } else {
      this.numOfCols = 2;
    }
  }

}
