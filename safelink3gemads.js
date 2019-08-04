function adlinkfly_get_url(e) {
    var n = document.createElement("a");
    return n.href = e, n
}

function adlinkfly_get_host_name(e) {
    var n;
    return void 0 === e || null === e || "" === e || e.match(/^\#/) ? "" : -1 === (e = adlinkfly_get_url(e)).href.search(/^http[s]?:\/\//) ? "" : (n = e.href.split("/")[2], (n = n.split(":")[0]).toLowerCase())
}

function adlinkfly_base64_encode(e) {
    return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(e, n) {
        return String.fromCharCode("0x" + n)
    }))
}

function Random2() {
var links = [
              "google.com",
              "youtube.com",
              "reddit.com",
              "apple.com"]

              // get a random number between 0 and the number of links
              var randIdx = Math.random() * links.length;
              // round it, so it can be used as array index
              randIdx = parseInt(randIdx, 10);
              // construct the link to be opened
              var link = 'http://' + links[randIdx];
              
    return link;
    
    //document.getElementById("link").innerHTML = openSite();
}
function Random1() {
     $.ajax({
        url: 'http://www.gemads.info/feeds/posts/summary?alt=json-in-script',
        type: 'get',
        dataType: 'jsonp',
        success: function(data) {
            var link = '',
                content = data.feed.entry,
                links = new Array();
            if (content !== undefined) {
                for (var i = 0; i < content.length; i++) {
                    for (var j = 0; j < content[i].link.length; j++) {
                        if (content[i].link[j].rel == "alternate") {
                            link = content[i].link[j].href;
                            break;
                        }
                    }
                    links[i] = link;
                    var randindex = Math.random() * links.length;
                    randindex = parseInt(randindex);
                }
                adlinkfly_url.val(links[randindex]);
            } else {
                adlinkfly_url.val('No result!');
            }
        },
        error: function() {
            adlinkfly_url.val('Error loading feed!');
        }

    });
    return adlinkfly_url;
}

document.addEventListener("DOMContentLoaded", function(e) {




        var n = 1;
        "undefined" != typeof adlinkfly_advert && (2 == adlinkfly_advert && (n = 2), 0 == adlinkfly_advert && (n = 0));
        var l = document.getElementsByTagName("a");
        if ("undefined" == typeof adlinkfly_domains)
            if ("undefined" == typeof adlinkfly_exclude_domains);
            else
                for (o = 0; o < l.length; o++) {
                    var t = adlinkfly_get_host_name(l[o].getAttribute("href"));
                    t.length > 0 && -1 === adlinkfly_exclude_domains.indexOf(t) ? l[o].href = Random2() + "?o=" + adlinkfly_base64_encode(l[o].href)  : "magnet:" === l[o].protocol && (l[o].href = Random2() + "?o=" + adlinkfly_base64_encode(l[o].href) )
                } else
                    for (var o = 0; o < l.length; o++)(t = adlinkfly_get_host_name(l[o].getAttribute("href"))).length > 0 && adlinkfly_domains.indexOf(t) > -1 ? l[o].href = Random2() + "?o=" + adlinkfly_base64_encode(l[o].href) : "magnet:" === l[o].protocol && (l[o].href = Random2() + "?o=" + adlinkfly_base64_encode(l[o].href)  )

});