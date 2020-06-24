import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name : 'jsonToBrDate'})
export class JsonToBrDate implements PipeTransform {

    transform(date: string) {
 
        if(!date)
           return '';

        if(!date.includes('T'))
        return date; 

        return date.split('T')[0].split('-').reverse().join('/');
    }

}