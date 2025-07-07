import axiosInstance from "./axiosInstance";
import type { IUser } from "../types/user";

export const registerUser = async (data: {
  email: string;
  username: string;
  password: string;
}) => {
  const response = await axiosInstance.post("/auth/register", data);
  return response.data as { token: string; user: IUser };
};

export const loginUser = async (data: { email: string; password: string }) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data as { token: string; user: IUser };
};
