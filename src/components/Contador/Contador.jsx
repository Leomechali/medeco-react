import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);

    const aumentar = () => {
        setContador(contador + 1);
    }
  
    return (
     <div>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>+</button>
        <button onClick={() => setContador(contador - 1)}>-</button>
    </div>
  )
}

export default Contador