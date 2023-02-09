let userAgent=navigator.userAgent;
let browser;
if(userAgent.match(/edg/i)){
    browser="edge";
}
else if(userAgent.match(/chrome|chromium|crios/i)){
    browser="chrome";
}
else {
    alert("other browser");
}
console.log(browser);
document.querySelector("h1").innerText="You are using "+ browser +" browser" ;
