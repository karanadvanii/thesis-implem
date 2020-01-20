var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Basic NWRmNzk4MzU2MTk5NzljNWRjODI2MWQwOjhNa3YzZU44UzdIbGNXSVUoYkZSRUpsN3FsUCk4OWt7WVJlNGl9ZDNUMyxqdW9BTHNsbXZZVUZ2YUNSVWpIdlk=");
myHeaders.append("User-Agent", "PostmanRuntime/7.21.0");
myHeaders.append("Accept", "*/*");
myHeaders.append("Host", "de-t1.eyo.net");
myHeaders.append("Accept-Encoding", "gzip, deflate");
//myHeaders.append("Content-Length", "282");
myHeaders.append("Cookie", "wesessid=");
myHeaders.append("Connection", "keep-alive");

var raw = '{"id":"5dddb1e40a09a280cb725898","authorID":"5b98bebb0a09a220f7550415","branchID":"56a6306f0cf23b042e0ae307","companyID":"56a6306f0cf23b042e0ae306","channelID":"5dddb1b4e075122a6dff5481","contents":{"en_US":{"content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry","image":null,"teaser":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry","title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry","feedImage":null}},"author":{"avatar":{"thumb":{"url":"https://de-cdn-t1.eyo.net/t1-backend/image/upload/c_thumb,g_face,h_200,w_200/v1574810374/DShkYjXu50h6FLgS9R2p1p3q4E4QGPu6qOFdltU2RdnOI8cPrVnNXpJ1ix4h66HspOrVMS3JxIKFWPziRJnee1xQgrsblMvoDEVdoqe75lGXNBxkGn3wk83acFAipZXFpGc4zwO8GHNlQ1AFDhT71MLPSe7gMqCryzmgs4AXkRX93ogqWX2lLbSR63R9YCAv/5b98bebb0a09a220f7550415.jpeg","width":200,"height":200,"format":null,"mimeType":null},"publicID":"DShkYjXu50h6FLgS9R2p1p3q4E4QGPu6qOFdltU2RdnOI8cPrVnNXpJ1ix4h66HspOrVMS3JxIKFWPziRJnee1xQgrsblMvoDEVdoqe75lGXNBxkGn3wk83acFAipZXFpGc4zwO8GHNlQ1AFDhT71MLPSe7gMqCryzmgs4AXkRX93ogqWX2lLbSR63R9YCAv/5b98bebb0a09a220f7550415"},"customServiceConfig":null,"entityType":"user","firstName":"Karan","id":"5b98bebb0a09a220f7550415","lastName":"Advani"},"useBigFeedMedia":false,"highlighted":false,"highlightingAllowed":true,"contentType":"updates","acknowledgingAllowed":true,"acknowledgingEnabled":false,"commentingAllowed":true,"commentingEnabled":true,"layout":{"primaryMedia":"big-first"},"likingAllowed":true,"likingEnabled":true,"published":"2019-11-26T23:14:44.541Z","entityType":"post","created":"2019-11-26T23:14:44.545Z","updated":"2019-12-23T12:19:37.470Z"}';
//    "{\n  \"externalID\": \"5dddb1e40a09a280cb725898\",\n  \"contents\": {\n    \"en_US\": {\n      \"content\": \"<p>Content could be HTML.</p>\",\n      \"image\": \"null\",\n      \"teaser\": \"This teaser should be text only.\",\n      \"title\": \"A title\"\n    }\n  },\n  \"published\": \"2016-07-22T09:14:39.171Z\"\n};";      '{"externalID":"1","contents":{"en_US":{"content":"<p>This is it<\/p>","image":null,"teaser":"This teaser should be text only.","title":"A title"}},"published":"2016-07-22T09:14:39.171Z"}';



var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://de-t1.eyo.net/api/channels/5dddb1b4e075122a6dff5481/posts", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));