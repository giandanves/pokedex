import data from './data.js';



//userbox 
const user = data.profile;

const profileimage = document.querySelector('#profile-image');
profileimage.src = user.imgUrl;

const welcome = document.querySelector('#welcome-message');
welcome.textContent = `Welcome, ${user.name}!`;

var ratinguser = document.querySelector("#ratinguser");

var stars = user.rate;
var i = 0;
while (i  < 5) {

    if (stars >= i+1) {
        var starposition = document.createElement ('i');
        starposition.textContent += 'star';
        } else if (stars <= i) {
            var starposition = document.createElement ('i');
            starposition.textContent += 'star_outline';
        } else {
            var starposition = document.createElement ('i');
            starposition.textContent += 'star_half';
         }        
    i++;
    starposition.className = ('material-icons');    
    ratinguser.appendChild(starposition);     

}





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

stars = b.rate;
i = 0;
while (i  < 5) {

    if (stars >= i+1) {
        starposition = document.createElement ('i');
        starposition.textContent += 'star';
        } else if (stars <= i) {
            starposition = document.createElement ('i');
            starposition.textContent += 'star_outline';
        } else {
            starposition = document.createElement ('i');
            starposition.textContent += 'star_half';
         }        
    i++;
    starposition.className = ('material-icons');    
    ratingvisitor.appendChild(starposition);     

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