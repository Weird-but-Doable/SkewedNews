var displayContent = document.querySelector("#display-content");
var searchedTitle = document.getElementById("searchedTitle");

var selectedNewsSource = localStorage.getItem("selectedSource");

if (selectedNewsSource === "bbc-news") {
    selectedNewsSource = "BBC News";
}
if (selectedNewsSource === "fox-news") {
    selectedNewsSource = "Fox News";
}
if (selectedNewsSource === "cnn") {
    selectedNewsSource = "CNN";
}


var fetchedResult = JSON.parse(localStorage.getItem("searchedData2"));
console.log(fetchedResult);

function run() {
    $(searchedTitle).text(selectedNewsSource);
    for (var i = 0; i < 20; i++) {
        var card = $("<div>").css({
            "margin-top" : "60px", 
            "border-bottom": "5px solid grey", 
            "border-top": "5px solid grey", 
            "background-color" : "#212121",
            "text-align" : "center"
        });
        var title = $("<span>").addClass("white-text").text(fetchedResult.articles[i].title).css({"font-size" : "24px"});
        var cardContainer = $("<div>").css({"text-align" : "center"});
        var cardImg = $("<img>").attr("src", fetchedResult.articles[i].urlToImage).height(300).width(400);
        var link = $("<a>").attr("href", fetchedResult.articles[i].url).text("Click for more").css({"font-size" : "18px"});
        $("#display-content").append(card.append(title).append(cardContainer.append(cardImg), link));
    }
}

run();