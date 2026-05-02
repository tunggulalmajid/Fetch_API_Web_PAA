const LoanService = {
  /**
   * Mengirim request pinjam buku
   * @param {Object} data - Objek berisi { bookId, memberId, notes }
   * Mengambil daftar peminjaman user saat ini
   * @param {Object} params - Objek berisi page, limit, status
   */
  borrowBook: function (data) {
    // Endpoint: /api/loans/borrow, Method: POST, Data: JSON, Butuh Token: true
    return ApiService.sendRequest("loans/borrow", "POST", data, true);
  },

  getMyLoans: function (params) {
    const queryString = $.param(params);
    return ApiService.sendRequest(`loans?${queryString}`, "GET", null, true);
  },

  /**
   * Mengambil riwayat peminjaman (History)
   */
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
    // Endpoint: /api/loans/{id}/return, Method: PUT
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
