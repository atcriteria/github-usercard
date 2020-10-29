import axios from 'axios'; // importing the axios library
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
let myGit = axios.get('https://api.github.com/users/atcriteria');
  myGit.then( obj => {
    console.log(obj.data);
    console.log(createCard(obj));
    let card = createCard(obj);
    let maincontain = document.querySelector('.cards');
    maincontain.appendChild(card);
  })
  .catch ( err => {
    console.log(err);
  })

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
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/


const followersArray = ['https://api.github.com/users/tetondan', 'https://api.github.com/users/dustinmyers', 'https://api.github.com/users/justsml', 'https://api.github.com/users/luishrd', 'https://api.github.com/users/bigknell'];
followersArray.forEach(gitpage => {
  let myGit = axios.get(gitpage);
  myGit.then( obj => {
    let card = createCard(obj);
    let maincontain = document.querySelector('.cards');
    maincontain.appendChild(card);
  })
  .catch ( err => {
    console.log(err);
  })
})

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
const createCard = function({ data }){

  // First, we must create all of the HTML elements we will be injecting in the DOM
  const container = document.createElement('div');
  const gitImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardHeader = document.createElement('h3');
  const cardUsernmae = document.createElement('p');
  const cardLocation = document.createElement('p');
  const cardProfile = document.createElement('p');
  const link = document.createElement('a');
  const cardFollowers = document.createElement('p');
  const cardFollowing = document.createElement('p');
  const cardBio = document.createElement('p');
  
  let text = document.createTextNode(data.html_url)
  console.log(text);
  link.setAttribute('href', data.html_url);
  link.appendChild(text);
  // link.innerText = data.html_url;

  // Next we will append the created HTML elements into one another to achieve the desired structure

  container.appendChild(gitImg);
  container.appendChild(cardInfo);
  cardInfo.appendChild(cardHeader);
  cardInfo.appendChild(cardUsernmae);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfile);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);
  
  // And lastly we will adjust the .classList of the elements to add the desired classes to them, or add attributes, such as the img 'src'
  
  container.classList.add('card');
  gitImg.setAttribute('src', data.avatar_url); // fix me
  cardInfo.classList.add('card-info');
  cardHeader.classList.add('name')
  cardHeader.innerText = `${data.login}`;
  cardUsernmae.classList.add('username');
  cardUsernmae.innerText = `${data.login}`;
  cardLocation.innerText = `User Location: ${data.location}`;
  cardProfile.textContent = 'Profile:'
  
  cardFollowers.innerText = `Followers: ${data.followers}`;
  cardFollowing.innerText = `Following: ${data.following}`;
  cardBio.innerText = `Bio: ${data.bio}`;
  
  cardProfile.appendChild(link);
  return container;
}


