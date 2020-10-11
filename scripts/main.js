import data from './data.js';

//functions 
function renderRating(stars) {
  const rating = document.createElement('div');
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
    rating.appendChild(starposition);
  }
  return rating;
}

function renderProfileInfo(user) {
  const profileimage = document.querySelector('#profile-image');
  profileimage.src = user.imgUrl;

  const welcomeMessage = document.querySelector('#welcome-message');
  welcomeMessage.textContent = `Welcome, ${user.name}!`;

  const profileVisits = document.querySelector('#profile-visits');
  profileVisits.textContent = `${user.profileVisits} profile visits last week`;

  const profileRatedBy = document.querySelector('#profile-rated-by');
  profileRatedBy.textContent = `${user.ratedBy} people rated your profile`;

  const userRating = document.querySelector("#user-rating");
  const rating = renderRating(user.rate);
  userRating.appendChild(rating);

}

function renderFriend(friend) {
  const card = document.createElement('article');
  card.className = 'card';

  const friendicons = document.createElement('footer');
  friendicons.className = 'friend-icons';
  card.appendChild(friendicons);

  const figure = document.createElement('figure');
  friendicons.appendChild(figure);

  const photo = document.createElement('img');
  photo.className = 'picturevisitor';
  photo.style.backgroundImage = `url('${friend.imgUrl}')`;
  figure.appendChild(photo);


  const ratingVisitor = document.createElement('div');
  ratingVisitor.className = 'ratingvisitor';
  const rating = renderRating(friend.rate);
  ratingVisitor.appendChild(rating);
  friendicons.appendChild(ratingVisitor);

  const usertext = document.createElement('div');
  usertext.className = 'user-text';
  card.appendChild(usertext);

  const friendname = document.createElement('header');
  friendname.innerHTML += `<h3 class = "friendname">${friend.name}</h3>`
  usertext.appendChild(friendname);

  const bio = document.createElement('p');
  bio.className = 'bio';
  bio.innerHTML = friend.description;
  usertext.appendChild(bio);

  return card;
}

function renderFriendsList(friends) {
  const friendscontainer = document.querySelector('#friends-container');
  friends.forEach(function (friend) {
    const cardFriend = renderFriend(friend);
    friendscontainer.appendChild(cardFriend);
  })

}

renderProfileInfo(data.profile);
renderFriendsList(data.friends);