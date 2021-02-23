// export class Developer {
// constructor(private _lastName: string, private _firstName: string, private _age: number, private _sexe: string, private _bio: string, private _skills: Array<any>) { }

//     get lastName() {
//         return this._lastName;
//     }
//     set lastName(_lastName: string) {
//         this._lastName = _lastName;
//     }
//     get firstName() {
//         return this._firstName;
//     }
//     set firstName(_firstName: string) {
//         this._firstName = _firstName;
//     }
//     get age() {
//         return this._age;
//     }
//     set age(_age: number) {
//         this._age = _age;
//     }
//     get sexe() {
//         return this._sexe;
//     }
//     set sexe(_sexe: string) {
//         this._sexe = _sexe;
//     }
//     get bio() {
//         return this._bio;
//     }
//     set bio(_bio: string) {
//         this._bio = _bio;
//     }
//     get skills() {
//         return this._skills;
//     }
//     set skills(_skills: Array<any>) {
//         this._skills = _skills;
//     }
// }


import { Skill } from './skill';

export class Developer {
  lastName!: string;
  firstName!: string;
  age!: number;
  sexe!: string;
  bio!: string;
  skills!: Skill[];
}