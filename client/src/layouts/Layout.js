import { Header } from './Header/Header';
import { Footer } from '../layouts/Footer/Footer';

import './Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header className="header" />
      <main className="body" role="main">
        {children}
      </main>
      <Footer className="footer" />
    </>
  );
};

export default Layout;
