var number = 9;
var statut_win = 1;
let blocks = document.querySelectorAll(".block")
let player = document.querySelector("#player")
for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('click', function () {
        var statut = blocks[i].innerHTML
        if (statut === '&nbsp;'){
            console.log(statut)
            if (number > 0) {
                if (number % 2 === 0){
                    blocks[i].textContent = "O"
                    blocks[i].style.color = 'green'
                    number--;
                    player.textContent = "player 1 turn<<X>>"
                    player.style.color = 'blue'
                }
                else{
                    blocks[i].textContent = "X"
                    number--;
                    blocks[i].style.color = 'blue'
                    player.style.color = 'green'
                    player.textContent = "player 2 turn<<O>>"
                }
            }
        }
        else {
            blocks[i].addEventListener('click', function () {
                console.log("check")
                console.log(statut)

            });
        }
        if (blocks[0].textContent === "O" && blocks[1].textContent === "O" && blocks[2].textContent === "O" || blocks[0].textContent === "O" && blocks[3].textContent === "O" && blocks[6].textContent === "O" || blocks[3].textContent === "O" && blocks[4].textContent === "O" && blocks[5].textContent === "O" || blocks[6].textContent === "O" && blocks[7].textContent === "O" && blocks[8].textContent === "O" || blocks[1].textContent === "O" && blocks[4].textContent === "O" && blocks[7].textContent === "O" || blocks[2].textContent === "O" && blocks[5].textContent === "O" && blocks[8].textContent === "O" || blocks[0].textContent === "O" && blocks[4].textContent === "O" && blocks[8].textContent === "O" || blocks[2].textContent === "O" && blocks[4].textContent === "O" && blocks[6].textContent === "O") {
            alert("plater 2 win <<O>>")
            number = -1;
            statut_win = 0;
        }
        else if (blocks[0].textContent === "X" && blocks[1].textContent === "X" && blocks[2].textContent === "X" || blocks[0].textContent === "X" && blocks[3].textContent === "X" && blocks[6].textContent === "X" || blocks[3].textContent === "X" && blocks[4].textContent === "X" && blocks[5].textContent === "X" || blocks[6].textContent === "X" && blocks[7].textContent === "X" && blocks[8].textContent === "X" || blocks[1].textContent === "X" && blocks[4].textContent === "X" && blocks[7].textContent === "X" || blocks[2].textContent === "X" && blocks[5].textContent === "X" && blocks[8].textContent === "X" || blocks[0].textContent === "X" && blocks[4].textContent === "X" && blocks[8].textContent === "X" || blocks[2].textContent === "X" && blocks[4].textContent === "X" && blocks[6].textContent === "X") {
            alert("plater 1 win <<X>>")
            statut_win = 0;
            number = -1;
        }
       else if (number === 0 && statut_win) {
            alert("ta3adol")
        }
    })

}
