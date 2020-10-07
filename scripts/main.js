import data from './data.js';

//functions 

//numberToStar is a function to convert the rating data, from a number to stars. that's it. ok? bye.
function numberToStar(rate, stars) {
  for (let i = 0; i < 5; i++) {
    var starposition;

    if (stars >= i + 1) {
      starposition = document.createElement('i');
      starposition.textContent += 'star';
    } else if (stars <= i) {
      starposition = document.createElement('i');
      starposition.textContent += 'star_outline';
    } else {
      starposition = document.createElement('i');
      starposition.textContent += 'star_half';
    }
    starposition.className = ('material-icons');
    rate.appendChild(starposition);

  }

}

//userbox 
//receiving data of profile's user
const user = data.profile;
//adding profile photo
const profileimage = document.querySelector('#profile-image');
profileimage.src = user.imgUrl;
//adding welcome message
const welcome = document.querySelector('#welcome-message');
welcome.textContent = `Welcome, ${user.name}!`;
//adding total visits and how many users rated the user profile
const visits = document.querySelector('#profile-visits');
visits.textContent = `${user.profileVisits} profile visits last week`;
const ratedBy = document.querySelector('#profile-rated-by');
ratedBy.textContent = `${user.ratedBy} people rated your profile`;

//adding the user's rate 
const ratinguser = document.querySelector("#ratinguser");
var stars = user.rate;
numberToStar(ratinguser, stars);

//bringing the friends container to manipulate it and create all the friends cards. 
const friendscontainer = document.querySelector('#friends-container');
const friends = data.friends;

//here, a bigger function that creates a card for every friend in data.js, with their names, pictures, descriptions and rating.  
friends.forEach(function (friend) {
  var card = document.createElement('article');
  card.className = 'card';
  friendscontainer.appendChild(card);

  var usericons = document.createElement('footer');
  usericons.className = ('user-icons');
  card.appendChild(usericons);

  var figure = document.createElement('figure');
  usericons.appendChild(figure);

  var photo = document.createElement('div');
  photo.className = ('picturevisitor');
  photo.style.backgroundImage = `url('${friend.imgUrl}')`;
  figure.appendChild(photo);


  var ratingvisitor = document.createElement('div');
  ratingvisitor.className = ('ratingvisitor');
  stars = user.rate;
  numberToStar(ratingvisitor, stars);
  usericons.appendChild(ratingvisitor); //appending 

  var usertext = document.createElement('div');
  usertext.className = ('user-text');
  card.appendChild(usertext);

  var friendname = document.createElement('header');
  friendname.innerHTML += `<h3 class = "friendname">${friend.name}</h3>`
  usertext.appendChild(friendname);

  var bio = document.createElement('p');
  bio.className = ('bio');
  bio.innerHTML = friend.description;
  usertext.appendChild(bio);

}
);
















