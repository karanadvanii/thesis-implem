function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const API_KEY =
  "NWRkZDVkOTFlYTJkMTU3ZjYxNWIyOGYxOn59UlluXk55V0NdMn1YRE0wLF15cW1Kam8hUC1EYTR1OS1BSXtfRVZ6dG4wY3Npcnt7NlpXRElSbV1qbE1PeEo=";
const source = "5e2629736199791aeb6d740f";
const url = "https://de-t1.eyo.net/api/channels/" + source + "/posts";
const container = document.getElementById("data-entry");

let headers = new Headers();
headers.append("Authorization", "Basic " + API_KEY);

fetch(url, { method: "GET", headers: headers })
  .then(resp => resp.json())
  .then(function(data) {
    let news = data.data;
    return news.map(function(news) {
      let div = createNode("div");
      div.className = `col-xs-12 col-sm-12 col-md-12 frame`;

      div.innerHTML =  `<div class="col-xs-12 col-sm-12 col-md-12 author-wrapper">
                            <div class="col-xs-3 col-sm-1 col-md-1 author-image">
                                <a class="author-id" href="author-single.html?id=${news.author.id}"><img src=${news.author.avatar.thumb.url} class="img-responsive author-image-thumb"></a>
                            </div>
                            <div class="col-xs-9 col-sm-11 col-md-11 author-details">
                                <p class="name"><a class="author-id" href="author-single.html?id=${news.author.id}"> ${news.author.firstName} ${news.author.lastName}</a></p>
                                <p class="date">${new Date(news.updated).toDateString()}</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 article">
                            <a class="author-id" href="article-single.html?id=${news.id}">
                                <p class="content-title">${news.contents.en_US.title}</p>
                                <p class="content-teaser">${news.contents.en_US.teaser}</p>
                                <img src="${news.contents.en_US.image.compact_first.url}" class="article-image">
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 data-likes">
                            <hr>
                            <img src="../images/001-heart.png">${news.likes.total}<img src="../images/002-speech-bubble.png">${news.comments.total}
                        </div>
                        <div class="clearfix"></div>`;
      append(container, div);
    });
  })
  .catch(function(error) {
    console.log(error);
  });


const API_KEY2 =
  "NWRkZDVkOTFlYTJkMTU3ZjYxNWIyOGYxOn59UlluXk55V0NdMn1YRE0wLF15cW1Kam8hUC1EYTR1OS1BSXtfRVZ6dG4wY3Npcnt7NlpXRElSbV1qbE1PeEo=";
const sourceSlider = "5e2629676199791aeb6d73d7";
const urlSlider = "https://de-t1.eyo.net/api/channels/" + sourceSlider + "/posts";
const containerSlider = document.getElementById("slider-entry");

let headersSlider = new Headers();
headersSlider.append("Authorization", "Basic " + API_KEY2);

fetch(urlSlider, { method: "GET", headers: headersSlider })
  .then(resp => resp.json())
  .then(function(data) {
    let newsSlider = data.data;
    return newsSlider.map(function(newsSlider) {
      let div = createNode("div");

      div.className = `col-xs-12 col-sm-12 col-md-12 frame-slider`;

      div.innerHTML =  `<div class="col-xs-12 col-sm-12 col-md-12 slider-box hero-image">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <img src=${newsSlider.contents.en_US.image.compact_first.url} class="slider-img">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 hero-title">
                            <a class="author-id" href="article-single.html?id=${newsSlider.id}"><h4>${newsSlider.contents.en_US.title}</h4></a>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 hero-teaser">
                            <a class="author-id" href="article-single.html?id=${newsSlider.id}"><h6>${newsSlider.contents.en_US.teaser}</h6></a>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 likes">
                            <img src="../images/heart.png"><img src="../images/comment.png">
                        </div> 
                        <div class="clearfix"></div>`;
      append(containerSlider, div);
    });
  })
  .catch(function(error) {
    console.log(error);
  });


const API_KEY3 =
  "NWRkZDVkOTFlYTJkMTU3ZjYxNWIyOGYxOn59UlluXk55V0NdMn1YRE0wLF15cW1Kam8hUC1EYTR1OS1BSXtfRVZ6dG4wY3Npcnt7NlpXRElSbV1qbE1PeEo=";
const sourceSplit = "5e2629806199791aeb6d7441";
const urlSplit = "https://de-t1.eyo.net/api/channels/" + sourceSplit + "/posts";
const containerSplit = document.getElementById("split-entry");

let headersSplit = new Headers();
headersSplit.append("Authorization", "Basic " + API_KEY3);

fetch(urlSplit, { method: "GET", headers: headersSplit })
  .then(resp => resp.json())
  .then(function(data) {
    let newsSplit = data.data;
    return newsSplit.map(function(newsSplit) {
      let div = createNode("div");

      div.className = `col-xs-12 col-sm-12 col-md-5 frame-split`;

      div.innerHTML =  `<a class="author-id" href="article-single.html?id=${newsSplit.id}">
                        <div class="col-xs-12 col-sm-12 col-md-12 article-split">
                            <img src="${newsSplit.contents.en_US.image.compact_first.url}" class="article-image-split">
                            <p class="content-title-split">${newsSplit.contents.en_US.title}</p>
                            <p class="content-teaser-split">${newsSplit.contents.en_US.teaser}</p>
                            <p class="content-content"></p>                            
                        </div>
                        </a>
                        <div class="col-xs-12 col-sm-12 col-md-12 data-likes-split">
                            <hr>
                            <img src="../images/001-heart.png">${newsSplit.likes.total}<img src="../images/002-speech-bubble.png">${newsSplit.comments.total}
                        </div>
                        <div class="clearfix"></div>`;
      append(containerSplit, div);
    });
  })
  .catch(function(error) {
    console.log(error);
  });
// ${news.author.id}
// <p class="content-content">${news.contents.en_US.content}</p>  