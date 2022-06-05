var i=1;
var count=0;
i=parseInt(sessionStorage.getItem('storeCount'));
document.addEventListener("DOMContentLoaded", function() {
    if(isNaN(i))
    {
        i=1;
    }
    switch(i){
        case 8: i=1
        case 1:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Wielki Mur Chiński";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
        case 2:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Petra";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
        case 3:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Statua Chrystusa Zbawiciela w Rio de Janeiro";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
        case 4:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Machu Picchu";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
        case 5:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Chichén Itzá";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
        case 6:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Koloseum";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
        case 7:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Tadź Mahal";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
    };
  });
function galleryUp(){
    i++;
    switch(i){
        case 8: i=1
        case 1:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Wielki Mur Chiński";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
        case 2:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Petra";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
        case 3:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Statua Chrystusa Zbawiciela w Rio de Janeiro";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
        case 4:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Machu Picchu";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
        case 5:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Chichén Itzá";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
        case 6:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Koloseum";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
        case 7:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Tadź Mahal";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
    };
    sessionStorage.setItem('storeCount', i)
}
function galleryDown(){
    i--;
    switch(i){
        case 0: {i=7
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Tadź Mahal";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
        case 1:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Wielki Mur Chiński";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
        case 2:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Petra";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
        case 3:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Statua Chrystusa Zbawiciela w Rio de Janeiro";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
        case 4:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Machu Picchu";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
        case 5:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Chichén Itzá";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
        case 6:{
            document.getElementById("gallery").src="media/img"+i+".jpg";
            document.getElementById("title").innerHTML="Koloseum";
            document.getElementById("siteLink").href="strona"+i+".html";
        } break;
    };
    sessionStorage.setItem('storeCount', i)
}
function changeButton(){
    count++;
    if(count%2!=0)
    {
        document.getElementById("mainbutton").innerHTML="<";
    }
    else 
    {
        document.getElementById("mainbutton").innerHTML=">"
    };
    document.getElementById("myDropdown").classList.toggle("show");
}