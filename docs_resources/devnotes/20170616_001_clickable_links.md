# Clickable Links

When I add `a` anchor tags in the page, they are not clickable through the phonegap.

I have to add some JavaScript to open the pages.

I didn't do too much experimentation.

The official Cordova site has documentation for the `Inappbrowser`

https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/index.html

And I basically copy and pasted the Example code there.

## Twitter

I initially wanted this for the twitter links, and I managed to open twitter in a browser, but I couldn't open the twitter app, so I ignored that and reinstated the "Dear Evil Tester" book link.

In the main web app, if you click enough times then you will randomly see a link to the "Dear Evil Tester" book which goes away when you get a new slogan.

For the app I changed the CSS so it didn't have a border, and once it is displayed it doesn't disappear.

But the basic way I coded this was...

## Clickable links

~~~~~~~~
<div id="bookinfo" class="book" style="display:none" >
    <h2>If you like this, you'll probably enjoy the book
     &quot;<a id='deareviltester' 
     onclick='openlink("deareviltester")'
     href='http://eviltester.com/page/dearEvilTester/'>
     Dear Evil Tester</a>&quot;</h2>
</div>
~~~~~~~~

I added an id on the link and in the `onclick` code I call the `openlink` function with the id I want to open.

Then the `openlink` code

~~~~~~~~
function openlink(anid){

    var target = "_blank";

    var options = "location=yes,hidden=yes";

    var url = document.getElementById(anid).getAttribute("href");

    inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);

    //inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);

    inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);

    inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);    
}
~~~~~~~~

Goes off to the `document` to find the element, gets the `href` attribute and then uses the `cordova.InAppBrowser.open` to open the URL.

I should really experiment and see if `window.open` works, but all the documentation I read pushed me this way.

I cut down the example code for `loadstop` and `loaderror`.

I also had to change the `config.xml`

~~~~~~~~
    <plugin name="cordova-plugin-inappbrowser" source="npm" spec="~1.3.0" />
    <allow-intent href="https://*/*" />
    <allow-intent href="http://*/*" />
~~~~~~~~

Although I'm pretty sure I don't need the `allow-intent` I will have to experiment to see.