// File: Services/fineService.js

const FineService = {
  /**
   * Mengambil daftar denda (User: milik sendiri, Admin: semua)
   * @param {Object} params - Objek query seperti { page, limit, status }
   */
  getFines: function (params) {
    const queryString = $.param(params);
    return ApiService.sendRequest(`fines?${queryString}`, "GET", null, true);
  },

  /**
   * Mengambil statistik denda (Khusus Admin)
   */
  getFineStats: function () {
    return ApiService.sendRequest("fines/stats", "GET", null, true);
  },

  /**
   * Mengambil detail denda berdasarkan ID
   * @param {String} id - ID Denda
   */
  getFineById: function (id) {
    return ApiService.sendRequest(`fines/${id}`, "GET", null, true);
  },

  /**
   * Membuat denda manual (Khusus Admin)
   * @param {Object} data - Payload { loanId, amount, reason, notes }
   */
  createManualFine: function (data) {
    return ApiService.sendRequest("fines", "POST", data, true);
  },

  /**
   * Membayar denda (Khusus Admin / Kasir)
   * @param {String} id - ID Denda
   * @param {Object} data - Payload { paymentMethod, notes }
   */
  payFine: function (id, data) {
    return ApiService.sendRequest(`fines/${id}/pay`, "PUT", data, true);
  },
};
