
import React from "react";
import axios from "axios";

function DeleteProduct() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("onSubmit is working!");

    const productId = event.target.productId.value;

    const response = await axios.delete(
      "http://localhost:5000/user/" + productId
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
              type="text"
              name="productId"
              className="form-control"
              placeholder="Enter Product ID"
              required
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
