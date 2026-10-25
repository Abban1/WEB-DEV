import React from "react";

function ViewUsers() {
  return (
    <div className="container mt-4">
      <h2>View Users</h2>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
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

export default ViewUsers;
