var albun= ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ztFg0no_SCK0OxqlXXO3MRlyAZqFxDZsJQ&usqp=CAU",
];
var i = 0;
function nextslide() {
document.getElementById("albun").src = images[i];
i++;
}