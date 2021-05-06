import { IReview } from '../interfaces/review';

export class ReviewModel {
  id?: number;
  review: string;
  stars: number;
  date_hour: string;


  constructor(review: IReview) {
    this.id = review.id;
    this.review = review.review;
    this.stars = review.stars;
    this.date_hour = review.date_hour;
  }
}
