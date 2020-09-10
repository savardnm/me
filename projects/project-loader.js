console.log("loading projects");

let projects = ["test-project"];
const gridSize = 300;

var container = document.getElementById("container")
var rows = [document.createElement("div")];


for (var i =0; i < projects.length; i++){
    console.log(projects[i]);

    let columns = Math.round(screen.width / gridSize);

    if(i = columns){

    }

    var it = createProjecTile("test-project");
    container.append(it)

    console.log("succ");

}


function createProjecTile(name) {

    var thumbnail = document.createElement("div");
    thumbnail.className = "thumbnail";

    var link = document.createElement("a")
    link.href = "index.html";
    thumbnail.append(link);

    var tint = document.createElement("div");
    tint.className = "tint";
    link.append(tint);

    var banner = document.createElement("div");
    tint.className = "banner";
    link.append(banner);

    var image = document.createElement("img")
    image.src = "projects/" + name + "/cover-image.png";
    link.append(image);
    console.log("projects/" + name + "/cover-image.png");

    return thumbnail;

}

/*
<div class="thumbnail" href="index.html", style="background-image: url(projects/test-project/cover-image.png);">
    <a href="index.html">

        <div class=tint></div>
        <div class=banner></div>
        <img src="projects/test-project/cover-image">
    </a>
</div>

 */



