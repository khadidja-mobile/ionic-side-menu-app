import { Component, OnInit } from '@angular/core';
import { MethodHijacker } from 'src/app/decorators/methodHijacker.decorator';
import { TimeTracker } from 'src/app/decorators/timeTracker.decorator';
import { Traductor } from 'src/app/decorators/traductor.decorator';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
// dans chaque page.ts, declarez un decorateur avec sa route correspon
@TimeTracker('home')
export class HomePage implements OnInit {

  @Traductor('eng') // PropertyDecorator

  // eslint-disable-next-line @typescript-eslint/ban-types
  welcomeMessage: String;



  data: any;

  constructor() {
    this.data = [
      {
        title: 'Plannifier sa semaine',
        description: 'Visibilité sur les 7 prochains jours',
        icon: './assets/img/1.png'
      },
      {
        title: 'Atteindre ses objectifs',
        description: 'Priorisation des tâches',
        icon: './assets/img/2.png'
      },
      {
        title: 'Analyser sa productivité',
        description: 'Visualiser le travail accompli',
        icon: './assets/img/3.png'
      }
    ];

  }

  onClick(event) {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    systemDark.addListener(this.colorTest);
    if (event.detail.checked) {
      document.body.setAttribute('data-theme', 'dark');
    }
    else {
      document.body.setAttribute('data-theme', 'light');
    }
  }

  colorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }

  ngOnInit() {
    this.sayGoodBye();
  }


  // eslint-disable-next-line @typescript-eslint/member-ordering
  @MethodHijacker() // MethodDecorator
  sayGoodBye() {
    console.log('Good bye');
  }


}
