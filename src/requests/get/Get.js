import axios from 'axios';

export default async function Get(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
}
