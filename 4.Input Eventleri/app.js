
const filter=document.getElementById("filter");
/*
document.addEventListener("DOMContentLoaded",load);//sayfadaki herşey yüklendikten sonra.Önceki derslerde söylemeyi unuttu
function load(e){
    console.log("Sayfa Yüklendi");//yazdır
}*/

//Focus- odaklandığımızda harekete geçme
// filter.addEventListener("focus",run);
// filter.addEventListener("blur",run);//inputa basıp içine girip sonra çıkman lazım bunda

//Paste - kopyalama
//filter.addEventListener("paste",run);

//Copy 
//filter.addEventListener("copy",run);

//Cut
//filter.addEventListener("cut",run);

//Select - yazının bir kısmını veya tamamını seçme
filter.addEventListener("select",run);


function run(e){
    console.log(e.type);
}
