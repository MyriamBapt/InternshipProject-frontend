import { IProfessional } from "../interfaces/professional";

import { IGender } from "../../interfaces/gender";
import { IReview } from "../interfaces/review";

export class ProfessionalModel {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  city: string;
  gender: IGender;
  occupation: string;
  yearsActivity: number;
  first_meeting_price: number;
  followup_meeting_price: number;
  avatar_url: string;
  description: string;
  review: IReview;

  constructor(prof: IProfessional) {
    this.id = prof.id;
    this.first_name = prof.first_name;
    this.last_name = prof.last_name;
    this.email = prof.email;
    this.phone = prof.phone;
    this.city = prof.city;
    this.gender = prof.gender;
    this.occupation = prof.occupation;
    this.yearsActivity = prof.yearsActivity;
    this.first_meeting_price = prof.first_meeting_price;
    this.followup_meeting_price = prof.followup_meeting_price;
    this.avatar_url = prof.avatar_url;
    this.description = prof.description;
    this.review = prof.review;
  }
}
