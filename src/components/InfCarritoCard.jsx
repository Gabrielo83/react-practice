const InfCarritoCard = ({ carrito }) => {
  return (
    <div className="bg-white py-4">
      Elementos en el Carrito:{carrito.length}
    </div>
  );
};

export default InfCarritoCard;
