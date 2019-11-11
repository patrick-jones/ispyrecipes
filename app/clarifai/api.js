import axios from 'axios';
import {CLARIFAI as apiKey} from 'react-native-dotenv';

import {transformResponse} from './transformResponse';

export async function extractKeywords(base64) {
  if (!base64) {
    return [];
  }

  try {
    const requestBody = {
      inputs: [
        {
          data: {
            image: {
              base64,
            },
          },
        },
      ],
    };
    const response = await axios.post(
      'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
      requestBody,
      {
        headers: {Authorization: `Key ${apiKey}`},
        // maybe put upload callback here if it is too slow
      },
    );

    return transformResponse(response.data);
  } catch (error) {
    console.error(error);
    return [];
  }
}
