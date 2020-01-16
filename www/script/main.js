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

      div.innerHTML =  `<div class="col-xs-4 col-sm-2 col-md-2 author-image">
                            <img src=${news.author.avatar.icon.url} class="img-responsive author-image-thumb">
                        </div>
                        <div class="col-xs-8 col-sm-10 col-md-10 author-details">
                            <p class="name"><a class="author-id" href="${news.author.id}"> ${news.author.firstName} ${news.author.lastName}</p>
                            <p class="date">${news.updated}</p>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 article">
                            <a class="content" href="page.html?id=${news.id}">
                                ${news.contents.en_US.title}<br>
                                ${news.contents.en_US.teaser}
                                <img src="${news.contents.en_US.image.compact_first.url}" class="article-image">
                                ${news.contents.en_US.content}
                            </a>
                            
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 likes">
                            <p>Likes: ${news.likes.total} Comments: ${news.comments.total}</p>
                        </div>
                        <div class="clearfix"></div>`;
      append(container, div);
    });
  })
  .catch(function(error) {
    console.log(error);
  });

//<div class="col-xs-12 col-sm-12 col-md-12 identification">
//<p>ID: ${news.id} AuthorID: ${news.authorID} CompanyID: ${news.companyID} BranchID: ${news.branchID} ChannelID: ${news.channelID}</p>
//</div>