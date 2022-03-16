function StyleDiv(player) {
  player.style.backgroundColor = "green";
  player.style.margin = "40px";
  player.style.padding = "40px";
  player.style.border = "10px solid red";
  player.style.borderRadius = "15px";
  player.style.color = "lightblue";
}

const players = document.getElementsByClassName("player");

for (const player of players) {
  StyleDiv(player);

  // player.addEventListener("click", function () {
  //   player.style.backgroundColor = "yellow";
  // });
}

function addPlayer( ) {
  const playersContainer = document.getElementById("players");
  const players = document.createElement("div");
  players.classList.add("player");
  players.innerHTML = ` <h4 class="player-name">player - 1</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            asperiores ipsum quod beatae? Maiores illo consequatur voluptatem
            provident autem quia explicabo esse cumque, id doloribus hic cum!
            Obcaecati, omnis voluptates!
          </p>
          `;
          StyleDiv(players);
  playersContainer.appendChild(players);
}

document.getElementById("players").addEventListener("click",function(event){

     if(event.target.tagName.toLowerCase()  == "div"){
        event.target.style.backgroundColor="red";

     }else{
      event.target.parentNode.style.backgroundColor="red";

     }

})