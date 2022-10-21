const CardComponent = ({ title, img, cardtext, name, agregarAlCarrito }) => {
  return (
    <div className="card col-4">
      <img className="card-img-top" src={img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{cardtext}</p>
        <button
          className="btn btn-primary"
          onClick={(event) => {
            agregarAlCarrito(event, name);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
