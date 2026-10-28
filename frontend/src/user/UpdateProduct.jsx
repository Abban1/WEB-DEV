import React from "react";
import axios from "axios";

function UpdateProduct() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("User Update Product onSubmit is working!");

    const data = {
      productId: event.target.productId.value,
      productName: event.target.productName.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value
    };

    const response = await axios.post(
      "http://localhost:5000/user",
      data
    );

    console.log("Backend received:", response.data);
  };

  return (
    <div className="container mt-4">
      <div className="col-md-6">
        <h2>Update Product</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Product ID</label>
            <input
              type="number"
              name="productId"
              className="form-control"
              placeholder="Enter product ID"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              name="productName"
              className="form-control"
              placeholder="Enter product name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              name="price"
              className="form-control"
              placeholder="Enter price"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              name="quantity"
              className="form-control"
              placeholder="Enter quantity"
            />
          </div>

          <button type="submit" className="btn btn-warning w-100">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;