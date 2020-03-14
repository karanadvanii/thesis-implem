function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const API_KEY =
  "NWRkZDVkOTFlYTJkMTU3ZjYxNWIyOGYxOn59UlluXk55V0NdMn1YRE0wLF15cW1Kam8hUC1EYTR1OS1BSXtfRVZ6dG4wY3Npcnt7NlpXRElSbV1qbE1PeEo=";
//const source = "5dddadb00a09a280cb7252df";
const url = "https://de-t1.eyo.net/api/users/";
const container = document.getElementById("data-entry-author");

let headers = new Headers();
headers.append("Authorization", "Basic " + API_KEY);

fetch(url, { method: "GET", headers: headers })
  .then(resp => resp.json())
  .then(function(data) {
    let user = data.data;
    return user.map(function(user) {
      let div = createNode("div");

      div.className = `col-xs-12 col-sm-12 col-md-12 frame`;

      div.innerHTML =  `<div class="col-xs-12 col-sm-12 col-md-12 author-wrapper-directory">
                            <div class="col-xs-2 col-sm-2 col-md-1 author-image">
                                <a href="author-single.html?id=${user.id}"><img src=${user.avatar.icon.url} class="img-responsive author-image-thumb-directory" crossorigin="anonymous"></a>
                            </div>
                            <div class="col-xs-10 col-sm-10 col-md-11 author-details">
                                <a href="author-single.html?id=${user.id}"><p class="name-directory">${user.profile.firstName} ${user.profile.lastName}</p></a><br>

                                <img src="../images/man.png" class="icons-directory"> <p class="position-directory"> ${user.profile.position} &#8226; ${user.profile.location} Office</p><br>
                                <img src="../images/contact.png" class="icons-directory"> <p class="contact-directory"> ${user.profile.phoneNumber} &#8226; ${user.profile.publicEmailAddress} </p>
                            </div>
                        </div>`;
    
        
      append(container, div);
    });
  })
  .catch(function(error) {
    console.log(error);
  });

//<div class="col-xs-12 col-sm-12 col-md-12 identification">
//<p>ID: ${user.id} AuthorID: ${user.userID} CompanyID: ${user.companyID} BranchID: ${user.branchID} ChannelID: ${user.channelID}</p>
//</div> <img src=${user.avatar.icon.url}>