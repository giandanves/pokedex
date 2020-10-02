import data from './data.js';

// do your shit here man


//userbox 

const friendscontainer = document.querySelector('#friends-container');
const friends = data.friends;

var a=0;
var b;

friends.forEach(function(friend) {
b = data.friends[a];
var card = document.createElement('article');
card.className = 'card';

var usericons = document.createElement('footer');
usericons.className = ('user-icons');

var figure = document.createElement ('figure');
figure.innerHTML += `<img class = picturevisitor src = ${b.imgUrl} ></img>`;


friendscontainer.appendChild(card);
card.appendChild(usericons);
usericons.appendChild(figure);
a++;
console.log(b);
}
) 




//friends.forEach(function(friend) {
    //b = data.friends[a];
    //friendscontainer.innerHTML += `<article class="card" id=friend${a}> </article>`;
    //var friendVar = document.getElementById(`friend${a}`);
    
    //friendVar.innerHTML += `<figure> <img class = picturevisitor src = ${b.imgUrl} > </figure>`;

    //a++;
     
//}


//);

;