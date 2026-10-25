import React from "react";

function DeleteUser() {
  return (
    <div className="container mt-4">
      <div className="col-md-6">
        <h2>Delete User</h2>

        <form>
          <div className="mb-3">
            <label className="form-label">User ID</label>
            <input type="number" className="form-control" placeholder="Enter user ID" />
          </div>

          <button type="submit" className="btn btn-danger w-100">
            Delete User
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeleteUser;