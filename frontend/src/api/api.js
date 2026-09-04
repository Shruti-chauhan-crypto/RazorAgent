import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const chatWithAI = async (message) => {
  const response = await api.post("/ai/chat", { message });

  return response.data;
};

export default api;