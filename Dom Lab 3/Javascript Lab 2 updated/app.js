document.addEventListener("DOMContentLoaded", function () {

    let button = document.createElement("button");
    let btnText = document.createTextNode("Sing!");
    button.appendChild(btnText);
    document.body.appendChild(button);

    let seeYa = document.querySelector("div");
    seeYa.parentNode.removeChild(seeYa);

    button.addEventListener("click", function () {

        // let friends = ["Matt", "Gio", "Logan", "Nate", "Mike"];


        // let Matt = document.createElement("div");
        // let Gio = document.createElement("div");
        // let Logan = document.createElement("div");
        // let Nate = document.createElement("div");
        // let Mike = document.createElement("div");

        // Matt.className = "friends";
        // Gio.className = "friends";
        // Logan.className = "friends";
        // Nate.className = "friends";
        // Mike.className = "friends";

        // document.body.appendChild(Matt);

        // let h3Matt = document.createElement("h3");
        // let h3MattName = document.createTextNode("Matt");
        // h3Matt.appendChild(h3MattName);
        // Matt.appendChild(h3Matt);

        // document.body.appendChild(Gio);

        // let h3Gio = document.createElement("h3");
        // let h3GioName = document.createTextNode("Gio");
        // h3Gio.appendChild(h3GioName);
        // Gio.appendChild(h3Gio);

        // document.body.appendChild(Logan);

        // let h3Logan = document.createElement("h3");
        // let h3LoganName = document.createTextNode("Logan");
        // h3Logan.appendChild(h3LoganName);
        // Logan.appendChild(h3Logan);

        // document.body.appendChild(Nate);

        // let h3Nate = document.createElement("h3");
        // let h3NateName = document.createTextNode("Nate");
        // h3Nate.appendChild(h3NateName);
        // Nate.appendChild(h3Nate);

        // document.body.appendChild(Mike);

        // let h3Mike = document.createElement("h3");
        // let h3MikeName = document.createTextNode("Mike");
        // h3Mike.appendChild(h3MikeName);
        // Mike.appendChild(h3Mike);

        // let p = document.createElement("p");

        // Matt.appendChild(p);
        // Gio.appendChild(p);
        // Logan.appendChild(p);
        // Nate.appendChild(p);
        // Mike.appendChild(p);



        //to make a heading element, make the text, put em together, and append



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

                let para = document.createElement("p");                
                friendDiv.appendChild(para);
                let paraText = document.createTextNode( )
                


                if (j >= 3) {
                    (j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out," + [j - 1] + " lines of code in the file.");
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

