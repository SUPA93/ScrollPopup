// Créer un événement au scroll
let playOnce = true;
// Réduire la navbar quand on descend vers le site, la remettre à sa taille initiale si on remonte tout en haut
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 5) {
        navbar.style.height = "50px";
    } else {
        navbar.style.height = "90px";
    };
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    //image
    if (scrollValue > 0.45) {
        imgImprovise.style.opacity = "1";
        imgImprovise.style.transform = "none";
    }else{
        imgImprovise.style.opacity = "0";
        imgImprovise.style.transform = "translateX(-500px)";
        
    }
    //popup
    if (scrollValue > 0.85 && playOnce) {
        popup.style.opacity = "1";
        popup.style.transform = "none";
        playOnce = false;

    }
});

closeBtn.addEventListener('click', () => {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(500px)";
})
// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
