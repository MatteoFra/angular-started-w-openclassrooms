import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({ name: 'pipeBirth' })
export class pipeBirth implements PipeTransform {
  transform(date: string = '2020-08-17T12:56:35Z'): string {
    let dateSplit = date.split('T');
    let dateD = dateSplit[0].split('-');

    let today = new Date();
    let birth = new Date(
      parseInt(dateD[0]),
      parseInt(dateD[1]),
      parseInt(dateD[2])
    );

    let diff = new Date(today.getTime() - birth.getTime());

    return `il y a ${diff.getUTCFullYear() - 1970} ans, ${diff.getUTCMonth()} mois et ${diff.getUTCDate() - 1} jours`;
  }
}
