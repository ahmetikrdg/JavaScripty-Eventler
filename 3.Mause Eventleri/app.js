const cardBody=document.querySelectorAll(".card-body")[0];

const tittle=document.querySelector("#tasks-title");

//click event
//tittle.addEventListener("click",run);
//double click
// tittle.addEventListener("dblclick",run);
//Mause Down
// tittle.addEventListener("mousedown",run);
//Mause Up -- tıklamadan eli çekince
// tittle.addEventListener("mouseup",run);
//Mause Over - üzerine gelince oluşur
// tittle.addEventListener("mouseover",run);
// Mouse Out -- üzerine gelip çıkınca olur basmasanda olur
//tittle.addEventListener("mouseout",run);



// cardBody.addEventListener("mouseover",run); //cardbodyde old için her elemente gelince oluşur mouseover

cardBody.addEventListener("mouseenter",run);//cardbodye bir kere girer oluşturur hep gezinirken oluşturmaz
cardBody.addEventListener("mouseleave",run);//çıkarken oluşturur

function run(e){
    console.log(e.type);
}

// console.log(cardBody);