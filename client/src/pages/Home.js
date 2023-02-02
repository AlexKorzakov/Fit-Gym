import { Adv } from '../components/Adv/Adv';
import { Button } from '../components/Button/Button';
import { Card } from '../components/Card/Card';
import { Divider } from '../components/Divider/Divider';
import { Header } from '../layouts/Header/Header';
import gymCard1 from '../resources/gym_card_1.png';
import gymCard2 from '../resources/gym_card_2.png';
import gymCard3 from '../resources/gym_card_3.png';
import swimmingCard1 from '../resources/swimming_card_1.png';
import swimmingCard2 from '../resources/swimming_card_2.png';
import swimmingCard3 from '../resources/swimming_card_3.png';
import tennisCard1 from '../resources/tennis_card_1.png';
import tennisCard2 from '../resources/tennis_card_2.png';
import tennisCard3 from '../resources/tennis_card_3.png';
import mainPage1 from '../resources/mainPage1.png';
import { CardTitle } from '../components/CardTitle/CardTitle';
import { Footer } from '../layouts/Footer/Footer';
import { motion } from 'framer-motion';

import './styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header className="home_header" />
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="home_image_sidebar_block"
      >
        <div className="home_image">
          <img className="main_image" src={mainPage1} alt="MainPage img" />
        </div>
        <div className="home_text_block">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="home_title"
          >
            <h1>
              фитнес-клуб
              <br />
              fit gym
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.25 }}
            className="home_sub_title"
          >
            <span>— Самая современная система взаимодействия с клиентами</span>
            <span>— Высокотехнологичное спортивное оборудование</span>
            <span>— Справочник по технике выполнения упражнений</span>
          </motion.div>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="home_btn_action"
          >
            <a href="/services">
              <Button сolor="white">подробнее</Button>
            </a>
          </motion.div>
        </div>
      </motion.div>
      <div className="home_wrapper">
        <div className="home_description_block">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="home_description_logo"
          >
            <h2>Fit gym</h2>
          </motion.div>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="home_description"
          >
            <span>
              Семейный фитнес-клуб Fit Gym - современные решения на рынке
              спортивных комплексов
            </span>
            <p className="home_paragraph" size="s">
              Как часто вы думали, что все — завтра пойду куплю абонемент в
              фитнес-центр и начну приводить себя в форму? Сколько раз по
              понедельникам посещали мысли о возобновлении домашних занятий? А
              бесконечный поток картинок с фитоняшками, просматривая который,
              возникает мечта быть на них похожими. С некоторыми даже знакомы
              или читали историю их успеха. Одна беда – всегда находится
              причина: сил нет, времени не хватает, настроение паршивое,
              лень-матушка не отпускает.
            </p>
            <p className="home_paragraph" size="s">
              Атмосфера фитнес-центра далека от бытовых трудностей и неурядиц на
              работе. В процессе тренировки пропадает усталость, агрессия,
              плохое настроение. Особое влияние оказывают динамичные и
              интенсивные занятия — человек полностью освобождается от
              негативных мыслей.
            </p>
          </motion.div>
        </div>
        <div className="home_services_block">
          <Divider />
          <CardTitle>Тренажерный зал</CardTitle>
          <div className="home_card_row">
            <Card src={gymCard1} card_subtitle="Кроссовер">
              <span>— Правильное положение тела</span>
              <br />
              <span>— Вариативность упражнений</span>
              <br />
              <span>— Максимальная безопасность</span>
            </Card>
            <Card src={gymCard2} card_subtitle="Тренажер Смита">
              <span>— Различные варианты упражнений</span>
              <br />
              <span>— Фиксированная траектория</span>
              <br />
              <span>— Мышечная гипертрофия</span>
            </Card>
            <Card src={gymCard3} card_subtitle="Хаммер">
              <span>— Идеален для новичков</span>
              <br />
              <span>— Равномерная нагрузка</span>
              <br />
              <span>— Риск травмы минимален</span>
            </Card>
          </div>
          <Divider />
          <CardTitle>Бассейн</CardTitle>
          <div className="home_card_row">
            <Card src={swimmingCard1} card_subtitle="Акваэробика">
              <span>— Улучшение самочувствия</span>
              <br />
              <span>— Развитие выносливости</span>
              <br />
              <span>— Корректировка осанки</span>
            </Card>
            <Card src={swimmingCard2} card_subtitle="Малый бассейн">
              <span>— Занятия с детьми</span>
              <br />
              <span>— Небольшие дорожки</span>
              <br />
              <span>— Обучение плаванию</span>
            </Card>
            <Card src={swimmingCard3} card_subtitle="Большой бассейн">
              <span>— Идеален для спортсменов</span>
              <br />
              <span>— Большие дорожки</span>
              <br />
              <span>— Глубокое погружение</span>
            </Card>
          </div>
          <Divider />
          <CardTitle>Теннисный корт</CardTitle>
          <div className="home_card_row">
            <Card src={tennisCard1} card_subtitle="">
              <span>— Укрепление мускулатуры</span>
              <br />
              <span>— Улучшение зрения</span>
              <br />
              <span>— Повышение физической активности</span>
            </Card>
            <Card src={tennisCard2} card_subtitle="">
              <span>— Укрепление иммунитета</span>
              <br />
              <span>— Улучшение реакции</span>
              <br />
              <span>— Развитие моторики</span>
            </Card>
            <Card src={tennisCard3} card_subtitle="">
              <span>— Улучшение координации</span>
              <br />
              <span>— Повышение выносливости</span>
              <br />
              <span>— Развитие мышления</span>
            </Card>
          </div>
        </div>
      </div>
      <Adv />
      <Footer />
    </div>
  );
};

export default Home;
