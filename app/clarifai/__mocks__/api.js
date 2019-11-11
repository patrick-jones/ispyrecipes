import {transformResponse} from '../transformResponse';

import fruitsalad from './fruitsalad';

export async function extractKeywords(base64) {
  // ['fruit salad', 'strawberry', 'berry', 'sweet']
  return Promise.resolve(transformResponse(fruitsalad));
}
