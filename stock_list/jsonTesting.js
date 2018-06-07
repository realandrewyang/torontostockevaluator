var file = new XMLHttpRequest();
file.open("GET", "cache.json", true);
document.write(file.responseText);
