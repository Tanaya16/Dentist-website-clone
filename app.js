function myFunction(){

    var x = document.getElementById("menu-js")
    var y = document.getElementById("navbar-js")

    if(x.style.display == "block"){
        
        x.style.display = "none";
        y.style.borderBottomLeftRadius = "0em"
    }
    else{
        x.style.display = "block";
        y.style.borderBottomLeftRadius = "3em"
        
    }
}