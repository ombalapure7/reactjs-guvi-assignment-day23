import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link
        to="/"
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin</div>
      </Link>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <Link to="/dashboard">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </Link>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Interface</div>
      <li className="nav-item">
        <Link to="/students">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            All Students
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/add">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            Add Student
          </a>
        </Link>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default Sidebar;
