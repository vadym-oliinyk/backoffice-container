export interface HeaderProps {
  isSignedIn: boolean;
  userName?: string;
  onSignOut: () => void;
  onMenuToggle: () => void;
}
