import headImage from './headImage.png';
import { motion } from 'framer-motion';

import './Head.css';

export const Head = (props) => {
  const { title, children } = props;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="head"
    >
      <div className="image_block">
        <img src={headImage} alt="header img" layout="responsive" />
        <div className="text_block">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="title"
          >
            <h1 className="title_text">{title}</h1>
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="sub_title"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
