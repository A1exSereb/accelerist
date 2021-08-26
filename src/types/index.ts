import { AgeRanges, Gender, Income } from './search';

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
  avatarKey: string | undefined;
  loggedInAt: string;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
};

export type Filters = {
  sdgGoals?: string[];
  ethnicities?: string[];
  income?: Income;
  ageRanges?: AgeRanges;
  gender?: Gender;
  q?: string;
  industry?: string[];
  deletedIds?: string[];
  csrFocusIds?: string[];
  affinities?: string[];
  location?: string[];
  totalAnnualContributors?: string;
  revenueMin?: string;
  revenueMax?: string;
  scope?: string;
};

export type Company = {
  id: string;
  zoomInfoId: number | null;
  name: string;
  logo: string | undefined;
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
  competitors: string | null;
  subUnitIndustries: string | null;
  primaryIndustry: Array<string>;
  industries: Array<string> | null;
  revenue: string | null;
  employeeCount: number;
  annualContributions: string | null;
  cashContributions: string | null;
  inKindContributions: string | null;
  employeeContributions: string | null;
  parentId: string | null;
  parentName: string | null;
  type: string | null;
  sdgGoals: string | null;
  genders: Array<string> | null;
  income: string | null;
  age: string | null;
  ethnicity: any;
  nonprofit: any;
  purchase: any;
  affiliation: any;
  brands: any;
  interests: string[];
  typesOfInvestment: any;
  errorLoadZoomInfo: any;
  charitablePartners: Array<any>;
  statusZoomInfo: string | null;
  loadZoomInfoDate: any;
  errorLoadZoomInfoDate: any;
  partnershipLink: string | null;
  employeeEngagementOpportunities: any;
  similarCompanies: Array<string> | null;
  favoriteCompanies: Array<string>;
  score: number;
  like: boolean;
  crsFocus: Array<string>;
};

export type Meta = {
  totalItems: number;
  itemCount: number;
  itemsPerPage: string;
  totalPages: number;
  currentPage: string;
};

export type GetFavoritesCompaniesDto = {
  page: number;
  limit: number;
};

export type GetCompaniesRequest = {
  items: Array<Company>;
  meta: Meta;
};

export type SearchCompaniesDto = {
  page: number;
  limit: number;
};

export type SignInDto = {
  email: string;
  password: string;
};

export type AuthorizationRequest = {
  accessToken: string;
  user: User;
};
