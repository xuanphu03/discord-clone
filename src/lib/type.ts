export interface Org {
  id: string,
  name: string,
  icon: string
}

export interface OrgSidebarProps {
  orgs: Org[];
}

export interface User {
  id: number;
  displayName: string;
  userName: string;
  avatar: string;
  color: string;
}