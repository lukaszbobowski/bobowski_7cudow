var count=0;
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