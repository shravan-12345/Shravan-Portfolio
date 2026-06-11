import ProductCard from "./ProductCard";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Product Cards</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <ProductCard
          name="Laptop"
          price={50000}
          brand="Dell"
        />

        <ProductCard
          name="Mobile"
          price={25000}
          brand="Samsung"
        />

        <ProductCard
          name="Tablet"
          price={30000}
          brand="Apple"
        />
      </div>
    </>
  );
}

export default App;