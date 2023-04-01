enum RoleType {
  ADMIN = "admin",
  CUSTOMER = "customer",
  SELLER = "seller",
}

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  no_telp: string;
  city: string;
  address: string;
  token: string;
  role: RoleType;
  password: string;
}