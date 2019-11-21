export class Concesionaria{
    id: string;
    email: string;
    razonSocial: string;
    tel: string;
    localidad: string;
    clave: string;
   

    constructor(razonSocial: string, email: string, clave: string,tel:string, localidad:string){
        this.email = email;
        this.clave = clave;
        this.razonSocial = razonSocial;
        this.tel = tel;
        this.localidad = localidad;
    }   

}

// enum UserType {
//     Administrador = 1,
//     Alumno = 2,
//     Profesor = 3
// }

