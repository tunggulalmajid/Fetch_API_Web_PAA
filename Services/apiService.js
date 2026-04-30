const ApiService = {
  baseURL: "https://library-api-lime.vercel.app/api",
  sendRequest: function (endpoint, method, data = null, useToken = false) {
    const settings = {
      url: `${this.baseURL}/${endpoint}`,
      method: method,
      dataType: "json",
      contentType: "application/json",
      data: data ? JSON.stringify(data) : null,
    };

    if (useToken) {
      const token = localStorage.getItem("access_token");
      settings.headers = { Authorization: `Bearer ${token}` };
    }

    let request = $.ajax(settings);

    return request.fail((err) => {
      const refreshToken = localStorage.getItem("refresh_token");

      if (err.status === 401 && refreshToken) {
        return this.handleRefreshToken(endpoint, method, data);
      }

      return err;
    });
  },

  handleRefreshToken: function (endpoint, method, data) {
    return $.ajax({
      url: `${this.baseURL}/auth/refresh`,
      method: "POST",
      data: JSON.stringify({
        refreshToken: localStorage.getItem("refresh_token"),
      }),
      contentType: "application/json",
    })
      .then((res) => {
        localStorage.setItem("access_token", res.data.accessToken);

        return this.sendRequest(endpoint, method, data, true);
      })
      .fail(() => {
        localStorage.clear();
        alert("Sesi Anda telah berakhir. Silakan login kembali.");
        window.location.href = "/views/auth/login.html";
      });
  },
};
