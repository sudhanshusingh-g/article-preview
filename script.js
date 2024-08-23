const shareButton = document.getElementById("share__button");
const mobileFooter = document.getElementById("article__footer");
const socialShare = document.getElementById("mobile__share__footer");
const buttons=document.querySelectorAll("button");
const shareFooter = document.getElementById("share__footer");


shareButton.addEventListener("click", () => {
    shareButton.style.backgroundColor = "hsl(214, 17%, 51%)";
    shareButton.innerHTML = `<i class="fas fa-share share"></i>`;
    if(window.innerWidth < 768){
        mobileFooter.style.display="none";
        socialShare.style.display="flex";
        return;
    }
    shareFooter.style.display="flex";

});

buttons.forEach(button=>{
    button.style.cursor="pointer";
});

