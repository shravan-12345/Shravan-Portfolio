function ProductCard({ name, price, brand }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        margin: "10px",
        width: "250px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>{name}</h2>
      <p><strong>Price:</strong> ₹{price}</p>
      <p><strong>Brand:</strong> {brand}</p>
    </div>
  );
}

export default ProductCard;
