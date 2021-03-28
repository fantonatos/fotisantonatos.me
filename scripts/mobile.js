function isMobileUser()
{
    let mobile = false;
    let mobileKeywords = ['blackberry', 'iphone', 'ipad', 'ipod', 'android', 'mobile', 'webos', 'phone', 'iemobile'];

    // Detect if device is mobile
    mobileKeywords.forEach(element => {
        if(navigator.userAgent.toLowerCase().search(element) != -1)
            mobile = true;
    });

    return mobile;
}

if (isMobileUser())
{
    Array.from(document.getElementsByClassName("floatingblock")).forEach(link => {
        console.log(link)
        link.style.display = "block"
        link.style.margin = "100px"
        link.style.marginTop = "40px"
        link.style.marginBottom = "40px"
        link.style.fontSize = "150%"
    })
}

/* TODO: Switch to mobile-friendly css style if accessed from mobile client.
*/