import axios from 'axios';

export default async function Post(url, options) {
  try {
    const response = await axios.post(url, options);
    return response.data || null;
  } catch (e) {
    throw new Error(e);
  }
}
