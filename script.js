const hamburgerBtn = document.querySelector('.hamburger');
const crossBtn = document.querySelector('.cross-icon');
const navLinks = document.querySelectorAll('.navLink');
const djData = [
  {
    hidden: false,
    photo: './cap-detials/benz.jpeg',
    alt: 'Benzema  Photo',
    name: 'Karim Benzema',
    occupation: '48 goals, 15 assists. Won Champions League, La Liga, UEFA Nations League & Supercopa de Espana',
    description: ' In terms of consistency through the season, number of top-level performances, standing up in the biggest moments possible and final trophy haul, Benzema ticks every box needed to win a Ballon dOr.',
  },

  {
    hidden: false,
    photo: './cap-detials/mane.jpeg',
    alt: 'Sadio Mane Photo',
    name: 'Sadio Mane',
    occupation: '33 goals, five assists. Won Africa Cup of Nations, FA Cup & Carabao Cup.',
    description: ' His trophy haul, as well as the help of recency bias, should help the Senegal international finish on the Ballon d Or podium,',
  },

  {
    hidden: true,
    photo: './cap-detials/salah.jpeg',
    alt: 'Mohamed Salah Photo',
    name: 'Mohamed Salah',
    occupation: '33 goals, 19 assists. Won FA Cup & Carabao Cup.',
    description: ' the Egypt star had a superb start to the season but slowly faded away due to injuries.',
  },

  {
    hidden: true,
    photo: './cap-detials/lewa.jpeg',
    alt: 'Robert Lewandowski Photo',
    name: 'Robert Lewandowski',
    occupation: '57 goals, 12 assists. Won Bundesliga & DFL-Supercup',
    description: 'Lewandowski has his feet up after a long season,'
  },

  {
    hidden: true,
    photo: './cap-detials/mb.jpeg',
    alt: 'Kylian Mbappe Photo',
    name: 'Kylian Mbappe',
    occupation: '49 goals, 31 assists. Won Ligue 1 & UEFA Nations League',
    description: 'Can Mbappe win the Ballon d Or by staying in Ligue 1?The answer is yes, but he will need PSG to raise their game in the Champions League.',
  },

  {
    hidden: true,
    photo: './cap-detials/vini.jpeg',
    alt: 'Marshmello lastfm Photo',
    name: 'Vinicius Junior ',
    occupation: '22 goals, 19 assists. Won Champions League, La Liga & Supercopa de Espana.',
    description: 'The UCL final match-winner, Vinicius capped his breakout campaign with the biggest goal of the  season to secure Real Madrids 14th European Cup..',
  },

];

function menuToggle() {
  document.querySelector('.mobile-nav').classList.toggle('active');
  document.querySelector('.hamburger').classList.toggle('hide');
}

hamburgerBtn.addEventListener('click', menuToggle);
crossBtn.addEventListener('click', menuToggle);

navLinks.forEach((navItem) => {
  navItem.addEventListener('click', menuToggle);
});

function loadFeaturedSpeakers(arr) {
  arr.forEach((each) => {
    const speaker = document.createElement('div');
    speaker.className = 'speaker flex';
    const speakerImg = document.createElement('img');
    speakerImg.setAttribute('src', each.photo);
    speakerImg.setAttribute('alt', each.alt);
    speaker.appendChild(speakerImg);
    const speakerInfo = document.createElement('div');
    speakerInfo.className = 'speakerInfo flex';
    const speakerName = document.createElement('h2');
    speakerName.textContent = each.name;
    speakerInfo.appendChild(speakerName);
    const speakerRank = document.createElement('span');
    speakerRank.textContent = each.occupation;
    speakerInfo.appendChild(speakerRank);
    const separator = document.createElement('hr');
    speakerInfo.appendChild(separator);
    const speakerPara = document.createElement('p');
    speakerPara.textContent = each.description;
    speakerInfo.appendChild(speakerPara);
    speaker.appendChild(speakerInfo);
    document.querySelector('.spakers-wrapper').appendChild(speaker);
  });
}

function renderSpeakers() {
  document.querySelector('.spakers-wrapper').innerHTML = '';
  if (visualViewport.width > 768) {
    loadFeaturedSpeakers(djData);
  } else loadFeaturedSpeakers(djData.filter((dj) => dj.hidden === false));
}

renderSpeakers();
window.addEventListener('resize', renderSpeakers);

document.getElementById('moreBtn').addEventListener('click', (e) => {
  loadFeaturedSpeakers(djData.filter((dj) => dj.hidden === true));
  e.target.remove();
});
