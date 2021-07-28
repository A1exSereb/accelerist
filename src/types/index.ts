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
