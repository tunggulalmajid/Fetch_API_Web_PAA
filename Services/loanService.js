const LoanService = {
  borrowBook: function (data) {
    return ApiService.sendRequest("loans/borrow", "POST", data, true);
  },

  getMyLoans: function (params) {
    const queryString = $.param(params);
    return ApiService.sendRequest(`loans?${queryString}`, "GET", null, true);
  },

  getLoanHistory: function (params) {
    const queryString = $.param(params);
    return ApiService.sendRequest(
      `loans/history?${queryString}`,
      "GET",
      null,
      true,
    );
  },

  getLoanById: function (id) {
    return ApiService.sendRequest(`loans/${id}`, "GET", null, true);
  },

  returnBook: function (loanId) {
    return ApiService.sendRequest(`loans/${loanId}/return`, "PUT", null, true);
  },

  getAllLoans: function (params) {
    const queryString = $.param(params);
    return ApiService.sendRequest(`loans?${queryString}`, "GET", null, true);
  },

  getOverdueLoans: function (params) {
    const queryString = $.param(params);
    return ApiService.sendRequest(
      `loans/overdue?${queryString}`,
      "GET",
      null,
      true,
    );
  },
};
