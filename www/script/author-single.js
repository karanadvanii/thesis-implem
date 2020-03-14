function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const API_KEY =
  "NWRkZDVkOTFlYTJkMTU3ZjYxNWIyOGYxOn59UlluXk55V0NdMn1YRE0wLF15cW1Kam8hUC1EYTR1OS1BSXtfRVZ6dG4wY3Npcnt7NlpXRElSbV1qbE1PeEo=";
const source = location.href.split('=')[1];
const url = "https://de-t1.eyo.net/api/users/" + source;
const container = document.getElementById("data-entry-author");

let headers = new Headers();
headers.append("Authorization", "Basic " + API_KEY);

fetch(url, { method: "GET", headers: headers })
  .then(resp => resp.json())
  .then(function(user) {
    let div = createNode("div");

    div.className = `col-xs-12 col-sm-12 col-md-12 frame`;

    div.innerHTML =  `<div class="col-xs-12 col-sm-12 col-md-12 author-wrapper-directory">
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <img src="${user.avatar.thumb.url}" class="user-image" crossorigin="anonymous">
                                <p class="user-name">${user.firstName} ${user.lastName}</p>
                                <img src="../images/man.png" class="icons-user"> <p class="user-position-directory"> ${user.position}</p><br>
                                <img src="../images/place.png" class="icons-user"> <p class="user-position-directory"> ${user.location}</p><br>
                                <img src="../images/call.png" class="icons-user"> <p class="user-position-directory"> ${user.phoneNumber}</p><br>
                                <img src="../images/email.png" class="icons-user"> <p class="user-position-directory"> ${user.publicEmailAddress}
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6">
                                
                            </div>
                        </div>`;


    append(container, div);
  })
  .catch(function(error) {
    console.log(error);
  });

//<div class="col-xs-12 col-sm-12 col-md-12 identification">
//<p>ID: ${user.id} AuthorID: ${user.userID} CompanyID: ${user.companyID} BranchID: ${user.branchID} ChannelID: ${user.channelID}</p>
//</div> <img src=${user.avatar.icon.url}>