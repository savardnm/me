console.log("loading projects");

const tileSize = 300;

var container = document.getElementById("container");
var attempted = 0;

projects.forEach(function (project, index) {
    container.append(createProjecTile(project.folder, project.name))
});

function createProjecTile(folder, name) {

    var tile = document.createElement("div");   //outer tile (300x300 div)
    tile.className = "tile";

    var link = document.createElement("a");     //link to target page
    link.href = "index.html";
    tile.append(link);

    var tint = document.createElement("div");   //hover-tint
    tint.className = "tint";
    link.append(tint);

    var banner = document.createElement("div"); //banner
    banner.className = "banner";
    link.append(banner);

    var innerBanner = document.createElement("div"); //banner
    innerBanner.className = "innerBanner";
    innerBanner.textContent = name;
    banner.append(innerBanner);

    let path = "projects/" + folder + "/cover-image";

    var thumbnail = document.createElement("img");
    thumbnail.src = path + ".png";
    thumbnail.onerror = function () { // when .png failed
        if(attempted > 5){  //if no cover image exists
            thumbnail.src = "projects/WPI_logo.png";
            attempted = 0;
            return;
        }
        thumbnail.src = path + '.jpg';
        attempted ++;
    };

    thumbnail.className = "thumbnail";
    link.append(thumbnail);
    console.log("projects/" + folder + "/cover-image.png");

    if (thumbnail.width > thumbnail.height) {
        thumbnail.height = tileSize;
    } else {
        thumbnail.width = tileSize;
    }

    return tile;

}




