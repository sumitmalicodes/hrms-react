import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ collapsed, onNavigate }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState({});

  // Auto-expand section containing active route
  useEffect(() => {
    const activeSection = navSections.find(section =>
      section.items.some(item => item.path === location.pathname)
    );
    if (activeSection) {
      setExpandedSections(prev => ({
        ...prev,
        [activeSection.title]: true
      }));
    }
  }, [location.pathname]);

  const toggleSection = (title) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const navSections = [
    {
      title: 'Main',
      items: [
        { 
          label: 'Dashboard', 
          icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
          path: '/dashboard'
        },
      ],
    },
    {
      title: 'Organization',
      items: [
        { 
          label: 'Employees', 
          icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
          path: '/employees'
        },
        { 
          label: 'Departments', 
          icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
          path: '/departments'
        },
        { 
          label: 'Designations', 
          icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 12 5.176-1.71 9-6.409 9-12 0-1.014-.126-2.016-.382-3.016z',
          path: '/designations'
        },
      ],
    },
    {
      title: 'Time Management',
      items: [
        { 
          label: 'Attendance', 
          icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
          path: '/attendance'
        },
        { 
          label: 'Leave', 
          icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
          path: '/leave'
        },
      ],
    },
    {
      title: 'Payroll',
      items: [
        { 
          label: 'Salary', 
          icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
          path: '/salary'
        },
        { 
          label: 'Deductions', 
          icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
          path: '/deductions'
        },
      ],
    },
    {
      title: 'Recruitment',
      items: [
        { 
          label: 'Openings', 
          icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
          path: '/openings'
        },
        { 
          label: 'Candidates', 
          icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
          path: '/candidates'
        },
      ],
    },
    {
      title: 'Other',
      items: [
        { 
          label: 'Reports', 
          icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
          path: '/reports'
        },
        { 
          label: 'Settings', 
          icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
          path: '/settings'
        },
      ],
    },
  ];

  // Check if a path is active
  const isActive = (path) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <style>{`
        .sidebar-hrms {
          background-color: #2c3e50;
          color: rgba(255, 255, 255, 0.85);
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          transition: width 0.3s;
          box-shadow: 4px 0 12px rgba(0, 0, 0, 0.15);
        }
        
        .sidebar-profile {
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          white-space: nowrap;
          overflow: hidden;
        }
        .sidebar-profile .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #3498db;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          color: #fff;
          flex-shrink: 0;
        }
        .sidebar-profile .info {
          transition: opacity 0.2s;
        }
        .sidebar-profile .info h6 {
          margin: 0;
          color: #fff;
          font-size: 0.9rem;
        }
        .sidebar-profile .info small {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.75rem;
        }

        .sidebar-nav {
          padding: 0.5rem 0;
          flex: 1;
        }
        .sidebar-section {
          margin-bottom: 0.25rem;
        }
        .sidebar-section-header {
          padding: 0.75rem 1rem 0.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          white-space: nowrap;
          overflow: hidden;
        }
        .sidebar-section-title {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 600;
          transition: opacity 0.2s;
        }
        .section-arrow {
          transition: transform 0.3s;
          display: flex;
          align-items: center;
        }
        .section-arrow.expanded {
          transform: rotate(90deg);
        }
        .sidebar-section-items {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .sidebar-section-items.expanded {
          max-height: 500px;
        }
        .sidebar-nav .nav-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 1rem;
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.875rem;
          border-left: 3px solid transparent;
          transition: all 0.2s;
          white-space: nowrap;
          overflow: hidden;
          cursor: pointer;
          text-decoration: none;
          width: 100%;
          background: none;
          border-top: none;
          border-right: none;
          border-bottom: none;
        }
        .sidebar-nav .nav-link svg {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }
        .sidebar-nav .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: #fff;
        }
        .sidebar-nav .nav-link.active {
          background-color: rgba(255, 255, 255, 0.1);
          color: #fff;
          border-left: 3px solid #3498db;
        }
        .sidebar-nav .nav-link.active svg {
          color: #3498db;
        }

        /* Collapsed state */
        .sidebar-hrms.collapsed .sidebar-profile .info,
        .sidebar-hrms.collapsed .sidebar-section-title,
        .sidebar-hrms.collapsed .section-arrow,
        .sidebar-hrms.collapsed .nav-link span {
          display: none;
        }
        .sidebar-hrms.collapsed .sidebar-profile {
          justify-content: center;
          padding: 1rem 0;
        }
        .sidebar-hrms.collapsed .sidebar-section-header {
          justify-content: center;
          padding: 0.5rem 0;
        }
        .sidebar-hrms.collapsed .sidebar-section-items {
          max-height: 0 !important;
          overflow: hidden;
        }
        .sidebar-hrms.collapsed .nav-link {
          justify-content: center;
          padding: 0.6rem 0;
        }
        .sidebar-hrms.collapsed .sidebar-nav {
          padding: 0.5rem 0;
        }
      `}</style>

      <div className={`sidebar-hrms ${collapsed ? 'collapsed' : ''}`}>
        {/* Profile */}
        <Link to="/profile" className="sidebar-profile" style={{ textDecoration: 'none' }}>
          <div className="avatar">SM</div>
          <div className="info">
            <h6>Sumit Mali</h6>
            <small>HR Manager</small>
          </div>
        </Link>

        {/* Navigation */}
        <div className="sidebar-nav">
          {navSections.map((section, idx) => {
            const isExpanded = expandedSections[section.title] || section.items.some(item => isActive(item.path));
            return (
              <div className="sidebar-section" key={idx}>
                <div 
                  className="sidebar-section-header"
                  onClick={() => !collapsed && toggleSection(section.title)}
                  title={collapsed ? section.items[0]?.label : ''}
                >
                  <div className="sidebar-section-title">{section.title}</div>
                  <div className={`section-arrow ${isExpanded ? 'expanded' : ''}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
                <div className={`sidebar-section-items ${isExpanded ? 'expanded' : ''}`}>
                  <ul className="nav flex-column">
                    {section.items.map((item, itemIdx) => (
                      <li className="nav-item" key={itemIdx}>
                        <Link
                          className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                          to={item.path}
                          onClick={onNavigate}
                          title={collapsed ? item.label : ''}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d={item.icon} />
                          </svg>
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;