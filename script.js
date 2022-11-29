function getCatImage() {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
            // Resolve the promise we got from calling then() to the promise that we get from calling json()
            return response.json();
        })
        .then((data) => {
            console.log(data[0].url);
            let catImage = document.createElement("img");
            catImage.setAttribute("alt", "cat image");
            catImage.setAttribute("src", data[0].url);
            let imgCont = document.querySelector(".image-container");
            console.log(imgCont);
            imgCont.appendChild(catImage);
            // document.getElementById("catImage").src = data[0].url;
        });
}

getCatImage();
