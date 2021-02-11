import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tp-form',
  templateUrl: './tp-form.component.html',
  styleUrls: ['./tp-form.component.css']
})
export class TpFormComponent implements OnInit {

  // Ma version (fonctionne)
  // personsComments:any = [];

  // // Utilisation de FormBuilder 
  // commentForm = this.fb.group({
  //   authorId: [null, [Validators.required]],
  //   authorlastname: ['', [Validators.required, this.checkInputValidator]],
  //   authorfirstname: ['', [Validators.required, this.checkInputValidator]],
  //   comments: this.fb.array([
  //   //   {
  //   //   title: [''],
  //   //   category: [''],
  //   //   content: ['']
  //   // }
  // ])
  // });

  // checkInputValidator(control: FormControl){
  //   const str:string = control.value;
  //   // On vérifie que la 1ère lettre soit une majuscule => donc compris entre A et Z
  //   let regex = /^[A-Z].*$/
  //   if (regex.test(str)) {​​
  //     return null;
  //   } else {
  //     return { error: 'entrée non valide'};
  //   }
  // }

  // // On instancie FormBuilder pour construire notre formulaire
  // constructor(private fb: FormBuilder) { }

  // ngOnInit(): void {
  // }

  // showAll(){
  //   this.personsComments.push({...this.commentForm.value});
  //   console.log(this.commentForm.value);
  //   this.commentForm.reset();
  // }

  // get authorId(){
  //   return this.commentForm.get('authorId');
  // }

  // get authorfirstname(){
  //   return this.commentForm.get('authorfirstname');
  // }

  // get authorlastname(){
  //   return this.commentForm.get('authorlastname');
  // }

  // get comments() {
  //   return this.commentForm.get('comments') as FormArray;
  // }

  // //--- from forum
  // newComment(): FormGroup {
  //   return this.fb.group({
  //     title: '',
  //     category: '',
  //     content: ''
  //   })
  // }
  // //-----

  // addComment(){
  //   this.comments.push(this.newComment());
  //   // this.comments.push(this.fb.control(''));
  // }

  // get title(){
  //   return this.commentForm.get('title');
  // }

  // get category(){
  //   return this.commentForm.get('category');
  // }

  // get content(){
  //   return this.commentForm.get('content');
  // }

  // deleteComment(i: number){
  //   this.comments.removeAt(i);
  // }

  // ------------------ CORRECTION PROF -------------------------
  personnes: any = [];
  personneForm = this.fb.group({
    id: [null, Validators.required],
    nom: ['', [Validators.required, this.checkValidator]],
    prenom: ['', [Validators.required, this.checkValidator]],
    commentaires: this.fb.array([ ])
  });
  constructor(private fb: FormBuilder) {
  }
  createCommentaire() : FormGroup {
    return this.fb.group({
      titre: ['', ],
      contenu: ['', ],
      categorie: ['', ],
    })
  }
  get commentaires() {
    return this.personneForm.get('commentaires') as FormArray;
  }
  ajouterCommentaire() {
    this.commentaires.push(this.createCommentaire());
  }
  supprimerCommentaire(i: number) {
    this.commentaires.removeAt(i);
  }
  checkValidator(control: FormControl) {
    let str: string = control.value;
    let regex = /^[A-Z].*$/
    if (regex.test(str)) {
      return null;
    } else {
      return { erreur: 'non valide' };
    }
  }
  get nom() {
    return this.personneForm.get('nom');
  }
  get id() {
    return this.personneForm.get('id');
  }
  get prenom() {
    return this.personneForm.get('prenom');
  }
  ngOnInit(): void {
  }
  afficherTout() {
    this.personnes.push({ ...this.personneForm.value }); 
    this.personneForm.reset(); 
  }

}
