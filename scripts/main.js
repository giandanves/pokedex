import data from './data.js';

//functions 
function numberToStar(rate, stars) {
  for (let i = 0; i < 5; i++) {
    const starposition = document.createElement('i');
    if (stars >= i + 1) {
      starposition.textContent += 'star';
    } else if (stars <= i) {
      starposition.textContent += 'star_outline';
    } else {
      starposition.textContent += 'star_half';
    }
    starposition.className = ('material-icons');
    rate.appendChild(starposition);

  }

}

function fillProfileInfo(user) {
  const profileimage = document.querySelector('#profile-image');
  profileimage.src = user.imgUrl;

  const welcome = document.querySelector('#welcome-message');
  welcome.textContent = `Welcome, ${user.name}!`;

  const visits = document.querySelector('#profile-visits');
  visits.textContent = `${user.profileVisits} profile visits last week`;

  const ratedBy = document.querySelector('#profile-rated-by');
  ratedBy.textContent = `${user.ratedBy} people rated your profile`;

  const ratinguser = document.querySelector("#ratinguser");
  var stars = user.rate;
  numberToStar(ratinguser, stars);

}

//userbox
const user = data.profile;
fillProfileInfo(user);


const friendscontainer = document.querySelector('#friends-container');
const friends = data.friends;

//Friends Cards
friends.forEach(function fillFriendsCards(friend) {
  var card = document.createElement('article');
  card.className = 'card';
  friendscontainer.appendChild(card);

  var usericons = document.createElement('footer');
  usericons.className = ('user-icons');
  card.appendChild(usericons);

  var figure = document.createElement('figure');
  usericons.appendChild(figure);

  var photo = document.createElement('img');
  photo.className = ('picturevisitor');
  photo.style.backgroundImage = `url('${friend.imgUrl}')`;
  figure.appendChild(photo);


  var ratingvisitor = document.createElement('div');
  ratingvisitor.className = ('ratingvisitor');
  var stars = user.rate;
  numberToStar(ratingvisitor, stars);
  usericons.appendChild(ratingvisitor);

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
















