var encode=document.getElementById("encode"),decode=document.getElementById("decode"),output=document.getElementById("output"),input=document.getElementById("input"),User_ID="",protected_links="",a_to_va=0,a_to_vb=0,a_to_vc="";function auto_safelink(){auto_safeconvert()}function auto_safeconvert(){var t=window.location.hostname;""==protected_links||protected_links.match(t)?""==protected_links&&(protected_links=t):protected_links+=", "+t;var e,o="",n=new Array;o=document.getElementsByTagName("a"),a_to_va=o.length,e=(n=a_to_fa()).length;for(var a=!1,r=0,_="",c=0;c<a_to_va;c++){for(a=!1,r=0;0==a&&r<e;)!(_=o[c].href).match(n[r])&&_&&_.match("http")||(a=!0),r++;if(0==a){var d=_;o[c].href="https://duit.cc/short-url/go.php?userid=17179&short="+"http://www.gemads.info/p/redirect.html?"+window.btoa(d),o[c].rel="nofollow",a_to_vb++,a_to_vc+=c+":::"+o[c].href+"\n"}}var l=document.getElementById("anonyminized"),i=document.getElementById("found_links");l&&(l.innerHTML+=a_to_vb),i&&(i.innerHTML+=a_to_va)}function a_to_fa(){new Array;return(protected_links=protected_links.replace(" ","")).split(",")}