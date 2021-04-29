import {IUser, IUserPreferences} from '../interfaces/user';
import {IGender} from '../../interfaces/gender';

export class UserModel {
  id: string;
  email: string;
  gender: IGender;
  pseudo: string;
  createdAt: string;
  birthDate: string;
  age: number;
  height: number;
  originalWeight: number;
  targetLooseWeight: number;
  targetWeight: number;
  profileCompleted: boolean;
  //photo: Source;
  roles: string[];
  //currentWeight: number;
  //userPreferences: IUserPreferences | null;


  constructor(input: IUser) {
    this.id = input.id;
    this.email = input.email;
    this.gender = input.gender;
    this.pseudo = input.pseudo;
    this.createdAt = input.createdAt;
    this.birthDate = input.birthDate;
    this.age = input.age;
    this.height = input.height;
    this.originalWeight = input.originalWeight;
    this.targetLooseWeight = input.targetLooseWeight;
    this.targetWeight = input.targetWeight;
    this.profileCompleted = input.profileCompleted;
    //this.photo = input.photo;
    this.roles = input.roles;
    //this.currentWeight = input.currentWeight;
    //this.userPreferences = input.userPreferences | null;
  }
}
