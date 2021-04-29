import { IProfessional } from "../interfaces/professional";

import { IGender } from "../../interfaces/gender";

export class ProfessionalModel {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  gender: IGender;
  occupation: string;
  yearsActivity: number;
  firstMeetingPrice: number;
  followupMeetingPrice: number;
  avatarUrl: string;
  description: string;


  constructor(prof: IProfessional) {
    this.id = prof.id;
    this.firstName = prof.firstName;
    this.lastName = prof.lastName;
    this.email = prof.email;
    this.phone = prof.phone;
    this.city = prof.city;
    this.gender = prof.gender;
    this.occupation = prof.occupation;
    this.yearsActivity = prof.yearsActivity;
    this.firstMeetingPrice = prof.firstMeetingPrice;
    this.followupMeetingPrice = prof.followupMeetingPrice;
    this.avatarUrl = prof.avatarUrl;
    this.description = prof.description;
  }
}
