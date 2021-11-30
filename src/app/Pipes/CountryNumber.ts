import { Pipe, PipeTransform } from "@angular/core"; // importaciones de pipe

@Pipe({
  //nombre del pipe
  name: "CountryNumber"
})
 export class CountryNumber implements PipeTransform {
   transform(codigos:any,ciudades:any,telefonos:string) {
     if(telefonos.length>=4){
       // substr = tamaño
     return codigos +" "+ ciudades +" "+ telefonos.substr(0,3) + "-" + telefonos.substr(3);
     }else{
     return codigos +" "+ ciudades +" "+ telefonos;
     }
   }
 }
