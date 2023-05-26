import { TheCompany } from "../client/the-company";
import { TheHisto } from "../histo/the-histo";
import { TheJob } from "../job/the-job";

export interface TheTbd {
    Client: TheCompany;   
    Job : TheJob;
    Histo : TheHisto
}
