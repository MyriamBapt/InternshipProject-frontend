import { IGender } from "../../interfaces/gender";
import { IReview } from "./review";
import { ITag } from './tag';

export interface IProfessional {
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
  review: IReview[];
  tag: ITag[];
}
