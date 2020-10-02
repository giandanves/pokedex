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
friendscontainer.appendChild(card);

var usericons = document.createElement('footer');
usericons.className = ('user-icons');
card.appendChild(usericons);

var figure = document.createElement ('figure');
usericons.appendChild(figure);

var photo = document.createElement ('div');
photo.className = ('picturevisitor');
photo.style.backgroundImage = `url('${b.imgUrl}')`;
figure.appendChild(photo);


var ratingvisitor = document.createElement ('div');
ratingvisitor.className = ('ratingvisitor');
usericons.appendChild(ratingvisitor); //appending 

var stars = b.rate;
var i = 1;
while (i  <= 5) {

    if (i <= stars) {
        ratingvisitor.innerHTML += '<i class="material-icons">star</i>';
    } else {
        ratingvisitor.innerHTML += '<i class="material-icons">star_outline</i>';
    }
    i++;
}

var usertext = document.createElement('div');
usertext.className = ('user-text');
card.appendChild(usertext);

var friendname = document.createElement('header');
friendname.innerHTML += `<h3 class = "friendname">${b.name}</h3>`
usertext.appendChild(friendname);

var bio = document.createElement('p');
bio.className = ('bio');
bio.innerHTML = b.description;
usertext.appendChild(bio);

a++;
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