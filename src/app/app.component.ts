import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';
import { Subscription, Observable } from 'rxjs';
// tslint:disable-next-line:import-blacklist
import 'rxjs/add/observable/interval';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/* ce qui suit est danse le chapitre sur les observables avec RxJS*/
export class AppComponent implements OnInit, OnDestroy {
  constructor() {
  }
  secondes: number;
  couterSubscription: Subscription;

  ngOnInit(): void {
      const counter = Observable.interval(1000);
      this.couterSubscription = counter.subscribe(
        (value ) => {
          this.secondes = value;
        }
      );
    }

  ngOnDestroy(): void {
    this.couterSubscription.unsubscribe();
  }
  /* tout se code fut ecrit lors de la partie precedent le routing */
  // isAuth = false;
  // /*Dans le code ci-dessous on utilise la methode promise () qui permet l'utilisation asynchrone
  // * par exemple lorsque on doit interroger un seveur distant ( pensez dans notre cas à stipuler
  // * dans le HTML a que date est ASYNC */
  // lastUpdate = new Promise(
  //   ((resolve, reject) => {
  //     const date = new Date();
  //     setTimeout(
  //       () => {
  //         resolve(date);
  //       }, 2000
  //     );
  //   })
  // );
  // appareils: any[];
  // /* //ceci a ete fait avant la creation du tableau pour tester la ngFor
  // appareilOne = 'Machine à laver';
  // appareilTwo = 'Frigo';
  // appareilThree = 'Ordinateur';*/
  // constructor(private appareilService: AppareilService) {
  //   setTimeout(
  //     () => {
  //       this.isAuth = true;
  //     }, 4000
  //   );
  // }
  //
  // ngOnInit(): void {
  //   this.appareils = this.appareilService.appareils;
  // }
  //
  // // tslint:disable-next-line:typedef
  // onAllumer() {
  //   this.appareilService.switchOnAll();
  // }
  //
  // // tslint:disable-next-line:typedef
  // onEteindre() {
  //   this.appareilService.switchOffAll();
  // }
}
