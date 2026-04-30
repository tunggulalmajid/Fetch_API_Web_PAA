const AuthService = {
  login: function (credentials) {
    return ApiService.sendRequest("auth/login", "POST", credentials);
  },
  register: function (userData) {
    return ApiService.sendRequest("auth/register", "POST", userData);
  },
  getProfile: function () {
    return ApiService.sendRequest("auth/me", "GET", null, true);
  },
  updatePassword: function (passwordData) {
    return ApiService.sendRequest(
      "auth/update-password",
      "PUT",
      passwordData,
      true,
    );
  },
  logout: function () {
    return ApiService.sendRequest("auth/logout", "POST", null, true);
  },
  saveSession: function (data) {
    // Menyimpan semua data penting dari respons API login
    localStorage.setItem("access_token", data.accessToken);
    localStorage.setItem("refresh_token", data.refreshToken);
    localStorage.setItem("user_role", data.user.role);
  },

  clearSession: function () {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_role");
  },
};
