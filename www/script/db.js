//localforage.setItem('data-title', 'asdasda').then(function(value) {
//    // This will output `1`.
//    console.log(value[0]);
//}).catch(function(err) {
//    // This code runs if there were any errors
//    console.log(err);
//});


//localforage.getItem('users').then(function(value) {
//    var httt = document.getElementById("lf");
//    httt.innerHTML = JSON.stringify(value);
//    console.log(value);
//}).catch(function(err) {
//    // This code runs if there were any errors
//    console.log(err);
//});



const store = localforage.createInstance({
  name: 'store'
});

const filePath = 'files/dummy.pdf';
const fileName = 'dummy.pdf';

fetch(filePath)
  .then(response => response.blob())
  .then(blob => {
    store.setItem(fileName, blob);
  })
  .catch(error => {
    console.log(error);
  });

//store.getItem(fileName)
//  .then((blob) => {
//    viewerInstance.loadDocument(blob, {
//      filename: fileName
//    });
//  });