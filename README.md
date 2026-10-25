# ME-Deco & Aromas - Mundo Esotérico | E-commerce React

Proyecto para la carrera FullStack. E-commerce real para mi local comercial **Mundo Esotérico (ME-Deco&Aromas)**

Este repositorio corresponde al **Checkpoint 2: Estructura y layout inicial**.

## 🚀 Tecnologías

- **React 19** + **Vite**
- **React Icons** para el carrito
- CSS tradicional por componente

## 📁 Estructura de componentes

El proyecto cumple con la modularización pedida en `src/components/`:

### 1. Navbar
`src/components/Navbar/Navbar.jsx`
- Branding con logo de ME-Deco
- Lista de categorías reales de producto: **Sahumerios, Velas, Esencias, Fuentes, Deco**
- Contiene al CartWidget
- Estilado con Flexbox en `Navbar.css`

### 2. CartWidget
`src/components/CartWidget/CartWidget.jsx`
- Componente hijo de Navbar
- Muestra ícono de carrito `IoCartOutline` y número hardcodeado (3) como notificación
- Clase `.cart-widget` para alinear ícono y número

### 3. ItemListContainer
`src/components/ItemListContainer/ItemListContainer.jsx`
- Contenedor principal del home
- Recibe prop `greeting` desde `App.jsx` y la renderiza centrada
- Flujo padre -> hijo con props

### App.jsx
```jsx
<>
  <Navbar />
  <ItemListContainer greeting="Bienvenidos a mi e-commerce" />
</>
