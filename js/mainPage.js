function openMainTab(product, element) {
    var i;
    var mainImg = document.getElementsByClassName("mainImg");
    var tabButton = document.getElementsByClassName("tabButton");
    for (i = 0; i < mainImg.length; i++) {
        mainImg[i].style.display = "none";
    }
    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].style.backgroundColor = "";
    }
    document.getElementById(product).style.display = "block";
    element.style.backgroundColor = "whitesmoke";
}

document.getElementById("default").click();