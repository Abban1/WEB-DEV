import React from "react";
import axios from "axios";

function AddProduct() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("onSubmit is working!");

    const data = {
      productName: event.target.productName.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      description: event.target.description.value
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
        <h2>Add Product</h2>

        <form onSubmit={handleSubmit}>
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

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control"
              placeholder="Enter description"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;