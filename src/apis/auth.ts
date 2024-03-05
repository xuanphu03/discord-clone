import { request } from '@/lib/request';

export const signIn = async (email: string, password: string) => {
  return request.post(`/sign-in`, {
    email,
    password,
  });
};

export const signUp = async (email: string, password: string, username: string) => {
  return request.post(`/sign-up`, {
    email,
    password,
    username,
  });
};