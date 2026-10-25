import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

// Admin Components
import AddProduct from "./admin/AddProduct.jsx";
import ViewProducts from "./admin/ViewProducts.jsx";
import UpdateProduct from "./admin/UpdateProduct.jsx";
import DeleteProduct from "./admin/DeleteProduct.jsx";

import AddUser from "./admin/AddUser.jsx";
import ViewUsers from "./admin/ViewUsers.jsx";
import UpdateUser from "./admin/UpdateUser.jsx";
import DeleteUser from "./admin/DeleteUser.jsx";

// User Components
import UserAddProduct from "./user/AddProduct.jsx";
import UserViewProducts from "./user/ViewProducts.jsx";
import UserUpdateProduct from "./user/UpdateProduct.jsx";
import UserDeleteProduct from "./user/DeleteProduct.jsx";

function Layout({ title, children, links }) {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark px-4">
        <Link to="/" className="navbar-brand text-decoration-none">
          Product Management System
        </Link>
      </nav>

      <div className="container-fluid mt-4">
        <h2 className="mb-4">{title}</h2>

        <div className="row">
          <aside className="col-md-3 col-lg-2 mb-4">
            <div className="list-group">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="list-group-item list-group-item-action"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </aside>

          <main className="col-md-9 col-lg-10">
            <div className="card shadow-sm">
              <div className="card-body">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

const adminLinks = [
  { path: "/admin/add-product", label: "Add Product" },
  { path: "/admin/view-products", label: "View Products" },
  { path: "/admin/update-product", label: "Update Product" },
  { path: "/admin/delete-product", label: "Delete Product" },
  { path: "/admin/add-user", label: "Add User" },
  { path: "/admin/view-users", label: "View Users" },
  { path: "/admin/update-user", label: "Update User" },
  { path: "/admin/delete-user", label: "Delete User" },
];

const userLinks = [
  { path: "/user/add-product", label: "Add Product" },
  { path: "/user/view-products", label: "View Products" },
  { path: "/user/update-product", label: "Update Product" },
  { path: "/user/delete-product", label: "Delete Product" },
];

function AdminLayout({ children }) {
  return (
    <Layout title="Admin Dashboard" links={adminLinks}>
      {children}
    </Layout>
  );
}

function UserLayout({ children }) {
  return (
    <Layout title="User Dashboard" links={userLinks}>
      {children}
    </Layout>
  );
}

function Home() {
  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body text-center p-5">
          <h1>Product Management System</h1>
          <p className="text-muted">Select a dashboard to continue.</p>

          <Link to="/admin" className="btn btn-primary me-2">
            Admin Dashboard
          </Link>

          <Link to="/user" className="btn btn-success">
            User Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={<Navigate to="/admin/add-product" replace />}
        />

        <Route
          path="/admin/add-product"
          element={
            <AdminLayout>
              <AddProduct />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/view-products"
          element={
            <AdminLayout>
              <ViewProducts />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/update-product"
          element={
            <AdminLayout>
              <UpdateProduct />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/delete-product"
          element={
            <AdminLayout>
              <DeleteProduct />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/add-user"
          element={
            <AdminLayout>
              <AddUser />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/view-users"
          element={
            <AdminLayout>
              <ViewUsers />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/update-user"
          element={
            <AdminLayout>
              <UpdateUser />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/delete-user"
          element={
            <AdminLayout>
              <DeleteUser />
            </AdminLayout>
          }
        />

        {/* User Routes */}
        <Route
          path="/user"
          element={<Navigate to="/user/view-products" replace />}
        />

        <Route
          path="/user/add-product"
          element={
            <UserLayout>
              <UserAddProduct />
            </UserLayout>
          }
        />
        <Route
          path="/user/view-products"
          element={
            <UserLayout>
              <UserViewProducts />
            </UserLayout>
          }
        />
        <Route
          path="/user/update-product"
          element={
            <UserLayout>
              <UserUpdateProduct />
            </UserLayout>
          }
        />
        <Route
          path="/user/delete-product"
          element={
            <UserLayout>
              <UserDeleteProduct />
            </UserLayout>
          }
        />

        {/* Unknown URLs */}
        <Route
          path="*"
          element={
            <div className="container mt-5">
              <h2>404 - Page Not Found</h2>
              <Link to="/">Return Home</Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
