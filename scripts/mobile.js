function isMobileUser()
{
    let mobilekeywords = ['blackberry', 'iphone', 'ipad', 'ipod', 'android', 'mobile', 'webos', 'phone', 'iemobile'];

    // Detect if device is mobile
    mobilekeywords.forEach(element => {
        if(navigator.userAgent.toLowerCase().search(element) != -1)
            return true;
    });

    return false;
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