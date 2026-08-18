import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalEmployees: 0,
    activeEmployees: 0,
    onLeaveToday: 0,
    attendanceRate: 0,
    openPositions: 0,
    pendingApprovals: 0,
    newHires: 0,
    turnoverRate: 0,
  });

  const [recentActivities, setRecentActivities] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [departmentData, setDepartmentData] = useState([]);

  // Simulate data fetching
  useEffect(() => {
    const fetchDashboardData = async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStats({
        totalEmployees: 1254,
        activeEmployees: 1189,
        onLeaveToday: 23,
        attendanceRate: 94.5,
        openPositions: 18,
        pendingApprovals: 12,
        newHires: 45,
        turnoverRate: 3.2,
      });

      setRecentActivities([
        { id: 1, type: 'leave', user: 'Sarah Johnson', action: 'requested annual leave', time: '5 mins ago', avatar: 'SJ', color: '#3498db' },
        { id: 2, type: 'attendance', user: 'Mike Chen', action: 'checked in', time: '15 mins ago', avatar: 'MC', color: '#2ecc71' },
        { id: 3, type: 'payroll', user: 'Finance Team', action: 'processed monthly payroll', time: '1 hour ago', avatar: 'FT', color: '#f39c12' },
        { id: 4, type: 'recruitment', user: 'HR Team', action: 'posted new job opening', time: '2 hours ago', avatar: 'HR', color: '#9b59b6' },
        { id: 5, type: 'employee', user: 'John Doe', action: 'updated employee records', time: '3 hours ago', avatar: 'JD', color: '#e74c3c' },
      ]);

      setUpcomingEvents([
        { id: 1, title: 'Monthly Town Hall', date: '2024-01-25', time: '10:00 AM', location: 'Main Auditorium' },
        { id: 2, title: 'HR Policy Review', date: '2024-01-26', time: '2:00 PM', location: 'Conference Room A' },
        { id: 3, title: 'New Employee Orientation', date: '2024-01-28', time: '9:00 AM', location: 'Training Room 2' },
        { id: 4, title: 'Performance Reviews', date: '2024-01-30', time: 'All Day', location: 'Various' },
      ]);

      setDepartmentData([
        { name: 'Engineering', employees: 320, percentage: 25.5 },
        { name: 'Sales', employees: 280, percentage: 22.3 },
        { name: 'Marketing', employees: 180, percentage: 14.4 },
        { name: 'HR', employees: 95, percentage: 7.6 },
        { name: 'Finance', employees: 120, percentage: 9.6 },
        { name: 'Operations', employees: 259, percentage: 20.6 },
      ]);

      setLoading(false);
    };

    fetchDashboardData();
  }, []);

  // Format date for display
  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .dashboard-container {
          padding: 0;
        }

        .dashboard-header {
          margin-bottom: 2rem;
        }

        .dashboard-header h1 {
          font-size: 1.75rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 0.25rem;
        }

        .dashboard-header p {
          color: #6c757d;
          margin: 0;
          font-size: 0.9rem;
        }

        .welcome-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          position: relative;
          overflow: hidden;
        }

        .welcome-card::before {
          content: '';
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          top: -50px;
          right: -30px;
        }

        .welcome-card h2 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .welcome-card p {
          margin: 0;
          opacity: 0.9;
          font-size: 0.9rem;
        }

        .stat-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          transition: all 0.3s;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .stat-card .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .stat-card .stat-value {
          font-size: 1.75rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 0.25rem;
        }

        .stat-card .stat-label {
          font-size: 0.875rem;
          color: #6c757d;
          margin: 0;
        }

        .stat-card .stat-change {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 20px;
        }

        .stat-change.positive {
          background: #d4edda;
          color: #155724;
        }

        .stat-change.negative {
          background: #f8d7da;
          color: #721c24;
        }

        .chart-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          height: 100%;
        }

        .chart-card h3 {
          font-size: 1rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 1.5rem;
        }

        .department-item {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .department-item .dept-name {
          width: 100px;
          font-size: 0.875rem;
          color: #495057;
          flex-shrink: 0;
        }

        .department-item .progress {
          flex: 1;
          height: 8px;
          margin: 0 1rem;
          background: #e9ecef;
          border-radius: 4px;
          overflow: hidden;
        }

        .department-item .progress-bar {
          border-radius: 4px;
          transition: width 1s ease;
        }

        .department-item .dept-count {
          width: 80px;
          text-align: right;
          font-size: 0.875rem;
          color: #6c757d;
          flex-shrink: 0;
        }

        .activity-item {
          display: flex;
          align-items: flex-start;
          padding: 0.75rem 0;
          border-bottom: 1px solid #f1f3f5;
        }

        .activity-item:last-child {
          border-bottom: none;
        }

        .activity-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.75rem;
          color: white;
          flex-shrink: 0;
          margin-right: 0.75rem;
        }

        .activity-content {
          flex: 1;
        }

        .activity-content p {
          margin: 0;
          font-size: 0.875rem;
          color: #495057;
        }

        .activity-content .activity-time {
          font-size: 0.75rem;
          color: #adb5bd;
        }

        .event-item {
          display: flex;
          align-items: center;
          padding: 0.75rem;
          border-radius: 8px;
          margin-bottom: 0.75rem;
          background: #f8f9fa;
          transition: all 0.3s;
        }

        .event-item:hover {
          background: #e9ecef;
          transform: translateX(5px);
        }

        .event-date {
          width: 50px;
          height: 50px;
          border-radius: 8px;
          background: #667eea;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-right: 0.75rem;
          flex-shrink: 0;
        }

        .event-date .day {
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1;
        }

        .event-date .month {
          font-size: 0.7rem;
          text-transform: uppercase;
        }

        .event-info {
          flex: 1;
        }

        .event-info h4 {
          font-size: 0.875rem;
          font-weight: 600;
          color: #2c3e50;
          margin: 0 0 0.25rem;
        }

        .event-info p {
          font-size: 0.75rem;
          color: #6c757d;
          margin: 0;
        }

        .quick-action-btn {
          background: white;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          padding: 0.75rem;
          text-align: center;
          transition: all 0.3s;
          cursor: pointer;
          text-decoration: none;
          display: block;
          color: #495057;
        }

        .quick-action-btn:hover {
          border-color: #667eea;
          background: #f8f9ff;
          transform: translateY(-3px);
        }

        .quick-action-btn svg {
          margin-bottom: 0.5rem;
        }

        .quick-action-btn span {
          display: block;
          font-size: 0.75rem;
          font-weight: 500;
        }
      `}</style>

      <div className="dashboard-container">
        {/* Welcome Banner */}
        <div className="welcome-card">
          <h2>Welcome back, Sumit! 👋</h2>
          <p>Here's what's happening with your HR operations today.</p>
        </div>

        {/* Dashboard Header */}
        <div className="dashboard-header">
          <h1>Dashboard Overview</h1>
          <p>Monitor your organization's key HR metrics and activities</p>
        </div>

        {/* Statistics Cards */}
        <div className="row g-3 mb-4">
          <div className="col-xl-3 col-md-6">
            <div className="stat-card">
              <span className="stat-change positive">+12 this month</span>
              <div className="stat-icon" style={{ background: '#e3f2fd' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <div className="stat-value">{stats.totalEmployees.toLocaleString()}</div>
              <p className="stat-label">Total Employees</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="stat-card">
              <span className="stat-change positive">+2.1%</span>
              <div className="stat-icon" style={{ background: '#fce4ec' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e91e63" strokeWidth="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="stat-value">{stats.attendanceRate}%</div>
              <p className="stat-label">Attendance Rate</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="stat-card">
              <span className="stat-change negative">5 pending</span>
              <div className="stat-icon" style={{ background: '#fff3e0' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff9800" strokeWidth="2">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div className="stat-value">{stats.onLeaveToday}</div>
              <p className="stat-label">On Leave Today</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="stat-card">
              <span className="stat-change positive">4 urgent</span>
              <div className="stat-icon" style={{ background: '#e8f5e9' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2">
                  <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div className="stat-value">{stats.openPositions}</div>
              <p className="stat-label">Open Positions</p>
            </div>
          </div>
        </div>

        {/* Charts and Activities Row */}
        <div className="row g-3">
          {/* Department Distribution */}
          <div className="col-lg-6">
            <div className="chart-card">
              <h3>Employee Distribution by Department</h3>
              {departmentData.map((dept, index) => (
                <div className="department-item" key={index}>
                  <span className="dept-name">{dept.name}</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${dept.percentage}%`,
                        background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
                        animation: `growBar 1s ease ${index * 0.1}s both`
                      }}
                    />
                  </div>
                  <span className="dept-count">{dept.employees}</span>
                </div>
              ))}
              <style>{`
                @keyframes growBar {
                  from { width: 0; }
                }
              `}</style>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="col-lg-6">
            <div className="chart-card">
              <h3>Recent Activities</h3>
              {recentActivities.map((activity) => (
                <div className="activity-item" key={activity.id}>
                  <div className="activity-avatar" style={{ background: activity.color }}>
                    {activity.avatar}
                  </div>
                  <div className="activity-content">
                    <p>
                      <strong>{activity.user}</strong> {activity.action}
                    </p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Events and Quick Actions */}
        <div className="row g-3 mt-1">
          {/* Upcoming Events */}
          <div className="col-lg-7">
            <div className="chart-card">
              <h3>Upcoming Events</h3>
              {upcomingEvents.map((event) => (
                <div className="event-item" key={event.id}>
                  <div className="event-date">
                    <span className="day">{new Date(event.date).getDate()}</span>
                    <span className="month">
                      {new Date(event.date).toLocaleString('en-US', { month: 'short' })}
                    </span>
                  </div>
                  <div className="event-info">
                    <h4>{event.title}</h4>
                    <p>{event.time} • {event.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="col-lg-5">
            <div className="chart-card">
              <h3>Quick Actions</h3>
              <div className="row g-2">
                <div className="col-6">
                  <Link to="/employees/add" className="quick-action-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#667eea" strokeWidth="2">
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                      <circle cx="8.5" cy="7" r="4"/>
                      <line x1="20" y1="8" x2="20" y2="14"/>
                      <line x1="23" y1="11" x2="17" y2="11"/>
                    </svg>
                    <span>Add Employee</span>
                  </Link>
                </div>
                <div className="col-6">
                  <Link to="/leave/apply" className="quick-action-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f39c12" strokeWidth="2">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <span>Apply Leave</span>
                  </Link>
                </div>
                <div className="col-6">
                  <Link to="/attendance" className="quick-action-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2">
                      <path d="M9 11l3 3L22 4"/>
                      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                    </svg>
                    <span>Mark Attendance</span>
                  </Link>
                </div>
                <div className="col-6">
                  <Link to="/reports" className="quick-action-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e91e63" strokeWidth="2">
                      <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    <span>View Reports</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;