// client/src/components/GisSteps.jsx
import "./GisSteps.css";
import { useState } from "react";

const steps = [
  {
    title: "Шаг 1",
    image: "/images/gis-step1.png",
    text: "Зайдите на сайт ГИС ЖКХ и авторизуйтесь через Госуслуги.",
  },
  {
    title: "Шаг 2",
    image: "/images/gis-step2.png",
    text: "Найдите ваш дом по адресу и откройте раздел «Информация».",
  },
  {
    title: "Шаг 3",
    image: "/images/gis-step3.png",
    text: "Оплатите счет.",
  },
];


const GisSteps = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <section className="gis">
      <h2>Немного о ГИС ЖКХ</h2>

      <img className="gis-banner" src="/images/gis-main.png" alt="Плюсы ГИС ЖКХ" />

      <div className="step-row">
        {steps.map((step, i) => (
          <div className="step" key={i}>
            <img
              src={step.image}
              alt={step.title}
              onClick={() => setModalImage(step.image)}
              style={{ cursor: "pointer" }}
            />
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <img src={modalImage} alt="preview" />
        </div>
      )}
    </section>
  );
};

export default GisSteps;