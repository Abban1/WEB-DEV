import React from "react";

function AddUser() {
  return (
    <div className="container mt-4">
      <div className="col-md-6">
        <h2>Add User</h2>

        <form>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" placeholder="Enter username" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;