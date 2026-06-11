function ProductAvailability() {

  const product = {
    name: "Laptop",
    inStock: true
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "50px auto",
        padding: "25px",
        border: "2px solid black",
        borderRadius: "20px",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        boxShadow: "0 5px 15px gray"
      }}
    >

      <h2><b>Product Details</b></h2>

      <h2>{product.name}</h2>

      {
        product.inStock ? (
          <div
            style={{
              padding: "15px",
              borderRadius: "15px",
              border:"1px solid black",
              backgroundColor: "#c8e6c9",
              color: "green"
            }}
          >
            <h3>✅ In Stock</h3>
            <p>Product is available now</p>
          </div>
        ) : (
          <div
            style={{
              padding: "15px",
              borderRadius: "15px",
              backgroundColor: "#ffcdd2",
              color: "red"
            }}
          >
            <h3>❌ Out of Stock</h3>
            <p>Currently unavailable</p>
          </div>
        )
      }

    </div>
  );
}

export default ProductAvailability;