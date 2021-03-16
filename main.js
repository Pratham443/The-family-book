var Names = [
    " ",
    "Father(Raghavendra Kamin)",
    "Mother(Prabhavathi K. Y.)",
    "Me(Pratham Kamin)",
    "Aunty(Pushpa Latha)",
    "Cousin(Dhanush R. Gowda)"
];

var images = [
    "images/cover.jpeg",
    "images/man.jpg",
    "images/woman.jpg",
    "images/boy.jpg",
    "images/woman2.jpg",
    "images/teen.jpg"
];

var i = 0;

function next() {
    i++;
    var family_members = 6;
    if(i > family_members){
        i = 0;
    }
    document.getElementById("name").innerHTML = Names[i];
    document.getElementById("image").src = images[i];
    
}