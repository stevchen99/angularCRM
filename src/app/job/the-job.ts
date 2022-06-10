import { TheCompany } from "../client/the-company";

export interface TheJob {
    IdCLient: TheCompany;   
    IdTache: number;
    Libelle: string;
    HeureInit: number;
    HeureActu: number;   
}
