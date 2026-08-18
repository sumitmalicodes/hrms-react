import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ onToggleSidebar, isMobile }) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setUserDropdownOpen(false);
    setNotificationOpen(false);
  }, [location.pathname]);

  // Navigation links with paths
  const navLinks = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Employees', path: '/employees' },
    { label: 'Attendance', path: '/attendance' },
    { label: 'Leave', path: '/leave' },
    { label: 'Payroll', path: '/payroll' },
  ];

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  // Handle logout
  const handleLogout = () => {
    // Clear auth tokens, user data, etc.
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <>
      <style>{`
        .navbar-hrms {
          background-color: #2c3e50;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          padding: 0.5rem 1rem;
          height: 64px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1030;
        }
        .navbar-hrms .navbar-brand {
          font-weight: 600;
          color: #ffffff;
          letter-spacing: 0.5px;
          text-decoration: none;
        }
        .navbar-hrms .nav-link {
          color: rgba(255,255,255,0.85) !important;
          transition: color 0.2s, background-color 0.2s;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          position: relative;
          font-size: 0.875rem;
          text-decoration: none;
          cursor: pointer;
        }
        .navbar-hrms .nav-link:hover {
          color: #ffffff !important;
          background-color: rgba(255,255,255,0.1);
        }
        .navbar-hrms .nav-link.active {
          color: #ffffff !important;
          background-color: rgba(255,255,255,0.15);
          font-weight: 500;
        }
        .navbar-hrms .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 2px;
          background-color: #3498db;
          border-radius: 2px;
        }
        .sidebar-toggle-btn {
          background: none;
          border: none;
          color: #fff;
          padding: 0.5rem;
          border-radius: 4px;
          transition: background-color 0.2s;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sidebar-toggle-btn:hover {
          background-color: rgba(255,255,255,0.1);
        }
        .avatar-circle {
          width: 32px;
          height: 32px;
          background-color: #3498db;
          color: #fff;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .notification-badge {
          position: absolute;
          top: 2px;
          right: 0;
          font-size: 0.65rem;
          padding: 3px 6px;
          background-color: #e74c3c !important;
        }
        .dropdown-menu {
          border: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          min-width: 220px;
          margin-top: 0.5rem;
          right: 0;
          left: auto;
        }
        .dropdown-item {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          cursor: pointer;
          transition: background-color 0.2s, padding-left 0.2s;
          text-decoration: none;
          color: #333;
          display: flex;
          align-items: center;
        }
        .dropdown-item:hover {
          background-color: #f8f9fa;
          padding-left: 1.25rem;
        }
        .search-form {
          position: relative;
        }
        .search-form input {
          background-color: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          border-radius: 4px;
          padding: 0.375rem 2rem 0.375rem 0.75rem;
          font-size: 0.875rem;
          width: 200px;
          transition: all 0.3s;
        }
        .search-form input::placeholder {
          color: rgba(255,255,255,0.5);
        }
        .search-form input:focus {
          outline: none;
          border-color: #3498db;
          background-color: rgba(255,255,255,0.15);
          width: 250px;
        }
        .search-form button {
          position: absolute;
          right: 5px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: rgba(255,255,255,0.7);
          padding: 0.25rem;
        }
        .search-form button:hover {
          color: #fff;
        }
        
        @media (min-width: 992px) {
          .navbar-hrms .nav-links-desktop {
            display: flex;
            align-items: center;
            margin-left: 1rem;
          }
        }
        
        @media (max-width: 991.98px) {
          .navbar-hrms .navbar-collapse {
            background-color: #2c3e50;
            padding: 1rem;
            border-radius: 0 0 8px 8px;
            margin-top: 0.5rem;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          .navbar-hrms .nav-link {
            padding: 0.75rem 1rem;
          }
          .search-form input,
          .search-form input:focus {
            width: 100%;
          }
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-dark navbar-hrms">
        <div className="container-fluid">
          {/* Sidebar Toggle Button */}
          <button
            className="sidebar-toggle-btn me-2"
            onClick={onToggleSidebar}
            aria-label="Toggle sidebar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Brand / Logo */}
          <Link to="/dashboard" className="navbar-brand d-flex align-items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#3498db" />
              <path d="M2 17L12 22L22 17" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="d-none d-sm-inline">HRMS Pro</span>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Content */}
          <div className="collapse navbar-collapse" id="navbarContent">
            {/* Main Navigation Links */}
            <ul className="navbar-nav nav-links-desktop">
              {navLinks.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link 
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    to={link.path}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Search Bar (Desktop) */}
            <form className="search-form d-none d-lg-block mx-3" onSubmit={handleSearch}>
              <input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search"
              />
              <button type="submit" aria-label="Search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </button>
            </form>

            {/* Right Side Items */}
            <ul className="navbar-nav ms-auto align-items-lg-center">
              {/* Notifications */}
              <li className="nav-item me-2 position-relative" ref={notificationRef}>
                <a 
                  className="nav-link" 
                  href="#notifications"
                  onClick={(e) => {
                    e.preventDefault();
                    setNotificationOpen(!notificationOpen);
                    setUserDropdownOpen(false);
                  }}
                  aria-label="Notifications"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"/>
                    <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"/>
                  </svg>
                  <span className="badge rounded-pill notification-badge">3</span>
                </a>
                {notificationOpen && (
                  <div className="dropdown-menu show position-absolute">
                    <h6 className="dropdown-header">Notifications</h6>
                    <Link className="dropdown-item" to="/leave-requests">
                      <strong>New leave request</strong> from Sarah
                    </Link>
                    <Link className="dropdown-item" to="/payroll">
                      <strong>Payroll processed</strong> successfully
                    </Link>
                    <Link className="dropdown-item" to="/recruitment">
                      <strong>3 new applications</strong> for Senior Developer
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item text-center text-primary" to="/notifications">
                      View all notifications
                    </Link>
                  </div>
                )}
              </li>

              {/* User Dropdown */}
              <li className="nav-item dropdown position-relative" ref={dropdownRef}>
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#profile"
                  onClick={(e) => {
                    e.preventDefault();
                    setUserDropdownOpen(!userDropdownOpen);
                    setNotificationOpen(false);
                  }}
                  role="button"
                  aria-expanded={userDropdownOpen}
                >
                  <span className="avatar-circle me-2">SM</span>
                  <span className="d-none d-lg-inline">Sumit Mali</span>
                  <span className="d-none d-md-inline ms-2  small">HR Manager</span>
                </a>
                {userDropdownOpen && (
                  <ul className="dropdown-menu show dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="me-2">
                          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/settings">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="me-2">
                          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                        Account Settings
                      </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item text-danger" onClick={handleLogout}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="me-2">
                          <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                        </svg>
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;