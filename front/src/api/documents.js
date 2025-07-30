const API_URL = process.env.REACT_APP_API_URL;

export async function getDocuments() {
  const res = await fetch(`${API_URL}/api/documents`);
  if (!res.ok) throw new Error("Ошибка загрузки документов");
  return await res.json();
}
