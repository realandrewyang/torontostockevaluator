var file = new XMLHttpRequest();
file.open("GET", "cache.json", true);
document.getElementById("test").innerHTML = file.responseText;
