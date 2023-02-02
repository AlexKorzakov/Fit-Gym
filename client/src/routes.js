import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Home from './pages/Home';
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  HOME_ROUTE,
  PROFILE_ROUTE,
  SCHEDULE_ROUTE,
  CONTACTS_ROUTE,
  SERVICES_ROUTE,
  TICKETS_ROUTE,
  ERROR_ROUTE,
  FAQ_ROUTE,
} from './utils/consts';
import Profile from './pages/Profile';
import Contacts from './pages/Contacts';
import Schedule from './pages/Schedule';
import Services from './pages/Services';
import Tickets from './pages/Tickets';
import NotFound from './pages/NotFound';
import Faq from './pages/Faq';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Element: <Admin />,
  },
  {
    path: PROFILE_ROUTE,
    Element: <Profile />,
  },
  {
    path: FAQ_ROUTE,
    Element: <Faq />,
  },
];

export const noMatchRoutes = [
  {
    path: ERROR_ROUTE,
    Element: <NotFound />,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Element: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    Element: <Auth />,
  },
  {
    path: SCHEDULE_ROUTE,
    Element: <Schedule />,
  },
  {
    path: SERVICES_ROUTE,
    Element: <Services />,
  },
  {
    path: TICKETS_ROUTE,
    Element: <Tickets />,
  },
  {
    path: CONTACTS_ROUTE,
    Element: <Contacts />,
  },
  {
    path: HOME_ROUTE,
    Element: <Home />,
  },
];
