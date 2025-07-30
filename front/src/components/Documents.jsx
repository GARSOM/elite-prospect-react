import { useEffect, useState } from "react";
import { getDocuments } from "../api/documents";
import "./Documents.css";

const Documents = () => {
  const [documents, setDocuments] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = () => {
    if (!open && documents.length === 0) {
      setLoading(true);
      getDocuments()
        .then(data => setDocuments(data))
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    }
    setOpen(prev => !prev);
  };

  return (
    <section className="documents-section">
      <h2>Документы</h2>
      <button className="documents-toggle" onClick={toggle}>
        {open ? "Скрыть документы" : "Показать документы"}
      </button>

      {open && (
        <div className="documents-list">
          {loading ? (
            <p>Загрузка...</p>
          ) : (
            documents.map(doc => (
              <div className="document-card" key={doc.id}>
                <div className="doc-icon">📄</div>
                <div className="doc-content">
                  <h4>{doc.title}</h4>
                  <a href={doc.url} target="_blank" rel="noopener noreferrer" className="doc-link">
                    Открыть
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
};

export default Documents;
