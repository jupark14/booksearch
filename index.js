
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);

// 하기처럼 가능
// input.addEventListener("keypress", searchBook)

// $(document).ready(function () {
//     $("#search-input").on('keypress', searchBook);
//     });

$("#search-input").on('keypress', function (e) {
    if (e.which == 13) {
        searchBook(e);
    }
});

function searchBook(e) {
    e.preventDefault();
    if (e.which == 13) {
        var bookName = $("#search-input").val();
        console.log(bookName);
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: bookName },
            headers: { Authorization: "KakaoAK d4fab31977384aec1e6bbfb3927df38e" }
        })
            .done(function (msg) {
                console.log('done')
                $("p.book-title").append("<strong>" + msg.documents[0].title + "</strong>");
                $("p.book-thumbnail").append("<img src = " + msg.documents[0].thumbnail + "</>");
            });
    }
}

//  old version / jquery
//
// function expand() {
//   $(".search").toggleClass("close");
//   $(".input").toggleClass("square");
//   if ($('.search').hasClass('close')) {
//     $('input').focus();
//   } else {
//     $('input').blur();
//   }
// }
// $('button').on('click', expand);
//
