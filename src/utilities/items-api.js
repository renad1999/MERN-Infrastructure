import sendRequest from "./send-request";
const BASE_URL = '/api/items';

export async function getAll() {
  return sendRequest(BASE_URL);
}


// it's only provided here to remind you to follow
// RESTful routing, etc.
export async function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

