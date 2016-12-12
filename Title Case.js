
function titleCase(str) {
    var titleStr = str.split(' ');

    for (var i = 0; i < titleStr.length; i++) {

        titleStr[i] = titleStr[i].charAt(0).toUpperCase() + titleStr[i].slice(1).toLowerCase();

    }

    return titleStr.join(' ');
}

titleCase("I'm a little tea pot");
