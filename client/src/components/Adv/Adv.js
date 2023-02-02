import faq1 from './faq_1.png';
import faq2 from './faq_2.png';
import { Square } from '../Square/Square';
import { Divider } from '../Divider/Divider';
import { motion } from 'framer-motion';

import './Adv.css';

export const Adv = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container_black"
    >
      <div className="info_title">
        <h2>Возможности для клиентов</h2>
        <Square color="white" />
      </div>
      <Divider color="white" />
      <div className="info_image_block">
        <div className="card_image">
          <img src={faq1} alt="Faq img" />
          <div className="subtitle">
            <h2>Справочник упражнений</h2>
          </div>
        </div>
        <div className="card_image">
          <img src={faq2} alt="Faq img" />
          <div className="subtitle">
            <h2>Личный кабинет</h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
