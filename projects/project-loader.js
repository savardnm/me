console.log("loading projects");

const tileSize = 300;

var container = document.getElementById("container");
var attempted = 0;

var currTime = new Date();

projects.forEach(function (project, index) {
    container.append(createProjecTile(project.folder, project.name))
});

function createProjecTile(folder, name) {

    var tile = document.createElement("div");   //outer tile (300x300 div)
    tile.className = "tile";

    var link = document.createElement("a");     //link to target page
    //link.onclick = "openProject('test')";
    link.href = 'javascript:openProject("' + folder + '")';
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

    if (thumbnail.width > thumbnail.height) {
        thumbnail.height = tileSize;
    } else {
        thumbnail.width = tileSize;
    }

    return tile;

}

function sort(sortBy, ascending) {
    var sortedProjects = [];

    projects.forEach(function (project, index) {


    });
}

function compare(project1, project2, sortBy){
    switch(sortBy){
        case "date":
            return project1.date.prototype.getTime() > project2.date.prototype.getTime();
            break;
        case "relevance":
            return (project1.date.prototype.getTime())
            break;
    }
}


function openProject(folder){
    console.log(folder)

    let sidenav = document.getElementById("sidenav");
    let container = document.getElementById("container");

    sidenav.style.display = "none";
    container.style.display = "none";

    $(function () {
        $("#project-placeholder").load(folder + "/project-page.html");
    });


}
