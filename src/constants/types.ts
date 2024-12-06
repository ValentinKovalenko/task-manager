import { IconType } from 'react-icons';

export interface Route {
  path: string;
  element: JSX.Element;
  icon?: IconType;
  name?: string;
  isProtected?: boolean;
  isHiddenInNavbar?: boolean;
}
