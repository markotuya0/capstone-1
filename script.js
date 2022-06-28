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
    description: ' Mane came within Thibaut Courtois fingertips of opening the scoring in the Champions League final, with a strike that would have crowned his superb 2022. His trophy haul, as well as the help of recency bias, should help the Senegal international finish on the Ballon d Or podium, but the wait for a first African winner since George Weah in 1995 is set to continue.',
  },

  {
    hidden: true,
    photo: './cap-detials/salah.jpeg',
    alt: 'Mohamed Salah Photo',
    name: 'Mohamed Salah',
    occupation: '33 goals, 19 assists. Won FA Cup & Carabao Cup.',
    description: 'On another night, Salah might have been celebrating a Champions League-final hat-trick, but in Thibaut Courtois he came up against an immovable object in Paris. Still, the Egypt stars superb form in the first half of the season, when he was undoubtedly the best player on the planet, should not be forgotten by the Ballon d Or judges, even if he struggled to maintain that level throughout the whole campaign.',
  },

  {
    hidden: true,
    photo: './cap-detials/lewa.jpeg',
    alt: 'Robert Lewandowski Photo',
    name: 'Robert Lewandowski',
    occupation: '57 goals, 12 assists. Won Bundesliga & DFL-Supercup',
    description: 'Lewandowski has his feet up after a long season, though his agent is working overtime to get him out of Bayern Munich.Talks with Barcelona have already begun, but a potential move to Camp Nou is unlikely to be straightforward.',
  },

  {
    hidden: true,
    photo: './cap-detials/mb.jpeg',
    alt: 'Kylian Mbappe Photo',
    name: 'Kylian Mbappe',
    occupation: '49 goals, 31 assists. Won Ligue 1 & UEFA Nations League',
    description: 'Can Mbappe win the Ballon d Or by staying in Ligue 1?The answer is yes, but he will need PSG to raise their game in the Champions League, and perhaps win another World Cup in Qatar, if he is to take the crown in 2023.',
  },

  {
    hidden: true,
    photo: './cap-detials/vini.jpeg',
    alt: 'Marshmello lastfm Photo',
    name: 'Vinicius Junior ',
    occupation: '22 goals, 19 assists. Won Champions League, La Liga & Supercopa de Espana.',
    description: 'The Champions League final match-winner, Vinicius capped his breakout campaign with the biggest goal of the European club season to secure Real Madrids 14th European Cup.With Brazil one of the favourites for the upcoming World Cup, who is to say that the forward wont be right in the Ballon d Or mix this time in 2023?.',
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
