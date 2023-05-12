function myFunction(){
    var x = document.querySelector("#navbar");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
}