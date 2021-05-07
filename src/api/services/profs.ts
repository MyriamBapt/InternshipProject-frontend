import makeRequest from "../index";

const allProfsUrl = `/professional/all_with_tag_language`;

export async function getAllProfs(): Promise<any> {
  const result = await makeRequest.get(allProfsUrl);
  return result.data;
}
