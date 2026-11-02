import { useEffect, useState } from "react";
import { getProducts } from "../../mock/AsyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setItems(data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
        Cargando catálogo...
      </h2>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{greeting}</h1>
      <ItemList products={items} />
    </div>
  );
};
export default ItemListContainer;
