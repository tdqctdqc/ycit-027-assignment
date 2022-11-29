function getCatImage() {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data[0].url);
            let catImage = document.createElement("img");
            catImage.setAttribute("alt", "cat image");
            catImage.setAttribute("src", data[0].url);
            let imgCont = document.querySelector(".image-container");
            imgCont.appendChild(catImage);
        });
}

getCatImage();
