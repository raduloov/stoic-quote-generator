// Elements
const marcusImg = document.getElementById('marcus');
const epictetusImg = document.getElementById('epictetus');
const senecaImg = document.getElementById('seneca');
const aristotleImg = document.getElementById('aristotle');
const confuciusImg = document.getElementById('confucius');
const quoteHTML = document.getElementById('quote');
const authorHTML = document.getElementById('author');
const generateBtn = document.getElementById('generate');
const shareBtn = document.getElementById('share');
const closeBtn = document.getElementById('close');
const mainContent = document.querySelector('.container');
const shareScreen = document.querySelector('.share');
const body = document.body;

// Database
const marcus = {
  quotes: [
    '“You have power over your mind - not outside events. Realize this, and you will find strength.”',
    '“Dwell on the beauty of life. Watch the stars, and see yourself running with them.”',
    '“The happiness of your life depends upon the quality of your thoughts.”',
    '“Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.”',
    '“Waste no more time arguing about what a good man should be. Be one.”',
    '“If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.”',
    '“When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love ...”',
    '“The best revenge is to be unlike him who performed the injury.”',
    '“Accept the things to which fate binds you, and love the people with whom fate brings you together,but do so with all your heart.”',
    '“The soul becomes dyed with the colour of its thoughts.”',
    '“It is not death that a man should fear, but he should fear never beginning to live.”',
    '“Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.”',
    '“Our life is what our thoughts make it.”',
    '“If someone is able to show me that what I think or do is not right, I will happily change, for I seek the truth, by which no one was ever truly harmed. It is the person who continues in his self-deception and ignorance who is harmed.”',
    '“I have often wondered how it is that every man loves himself more than all the rest of men, but yet sets less value on his own opinion of himself than on the opinion of others.”',
    '“Whenever you are about to find fault with someone, ask yourself the following question: What fault of mine most nearly resembles the one I am about to criticize?”',
    '“If it is not right do not do it; if it is not true do not say it.”',
    '“The object of life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane.”',
    '“Very little is needed to make a happy life; it is all within yourself in your way of thinking.”',
    '“Reject your sense of injury and the injury itself disappears.”',
    '“The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.”',
    '“How much more grievous are the consequences of anger than the causes of it.”',
    '“Do not act as if you were going to live ten thousand years. Death hangs over you. While you live, while it is in your power, be good.”',
    '“How much time he saves who does not look to see what his neighbour says or does or thinks”',
    "“What's good for the hive is good for the bee.”",
  ],
  author: 'Marcus Aurelius',
  image: marcusImg,
};

const epictetus = {
  quotes: [
    '“If anyone tells you that a certain person speaks ill of you, do not make excuses about what is said of you but answer, "He was ignorant of my other faults, else he would not have mentioned these alone."”',
    '“Wealth consists not in having great possessions, but in having few wants.”',
    "“Don't explain your philosophy. Embody it.”",
    '“There is only one way to happiness and that is to cease worrying about things which are beyond the power or our will. ”',
    '“Man is not worried by real problems so much as by his imagined anxieties about real problems”',
    '“First say to yourself what you would be and then do what you have to do.”',
    "“It's not what happens to you, but how you react to it that matters.”",
    '“If you want to improve, be content to be thought foolish and stupid.”',
    '“He who laughs at himself never runs out of things to laugh at.”',
    '“Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.”',
    '“It is impossible for a man to learn what he thinks he already knows.”',
    "“Circumstances don't make the man, they only reveal him to himself.”",
    '“People are not disturbed by things, but by the views they take of them.”',
    "“Other people's views and troubles can be contagious. Don't sabotage yourself by unwittingly adopting negative, unproductive attitudes through your associations with others.”",
    '“Only the educated are free.”',
    '“You are a little soul carrying around a corpse”',
    '“No man is free who is not master of himself.”',
    '“Seek not the good in external things, seek it in yourselves.”',
  ],
  author: 'Epictetus',
  image: epictetusImg,
};

const seneca = {
  quotes: [
    '“Sometimes even to live is an act of courage.”',
    '“Luck is what happens when preparation meets opportunity.”',
    '“All cruelty springs from weakness.”',
    '“Religion is regarded by the common people as true, by the wise as false, and by rulers as useful.”',
    '“Non est ad astra mollis e terris via" - "There is no easy way from the earth to the stars”',
    '“Difficulties strengthen the mind, as labor does the body.”',
    '“We suffer more often in imagination than in reality”',
    '“You act like mortals in all that you fear, and like immortals in all that you desire”',
    '“As is a tale, so is life: not how long it is, but how good it is, is what matters.”',
    '“Hang on to your youthful enthusiasms -- you’ll be able to use them better when you’re older.”',
    '“If a man knows not to which port he sails, no wind is favorable.”',
    '“It is the power of the mind to be unconquerable.”',
    '“It is not that we have so little time but that we lose so much. ... The life we receive is not short but we make it so; we are not ill provided but use what we have wastefully.”',
    '“It is not the man who has too little, but the man who craves more, that is poor. ”',
    '“Begin at once to live, and count each separate day as a separate life.”',
    '“He who is brave is free”',
    '“If you really want to escape the things that harass you, what you’re needing is not to be in a different place but to be a different person.”',
    '“No man was ever wise by chance”',
    '“Associate with people who are likely to improve you.”',
    '“He suffers more than necessary, who suffers before it is necessary.”',
    '“Only time can heal what reason cannot.”',
  ],
  author: 'Lucius Annaeus Seneca',
  image: senecaImg,
};

const aristotle = {
  quotes: [
    '“Knowing yourself is the beginning of all wisdom.”',
    '“It is the mark of an educated mind to be able to entertain a thought without accepting it.”',
    '“What is a friend? A single soul dwelling in two bodies.”',
    '“Educating the mind without educating the heart is no education at all.”',
    '“No great mind has ever existed without a touch of madness.”',
    '“Happiness depends upon ourselves.”',
    "“Anybody can become angry — that is easy, but to be angry with the right person and to the right degree and at the right time and for the right purpose, and in the right way — that is not within everybody's power and is not easy.”",
    '“Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution; it represents the wise choice of many alternatives - choice, not chance, determines your destiny.”',
    '“Wishing to be friends is quick work, but friendship is a slow ripening fruit.”',
    '“Happiness is the meaning and the purpose of life, the whole aim and end of human existence.”',
    '“A friend to all is a friend to none.”',
    '“Patience is bitter, but its fruit is sweet.”',
    '“Those who educate children well are more to be honored than they who produce them; for these only gave them life, those the art of living well.”',
    '“Those who know, do. Those that understand, teach.”',
    '“He who has overcome his fears will truly be free.”',
    '“Whosoever is delighted in solitude, is either a wild beast or a god.”',
    '“The educated differ from the uneducated as much as the living differ from the dead.”',
    '“I count him braver who overcomes his desires than him who conquers his enemies, for the hardest victory is over self.”',
    '“Pleasure in the job puts perfection in the work.”',
    "“Learning is not child's play; we cannot learn without pain.”",
    '“The whole is greater than the sum of its parts.”',
  ],
  author: 'Aristotle',
  image: aristotleImg,
};

const confucius = {
  quotes: [
    '“By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.”',
    '“Everything has beauty, but not everyone sees it.”',
    '“It does not matter how slowly you go as long as you do not stop.”',
    '“Wheresoever you go, go with all your heart.”',
    '“He who knows all the answers has not been asked all the questions.”',
    '“Life is really simple, but we insist on making it complicated.”',
    '“The man who moves a mountain begins by carrying away small stones.”',
    '“Study the past if you would define the future.”',
    '“Before you embark on a journey of revenge, dig two graves.”',
    '“Respect yourself and others will respect you.”',
    '“The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.”',
    '“When you see a good person, think of becoming like her/him. When you see someone not so good, reflect on your own weak points.”',
    '“Attack the evil that is within yourself, rather than attacking the evil that is in others.”',
    '“What the superior man seeks is in himself; what the small man seeks is in others.”',
    '“I hear and I forget. I see and I remember. I do and I understand.”',
    '“The hardest thing of all is to find a black cat in a dark room, especially if there is no cat.”',
    '“The gem cannot be polished without friction, nor man perfected without trials.”',
    '“We all have two lives, and the second one begins when we realize we only have one”',
  ],
  author: 'Confucius',
  image: confuciusImg,
};

const authorArray = [marcus, epictetus, seneca, aristotle, confucius];

// Generating random quote
const randomQuote = function (author) {
  author = authorArray[Math.floor(Math.random() * 5)];
  const quote = author.quotes[Math.floor(Math.random() * author.quotes.length)];

  quoteHTML.textContent = quote;
  authorHTML.textContent = author.author;

  if (!marcusImg.classList.contains('hidden'))
    marcusImg.classList.add('hidden');
  if (!epictetusImg.classList.contains('hidden'))
    epictetusImg.classList.add('hidden');
  if (!senecaImg.classList.contains('hidden'))
    senecaImg.classList.add('hidden');
  if (!aristotleImg.classList.contains('hidden'))
    aristotleImg.classList.add('hidden');
  if (!confuciusImg.classList.contains('hidden'))
    confuciusImg.classList.add('hidden');

  switch (author.author) {
    case 'Marcus Aurelius':
      marcusImg.classList.remove('hidden');
      break;
    case 'Epictetus':
      epictetusImg.classList.remove('hidden');
      break;
    case 'Lucius Annaeus Seneca':
      senecaImg.classList.remove('hidden');
      break;
    case 'Aristotle':
      aristotleImg.classList.remove('hidden');
      break;
    case 'Confucius':
      confuciusImg.classList.remove('hidden');
      break;
  }
};

randomQuote();

generateBtn.addEventListener('click', randomQuote);

// Copying (sharing) quote
const share = function () {
  mainContent.classList.add('overlay');
  body.classList.add('blur');
  shareScreen.classList.remove('hidden');
};

const close = function () {
  mainContent.classList.remove('overlay');
  body.classList.remove('blur');
  shareScreen.classList.add('hidden');
};

const copy = function () {
  const copyText = quoteHTML;
  const textArea = document.createElement('textarea');
  textArea.value = copyText.textContent + ` -${authorHTML.textContent}`;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('Copy');
  textArea.remove();

  share();
};

shareBtn.addEventListener('click', copy);
closeBtn.addEventListener('click', close);
