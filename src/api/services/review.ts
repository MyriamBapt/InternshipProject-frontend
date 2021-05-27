import makeRequest from "../index";
import { TagModel } from "../models/tag.model";

const addNewReviewUrl = `/review/new_review/`;

export async function addNewReview(prof: any, userData: any, stars: any, review: string, tags: any ): Promise<any> {
  const result = await makeRequest.post(addNewReviewUrl, {professional: prof, user: userData, stars: stars, review: review, tags: tags});
  return result.data;
}
