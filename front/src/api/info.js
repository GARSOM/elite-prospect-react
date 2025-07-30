const API_URL = process.env.REACT_APP_API_URL;

export async function getInfoItems() {
  const res = await fetch(`${API_URL}/api/info`);
  if (!res.ok) throw new Error("Ошибка загрузки информации");
  return await res.json();
}
