export class Vehiculo{
    id: string;
    marca: string;
    modelo: string;
    year: number;
    kilometros: number;
    tipo: TipoVehiculo;
    foto: string;
   

    constructor(marca: string, modelo: string, year: number, kilometros:number, tipo:TipoVehiculo,foto:string){
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.kilometros = kilometros;
        this.tipo = tipo;
        this.foto = foto;

    }   

}

enum TipoVehiculo {
    Auto = 1,
    Camioneta = 2,
    Camion = 3
}

