import axios from "axios";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST;
const API_PORT = process.env.NEXT_PUBLIC_API_PORT;

export const addClass = async (classData: any) => {
  const response = await axios.post(
    `http://${API_HOST}:${API_PORT}/api/classes`,
    classData
  );
  return response.data;
};
