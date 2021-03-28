/* 
 * Returns true if the client is using a mobile device, false if otherwise.
 */
function isMobileUser()
{
    let mobile = false
    let mobileKeywords = ['blackberry', 'iphone', 'ipad', 'ipod',
                          'android', 'mobile', 'webos', 'phone', 'iemobile']

    mobileKeywords.forEach(element => {
        if(navigator.userAgent.toLowerCase().search(element) != -1)
            mobile = true
    });

    return mobile
}

/*
 * Changes page to the mobile-friendly stylesheet
 */
function setMobileStyles()
{
    var firstLink = document.getElementsByClassName("floatingblock")[0]
    var lineBreak = document.createElement("br")
    firstLink.parentNode.insertBefore(lineBreak, firstLink)

    var links = document.head.getElementsByTagName('link')
    for (var i = 0; i < links.length; i++)
        if ( links[i].href = "./css/style.css")
            links[i].href = "./css/mobile.css"
}

if (isMobileUser()) setMobileStyles()