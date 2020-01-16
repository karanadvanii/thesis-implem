function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const API_KEY =
  "NWRmNzk4MzU2MTk5NzljNWRjODI2MWQwOjhNa3YzZU44UzdIbGNXSVUoYkZSRUpsN3FsUCk4OWt7WVJlNGl9ZDNUMyxqdW9BTHNsbXZZVUZ2YUNSVWpIdlk=";
//const source = "5dddadb00a09a280cb7252df";
const url = "https://de-t1.eyo.net/api/users/";
const container = document.getElementById("data-entry");

let headers = new Headers();
headers.append("Authorization", "Basic " + API_KEY);

fetch(url, { method: "GET", headers: headers })
  .then(resp => resp.json())
  .then(function(data) {
    let user = data.data;
    return user.map(function(user) {
      let div = createNode("div");

      div.className = `col-xs-12 col-sm-12 col-md-12 frame`;

      div.innerHTML =  `${user.profile.firstName}${user.profile.lastName}${user.profile.publicEmailAddress}${user.profile.phoneNumber}`;
                        
      append(container, div);
    });
  })
  .catch(function(error) {
    console.log(error);
  });

//<div class="col-xs-12 col-sm-12 col-md-12 identification">
//<p>ID: ${user.id} AuthorID: ${user.userID} CompanyID: ${user.companyID} BranchID: ${user.branchID} ChannelID: ${user.channelID}</p>
//</div> <img src=${user.avatar.icon.url}>