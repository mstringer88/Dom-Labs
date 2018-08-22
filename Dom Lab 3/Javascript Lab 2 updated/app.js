document.addEventListener("DOMContentLoaded", function () {

    let button = document.createElement("button");
    let btnText = document.createTextNode("Sing!");
    button.appendChild(btnText);
    document.body.appendChild(button);

    let seeYa = document.querySelector("div");
    seeYa.parentNode.removeChild(seeYa);

    button.addEventListener("click", function () {

        let friends = ["Matt", "Gio", "Logan", "Nate", "Mike"];

        for (let i = 0; i < friends.length; i++) {

            let friendDiv = document.createElement("div");
            friendDiv.className = "friends";

            let friendHeading = document.createElement("h3");
            let friendHeadingText = document.createTextNode(friends[i]);
            friendHeading.appendChild(friendHeadingText);

            document.body.appendChild(friendDiv);
            friendDiv.appendChild(friendHeading);


            for (let j = 99; j > 0; j--) {

                if (j >= 3) {
                    let para = document.createElement("p");                
                    let paraText = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out," + [j - 1] + " lines of code in the file.");
                    para.appendChild(paraText);
                    friendDiv.appendChild(paraText);
                }
                else if (j >= 2) {
                    (j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out," + [j - 1] + " line of the code in the file.");
                             
                }
                else {
                    (j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file.");
                    
                
                };


            }
        }
    });
});

