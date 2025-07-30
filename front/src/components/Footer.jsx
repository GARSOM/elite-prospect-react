// client/src/components/Footer.jsx
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="footer-column">
          <h3>Контакты</h3>
          <p><strong>График работы:</strong> Пн–Пт: 9:00 – 17:00</p>
          <p><strong>Перерыв:</strong> 13:00 – 14:00</p>
          <p><strong>Адрес:</strong> Курортный пр., д. 108, Сочи</p>
        </div>

        <div className="footer-column">
          <h3>Телефоны</h3>
          <p>Технический отдел:<br /><a href="tel:+78622255254">+7 (862) 225-52-54</a></p>
          <p>Аварийно-диспетчерская:<br /><a href="tel:+78622255205">+7 (862) 225-52-05</a></p>
          <p>Руководитель сервиса:<br /><a href="tel:+78622255206">+7 (862) 225-52-06</a></p>
        </div>

        <div className="footer-column footer-map-embed">
          <h3>На карте</h3>
          <iframe
            title="Карта - Курортный проспект 108"
            src="https://yandex.ru/map-widget/v1/?ll=39.779772%2C43.551553&z=17&l=map&pt=39.779772,43.551553,pm2rdl"
            width="100%"
            height="200"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
