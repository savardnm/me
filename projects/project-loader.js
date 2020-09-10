console.log("loading projects");

const tileSize = 300;

var container = document.getElementById("container");
var attempted = 0;

projects.forEach(function (project, index) {
    container.append(createProjecTile(project.folder, project.name))
});

function createProjecTile(folder, name) {

    var tile = document.createElement("div");
    tile.className = "tile";

    var link = document.createElement("a");
    link.href = "index.html";
    tile.append(link);

    var tint = document.createElement("div");
    tint.className = "tint";
    link.append(tint);

    var banner = document.createElement("div");
    banner.className = "banner";
    banner.textContent = name;
    link.append(banner);

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




