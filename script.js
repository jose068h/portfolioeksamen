window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");
    //med toggle kan jeg tilføje noget der ikke er der og fjerne noget der er der, hidden
    let erSkjult = document.querySelector("#menu").classList.contains("hidden");
    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
        //hvis der er rigtigt så er der en synlig burgermenu
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}
