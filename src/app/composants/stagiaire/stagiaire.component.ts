import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {

  // le type any est un peu le type "poubelle", utiliser quand on ne sait pas trop quoi mettre 
  // 1) & 2) Etape 1 - On déclare les variables nom et prenom
  nom: any;
  prenom: any;

  //  1) & 2) Etape 2 - on utilise ActivedRoute 
  // ActivedRoute = Provides access to information about a route associated with a component 
  // that is loaded in an outlet. 
  // Use to traverse the RouterState tree and extract information from nodes.
  // Constructor = Fonction JavaScript qui sert à initialiser les attributs de la classe 
  // Constructor avec Angular sert seulement à faire des injections de dépendances 
  constructor(private route: ActivatedRoute) {}

  // ngOnInit() = méthode qui sera exécutée quand Angular aura fini d'initialiser le composant 
  //  1) & 2) Etape 3 - on récupère les données transmises dans la route 
  // pour les utiliser dans le html ensuite par ex Bonjour {{ prenom }}
  ngOnInit(): void {
    // http://localhost:4200/stagiaire/vitez/margaux

    // 1) On utilise bien l'objet params 
    // on appelle bien la route définit dans le constructor 

    // 1A) Récupère les paramètres par l'intermédiaire d'un objet paramètres
    // Solution avec les snapshots (instantané)
    // this.nom = this.route.snapshot.params.nom;
    // this.prenom = this.route.snapshot.params.prenom;
    // console.log(this.nom + ' ' + this.prenom);

    // 1B)Récupère les paramètres par l'intermédiaire d'un objet paramsMap
    // Solution avec les observables (asyncrone)
    // Concept observables(programmation réactive): Les observables émettent des évènements qui 
    // seront interceptés par des observateurs.

    // Subscribe prend en paramètre l'observateur, qui est une simple fonction qui recevra
    // les valeurs émises par l'observable
    this.route.paramMap.subscribe(res =>{
      this.nom = res.get('nom');
      this.prenom = res.get('prenom');
      console.log(this.nom + ' ' + this.prenom);
    });

    // http://localhost:4200/stagiaire?nom=Vitez&prenom=Margaux
    // 2A) on utilise queryParam 
    // this.nom = this.route.snapshot.queryParams.nom;
    // this.prenom = this.route.snapshot.queryParams.prenom;
    // console.log(this.nom + ' ' + this.prenom);

    // 2B) en asynchrone
    // this.route.queryParamMap.subscribe(res =>{
    //   this.nom = res.get('nom');
    //   this.prenom = res.get('prenom');
    //   console.log(this.nom + ' ' + this.prenom);
    // });
  }




  // 2 formes de paramètres de requêtes

  // /chemin/nom/prenom
  // /chemin?nom=Wick&prenom=John

  // 2 manières différentes de récupérer les valeurs respectives

  // 1) Objet paramMap pour ce type de chemin: chemin/nom/prenom
  // http://localhost:4200/stagiaire/vitez/margaux

  // 2) Objet queryParamsMap pour ce type de chemin: chemin?nom=Wick&prenom=John

}
