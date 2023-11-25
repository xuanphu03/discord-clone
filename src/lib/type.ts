export interface Org {
  id: string,
  name: string,
  icon: string
}

export interface OrgSidebarProps {
  orgs: Org[];
}