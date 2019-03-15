<script type='text/javascript'>
	 //<![CDATA[

    $(document).ready(function() {

        $.urlParam = function(name) {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            if (results == null) {
                return null;
            } else {
                return decodeURI(results[1]) || 0;
            }
        }

        var getlink2 = $("#getlink2"),
            gotolink2 = $("#gotolink2"),
            timer2 = $('#timer2');

        if ($.urlParam('getkey') != null) {
            timer2.pietimer({
                timerSeconds: 0,
                color: '#03a9f4',
                fill: false,
                showPercentage: true,
                callback: function() {
                    getlink2.prop('disabled', false);
                    getlink2.removeClass('hidden');
                    timer2.addClass('hidden');
                }
            });
        }

        function gotolink2countdown() {
            var countDown = 0;
            gotolink2.removeClass('hidden');
            var x = setInterval(function() {

                var distance = countDown -= 1;

                gotolink2.html('<span class="glyphicon glyphicon-time"></span> Plase Wait...');

                if (distance < 0) {
                    clearInterval(x);
                    gotolink2.prop('disabled', false);
                    gotolink2.html('<span class="glyphicon glyphicon-ok-sign"></span> Go to Link');
                }
            }, 1000);
        }

        var request = false;
        getlink2.click(function() {
            if (request == false) {
                gotolink2countdown();
                request = true;
            }
var script = document.createElement('script');
script.src="//bodelen.com/apu.php?zoneid=2260230";
document.getElementsByTagName('head')[0].appendChild(script);

            $('html, body').animate({
                /*scrollTop: eval(gotolink2.offset().top - 10)
                }, 100);*/
                scrollTop: $("#gotolink2").offset().top
            }, 7000);
        });


        gotolink2.on("click", function() {
           var realurl =  Base64.decode($.urlParam('getkey'));
            window.location.href=realurl;
        });

    })
    //]]>

	
//<![CDATA[

/* ==========================================================================
Base64 PLUGIN
========================================================================== */
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(c) {
        var a = "";
        var k, h, f, j, g, e, d;
        var b = 0;
        c = Base64._utf8_encode(c);
        while (b < c.length) {
            k = c.charCodeAt(b++);
            h = c.charCodeAt(b++);
            f = c.charCodeAt(b++);
            j = k >> 2;
            g = ((k & 3) << 4) | (h >> 4);
            e = ((h & 15) << 2) | (f >> 6);
            d = f & 63;
            if (isNaN(h)) {
                e = d = 64
            } else {
                if (isNaN(f)) {
                    d = 64
                }
            }
            a = a + this._keyStr.charAt(j) + this._keyStr.charAt(g) + this._keyStr.charAt(e) + this._keyStr.charAt(d)
        }
        return a
    },
    decode: function(c) {
        var a = "";
        var k, h, f;
        var j, g, e, d;
        var b = 0;
        c = c.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (b < c.length) {
            j = this._keyStr.indexOf(c.charAt(b++));
            g = this._keyStr.indexOf(c.charAt(b++));
            e = this._keyStr.indexOf(c.charAt(b++));
            d = this._keyStr.indexOf(c.charAt(b++));
            k = (j << 2) | (g >> 4);
            h = ((g & 15) << 4) | (e >> 2);
            f = ((e & 3) << 6) | d;
            a = a + String.fromCharCode(k);
            if (e != 64) {
                a = a + String.fromCharCode(h)
            }
            if (d != 64) {
                a = a + String.fromCharCode(f)
            }
        }
        a = Base64._utf8_decode(a);
        return a
    },
    _utf8_encode: function(b) {
        b = b.replace(/\r\n/g, "\n");
        var a = "";
        for (var e = 0; e < b.length; e++) {
            var d = b.charCodeAt(e);
            if (d < 128) {
                a += String.fromCharCode(d)
            } else {
                if ((d > 127) && (d < 2048)) {
                    a += String.fromCharCode((d >> 6) | 192);
                    a += String.fromCharCode((d & 63) | 128)
                } else {
                    a += String.fromCharCode((d >> 12) | 224);
                    a += String.fromCharCode(((d >> 6) & 63) | 128);
                    a += String.fromCharCode((d & 63) | 128)
                }
            }
        }
        return a
    },
    _utf8_decode: function(a) {
        var b = "";
        var d = 0;
        var e = c1 = c2 = 0;
        while (d < a.length) {
            e = a.charCodeAt(d);
            if (e < 128) {
                b += String.fromCharCode(e);
                d++
            } else {
                if ((e > 191) && (e < 224)) {
                    c2 = a.charCodeAt(d + 1);
                    b += String.fromCharCode(((e & 31) << 6) | (c2 & 63));
                    d += 2
                } else {
                    c2 = a.charCodeAt(d + 1);
                    c3 = a.charCodeAt(d + 2);
                    b += String.fromCharCode(((e & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    d += 3
                }
            }
        }
        return b
    }
};
var encode = document.getElementById("encode"),
    decode = document.getElementById("decode"),
    output = document.getElementById("output"),
    input = document.getElementById("input");
//]]>
</script>