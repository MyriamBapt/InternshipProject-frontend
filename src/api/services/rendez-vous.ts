import makeRequest from "../index";

const rdvByProfAndDateUrl = `/rendezvous/all_by_prof_date/`;

export async function getRdvByProfAndDate(profId: number, date: string): Promise<any> {
  const result = await makeRequest.get(rdvByProfAndDateUrl + profId + '/' + date);
  return result.data;
}
