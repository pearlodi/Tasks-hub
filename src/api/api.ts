// api.ts
import axios from 'axios';
import {DataItem} from '../../type/types';



const API_KEY = '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'; // Replace with your API key
const API_URL = 'https://your-api-endpoint.com/data'; // Replace with your API URL

export const fetchData = async (): Promise<DataItem[]> => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
