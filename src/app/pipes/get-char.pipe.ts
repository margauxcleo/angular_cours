import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getChar'
})
export class GetCharPipe implements PipeTransform {

  // EXEMPLE 1: on veut récupérer la valeur du caractère à l'indice 0
  // transform(value: any, ...args: any[]): any {
  //   return value[0];
  // }

  transform(value: any, ...args: any[]): any {
    if (args[0] && args[0] < value.length) {
      return value[args[0]];
    }
    return value[0];
  }
}
