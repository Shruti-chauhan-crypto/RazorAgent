import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const chatWithAI = async (message) => {
  const response = await api.post("/ai/chat", { message });

  return response.data;
};

export const getDashboardAnalytics = async () => {
  const response = await api.get("/analytics/dashboard");
  return response.data.data;
};

export const createPaymentOrder = async (amount) => {
  const response = await api.post("/payment/create-order", {
    amount,
  });

  return response.data;
};

export const verifyPayment = async (paymentData) => {
  const response = await api.post("/payment/verify", paymentData);

  return response.data;
};

export const createOrder = async (orderData) => {
  const response = await api.post("/orders/create", orderData);
  return response.data;
};

export const getOrders = async () => {
  const response = await api.get("/orders/");
  return response.data.orders;
};

export const signupUser = async (userData) => {
  const response = await api.post("/auth/signup", userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await api.post("/auth/login", userData);
  return response.data;
};

export default api;