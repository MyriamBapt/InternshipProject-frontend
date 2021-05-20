import { IUser } from "./user";
import { IProfessional } from "./professional";

export interface IRendezVous {
  id?: number;
  moreInfo: string;
  date: string;
  date_rdv?: string;
  time_rdv?: string;
  user: IUser;
  professional: IProfessional;
}
