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
  createBook: function (data) {
    // Endpoint: POST /api/books
    return ApiService.sendRequest("books", "POST", data, true);
  },
  updateBook: function (id, data) {
    // Endpoint: PUT /api/books/{id}
    return ApiService.sendRequest(`books/${id}`, "PUT", data, true);
  },
  deleteBook: function (id) {
    // Endpoint: DELETE /api/books/{id} (Soft Delete)
    return ApiService.sendRequest(`books/${id}`, "DELETE", null, true);
  },
};
