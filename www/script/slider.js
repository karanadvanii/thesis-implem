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
const container = document.getElementById("slider-entry");

let headers = new Headers();
headers.append("Authorization", "Basic " + API_KEY);

fetch(url, { method: "GET", headers: headers })
  .then(resp => resp.json())
  .then(function(data) {
    let news = data.data;
    return news.map(function(news) {
      let div = createNode("div");

      div.className = `col-xs-12 col-sm-12 col-md-12 frame`;

      div.innerHTML =  `<div class="col-xs-12 col-sm-12 col-md-12 slider-box hero-image">
                            <img src=${news.contents.en_US.image.wide.url}>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 hero-title">
                            <h4>${news.contents.en_US.title}</h4>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 hero-teaser">
                            <h6>${news.contents.en_US.teaser}</h6>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 likes">
                            <img src="../images/heart.png"><img src="../images/comment.png">
                        </div> 
                        <div class="clearfix"></div>`;
      append(container, div);
    });
  })
  .catch(function(error) {
    console.log(error);
  });

//${news.likes.total}