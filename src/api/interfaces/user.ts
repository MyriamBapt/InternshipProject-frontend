import { IGender } from "../../interfaces/gender";

export interface IUser {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  gender: IGender;
  pseudo: string;
  birthDate: string;
  age: number;
  height: number;
  originalWeight: number;
  targetLooseWeight: number;
  targetWeight: number;
  profileCompleted: boolean;
  photoId: string;
  roles: [];
  userWeights: ICurrentWeight[];
  userPreferences?: IUserPreferences;
}

export interface ICurrentWeight {
  weight: number;
}

export interface IUserPreferences {
  language: string;
}
