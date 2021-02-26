import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, interval, Observable, timer, Subscription } from 'rxjs';
import { filter, map, max, take } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  status = "";
  tab: Array<number> = [];

  constructor() { }

  subscription!: Subscription;

  ngOnInit() {
    // 1) Génère un tableau avec les 3 éléments 
    // ---------------------------------------------
    // const tableau = [1, 2, 3];
    // const observable: Observable<number> = from(tableau);
    // observable.subscribe(
    //   (value) => {
    //     this.tab.push(value);
    //   },
    //   (error) => {
    //     this.status = 'error';
    //   },
    //   () => {
    //     this.status = 'fini';
    //   }
    // )

    // 2) Génère une liste de chiffre à une intervalle d'une seconde, qui est sans fin 
    // ---------------------------------------------
    // const observable: Observable<number> = interval(1000);
    // observable.subscribe(
    //   (value) => {
    //     this.tab.push(value);
    //   },
    //   (error) => {
    //     this.status = 'error';
    //   },
    //   () => {
    //     this.status = 'fini';
    //   }
    // )

    // 3) Génère une liste de chiffre sans fin, la première valeur sera envoyée après 3 sec, puis une nouvelle valeur toutes les secondes
    // ---------------------------------------------
    // const observable: Observable<number> = timer(3000, 1000);
    // observable.subscribe(
    //   (value) => {
    //     this.tab.push(value);
    //   },
    //   (error) => {
    //     this.status = 'error';
    //   },
    //   () => {
    //     this.status = 'fini';
    //   }
    // )

    // 4) Il faut penser à se désabonner avec unsubscribe et ngDestroy
    // ---------------------------------------------
    // const observable: Observable<number> = timer(3000, 1000);
    // observable.subscribe(
    //   (value) => {
    //     this.tab.push(value);
    //   },
    //   (error) => {
    //     this.status = 'error';
    //   },
    //   () => {
    //     this.status = 'fini';
    //   }
    // )

     // 5) En utilisant un pipe: on ne prend que les 10 premiers éléments, 
      // on leur ajoute +3 avec map 
      // et on ne conserve que les chiffres pairs avec filter
     // ---------------------------------------------
      // const observable: Observable<number> = interval(1000).pipe(
      //   take(10),
      //   map(elt => elt + 3),
      //   filter(elt => elt % 2 === 0)
      // );
      // observable.subscribe(
      //   (value) => {
      //     this.tab.push(value);
      //   },
      //   (error) => {
      //     this.status = 'error';
      //   },
      //   () => {
      //     this.status = 'fini';
      //   }
      // )

      // 6) En utilisant un pipe: on selectionne les 10 premiers et le maximum
      // ---------------------------------------------
      const observable: Observable<number> = interval(1000).pipe(
        take(10),
        max()
      );
      observable.subscribe(
        (value) => {
          this.tab.push(value);
        },
        (error) => {
          this.status = 'error';
        },
        () => {
          this.status = 'fini';
        }
      )

      // 7) Merger plusieurs observables avec merge (voir cours pdf)
      // ---------------------------------------------

      // 8)Subject
      // ---------------------------------------------
  }
  ngOnDestroy() {this.subscription.unsubscribe(); }
}
