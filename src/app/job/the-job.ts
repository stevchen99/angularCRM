import { TheCompany } from "../client/the-company";

export interface TheJob {
    Client: TheCompany;   
    IdTache: number;
    Libelle: string;
    HeureInit: number;
    HeureActu: number;   
}
