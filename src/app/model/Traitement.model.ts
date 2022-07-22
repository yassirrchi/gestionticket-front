import { Technicien } from "./Technicien.model";
export interface Traitement {
    id:                number;
    technicien:        Technicien;
    ticketId:          number;
    status:            string;
    technicienDetails: null;
    createdAt:         Date;
    clientDetails:     string;
    edited:            boolean;
}

 