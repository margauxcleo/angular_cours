import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  personnes:any = [];
  // Utilisation de la classe Angular FormControl
  // nous permettant d'associer un attribut ici nom
  // à un champ de formulaire défini dans le .html
  // afin de facilier le binding et contrôle, validation

// -------------------------------------------------------------
  // FormGroup(Classe Angular = objet de type Angular) => Composé de plusieurs ibjets de type FromControl 

  // !Soit on utilise FormGroup 
  // personneForm = new FormGroup({
  //   // FormControl peut prendre deux paramètres:
  //   // 1) La valeur initiale
  //   // 2) Le contrôle

  //   id: new FormControl('', Validators.required),
  //   // ici, on indique deux validateurs, dont celui créé nous même checkInputValidator
  //   nom: new FormControl('', [Validators.required, this.checkInputValidator]),
  //   prenom: new FormControl('', [Validators.required, this.checkInputValidator]),
  //   adresse: new FormGroup({
  //     rue: new FormControl(''),
  //     ville: new FormControl(''),
  //     codePostal: new FormControl('')
  //   })
    
  // });

// -------------------------------------------------------------
  // Soit on utilise FormBuilder
  // Utilisation de la classe service Angular FormBuilder
  // A injecter dans le constructeur pour l'utiliser
  // Permet de simplifier la construction d'un formulaire 
  // en évitant les répétitions de FormControl (voir ex au dessus avec new FormControl)
  personneForm = this.fb.group({
    id: [null, [Validators.required]],
    nom: ['', [Validators.required, this.checkInputValidator]],
    prenom: ['', [Validators.required, this.checkInputValidator]],
    adresse: this.fb.group({
      rue: [''],
      ville: [''],
      codePostal: ['']
    }),
    // FormArray => définit un tableau de taille indeterminée de FormControl 
    sports: this.fb.array([
      // this.fb.control('')
    ])
  });

// -------------------------------------------------------------
  // On crée notre méthode de validation
  checkInputValidator(control: FormControl){
    const str:string = control.value;
    // On vérifie que la 1ère lettre soit une majuscule => donc compris entre A et Z
    if(str[0] >= 'A' && str[0] <= 'Z'){
      return null;
    } else {
      return { error: 'entrée non valide'};
    }
  }

// -------------------------------------------------------------
  // Possibilité de déclarer une valeur initiale, ou non, ici Wick
  // Dans le .html, on aura un champ de formulaire associé à l'objet nom.
  // nom = new FormControl('Wick');

  // ici, on créé la variable fb pour FormBuilder 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // La méthode setValue() permet d'initialiser, ou modifier les
    // valeurs de formulaire: il faut préciser une valeur pour chaque 
    // FormControl du FormGroup
    // ici, on définit des valeurs dans les champs à l'initialisation
    // this.personneForm.setValue({nom: 'Doe', prenom: 'John', id: 1})

    // La méthode patchValue() permet d'initialiser 
    // idem que setValue sauf qu'on est pas obligé de définir des valeurs initiales pour tout
    this.personneForm.patchValue({
      prenom: 'Jean',
      adresse: {
        codePostal: '06000'
      }
    });
  }

  afficherTout(){

    this.personnes.push({...this.personneForm.value});

    console.log(this.personneForm.value);

    // différentes façons de récupérer les données 
    console.log(this.personneForm.controls.nom);
    console.log(this.personneForm.get('nom'));

    // Permet de vider les champs du form
    this.personneForm.reset();
  }
  
  get id(){
    return this.personneForm.get('id');
  }

  get nom(){
    return this.personneForm.get('nom');
  }

  get prenom(){
    return this.personneForm.get('prenom');
  }

  // afficherNom(){
  //   // si on déclare le formControl sans le formGroup
  //   // console.log(this.nom.value);
  // }

  // Pour afficher instantanément les sports ajoutés par l'utilisateur, on doit retourner notre FormArray
  get sports() {
    return this.personneForm.get('sports') as FormArray;
  }

  ajouterSport(){
    this.sports.push(this.fb.control(''));
  }

  supprimerSport(i: number){
    this.sports.removeAt(i);
  }

}
