images = [
    "BC.png",
    "ButterflyValve.png",
    "Chatham.png",
    "WANG.png",
    "NEHANT-pump.png",
    "NEHANT.png",
    "pipes.png",
    "valve.png",
    "VIM.png",
    "VIMS.png",
    "perspective.png",
    "color.png",
    "dwg1.png",
    "dwg2.png",
    "Section-View.jpg",
    "Chiller-System-Isolated.jpg",
    "Raceway-Detail.jpg",
    "Isometric-Color-Coded.jpg",
    "MixingTank-Detail.jpg",
    "Tank-Closed.jpg"
];
var columns = [document.getElementById("c1"), document.getElementById("c2"), document.getElementById("c3")];
for(var i = 0; i < images.length*3; i++){
    let col = columns[Math.floor(Math.random()*3)];
    let path = "projects/WHOI/"+images[i%images.length];
    console.log(col);
    let img = document.createElement("img");
    img.src = path;
    console.log(img)
    col.appendChild(img)
}