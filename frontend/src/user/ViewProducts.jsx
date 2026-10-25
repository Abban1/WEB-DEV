import React from "react";

function ViewProducts() {
  return (
    <div className="container mt-4">
      <h2>View Products</h2>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <button type="button" className="btn btn-warning btn-sm me-2">
                Update
              </button>
              <button type="button" className="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewProducts;
