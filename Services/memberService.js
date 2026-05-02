const MemberService = {
  getDashboardStats: function () {
    return ApiService.sendRequest("members/dashboard", "GET", null, true);
  },

  getAllMembers: function (params) {
    const queryString = $.param(params);
    return ApiService.sendRequest(`members?${queryString}`, "GET", null, true);
  },

  getMemberById: function (id) {
    return ApiService.sendRequest(`members/${id}`, "GET", null, true);
  },
  updateMemberSettings: function (id, data) {
    return ApiService.sendRequest(`members/${id}`, "PUT", data, true);
  },
};
