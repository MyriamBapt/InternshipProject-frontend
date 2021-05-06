import { ITag } from '../interfaces/tag';

export class TagModel {
  id?: number;
  friendly: boolean;
  understanding: boolean;
  punctuality: boolean;
  efficiency: boolean;


  constructor(tag: ITag) {
    this.id = tag.id;
    this.friendly = tag.friendly;
    this.understanding = tag.understanding;
    this.punctuality = tag.punctuality;
    this.efficiency = tag.efficiency;
  }
}
