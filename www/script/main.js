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

function getFullname(newsItem) {
	if (newsItem.author) {
		return `${newsItem.author.firstName} ${newsItem.author.lastName}`
	} else if (newsItem.source) {
		return `${newsItem.source.name}`
	}
}

function getAvatar(newsItem) {
	if (newsItem.author && newsItem.author.avatar) {
		return newsItem.author.avatar.thumb.url;
	}
	return "https://cdn-main-de1.staffbase.rocks/t1-backend/image/upload/c_crop,w_2707,h_2707,x_137,y_420/c_fill,w_200,h_200/v1579602614/3I1RsaQZIkint4Olt2GyAXWVYiHP7Yh4CzZS0DSkXKQohGgKakepnPpmrBPW2fioajP9eNmNZvQg9Gi281hdoITVDDNg5RBIRqifL65mDp6GRcVT2Ph6CGspSL6vgSec47JeThhKfzGYAueED6NXXXHb3CcxRk5mJDdN1MLGTTJ7mO0KPvdr1b2beZs3C5Bo/5ba8a05d0a09a25b017e08d3.jpeg";
}
fetch(url, {
		method: "GET",
		headers
	})
	.then(resp => resp.json())
	.then(function (data) {
		let newsList = data.data;
		return newsList.map(function (newsItem) {
			let div = createNode("div");
			div.className = `col-xs-12 col-sm-12 col-md-12 frame`;
			div.innerHTML = `
            <div class="col-xs-12 col-sm-12 col-md-12 author-wrapper">
                <div class="col-xs-3 col-sm-1 col-md-1 author-image">
                    <a class="author-id" href="author-single.html?id=${newsItem.source ? newsItem.source.name : newsItem.author.id}"><img src=${getAvatar(newsItem)} class="img-responsive author-image-thumb" crossorigin="anonymous"></a>
                </div>
                <div class="col-xs-9 col-sm-11 col-md-11 author-details">
                    <p class="name"><a class="author-id" href="author-single.html?id=${newsItem.author ? newsItem.author.id : ''}">${getFullname(newsItem)}</a></p>
                    <p class="date">${new Date(newsItem.updated).toDateString()}</p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 article">
                <a class="author-id" href="article-single.html?id=${newsItem.id}">
                    <p class="content-title">${newsItem.contents.en_US.title}</p>
                    <p class="content-teaser">${newsItem.contents.en_US.teaser}</p>
                    <img src="${newsItem.contents.en_US.image ? newsItem.contents.en_US.image.compact_first.url : ''}" class="article-image" crossorigin="anonymous">
                </a>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 data-likes">
                <hr>
                <img src="../images/001-heart.png">${newsItem.likes.total}<img src="../images/002-speech-bubble.png">${newsItem.comments.total}
            </div>
            <div class="clearfix"></div>
            `;
			append(container, div);
		});
	})
	.catch(function (error) {
		console.log(error);
	});

const API_KEY2 =
	"NWRkZDVkOTFlYTJkMTU3ZjYxNWIyOGYxOn59UlluXk55V0NdMn1YRE0wLF15cW1Kam8hUC1EYTR1OS1BSXtfRVZ6dG4wY3Npcnt7NlpXRElSbV1qbE1PeEo=";
const sourceSlider = "5e2629676199791aeb6d73d7";
const urlSlider = "https://de-t1.eyo.net/api/channels/" + sourceSlider + "/posts";
const containerSlider = document.getElementById("slider-entry");
let headersSlider = new Headers();
headersSlider.append("Authorization", "Basic " + API_KEY2);
fetch(urlSlider, {
		method: "GET",
		headers: headersSlider
	})
	.then(resp => resp.json())
	.then(function (data) {
		let newsSlider = data.data;
		return newsSlider.map(function (newsSlider) {
			let div = createNode("div");
			div.className = `col-xs-12 col-sm-12 col-md-12 frame-slider`;
			div.innerHTML = `
            <div class="col-xs-12 col-sm-12 col-md-12 slider-box hero-image">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <img src=${newsSlider.contents.en_US.image.compact_first.url} class="slider-img" crossorigin="anonymous">
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 hero-title">
                <a class="author-id" href="article-single.html?id=${newsSlider.id}">
                    <h4>${newsSlider.contents.en_US.title}</h4>
                </a>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 hero-teaser">
                <a class="author-id" href="article-single.html?id=${newsSlider.id}">
                    <h6>${newsSlider.contents.en_US.teaser}</h6>
                </a>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 likes">
                <img src="../images/001-heart.png"><img src="../images/002-speech-bubble.png">
            </div>
            <div class="clearfix"></div>
            `;
			append(containerSlider, div);
		});
	})
	.catch(function (error) {
		console.log(error);
	});

const API_KEY3 =
	"NWRkZDVkOTFlYTJkMTU3ZjYxNWIyOGYxOn59UlluXk55V0NdMn1YRE0wLF15cW1Kam8hUC1EYTR1OS1BSXtfRVZ6dG4wY3Npcnt7NlpXRElSbV1qbE1PeEo=";
const sourceSplit = "5e2629806199791aeb6d7441";
const urlSplit = "https://de-t1.eyo.net/api/channels/" + sourceSplit + "/posts";
const containerSplit = document.getElementById("split-entry");
let headersSplit = new Headers();
headersSplit.append("Authorization", "Basic " + API_KEY3);
fetch(urlSplit, {
		method: "GET",
		headers: headersSplit
	})
	.then(resp => resp.json())
	.then(function (data) {
		let newsSplit = data.data;
		return newsSplit.map(function (newsSplit) {
			let div = createNode("div");
			div.className = `col-xs-12 col-sm-12 col-md-5 frame-split`;
			div.innerHTML = `
            <a class="author-id" href="article-single.html?id=${newsSplit.id}">
                <div class="col-xs-12 col-sm-12 col-md-12 article-split">
                    <img src="${newsSplit.contents.en_US.image.compact_first.url}" class="article-image-split" crossorigin="anonymous">
                    <p class="content-title-split">${newsSplit.contents.en_US.title}</p>
                    <p class="content-teaser-split">${newsSplit.contents.en_US.teaser}</p>
                    <p class="content-content"></p>
                </div>
            </a>
            <div class="col-xs-12 col-sm-12 col-md-12 data-likes-split">
                <hr>
                <img src="../images/001-heart.png">${newsSplit.likes.total}<img src="../images/002-speech-bubble.png">${newsSplit.comments.total}
            </div>
            <div class="clearfix"></div>
            `;
			append(containerSplit, div);
		});
	})
	.catch(function (error) {
		console.log(error);
	});