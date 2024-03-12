import { request } from '@/lib/request';
import { z } from 'zod';
import { categorySchema } from './categories';

const orgSchema = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string().nullable(),
});

export type Org = z.infer<typeof orgSchema>;

export const getOrgs = async () => {
  const res = await request.get('/orgs');
  return orgSchema.array().parse(res.data);
};


// TODO: Add pagination

export const getOrg = async (orgID: string) => {
  const res = await request.get(`/orgs/${orgID}`);
  return orgSchema
    .extend({
      categories: z.array(categorySchema),
    })
    .parse(res.data.data);
};

interface AddOrgInput {
  name: string;
  icon?: string;
}

export const addOrg = async (addOrgInput: AddOrgInput) => {
  return request.post(`/orgs`, addOrgInput);
};
