let interval = 1500;
let up = true;

let entity = document.getElementById("showcase");
let body = document.body;
let titleOffset = 0;

window.setInterval(transition, interval);

function transition() {
    up = !up;
    var distanceFromTop = $(document).scrollTop();
    if (distanceFromTop <= 5) {
        $('#animated').removeClass('hidden');
        if (up) {
            $('#animated').addClass('up');
            $('#animated').removeClass('down');
        } else {
            $('#animated').addClass('down');
            $('#animated').removeClass('up');
        }
    } else {
        $('#animated').addClass('hidden');
        $('#animated').removeClass('up');
        $('#animated').removeClass('down');
    }
}

$(document).ready(function() {
    $(window).scroll(function() {
        transition();

    });
});


function goto(id){
    window.scrollTo(0, titleOffset);
}

while(entity !== body){
    titleOffset += entity.offsetTop;
    entity = entity.parentNode;
    console.log(titleOffset);
    console.log(titleOffset);
}

let index = 0;
let showcase = document.getElementById("case");
let showcaseProjects =[];

visibleProjects.forEach(function (project, index) {
    // console.log("creating tile for" + project.name)
    let proj = createProjectSummary(project);
    if(proj.innerHTML.includes("<p>")) {
        proj.style.display = "none";
        proj.className = "proj";
        showcaseProjects[showcaseProjects.length] = proj;
        showcase.append(proj)
    }
});

showcaseProjects[0].style.display = "block";
let projectShowcase = document.getElementById("case");

console.log(showcaseProjects);
function nav(dir){
    projectShowcase.classList.remove("test");

    console.log(projectShowcase);
    console.log(projectShowcase.classList);
    showcaseProjects[index].style.display = "none";

    index += dir;

    if(index > showcaseProjects.length -1)
        index = 0;
    else if (index < 0)
        index = showcaseProjects.length -1;

    index = Math.min(Math.max(index, 0), showcaseProjects.length -1);

    showcaseProjects[index].style.display = "block";
    projectShowcase.classList.add("test");

    // console.log(visibleProjects[index]);
    // showcase.innerHTML = visibleProjects[index].desc;
}


