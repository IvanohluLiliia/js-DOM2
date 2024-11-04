const images = [
    {"id":"0","author":"Alejandro Escamilla","url":"https://unsplash.com/photos/yC-Yzbqy7PY","download_url":"https://picsum.photos/id/0/5000/3333"},
    {"id":"1","author":"Alejandro Escamilla","url":"https://unsplash.com/photos/LNRyGwIJr5c","download_url":"https://picsum.photos/id/1/5000/3333"},
    {"id":"2","author":"Alejandro Escamilla","url":"https://unsplash.com/photos/N7XodRrbzS0","download_url":"https://picsum.photos/id/2/5000/3333"},
    {"id":"3","author":"Alejandro Escamilla","url":"https://unsplash.com/photos/Dl6jeyfihLk","download_url":"https://picsum.photos/id/3/5000/3333"},
    {"id":"4","author":"Alejandro Escamilla","url":"https://unsplash.com/photos/y83Je1OC6Wc","download_url":"https://picsum.photos/id/4/5000/3333"},
    {"id":"5","author":"Alejandro Escamilla","url":"https://unsplash.com/photos/LF8gK8-HGSg","download_url":"https://picsum.photos/id/5/5000/3334"},
    {"id":"6","author":"Alejandro Escamilla","url":"https://unsplash.com/photos/tAKXap853rY","download_url":"https://picsum.photos/id/6/5000/3333"},
    {"id":"7","author":"Alejandro Escamilla","url":"https://unsplash.com/photos/BbQLHCpVUqA","download_url":"https://picsum.photos/id/7/4728/3168"},
    {"id":"8","author":"Alejandro Escamilla","url":"https://unsplash.com/photos/xII7efH1G6o","download_url":"https://picsum.photos/id/8/5000/3333"},
    {"id":"9","author":"Alejandro Escamilla","url":"https://unsplash.com/photos/ABDTiLqDhJA","download_url":"https://picsum.photos/id/9/5000/3269"},
    {"id":"10","author":"Paul Jarvis","url":"https://unsplash.com/photos/6J--NXulQCs","download_url":"https://picsum.photos/id/10/2500/1667"},

];


let currentIndex = 0;


function loadInitialImages() {
    const gallery = document.getElementById("gallery");
    for (let i = 0; i < 4 && i < images.length; i++) {
        const imgElement = document.createElement("img");
        imgElement.src = images[i].download_url;
        imgElement.alt = images[i].author;
        imgElement.onclick = () => openModal(imgElement);
        gallery.appendChild(imgElement);
    }
    currentIndex = 4; 
}


function loadMoreImages() {
    const gallery = document.getElementById("gallery");
    for (let i = 0; i < 4 && currentIndex < images.length; i++, currentIndex++) {
        const imgElement = document.createElement("img");
        imgElement.src = images[currentIndex].download_url;
        imgElement.alt = images[currentIndex].author;
        imgElement.onclick = () => openModal(imgElement);
        gallery.appendChild(imgElement);
    }
}


function clearGallery() {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = ""; 
    currentIndex = 0; 
}


function removeLastImage() {
    const gallery = document.getElementById("gallery");
    const lastImage = gallery.lastElementChild;
    if (lastImage) {
        gallery.removeChild(lastImage);
        currentIndex--; 
    }
}


function reverseGallery() {
    const gallery = document.getElementById("gallery");
    const imagesArray = Array.from(gallery.children);
    gallery.innerHTML = ""; 
    imagesArray.reverse().forEach(imgElement => gallery.appendChild(imgElement)); 
}


function openModal(img) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("imgModal");
    const captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}


function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}


window.onload = loadInitialImages;
