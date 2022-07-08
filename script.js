let articles = [
    {
        text: "Try a Kimono",
        imageUrl: "img/kimono.png",
    },
    {
        text: "View Tokyo from the Tokyo sky tree",
        imageUrl: "img/sky-tree.png",
    },
    {
        text: "Relax on the beach",
        imageUrl: "img/beach.png",
    },
    {
        text: "Visit various old temples",
        imageUrl: "img/temple.png",
    },
    {
        text: "See what the 'electric town' Akihabara has to offer",
        imageUrl: "img/akihabara.png",
    },
    {
        text: "See the famous sakura trees!",
        imageUrl: "img/sakura-tree.png",
    },
];

console.log(articles[0].imageUrl);

const articleContainer = document.querySelector(".article-container");
let articleID = 0;
articles.forEach((article) => {
    const newArticle = document.createElement("article");
    const newH4 = document.createElement("h4");
    const newImage = document.createElement("img");

    newH4.textContent = article.text;
    newImage.src = article.imageUrl;
    newImage.classList.add("article-image");
    newArticle.classList.add(`article-item${articleID}`);
    articleID++;

    newArticle.appendChild(newImage);
    newArticle.appendChild(newH4);
    articleContainer.appendChild(newArticle);
    console.log(newImage);
});
