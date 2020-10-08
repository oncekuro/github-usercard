import axios from "axios";

const card = document.querySelector(".cards");
const myUserData = "https://api.github.com/users/oncekuro";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios
  .get("https://api.github.com/users/oncekuro")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log("there has been an error" + error);
  });
axios
  .get(myUserData)
  .then((response) => {
    card.prepend(cardMaker(response));
  })
  .catch((error) => {
    console.log("another error! + error");
  });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "xetera",
  "ATranZone",
  "notLiria",
  "luishrd",
  "tetondan",
];

followersArray.forEach((item) => {
  axios
    .get("https://api.github.com/users/" + item)
    .then((response) => {
      card.appendChild(cardMaker(response));
    })
    .catch((error) => {
      console.log("Hey! Error! + error");
    });
});
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(user) {
  const card = document.createElement("div");
  const userImg = document.createElement("img");
  const cardInfo = document.createElement("div");
  const userName = document.createElement("h3");
  const userHandle = document.createElement("p");
  const userLocale = document.createElement("p");
  const userProfile = document.createElement("p");
  const profileLink = document.createElement("a");
  const userFollowers = document.createElement("p");
  const userFollows = document.createElement("p");
  const userBio = document.createElement("p");
  const button = document.createElement("button");

  const contactCard = document.createElement("div");
  const userContact = document.createElement("p");
  const userRepos = document.createElement("p");
  const reposLink = document.createElement("p");
  const twitterHandle = document.createElement("p");

  //card class names
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  userName.classList.add("name");
  userHandle.classList.add("username");
  button.classList.add("username");
  contactCard.classList.add("closed");
  userContact.classList.add("contact");

  card.appendChild(userImg);
  card.appendChild(cardInfo);
  userProfile.textContent = "Profile: ";
  userProfile.appendChild(profileLink);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userHandle);
  cardInfo.appendChild(userLocale);
  cardInfo.appendChild(userProfile);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollows);
  cardInfo.appendChild(userBio);
  cardInfo.appendChild(button);
  cardInfo.appendChild(contactCard);
  contactCard.appendChild(userContact);
  contactCard.appendChild(userRepos);
  userRepos.textContent = "User's repos: ";
  userRepos.appendChild(reposLink);
  twitterHandle.textContent = "Twitter: " + user.data.twitter_username;
  contactCard.appendChild(twitterHandle);

  userImg.src = user.data.avatar_url;
  userName.textContent = user.data.name;
  userHandle.textContent = user.data.login;
  userLocale.textContent = user.data.location;

  profileLink.textContent = user.data.html_url;
  profileLink.setAttribute("href", user.data.html_url);
  userFollowers.textContent = "Followers: " + user.data.followers;
  userFollows.textContent = "Following: " + user.data.following;
  userBio.textContent = "Bio: " + user.data.bio;
  button.textContent = "More Info";
  userContact.textContent = "Email: " + user.data.email;
  reposLink.textContent = "Repos Link";
  reposLink.setAttribute("href", user.data.repos_url);

  button.addEventListener("click", () => {
    contactCard.classList.toggle("closed");
  });

  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
