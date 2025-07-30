// client/src/components/Services.jsx
import "./Services.css";
import { FaTools, FaBroom, FaShieldAlt, FaWrench } from "react-icons/fa";

const services = [
  {
    icon: <FaShieldAlt size={48} />,
    title: "Охрана",
    text: "Многоуровневая охрана жилого дома. Круглосуточная система видеонаблюдения.",
  },
  {
    icon: <FaBroom size={48} />,
    title: "Уборка",
    text: "Уборка придомовой территории, лестничных пролётов, мест общего пользования.",
  },
  {
    icon: <FaWrench size={48} />,
    title: "Ремонт",
    text: "Текущий ремонт, устранение неисправностей оборудования, инженерных систем и конструкций.",
  },
  {
    icon: <FaTools size={48} />,
    title: "Обслуживание",
    text: "Поддержание технического состояния элементов и систем, контроль параметров работы.",
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Услуги</h2>
      <div className="services-grid">
        {services.map((item, i) => (
          <div className="service-card" key={i}>
            <div className="icon">{item.icon}</div>
            {/* <h3>{item.title}</h3> */}
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
