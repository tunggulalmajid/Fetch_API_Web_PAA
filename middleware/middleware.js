const Middleware = {
  // Mengecek status login
  checkAuth: function () {
    const token = localStorage.getItem("access_token");
    if (!token || token == null) {
      const path = window.location.pathname;
      // Jika di root (index.html), arahkan ke views/auth/login.html
      // Jika di dalam views/admin/, naik dua tingkat dulu
      const target = path.includes("/views/")
        ? "../auth/login.html"
        : "views/auth/login.html";
      window.location.href = target;
      return false;
    }
    return true;
  },

  // Memastikan akses Admin
  isAdmin: function () {
    const role = localStorage.getItem("user_role");
    if (role !== "admin") {
      alert("Akses Ditolak: Khusus Admin!");
      // Kembali ke root (index.html) dari folder views/admin/
      window.location.href = "../../index.html";
      return false;
    }
    return true;
  },

  // Arahkan dari halaman login (views/auth/) ke tujuan
  redirectFromAuth: function () {
    const role = localStorage.getItem("user_role");
    if (role === "admin") {
      window.location.href = "../admin/dashboard.html";
    } else {
      // Kembali ke root index.html
      window.location.href = "../../index.html";
    }
  },

  // Mencegah user login masuk ke form login
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
