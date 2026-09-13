let myImg = document.getElementById("img");

let btn = document.getElementById("btn");



btn.addEventListener("click", () => {
    const img1 = "img/img1.jpg"
    const img2 = "img/img2.jpg"
    const img3 = "img/img3.jpg"

    let Img = [img1,img2,img3]
    randomImg = Math.floor(Math.random() * Img.length)
    myImg.src = Img[randomImg]
    console.log(myImg);
    
})