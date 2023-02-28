// Khởi tạo mảng để lưu trữ các đối tượng sách
// let books = [
//   {
//     title: "Võ luyện đỉnh phong",
//     author: "Đang cập nhật",
//     year: 2014,
//     coverImage:
//       "https://st.nettruyento.com/data/comics/32/vo-luyen-dinh-phong.jpg",
//   },
//   {
//     title: "Đại quản gia là ma hoàng",
//     author: "Đang cập nhật",
//     year: 1979,
//     coverImage:
//       "https://st.nettruyento.com/data/comics/188/dai-quan-gia-la-ma-hoang.jpg",
//   },
//   {
//     title: "Bá chủ học đường ss4",
//     author: "Đang cập nhật",
//     year: 1951,
//     coverImage:
//       "https://st.nettruyento.com/data/comics/48/ba-chu-hoc-duong-ss4.jpg",
//   },
// ];
// đọc file JSON
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "books.json", true);
xhttp.onload = function () {
  if (xhttp.status === 200) {
    // chuyển đổi chuỗi JSON thành đối tượng JavaScript
    var books = JSON.parse(this.responseText);

    // hiển thị thông tin về cuốn sách lên trang HTML
    var bookList = document.getElementById("book-list");
    for (var i = 0; i < books.length; i++) {
      var book = books[i];
      var bookTitle = book.title;
      var bookImg = book.coverImage;
      var bookYear = book.year;
      var bookAuthor = book.author;

      // Tạo phần tử HTML để hiển thị thông tin sách
      var bookDiv = document.createElement("div");
      bookDiv.classList.add("book-item");
      bookDiv.innerHTML = `
        <h3 class="book-title">${bookTitle}</h3>
        <p class="book-author">Author: ${bookAuthor}</p>
        <p>Year: ${bookYear}</p>
        <div class="book-img"><img src="${bookImg}" alt="${bookTitle}" ></div>
      `;

      // Thêm phần tử HTML vào trang
      bookList.appendChild(bookDiv);
    }
  }
};
xhttp.send();

// thêm  một object mới
let addBookBtn = document.getElementById("add-book-btn");
addBookBtn.addEventListener("click", function () {
  xhttp.open('POST', 'books.json', true);
  xhttp.setRequestHeader('Content-Type', 'application/json');

  let title = prompt("Enter book title:");
  let author = prompt("Enter author name:");
  let year = prompt("Enter book year:");
  let coverImage = prompt("Enter link book img:");
  let book = { title: title, author: author, year: year, coverImage: coverImage };
  xhttp.onload = function() {
    if (xhttp.status === 200) {
      // do something after adding new item
    }
  };
  xhttp.send(JSON.stringify(book));
});

// // UPDATE
// let updatedItem = {
//   "id": "1",
//   "title": "Updated Item",
//   "author": "Jane Doe"
// };
// xhr.open('PUT', 'file.json', true);
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.onload = function() {
//   if (xhr.status === 200) {
//     // do something after updating item
//   }
// };
// xhr.send(JSON.stringify(updatedItem));

// // DELETE
// let itemId = "1";
// xhr.open('DELETE', 'file.json?id=' + itemId, true);
// xhr.onload = function() {
//   if (xhr.status === 200) {
//     // do something after deleting item
//   }
// };
// xhr.send();