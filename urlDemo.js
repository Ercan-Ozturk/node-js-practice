import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

const urlObj = new URL(urlString);
console.log(urlObj);

console.log(url.format(urlObj));

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
console.log(params);
