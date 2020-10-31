const filterInput=document.getElementById("filter");
/*
filterInput.onfocus= function(){
    console.log("Naber");
}
/onfocus bir property özellik yani bu focus olduğu zaman ben bir fonksiyon çalıştırıcam. conlog(naber) yani ben inputa tıklayınca onfocus özelliği harekete geçer ve bir fonksiyonu çalıştırır
*/ 
/*ikinci prof yöntem ise

filterInput.addEventListener("focus",function(){
console.log("Naber")
});
//şimdi burada ilk olarak hangi eventi kullanacağını yazıyosun hangi özellik.
//birde fonksiyon çalışmasını istiyorum focus olduğunda oda function
*/

/*js eventlerle ilgili daha fazla bilgi sahibi olmamız için bize otomatik event paremetresi gönderiyor ve bizde bunu yazabiliyoruz e diye yazalım. bu e objesi üzerinde bu event hakkınd bilgiler alıcaz

filterInput.addEventListener("focus",function(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.placeholder);
    console.log(e.target.className);
    // console.log("Naber")
    }); */

    //şimdi şöyle birşey yapalım benim formum submit olduğunda bir event çalıştırmak istiyorum

    const todoForm=document.getElementById("todo-form");

    todoForm.addEventListener("submit",submitForm);

    function submitForm(e){
        console.log("Submit Eventi");
        e.preventDefault();//dediğimiz zaman aslında submitin preventdefault özelliğini yoksaymış oluyoruz aslında bunu yapınc asayfamızın yenilenmesini önlemiş olucaz
    }