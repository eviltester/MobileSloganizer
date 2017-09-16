/**
 * Web Specific GUI functions
 */

function changeSloganTo(slogan){
    


    // once ad it shown, do not hide it
    //document.getElementById("bookinfo").setAttribute("style","display:none");
    document.getElementById("slogan").innerHTML=slogan;

    // No tweets in mobile to start with

    //var encodedUri = encodeURI("https://twitter.com/intent/tweet?text="+slogan)+"%20%23EvilTesterSloganizer";
    //document.getElementById("tweetthis").setAttribute("href", encodedUri);

    // add to history
    document.getElementById("sloganhistory").removeAttribute("style");
    var ul = document.getElementById("sloganhistorylist");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(slogan + " "));

    /*
    var lia = document.createElement("a");
    lia.setAttribute("href", encodedUri);
    lia.innerHTML="[tweet this]";
    li.appendChild(lia);
    */

    ul.insertBefore(li, ul.childNodes[0]);
    //ul.appendChild(li);

}




// Link handling code from official cordova docs
// https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/index.html#installation

var inAppBrowserRef;

function openlink(anid){

    var target = "_blank";

    var options = "location=yes,hidden=yes";

    var url = document.getElementById(anid).getAttribute("href");

    inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);

    //inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);

    inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);

    inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);    
}

/*
function tweetThis(usingBrowser) {

    var target = "_blank";

    var options = "location=yes,hidden=yes";

    var url = document.getElementById("tweetthis").getAttribute("href");

    if(usingBrowser===false){
        url = url.replace("https://twitter.com/", "twitter://");
    }

    //alert(url);

    inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);

    inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);

    inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);

    inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);

}

*/


function loadStartCallBack() {

    //$('#status-message').text("loading please wait ...");

}

function loadStopCallBack() {

    if (inAppBrowserRef != undefined) {

        inAppBrowserRef.show();
    }

}

function loadErrorCallBack(params) {

    alert("Sorry we cannot open that page. Message from the server is : '" + params.message + "'");

    inAppBrowserRef.close();

    inAppBrowserRef = undefined;

}
