(function () {
    const newPostForm = document.getElementById('new-post-form');
    newPostForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const [title, teaser, content] = e.target.elements;
        const data = {
            published: "2016-07-22T09:14:39.171Z",
            contents: {
                en_US: {
                    title: title.value,
                    teaser: teaser.value,
                    content: content.value,
                }
            }
        };
        await postData(data);
        history.back();
    });

    function postData(data) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Basic NWRkZDVkOTFlYTJkMTU3ZjYxNWIyOGYxOn59UlluXk55V0NdMn1YRE0wLF15cW1Kam8hUC1EYTR1OS1BSXtfRVZ6dG4wY3Npcnt7NlpXRElSbV1qbE1PeEo=");

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(data),
            redirect: 'follow'
        };

        return fetch("https://de-t1.eyo.net/api/channels/5e2629736199791aeb6d740f/posts", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
})();