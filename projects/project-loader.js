console.log("loading projects");

const tileSize = 300;

var container = document.getElementById("container")
var rows = [document.createElement("div")];

projects.forEach(function (project, index) {
    container.append(createProjecTile(project.name))
});

function createProjecTile(name) {

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
    link.append(banner);

    var thumbnail = document.createElement("img");
    thumbnail.src = "projects/" + name + "/cover-image.png";
    thumbnail.className = "thumbnail";
    link.append(thumbnail);
    console.log("projects/" + name + "/cover-image.png");

    if (thumbnail.width > thumbnail.height) {
        thumbnail.height = tileSize;
    } else {
        thumbnail.width = tileSize;
    }

    return tile;

}




