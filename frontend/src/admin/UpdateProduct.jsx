import React from "react";

function UpdateProduct() {
  return (
    <div className="container mt-4">
      <div className="col-md-6">
        <h2>Update Product</h2>

        <form>
          <div className="mb-3">
            <label className="form-label">Product ID</label>
            <input type="number" className="form-control" placeholder="Enter product ID" />
          </div>

          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input type="text" className="form-control" placeholder="Enter new product name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input type="number" className="form-control" placeholder="Enter new price" />
          </div>

          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input type="number" className="form-control" placeholder="Enter new quantity" />
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