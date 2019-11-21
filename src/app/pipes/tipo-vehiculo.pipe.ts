import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoVehiculo'
})
export class TipoVehiculoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    switch (value) {
      case '1':
      return "../../../assets/images/tipoAuto.png";
      case '2':
        return "../../../assets/images/tipoCamioneta.png";
      case '3':
        return "../../../assets/images/tipoCamion.png";
    }
  }

}
