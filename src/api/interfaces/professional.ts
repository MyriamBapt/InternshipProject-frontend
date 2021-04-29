import { IGender } from "../../interfaces/gender";

export interface IProfessional {
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
}
