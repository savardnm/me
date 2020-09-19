console.log("loading projects");

const tileSize = 300;

var container = document.getElementById("container");
var attempted = 0;

var currTime = new Date();
var currSort;

var select = document.getElementById("sortBy");

let visibleProjects = [];
let queryString = '';
//initialize project display
refreshProjects();
sortBy("relevance");
displayProjects();

var searchbar = document.getElementById("searchbar");

function refreshProjects() {
    visibleProjects = [...projects];
}

function search() {
    searchFor(searchbar.value);
}

function searchFor(query) {
    queryString = query.toLowerCase();
    refreshProjects();
    sortProjects();
    visibleProjects = visibleProjects.filter(inSearch);
    displayProjects();
}

function inSearch(project) {
    console.log("checking " + project.name + " for " + queryString);
    return (project.name.toLowerCase().includes(queryString) || project.keywords.toLowerCase().includes(queryString) || project.desc.toLowerCase().includes(queryString));
}


searchbar.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {  //checks whether the pressed key is "Enter"
        search();
    }
});

function displayProjects() {
    container.innerHTML = '';
    visibleProjects.forEach(function (project, index) {
        // console.log("creating tile for" + project.name)
        container.append(createProjecTile(project.folder, project.name))
    });
}

function createProjecTile(folder, name) {

    let tile = document.createElement("div");   //outer tile (300x300 div)
    tile.className = "tile";

    let link = document.createElement("a");     //link to target page
    //link.onclick = "openProject('test')";
    link.href = 'projects/' + folder + '/project-page.html';
    // link.href = 'javascript:openProject("' + folder + '")';
    tile.append(link);

    let tint = document.createElement("div");   //hover-tint
    tint.className = "tint";
    link.append(tint);

    let banner = document.createElement("div"); //banner
    banner.className = "banner";
    link.append(banner);

    let innerBanner = document.createElement("div"); //banner
    innerBanner.className = "innerBanner";
    innerBanner.textContent = name;
    banner.append(innerBanner);

    let path = "projects/" + folder + "/cover-image";

    let thumbnail = document.createElement("img");
    thumbnail.src = path + ".png";
    thumbnail.onerror = function () { // when .png failed
        if (attempted > 10) {  //if no cover image exists
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
        // console.log(path + "wide");
    } else {
        thumbnail.width = tileSize;
        // console.log(path + "tall");
    }
    return tile;

}


function sortProjects() {

    console.log("sorting projects")
    if (currSort != select.value) { //if new value, display
        console.log("sorting by: " + select.value);
        sortBy(select.value);
        displayProjects();
    } else { //if already sorted, sort anyway because why not
        sortBy(select.value);
    }


}

function sortBy(sortBy) {
    currSort = sortBy;
    // console.log(visibleProjects);
    console.log("sorting by: " + sortBy);
    switch (sortBy) {
        case "date":
            visibleProjects = visibleProjects.sort(compareDate);
            break;
        case "relevance":
            visibleProjects = visibleProjects.sort(compareRelevance);
            break;
        case "alphabet":
            visibleProjects = visibleProjects.sort(compareAlphabet);
            break;

    }
}

function compareDate(project1, project2) {

    return -Math.sign(project1.date.getTime() - project2.date.getTime())

}

function compareAlphabet(a, b) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1
    } else {
        return 0;
    }

}


function compareRelevance(a, b) {

    let project1Val = calcRelevance(a);


    let project2Val = calcRelevance(b);

    // console.log(a.name + ":" + project1Val + " vs " + b.name + ":" + project2Val);

    return Math.sign(project1Val - project2Val);
}

function calcRelevance(project) {
    var yearweight = 0.25;
    var levelweight = 0.5;
    var keywordweight = 0.25;
    let val = yearweight * (currTime.getFullYear() - project.date.getFullYear());
    val -= levelweight * project.year;
    val -= keywordweight * (project.keywords.includes("CS") + project.keywords.includes("ECE") + project.keywords.includes("ME") + 2 * project.keywords.includes("RBE"));
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
