import axios from 'axios';

export default async function saveResultScore(
  points: number,
  userID: string | null
) {
  const headers = {
    'Content-Type': 'application/json',
  };
  const save = await axios.post(
    `http://localhost:5000/api/users/${userID}`,
    { points },
    { headers, withCredentials: true }
  );
  if (save.data.message === 'сохранено') {
    return 'сохранено';
  }
  return save.data.message;
}
