function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

const API_KEY =
	"NWRkZDVkOTFlYTJkMTU3ZjYxNWIyOGYxOn59UlluXk55V0NdMn1YRE0wLF15cW1Kam8hUC1EYTR1OS1BSXtfRVZ6dG4wY3Npcnt7NlpXRElSbV1qbE1PeEo=";
const source = location.href.split('=')[1];
const url = "https://de-t1.eyo.net/api/posts/" + source;
const container = document.getElementById("data-entry");

let headers = new Headers();
headers.append("Authorization", "Basic " + API_KEY);

fetch(url, {
		method: "GET",
		headers: headers
	})
	.then(resp => resp.json())
	.then(function (news) {
		let div = createNode("div");
		div.className = `col-xs-12 col-sm-12 col-md-12 frame`;

		div.innerHTML = `<div class="col-xs-12 col-sm-12 col-md-12 author-wrapper">
                            <div class="col-xs-3 col-sm-1 col-md-1 author-image">
                                <a class="author-id" href="author-single.html?id=${news.author.id}"><img src=${news.author.avatar.thumb.url} class="img-responsive author-image-thumb" crossorigin="anonymous"></a>
                            </div>
                            <div class="col-xs-9 col-sm-11 col-md-11 author-details">
                                <p class="name"><a class="author-id" href="author-single.html?id=${news.author.id}"> ${news.author.firstName} ${news.author.lastName}</a></p>
                                <p class="date">${new Date(news.updated).toDateString()}</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 article">
                                <p class="content-title">${news.contents.en_US.title}</p>
                                <p class="content-teaser">${news.contents.en_US.teaser}</p>
                                <img src="${news.contents.en_US.image.compact_first.url}" class="article-image" crossorigin="anonymous">
                                <p class="content-content">${news.contents.en_US.content}</p> 
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 data-likes">
                            <hr>
                            <img src="../images/001-heart.png">${news.likes.total}<img src="../images/002-speech-bubble.png">${news.comments.total}
                        </div>
                        <div class="clearfix"></div>`;
		append(container, div);
	})
	.catch(function (error) {
		console.log(error);
	});