import {Nacionalnost} from "./nacionalnost"
import {Tim} from "./tim"

export class Igrac {
    id: number;
    ime: string;
    prezime: string;
    broj_reg: number;
    datum_rodjenja: Date;
    nacionalnost: Nacionalnost;
    tim : Tim;

}