export type User = {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  isAuthorized: boolean;
  imported: boolean;
  teamId: string;
  role: string;
  linkedinLink: string | null;
  isReceivingNotifications: boolean;
  avatarKey: string | null;
  loggedInAt: string;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
};

export type Company = {
  id: number;
  zoomInfoId: number | null;
  name: string;
  logo: string | null;
  ticker: string | null;
  parentCompany: string | null;
  phone: number;
  fax: string | null;
  website: string | null;
  city: string;
  street: string;
  state: string | null;
  zipCode: string;
  country: string;
  continent: string | null;
  productsBrandDescription: string | null;
  descriptionList: string | null;
  revenueRange: string | null;
  employeeRange: string | null;
  twitterHandle: string | null;
  socialMediaUrls: Array<Array<string>> | null;
};

export type SignInDto = {
  email: string;
  password: string;
};
