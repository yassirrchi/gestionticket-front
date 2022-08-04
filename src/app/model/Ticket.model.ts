import { Client } from "./Client.model";
export interface Ticket {
    id:          number;
    client:      Client;
    description: string;
    sujet:       string;
    createdAt:   Date;
    status:      string;
    edited:      boolean;
    priorite:    number;
    createdBy:   string;
    hasFile:boolean;
}