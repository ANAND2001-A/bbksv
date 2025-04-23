// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from "react";
import * as echarts from "echarts";

const DashboardHome= () => {
  const [activeRole, setActiveRole] = useState<
    "student" | "teacher" | "principal"
  >("principal");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [isCalendarExpanded, setIsCalendarExpanded] = useState(false);

  // Current date
  const currentDate = new Date();
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", dateOptions);

  // Initialize charts
  useEffect(() => {
    // Academic Progress Chart
    const academicChartElement = document.getElementById(
      "academic-progress-chart",
    );
    if (academicChartElement) {
      const academicChart = echarts.init(academicChartElement);
      const academicOption = {
        animation: false,
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Overall GPA", "Class Average"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        },
        yAxis: {
          type: "value",
          max: 4.0,
        },
        series: [
          {
            name: "Overall GPA",
            type: "line",
            data: [3.2, 3.4, 3.3, 3.5, 3.6, 3.7],
            lineStyle: {
              color: "#4F46E5",
            },
            itemStyle: {
              color: "#4F46E5",
            },
          },
          {
            name: "Class Average",
            type: "line",
            data: [3.0, 3.1, 3.1, 3.2, 3.3, 3.3],
            lineStyle: {
              color: "#10B981",
            },
            itemStyle: {
              color: "#10B981",
            },
          },
        ],
      };
      academicChart.setOption(academicOption);

      // Handle resize
      window.addEventListener("resize", () => {
        academicChart.resize();
      });
    }

    // Subject Performance Chart
    const subjectChartElement = document.getElementById(
      "subject-performance-chart",
    );
    if (subjectChartElement) {
      const subjectChart = echarts.init(subjectChartElement);
      const subjectOption = {
        animation: false,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["Current Score", "Class Average"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["Math", "Science", "English", "History", "Art"],
          },
        ],
        yAxis: [
          {
            type: "value",
            max: 100,
          },
        ],
        series: [
          {
            name: "Current Score",
            type: "bar",
            data: [92, 87, 95, 88, 96],
            itemStyle: {
              color: "#4F46E5",
            },
          },
          {
            name: "Class Average",
            type: "bar",
            data: [85, 82, 88, 80, 90],
            itemStyle: {
              color: "#10B981",
            },
          },
        ],
      };
      subjectChart.setOption(subjectOption);

      // Handle resize
      window.addEventListener("resize", () => {
        subjectChart.resize();
      });
    }

    // Attendance Chart
    const attendanceChartElement = document.getElementById("attendance-chart");
    if (attendanceChartElement) {
      const attendanceChart = echarts.init(attendanceChartElement);
      const attendanceOption = {
        animation: false,
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Attendance",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "18",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 92, name: "Present", itemStyle: { color: "#10B981" } },
              { value: 5, name: "Excused", itemStyle: { color: "#F59E0B" } },
              { value: 3, name: "Absent", itemStyle: { color: "#EF4444" } },
            ],
          },
        ],
      };
      attendanceChart.setOption(attendanceOption);

      // Handle resize
      window.addEventListener("resize", () => {
        attendanceChart.resize();
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  // Role-specific metrics
  const getRoleMetrics = () => {
    switch (activeRole) {
      case "principal":
        return [
          {
            title: "Total Students",
            value: "2,547",
            icon: "fa-users",
            color: "bg-indigo-500",
          },
          {
            title: "Faculty Count",
            value: "142",
            icon: "fa-chalkboard-teacher",
            color: "bg-emerald-500",
          },
          {
            title: "Attendance Rate",
            value: "94%",
            icon: "fa-calendar-check",
            color: "bg-amber-500",
          },
          {
            title: "Academic Performance",
            value: "3.6 GPA",
            icon: "fa-chart-line",
            color: "bg-sky-500",
          },
        ];
      case "teacher":
        return [
          {
            title: "Classes Today",
            value: "5",
            icon: "fa-chalkboard",
            color: "bg-indigo-500",
          },
          {
            title: "Students Present",
            value: "87/92",
            icon: "fa-user-check",
            color: "bg-emerald-500",
          },
          {
            title: "Assignments Due",
            value: "14",
            icon: "fa-tasks",
            color: "bg-amber-500",
          },
          {
            title: "Class Average",
            value: "3.4 GPA",
            icon: "fa-chart-bar",
            color: "bg-sky-500",
          },
        ];
      case "student":
        return [
          {
            title: "Attendance",
            value: "96%",
            icon: "fa-calendar-check",
            color: "bg-indigo-500",
          },
          {
            title: "Current GPA",
            value: "3.7",
            icon: "fa-graduation-cap",
            color: "bg-emerald-500",
          },
          {
            title: "Upcoming Tests",
            value: "3",
            icon: "fa-clipboard-list",
            color: "bg-amber-500",
          },
          {
            title: "Pending Assignments",
            value: "5",
            icon: "fa-book",
            color: "bg-sky-500",
          },
        ];
      default:
        return [];
    }
  };

  // Course data
  const courses = [
    {
      id: 1,
      name: "Advanced Mathematics",
      code: "MATH-401",
      progress: 65,
      recent: "Quiz submitted",
      instructor: "Dr. Emily Chen",
    },
    {
      id: 2,
      name: "Modern Physics",
      code: "PHYS-302",
      progress: 78,
      recent: "New assignment",
      instructor: "Prof. James Wilson",
    },
    {
      id: 3,
      name: "World Literature",
      code: "LIT-201",
      progress: 92,
      recent: "Essay graded",
      instructor: "Dr. Sarah Johnson",
    },
    {
      id: 4,
      name: "Computer Science",
      code: "CS-350",
      progress: 45,
      recent: "Project due soon",
      instructor: "Prof. Michael Brown",
    },
    {
      id: 5,
      name: "Economics",
      code: "ECON-210",
      progress: 82,
      recent: "Midterm scheduled",
      instructor: "Dr. Robert Davis",
    },
    {
      id: 6,
      name: "Art History",
      code: "ART-105",
      progress: 70,
      recent: "Gallery visit",
      instructor: "Prof. Lisa Martinez",
    },
  ];

  // Activity feed data
  const activities = [
    {
      id: 1,
      type: "announcement",
      title: "Campus-wide Internet Maintenance",
      time: "2 hours ago",
      content: "Scheduled maintenance on Friday evening from 8pm-11pm.",
    },
    {
      id: 2,
      type: "deadline",
      title: "Physics Project Submission",
      time: "5 hours ago",
      content: "Deadline extended to next Monday, April 29th.",
    },
    {
      id: 3,
      type: "grade",
      title: "Literature Essay Grades Posted",
      time: "1 day ago",
      content: "Check your grades in the student portal.",
    },
    {
      id: 4,
      type: "event",
      title: "Spring Career Fair",
      time: "2 days ago",
      content: "Register by Thursday to participate in the annual career fair.",
    },
  ];

  // Calendar events
  const calendarEvents = [
    {
      id: 1,
      title: "Faculty Meeting",
      date: "April 23, 2025",
      time: "09:00 AM",
      location: "Conference Room A",
    },
    {
      id: 2,
      title: "Midterm Exams Begin",
      date: "April 25, 2025",
      time: "All Day",
      location: "Multiple Locations",
    },
    {
      id: 3,
      title: "Student Council Meeting",
      date: "April 24, 2025",
      time: "03:30 PM",
      location: "Student Center",
    },
    {
      id: 4,
      title: "Department Budget Review",
      date: "April 26, 2025",
      time: "01:00 PM",
      location: "Admin Building",
    },
    {
      id: 5,
      title: "Campus Tour for Prospective Students",
      date: "April 27, 2025",
      time: "10:00 AM",
      location: "Main Entrance",
    },
  ];

  // Tasks data
  const tasks = [
    {
      id: 1,
      title: "Review midterm exam papers",
      priority: "high",
      completed: false,
    },
    {
      id: 2,
      title: "Submit monthly attendance report",
      priority: "medium",
      completed: false,
    },
    {
      id: 3,
      title: "Prepare for department meeting",
      priority: "high",
      completed: true,
    },
    {
      id: 4,
      title: "Update course syllabus",
      priority: "low",
      completed: false,
    },
    {
      id: 5,
      title: "Schedule parent-teacher conferences",
      priority: "medium",
      completed: false,
    },
  ];

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}
    >
      {/* Top Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-10 ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border-b shadow-sm`}
      >
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo and Sidebar Toggle */}
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="p-2 mr-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="flex items-center">
              <i className="fas fa-graduation-cap text-indigo-600 text-2xl mr-2"></i>
              <span className="text-xl font-semibold">EduDash</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                type="text"
                className={`block w-full p-2 pl-10 text-sm border-none rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"} focus:ring-2 focus:ring-indigo-500`}
                placeholder="Search for anything..."
              />
            </div>
          </div>

          {/* Right Side Menu */}
          <div className="flex items-center">
            {/* Role Selector */}
            <div className="hidden md:flex mr-4">
              <select
                value={activeRole}
                onChange={(e) =>
                  setActiveRole(
                    e.target.value,
                  )
                }
                className={`text-sm rounded-lg block p-2 pr-8 cursor-pointer border-none !rounded-button ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"}`}
              >
                <option value="student">Student View</option>
                <option value="teacher">Teacher View</option>
                <option value="principal">Principal View</option>
              </select>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 mx-2 rounded-full cursor-pointer !rounded-button whitespace-nowrap ${isDarkMode ? "bg-gray-700 text-yellow-300" : "bg-gray-100 text-gray-600"}`}
            >
              <i className={`fas ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
            </button>

            {/* Notifications */}
            <div className="relative mx-2">
              <button className="p-2 text-gray-500 rounded-full cursor-pointer hover:text-gray-900 hover:bg-gray-100 !rounded-button whitespace-nowrap">
                <i className="fas fa-bell"></i>
                {notifications > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                    {notifications}
                  </span>
                )}
              </button>
            </div>

            {/* Profile */}
            <div className="relative ml-2">
              <button className="flex items-center text-sm rounded-full cursor-pointer focus:outline-none !rounded-button whitespace-nowrap">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20college%20administrator%2C%20clean%20professional%20portrait%20with%20neutral%20background%2C%20high%20quality%2C%20realistic%2C%20detailed%20facial%20features&width=100&height=100&seq=profile1&orientation=squarish"
                  alt="User profile"
                />
                <span className="hidden md:block ml-2 mr-1">Admin User</span>
                <i className="hidden md:block fas fa-chevron-down text-xs ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-10 w-64 transition-transform duration-300 transform ${isSidebarCollapsed ? "-translate-x-full" : "translate-x-0"} ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"} border-r ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="mb-4">
            <div
              className={`flex items-center p-2 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-indigo-50"}`}
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20college%20administrator%2C%20clean%20professional%20portrait%20with%20neutral%20background%2C%20high%20quality%2C%20realistic%2C%20detailed%20facial%20features&width=100&height=100&seq=profile1&orientation=squarish"
                alt="User profile"
              />
              <div className="ml-3">
                <p className="text-sm font-medium">Admin User</p>
                <p
                  className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                >
                  {activeRole === "principal"
                    ? "Principal"
                    : activeRole === "teacher"
                      ? "Teacher"
                      : "Student"}
                </p>
              </div>
            </div>
          </div>

          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className={`flex items-center p-2 rounded-lg ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-indigo-500 text-white hover:bg-indigo-600"}`}
              >
                <i className="fas fa-tachometer-alt w-5 h-5"></i>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 rounded-lg ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
              >
                <i className="fas fa-graduation-cap w-5 h-5"></i>
                <span className="ml-3">Academics</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 rounded-lg ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
              >
                <i className="fas fa-users w-5 h-5"></i>
                <span className="ml-3">Students</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 rounded-lg ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
              >
                <i className="fas fa-chalkboard-teacher w-5 h-5"></i>
                <span className="ml-3">Faculty</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 rounded-lg ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
              >
                <i className="fas fa-calendar-alt w-5 h-5"></i>
                <span className="ml-3">Schedule</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 rounded-lg ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
              >
                <i className="fas fa-chart-bar w-5 h-5"></i>
                <span className="ml-3">Reports</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 rounded-lg ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
              >
                <i className="fas fa-cog w-5 h-5"></i>
                <span className="ml-3">Settings</span>
              </a>
            </li>
          </ul>

          <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
            <p
              className={`px-2 mb-2 text-sm font-semibold ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              Quick Access
            </p>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className={`flex items-center p-2 text-sm rounded-lg ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                >
                  <i className="fas fa-file-alt w-5 h-5"></i>
                  <span className="ml-3">Reports</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex items-center p-2 text-sm rounded-lg ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                >
                  <i className="fas fa-bullhorn w-5 h-5"></i>
                  <span className="ml-3">Announcements</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex items-center p-2 text-sm rounded-lg ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                >
                  <i className="fas fa-envelope w-5 h-5"></i>
                  <span className="ml-3">Messages</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`pt-16 ${isSidebarCollapsed ? "ml-0" : "ml-64"} transition-all duration-300`}
      >
        <div className="p-4 md:p-6">
          {/* Welcome Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              {formattedDate}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {getRoleMetrics().map((metric, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
              >
                <div className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full ${metric.color} text-white`}
                  >
                    <i className={`fas ${metric.icon}`}></i>
                  </div>
                  <div className="ml-4">
                    <p
                      className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}
                    >
                      {metric.title}
                    </p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            {/* Academic Progress Chart */}
            <div
              className={`p-4 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <h2 className="text-lg font-semibold mb-4">Academic Progress</h2>
              <div id="academic-progress-chart" className="w-full h-64"></div>
            </div>

            {/* Subject Performance Chart */}
            <div
              className={`p-4 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <h2 className="text-lg font-semibold mb-4">
                Subject Performance
              </h2>
              <div id="subject-performance-chart" className="w-full h-64"></div>
            </div>

            {/* Attendance Chart */}
            <div
              className={`p-4 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <h2 className="text-lg font-semibold mb-4">
                Attendance Overview
              </h2>
              <div id="attendance-chart" className="w-full h-64"></div>
            </div>
          </div>

          {/* Courses/Classes Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Active Courses</h2>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap">
                View All <i className="fas fa-arrow-right ml-1"></i>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className={`p-4 rounded-lg shadow-sm cursor-pointer ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{course.name}</h3>
                      <p
                        className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                      >
                        {course.code} • {course.instructor}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${course.progress >= 75 ? "bg-green-100 text-green-800" : course.progress >= 50 ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}
                    >
                      {course.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
                    <div
                      className={`h-2.5 rounded-full ${course.progress >= 75 ? "bg-green-500" : course.progress >= 50 ? "bg-yellow-500" : "bg-red-500"}`}
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center text-xs">
                    <i className="fas fa-clock text-gray-400 mr-1"></i>
                    <span
                      className={`${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                    >
                      Recent: {course.recent}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section: Activity Feed, Calendar, and Tasks */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Activity Feed */}
            <div
              className={`p-4 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <h2 className="text-lg font-semibold mb-4">Activity Feed</h2>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className={`p-3 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}
                  >
                    <div className="flex items-start">
                      <div
                        className={`p-2 rounded-full mr-3 ${
                          activity.type === "announcement"
                            ? "bg-blue-100 text-blue-600"
                            : activity.type === "deadline"
                              ? "bg-red-100 text-red-600"
                              : activity.type === "grade"
                                ? "bg-green-100 text-green-600"
                                : "bg-purple-100 text-purple-600"
                        }`}
                      >
                        <i
                          className={`fas ${
                            activity.type === "announcement"
                              ? "fa-bullhorn"
                              : activity.type === "deadline"
                                ? "fa-calendar-times"
                                : activity.type === "grade"
                                  ? "fa-chart-line"
                                  : "fa-calendar-day"
                          }`}
                        ></i>
                      </div>
                      <div>
                        <h3 className="font-medium">{activity.title}</h3>
                        <p className="text-sm">{activity.content}</p>
                        <p
                          className={`text-xs mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                        >
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-center text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer !rounded-button whitespace-nowrap">
                View All Activities
              </button>
            </div>

            {/* Calendar */}
            <div
              className={`p-4 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Upcoming Events</h2>
                <button
                  onClick={() => setIsCalendarExpanded(!isCalendarExpanded)}
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap"
                >
                  {isCalendarExpanded ? "Show Less" : "Show More"}
                </button>
              </div>
              <div className="space-y-3">
                {calendarEvents
                  .slice(0, isCalendarExpanded ? calendarEvents.length : 3)
                  .map((event) => (
                    <div
                      key={event.id}
                      className={`p-3 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-lg mr-3">
                          <i className="fas fa-calendar"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{event.title}</p>
                          <p
                            className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                          >
                            {event.date} • {event.time}
                          </p>
                          <p
                            className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                          >
                            <i className="fas fa-map-marker-alt mr-1"></i>{" "}
                            {event.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Tasks */}
            <div
              className={`p-4 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <h2 className="text-lg font-semibold mb-4">Tasks</h2>
              <div className="space-y-2">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`p-3 rounded-lg flex items-center ${isDarkMode ? "bg-gray-700" : "bg-gray-50"} ${task.completed ? "opacity-60" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={task.completed}
                      className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 cursor-pointer"
                    />
                    <div className="ml-3 flex-1">
                      <p
                        className={`font-medium ${task.completed ? "line-through" : ""}`}
                      >
                        {task.title}
                      </p>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          task.priority === "high"
                            ? "bg-red-100 text-red-800"
                            : task.priority === "medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                        }`}
                      >
                        {task.priority}
                      </span>
                    </div>
                    <button className="p-1 text-gray-400 hover:text-gray-600 cursor-pointer !rounded-button whitespace-nowrap">
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <button className="w-full py-2 text-center text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg cursor-pointer !rounded-button whitespace-nowrap">
                  <i className="fas fa-plus mr-1"></i> Add New Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardHome;
