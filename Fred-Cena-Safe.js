var zucc = 0;

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

while(zucc<15) {
    openInNewTab('https://www.youtube.com/watch?v=7MJd-RSHTqs')
    zucc++
}
