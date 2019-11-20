export class User{
    id: string;
    type: UserType;
    email: string;
    password: string;
   

    constructor(type: UserType, email: string, password: string){
        this.email = email;
        this.password = password;
        this.type = type;
    }   

}

enum UserType {
    Administrador = 1,
    Alumno = 2,
    Profesor = 3
}

