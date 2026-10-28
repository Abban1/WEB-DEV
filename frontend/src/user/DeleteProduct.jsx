import React from "react";
import axios from "axios";

function DeleteProduct() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("User Delete Product onSubmit is working!");

    const data = {
      productId: event.target.productId.value
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
        <h2>Delete Product</h2>

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

          <button type="submit" className="btn btn-danger w-100">
            Delete Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeleteProduct;