document.addEventListener("DOMContentLoaded", function () {
    let div = document.createElement("div");

    div.className = "header-container";

    let h1 = document.createElement("h1");
    let h1Text = document.createTextNode("This is an h1");

    h1.appendChild(h1Text);
    div.appendChild(h1);
    document.body.appendChild(div);

    let h2 = document.createElement("h2");
    let h2text = document.createTextNode("This is an h2");

    h2.appendChild(h2text);
    div.appendChild(h2);

    let h3 = document.createElement("h3");
    let h3text = document.createTextNode("This is an h3");

    h3.appendChild(h3text);
    div.appendChild(h3);

    let h4 = document.createElement("h4");
    let h4text = document.createTextNode("This is an h4");

    h4.appendChild(h4text);
    div.appendChild(h4);

    let h5 = document.createElement("h5");
    let h5text = document.createTextNode("This is an h5");

    h5.appendChild(h5text);
    div.appendChild(h5);

    let h6 = document.createElement("h6");
    let h6text = document.createTextNode("This is an h6");

    h6.appendChild(h6text);
    div.appendChild(h6);

    h1.className = "h1";
    h2.className = "h2";
    h3.className = "h3";
    h4.className = "h4";
    h5.className = "h5";
    h6.className = "h6";



    h1.addEventListener("dblclick", function () {

        let colors = ["#0000FF", "#008000", "#FF0000", "#FFFF00", "#FF00FF", "#FFA500", "#800080", "#FFD700"];
        let ranNum = Math.floor(Math.random() * (colors.length));
        h1.style.color = colors[ranNum];

    });

    h2.addEventListener("dblclick", function () {
        let colors = ["#0000FF", "#008000", "#FF0000", "#FFFF00", "#FF00FF", "#FFA500", "#800080", "#FFD700"];
        let ranNum = Math.floor(Math.random() * (colors.length));
        h2.style.color = colors[ranNum];

    });

    h3.addEventListener("dblclick", function () {
        let colors = ["#0000FF", "#008000", "#FF0000", "#FFFF00", "#FF00FF", "#FFA500", "#800080", "#FFD700"];
        let ranNum = Math.floor(Math.random() * (colors.length));
        h3.style.color = colors[ranNum];

    });

    h4.addEventListener("dblclick", function () {
        let colors = ["#0000FF", "#008000", "#FF0000", "#FFFF00", "#FF00FF", "#FFA500", "#800080", "#FFD700"];
        let ranNum = Math.floor(Math.random() * (colors.length));
        h4.style.color = colors[ranNum];

    });

    h5.addEventListener("dblclick", function () {
        let colors = ["#0000FF", "#008000", "#FF0000", "#FFFF00", "#FF00FF", "#FFA500", "#800080", "#FFD700"];
        let ranNum = Math.floor(Math.random() * (colors.length));
        h5.style.color = colors[ranNum];

    });

    h6.addEventListener("dblclick", function () {
        let colors = ["#0000FF", "#008000", "#FF0000", "#FFFF00", "#FF00FF", "#FFA500", "#800080", "#FFD700"];
        let ranNum = Math.floor(Math.random() * (colors.length));
        h6.style.color = colors[ranNum];

    });




    let button = document.createElement("button");
    let btnText = document.createTextNode("Click to add new list item");
    button.appendChild(btnText);
    document.body.appendChild(button);

    let ul = document.createElement("ul");
    document.body.appendChild(ul);

    button.addEventListener("click", createList);

    function randomColor() {
        let colors = ["#0000FF", "#008000", "#FF0000", "#FFFF00", "#FF00FF", "#FFA500", "#800080", "#FFD700"];
        let ranNum = Math.floor(Math.random() * (colors.length));
        
        return colors[ranNum];
    };

    let listCounter = 1;

    function createList() {

        let li = document.createElement("li");
        ul.appendChild(li);
        let textli = document.createTextNode("This is list item " + (listCounter++)); //This is where I am having issues.
        li.appendChild(textli);


        //At this point, nothing will appear on the screen. You have to .addEventListener(parameter) to appear in the HTML.

        li.addEventListener("click", function () {

            li.style.color = randomColor();


        })

        li.addEventListener("dblclick", function () {
            this.remove();
        })
    };









});




