import { useState } from "react";
import CardComponent from "../components/CardComponent";
import InfCarritoCard from "../components/InfCarritoCard";

const ProductContainer = () => {
  const [carrito, setCarrito] = useState([]);

  const AgregarAlCarrito = (event, name) => {
    carrito.push(name);
    setCarrito([...carrito]);
    console.log(carrito);
  };

  return (
    <div className="container bg-success ">
      <InfCarritoCard carrito={carrito} />
      <div className="row px-3 py-3">
        <CardComponent
          title={"Martillo"}
          img={"https://thumbs.dreamstime.com/b/martillo-30355542.jpg"}
          cardtext={"Producto Disponible"}
          name={"Martillo"}
          agregarAlCarrito={AgregarAlCarrito}
        />
        <CardComponent
          title={"Sierra Electrica"}
          img={
            "https://www.rothoblaas.es/images/SEGA%20A%20CATENA%20GZE51%20(2)-1605284669.jpg?w=800&h=600&fit=fill"
          }
          cardtext={"Producto No disponible"}
          name={"Sierra"}
          agregarAlCarrito={AgregarAlCarrito}
        />
        <CardComponent
          title={"Motoguadaña"}
          img={
            "https://fiasa.com.ar/wp-content/uploads/2020/09/motoguada%C3%B1a-desmalezadora-oleo-mac-fiasa.jpg"
          }
          cardtext={"Producto Disponible"}
          name={"Motoguadaña"}
          agregarAlCarrito={AgregarAlCarrito}
        />
      </div>
    </div>
  );
};

export default ProductContainer;
