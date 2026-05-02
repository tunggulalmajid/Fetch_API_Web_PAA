const FineService = {
  getFines: function (params) {
    const queryString = $.param(params);
    return ApiService.sendRequest(`fines?${queryString}`, "GET", null, true);
  },

  getFineStats: function () {
    return ApiService.sendRequest("fines/stats", "GET", null, true);
  },

  getFineById: function (id) {
    return ApiService.sendRequest(`fines/${id}`, "GET", null, true);
  },

  createManualFine: function (data) {
    return ApiService.sendRequest("fines", "POST", data, true);
  },

  payFine: function (id, data) {
    return ApiService.sendRequest(`fines/${id}/pay`, "PUT", data, true);
  },
};
