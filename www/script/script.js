if ('serviceWorker' in navigator) {
	window.addEventListener('load', function () {
		navigator.serviceWorker.register('/service-worker.js');
	});
}

function myFunction() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

window.addEventListener('DOMContentLoaded', function () {
	var status = document.getElementById("status");

	function updateOnlineStatus(event) {
		var condition = navigator.onLine ? "online" : "offline";

		status.className = condition;
		status.innerHTML = condition.toUpperCase();
	}
	window.addEventListener('online', updateOnlineStatus);
	window.addEventListener('offline', updateOnlineStatus);
})