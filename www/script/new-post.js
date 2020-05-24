const newPostForm = document.getElementById('new-post-form');
newPostForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const [title, teaser, content, fileInput] = e.target.elements;
    const data = {
        contents: {
            en_US: {
                title: title.value,
                teaser: teaser.value,
                content: content.value,
                image: await postImage(fileInput.files[0])
            }
        },
        published: true
    };
    const searchParams = new URLSearchParams();
    searchParams.append("published", data.published);
    searchParams.append("contents", JSON.stringify(data.contents));
    await postData(searchParams);
    // history.back();
});

function postData(data) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    myHeaders.append("Authorization", "Basic NWRkZDVkOTFlYTJkMTU3ZjYxNWIyOGYxOn59UlluXk55V0NdMn1YRE0wLF15cW1Kam8hUC1EYTR1OS1BSXtfRVZ6dG4wY3Npcnt7NlpXRElSbV1qbE1PeEo=");

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
    };

    return fetch("https://de-t1.eyo.net/api/channels/5e2629736199791aeb6d740f/articles", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function postImage(file) {
    const formData = new FormData();
    formData.append('type', 'branch');
    formData.append('image', file);

    const options = {
        method: 'POST',
        body: formData,
    };
    return fetch("https://de-t1.eyo.net/upload/images;wesessid=m3xtuazvfnxsvdiwamnrq61k5193", options)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

// Temporarily added functions here because dynamic import doesn't work properly in such scenario.
//import {Queue} from '../../node_modules/workbox-background-sync/Queue.js';
//const queue = new Queue('myQueueName');
//self.addEventListener('fetch', (event) => {
//    // Clone the request to ensure it's safe to read when
//    // adding to the Queue.
//    console.log('Syncing!!!');
//    const promiseChain = fetch(event.request.clone()).catch((err) => {
//        return queue.pushRequest({request: event.request});
//    });
//
//    event.waitUntil(promiseChain);
//});