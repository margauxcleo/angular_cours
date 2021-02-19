import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getSubArray'
})
export class GetSubArrayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
