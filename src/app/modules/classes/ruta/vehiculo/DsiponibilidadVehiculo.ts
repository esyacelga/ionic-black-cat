import {TipoUsuarioPersona} from '../../persona/TipoUsuarioPersona';

export class Vehiculo {
    _id: string;
    modelo: string;
    placa: string;
    marca: string;
    tipo: string;
    estado: number;

}


export class Disponibilidad {
    _id: string;
    tipoUsuarioPersona: TipoUsuarioPersona;
    vehiculo: Vehiculo;
    numeroTurno: number;
    enTurno: number;
    estadoDiponibilidad: string;
}
