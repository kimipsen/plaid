export interface User {
  self?: string;
  key?: string;
  emailAddress?: string;
  avatarUrls?: Record<string, string>;
  displayName?: string;
  active?: boolean;
  timeZone?: string;
}
