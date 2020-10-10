export class AppareilService {
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
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
  // tslint:disable-next-line:typedef
  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }
  // tslint:disable-next-line:typedef
  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }
  // tslint:disable-next-line:typedef
  switchOnOne(index: number){
    this.appareils[index].status = 'allumé';
  }
  // tslint:disable-next-line:typedef
  switchOffOne(index: number){
      this.appareils[index].status = 'éteint';
  }
}
