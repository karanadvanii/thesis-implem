function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const API_KEY =
  "NWRmNzk4MzU2MTk5NzljNWRjODI2MWQwOjhNa3YzZU44UzdIbGNXSVUoYkZSRUpsN3FsUCk4OWt7WVJlNGl9ZDNUMyxqdW9BTHNsbXZZVUZ2YUNSVWpIdlk=";
const source = "5dddadb00a09a280cb7252df";
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
                            <div class="col-xs-2 col-sm-2 col-md-1 author-image">
                                <img src=${news.author.avatar.thumb.url} class="img-responsive author-image-thumb">
                            </div>
                            <div class="col-xs-10 col-sm-10 col-md-11 author-details">
                                <p class="name"><a class="author-id" href="author.html"> ${news.author.firstName} ${news.author.lastName}</a></p>
                                <p class="date">${news.updated}</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 article">
                            <p class="content-title">${news.contents.en_US.title}</p>
                            <p class="content-teaser">${news.contents.en_US.teaser}</p>
                            <img src="${news.contents.en_US.image.compact_first.url}" class="article-image">
                            <p class="content-content">${news.contents.en_US.content}</p>                            
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
  "NWRmNzk4MzU2MTk5NzljNWRjODI2MWQwOjhNa3YzZU44UzdIbGNXSVUoYkZSRUpsN3FsUCk4OWt7WVJlNGl9ZDNUMyxqdW9BTHNsbXZZVUZ2YUNSVWpIdlk=";
const sourceSlider = "5e038fc16fe509eea901c295";
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
                            <h4>${newsSlider.contents.en_US.title}</h4>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 hero-teaser">
                            <h6>${newsSlider.contents.en_US.teaser}</h6>
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
  "NWRmNzk4MzU2MTk5NzljNWRjODI2MWQwOjhNa3YzZU44UzdIbGNXSVUoYkZSRUpsN3FsUCk4OWt7WVJlNGl9ZDNUMyxqdW9BTHNsbXZZVUZ2YUNSVWpIdlk=";
const sourceSplit = "5e21a7066fe50995daec27fb";
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

      div.className = `col-xs-12 col-sm-12 col-md-6 frame-split`;

      div.innerHTML =  `<div class="col-xs-12 col-sm-12 col-md-12 article-split">
                            <img src="${newsSplit.contents.en_US.image.compact_first.url}" class="article-image-split">
                            <p class="content-title-split">${newsSplit.contents.en_US.title}</p>
                            <p class="content-teaser-split">${newsSplit.contents.en_US.teaser}</p>
                            <p class="content-content"></p>                            
                        </div>
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
  ///${news.author.id}