import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  /*Dans le code ci-dessous on utilise la methode promise () qui permet l'utilisation asynchrone
  * par exemple lorsque on doit interroger un seveur distant ( pensez dans notre cas à stipuler
  * dans le HTML a que date est ASYNC */
  lastUpdate = new Promise(
    ((resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    })
  );
  appareils = [
    {
      name: 'Machine à laver',
      status: 'allumé'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];
  /* //ceci a ete fait avant la creation du tableau pour tester la ngFor
  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';*/
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  // tslint:disable-next-line:typedef
  onAllumer() {
    console.log('on allume tout !');
  }
}
