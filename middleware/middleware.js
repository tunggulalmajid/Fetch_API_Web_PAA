const Middleware = {
  
  checkAuth: function () {
    const token = localStorage.getItem("access_token");
    if (!token || token == null) {
      const path = window.location.pathname;
      
      
      const target = path.includes("/views/")
        ? "../auth/login.html"
        : "views/auth/login.html";
      window.location.href = target;
      return false;
    }
    return true;
  },

  
  isAdmin: function () {
    const role = localStorage.getItem("user_role");
    if (role !== "admin") {
      alert("Akses Ditolak: Khusus Admin!");
      
      window.location.href = "../../index.html";
      return false;
    }
    return true;
  },

  
  redirectFromAuth: function () {
    const role = localStorage.getItem("user_role");
    if (role === "admin") {
      window.location.href = "../admin/dashboard.html";
    } else {
      
      window.location.href = "../../index.html";
    }
  },

  
  guestOnly: function () {
    const token = localStorage.getItem("access_token");
    if (token) {
      const role = localStorage.getItem("user_role");
      if (role === "admin") {
        window.location.href = "../admin/dashboard.html";
      } else {
        window.location.href = "../../index.html";
      }
    }
  },
};
