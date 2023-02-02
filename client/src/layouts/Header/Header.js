import { ReactComponent as VkIcon } from '../Header/vk.svg';
import { ReactComponent as InstIcon } from '../Header/instagram.svg';
import { ReactComponent as TgIcon } from '../Header/telegram.svg';
import { Nav } from '../../components/Nav/Nav';
import { motion } from 'framer-motion';

import './Header.css';

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="header"
    >
      <div className="navigation">
        <Nav />
      </div>
      <div className="header_icons">
        <a href="https://vk.com/">
          <VkIcon />
        </a>
        <a href="https://instagram.com/">
          <InstIcon />
        </a>
        <a href="https://telegram.org/">
          <TgIcon />
        </a>
      </div>
    </motion.header>
  );
};
