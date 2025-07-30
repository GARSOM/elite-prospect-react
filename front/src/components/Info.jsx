import { useEffect, useState } from "react";
import { getInfoItems } from "../api/info";
import "./Info.css";

const Info = () => {
  const [items, setItems] = useState([]);
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    getInfoItems().then(setItems).catch(console.error);
  }, []);

  return (
    <section className="info-section" id="info">
      <h2>Информация</h2>
      <div className="info-grid">
        {items.map(item => (
          <div className="info-card" key={item.id}>
            <div className="info-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.shortText}</p>
            <button onClick={() => setModalItem(item)}>Подробнее</button>
          </div>
        ))}
      </div>

      {modalItem && (
        <div className="info-modal" onClick={() => setModalItem(null)}>
          <div className="info-modal-content" onClick={e => e.stopPropagation()}>
            <h3>{modalItem.title}</h3>
            <p>{modalItem.fullText}</p>
            <button onClick={() => setModalItem(null)}>Закрыть</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Info;
