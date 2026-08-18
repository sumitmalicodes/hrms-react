import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Login from '../../pages/auth/Login';

const MainLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Detect mobile screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth < 992) {
        setSidebarCollapsed(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileSidebarOpen(false);
  }, [location.pathname]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileSidebarOpen(!mobileSidebarOpen);
    } else {
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };

  const closeMobileSidebar = () => {
    setMobileSidebarOpen(false);
  };

  return (
    <>
      <style>{`
        .main-layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: #f5f7fa;
        }

        .layout-wrapper {
          display: flex;
          flex: 1;
          margin-top: 64px;
        }

        .sidebar-wrapper {
          position: fixed;
          left: 0;
          top: 64px;
          bottom: 0;
          width: ${sidebarCollapsed ? '70px' : '260px'};
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
          background-color: #2c3e50;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .sidebar-wrapper.collapsed {
          width: 70px;
        }

        .content-wrapper {
          flex: 1;
          margin-left: ${sidebarCollapsed ? '70px' : '260px'};
          transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 64px);
        }

        .content-wrapper.expanded {
          margin-left: 260px;
        }

        .content-wrapper.collapsed {
          margin-left: 70px;
        }

        .main-content {
          flex: 1;
          padding: 1.5rem;
          transition: padding 0.3s;
        }

        .sidebar-overlay {
          display: none;
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 999;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .sidebar-overlay.show {
          display: block;
          opacity: 1;
        }

        @media (max-width: 991.98px) {
          .layout-wrapper {
            margin-top: 64px;
          }

          .sidebar-wrapper {
            transform: translateX(-100%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            width: 260px !important;
            top: 64px;
          }

          .sidebar-wrapper.mobile-open {
            transform: translateX(0);
            box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
          }

          .content-wrapper {
            margin-left: 0 !important;
            min-height: calc(100vh - 64px);
          }

          .main-content {
            padding: 1rem;
          }
        }

        @media (max-width: 576px) {
          .main-content {
            padding: 0.75rem;
          }
        }
      `}</style>

      <div className="main-layout">
        <Navbar 
          onToggleSidebar={toggleSidebar}
          isMobile={isMobile}
        />

        <div className="layout-wrapper">
          <aside 
            className={`
              sidebar-wrapper 
              ${sidebarCollapsed ? 'collapsed' : ''} 
              ${mobileSidebarOpen ? 'mobile-open' : ''}
            `}
            aria-label="Sidebar navigation"
          >
            <Sidebar 
              collapsed={sidebarCollapsed}
              onNavigate={closeMobileSidebar}
            />
          </aside>

          <div 
            className={`sidebar-overlay ${mobileSidebarOpen ? 'show' : ''}`}
            onClick={closeMobileSidebar}
          />

          <main 
            className={`
              content-wrapper 
              ${sidebarCollapsed ? 'collapsed' : 'expanded'}
            `}
          >
            <div className="main-content">
              <Outlet />
               {/* This renders the current route */}
            </div>
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;