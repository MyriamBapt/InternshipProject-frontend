import makeRequest from "../index";
import { TagModel } from "../models/tag.model";
import { ProfessionalModel } from "../models/professional.model";
import { UserModel } from "../models/user.model";

const addNewReviewUrl = `/review/new_review/`;

export async function addNewReview(prof: ProfessionalModel, userData: UserModel, stars: any, review: string, tags: TagModel ): Promise<any> {
  const result = await makeRequest.post(addNewReviewUrl, {professional: prof, user: userData, stars: stars, review: review, tags: tags});
  return result.data;
}
