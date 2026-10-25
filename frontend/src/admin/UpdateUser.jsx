import React from "react";

function UpdateUser() {
  return (
    <div className="container mt-4">
      <div className="col-md-6">
        <h2>Update User</h2>

        <form>
          <div className="mb-3">
            <label className="form-label">User ID</label>
            <input type="number" className="form-control" placeholder="Enter user ID" />
          </div>

          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" placeholder="Enter new username" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter new email" />
          </div>

          <button type="submit" className="btn btn-warning w-100">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;