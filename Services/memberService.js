// File: Services/memberService.js

const MemberService = {
  /**
   * Mengambil statistik dashboard untuk Admin
   */
  getDashboardStats: function () {
    return ApiService.sendRequest("members/dashboard", "GET", null, true);
  },

  /**
   * Mengambil daftar semua anggota (Khusus Admin)
   * Nanti akan kita gunakan di halaman Kelola Anggota
   */

  getAllMembers: function (params) {
    const queryString = $.param(params);
    return ApiService.sendRequest(`members?${queryString}`, "GET", null, true);
  },

  // --- FUNGSI BARU UNTUK HALAMAN ANGGOTA ---
  getMemberById: function (id) {
    // Mengambil detail profil dan statistik (activeLoans, unpaidFineAmount, dll)
    return ApiService.sendRequest(`members/${id}`, "GET", null, true);
  },
  updateMemberSettings: function (id, data) {
    // Endpoint: PUT /api/members/{id}
    // Payload JSON: { isActive: boolean, maxBorrowLimit: number }
    return ApiService.sendRequest(`members/${id}`, "PUT", data, true);
  },
};
