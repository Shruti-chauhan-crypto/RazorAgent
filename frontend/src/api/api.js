import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
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
  const response = await api.get("/orders");
  return response.data.orders;
};

export default api;