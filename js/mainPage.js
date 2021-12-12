function openMainTab(product, element) {
    var i;
    var mainImg = document.getElementsByClassName("mainImg");
    var tabButton = document.getElementsByClassName("tabButton");
    for (i = 0; i < mainImg.length; i++) {
        mainImg[i].style.display = "none";
    }
    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].style.backgroundColor = "";
        tabButton[i].style.opacity = "0.8";
    }
    document.getElementById(product).style.display = "block";
    element.style.backgroundColor = "darkslategray";
    element.style.opacity = "1";
}

document.getElementById("default").click();