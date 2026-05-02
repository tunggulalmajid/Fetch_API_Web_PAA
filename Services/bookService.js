const BookService = {
  /**
   * @param {Object} params
   */
  getBooks: function (params) {
    const queryString = $.param(params);

    return ApiService.sendRequest(`books?${queryString}`, "GET", null, true);
  },
  getBookById: function (id) {
    return ApiService.sendRequest(`books/${id}`, "GET", null, true);
  },
  createBook: function (data) {
    return ApiService.sendRequest("books", "POST", data, true);
  },
  updateBook: function (id, data) {
    return ApiService.sendRequest(`books/${id}`, "PUT", data, true);
  },
  deleteBook: function (id) {
    return ApiService.sendRequest(`books/${id}`, "DELETE", null, true);
  },
};
