import { IRendezVous } from "../interfaces/rendez-vous";
import { IUser } from "../interfaces/user";
import { IProfessional } from "../interfaces/professional";

export class RendezVous {
  id?: number;
  moreInfo: string;
  date: string;
  date_rdv?: string;
  time_rdv?: string;
  user: IUser;
  professional: IProfessional;

  constructor(rendezVous: IRendezVous) {
  this.moreInfo = rendezVous.moreInfo;
  this.date = rendezVous.date;
  this.date_rdv = rendezVous.date_rdv;
  this.time_rdv = rendezVous.time_rdv;
  this.user = rendezVous.user;
  this.professional = rendezVous.professional;
  }
}
