import { request } from '@/lib/request';

export const uploadFile = (data: FormData) => {
  return request.post('/upload', data);
};
