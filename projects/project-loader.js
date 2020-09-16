console.log("loading projects");

const tileSize = 300;

var container = document.getElementById("container");
var attempted = 0;

var currTime = new Date();


//initialize project display
var visibleProjects = projects;
sortBy("relevance");
visibleProjects.forEach(function (project, index) {
    console.log("creating tile for" + project.name)
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
        if (attempted > 5) {  //if no cover image exists
            thumbnail.src = "projects/WPI_logo.png";
            attempted = 0;
            return;
        }
        thumbnail.src = path + '.jpg';
        attempted++;
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

function sortBy(sortBy) {
    console.log(visibleProjects);
    switch (sortBy) {
        case "date":
            console.log("sorting by: " + sortBy);
            visibleProjects = visibleProjects.sort(compareDate);
            break;
        case "relevance":
            console.log("sorting by: " + sortBy);
            visibleProjects = visibleProjects.sort(compareRelevance);
            break;

    }

    console.log(visibleProjects);
}

function compareDate(project1, project2) {

    return Math.sign(project1.date.getTime() - project2.date.getTime())

}


var yearweight = 0.33;
var levelwight = 0.33;
var keywordweight = 0.33;
function compareRelevance(a, b) {

    let project1Val = calcRelevance(a);


    let project2Val = calcRelevance(b);

    console.log(a.name + ":" + project1Val + " vs " + b.name + ":" + project2Val);

    return Math.sign(project1Val - project2Val);
}
function calcRelevance(project){
    let val = yearweight * (currTime.getFullYear() - project.date.getFullYear());
    val -= levelwight * project.year;
    val -= keywordweight * (project.keywords.includes("CS") + project.keywords.includes("ECE") + project.keywords.includes("ME") + 2 * project.keywords.includes("RBE"))

    return val;
}

function openProject(folder) {
    console.log(folder)

    let sidenav = document.getElementById("sidenav");
    let container = document.getElementById("container");

    sidenav.style.display = "none";
    container.style.display = "none";

    $(function () {
        $("#project-placeholder").load("projects/" + folder + "/project-page.html");
    });


}
