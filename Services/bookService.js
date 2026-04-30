const BookService = {
  /**
   * @param {Object} params
   */
  getBooks: function (params) {
    const queryString = $.param(params);

    return ApiService.sendRequest(`books?${queryString}`, "GET", null, true);
  },
  getBookById: function (id) {
    // Memanggil endpoint: GET /api/books/{id}
    return ApiService.sendRequest(`books/${id}`, "GET", null, true);
  },
};
