import React from "react";

function DeleteProduct() {
  return (
    <div className="container mt-4">
      <div className="col-md-6">
        <h2>Delete Product</h2>

        <form>
          <div className="mb-3">
            <label className="form-label">Product ID</label>
            <input type="number" className="form-control" placeholder="Enter product ID" />
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