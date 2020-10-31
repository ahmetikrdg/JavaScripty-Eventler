//klavye eventleri
/*
document.addEventListener("keypress",run);//klavyeden harf veya sayıya basarsan tuş sayısı artar naber artar yani. Nbaer isildik function içindeydi

function run(e){
  --  console.log(e.which);//asci taplosundaki değer gelir yani mesela l ye basarsın bunun değeri 108
  -- karakter olarak görmek için

   console.log(e.key);
}*/
/*
--keydown- yukarıda keypressde yukarı aşağı capslock falan yazmazdı ama bunda yazar
document.addEventListener("keydown",run);

function run(e){
    console.log(e.key);
}*/

/*
--keyup
--bununda özelliği basınca direk event oluşmaz bırakınca oluşur
document.addEventListener("keyup",run);

function run(e){
    console.log(e.key);
}*/

//şimdi şöyle birşey yapmak istiyorum bir todogirin yazan yere yer bastığımda orası güncellensin

const header=document.querySelector(".card-header");
const todoInput=document.querySelector("#todo");

todoInput.addEventListener("keyup",ChangeText);//keyup yani basınca değil bırakınca sen bu harfi gönder.bas çek

function ChangeText(e)
{
    header.textContent=e.target.value;
    console.log(e.target.value);//bir input alanından değer aldım. e.target diyince zaten direk o inputu alıyosun içinde clas id falan gözüküyo. Target hedef demek
}