document.addEventListener("DOMContentLoaded", function () {

    let button = document.createElement("button");

    let btnText = document.createTextNode("Add Square!");

    button.className = "button";

    button.appendChild(btnText);

    document.body.appendChild(button);

    let id = 0;

    button.addEventListener("click", btnClick);

    //what button does when clicked.

    function btnClick() {

        let square = document.createElement("div");

        square.className = "makeSquare";

        square.id = id;

        let p = document.createElement("p");

        let squareText = document.createTextNode(id);

        p.appendChild(squareText);

        square.appendChild(p);

        document.body.appendChild(square);

        p.style.opacity = "0";

        id++;


        //what mouse does to text when moved over box.
 
        square.addEventListener("mouseover", hover);

        function hover() {

            p.style.opacity = "1"

        }

        square.addEventListener("mouseleave", nohover);

        function nohover() {

            p.style.opacity = "0"

        }

        //changes color of box background when clicked

        square.addEventListener("click", randomColor);

        function randomColor() {

            let ranNum = Math.floor(Math.random() * 6);

            if (ranNum === 0) {

                square.style.backgroundColor = "blue"

            } else if (ranNum === 1) {

                square.style.backgrounColor = "red"

            } else if (ranNum === 2) {

                square.style.backgroundColor = "orange"

            } else if (ranNum === 3) {

                square.style.backgroundColor = "yello"

            } else if (ranNum === 4) {

                square.style.backgroundColor = "green"

            } else if (ranNum === 5) {

                square.style.backgroundColor = "Gray"

            };

            //delets block according to number.

            square.addEventListener("dblclick", doubleClick);

            function doubleClick() {

                if (square.id % 2 === 0) {

                    let numID = parseInt(square.id) +1;

                    let num = document.getElementById(numID);

                    if (num == null) {

                        alert("Square with ID " + numID + " does not exist.")

                    } else {

                        num.parentNode.removeChild(num)
                    }

                } else {

                    let numID = parseInt(square.id) -1;

                    let num = document.getElementById(numID);

                    if (num == null) {

                        alert("Square with ID " + numID + " does not exist.")

                    } else {

                        num.parentNode.removeChild(num)

                    }

                }

            }
        }

    };

});



