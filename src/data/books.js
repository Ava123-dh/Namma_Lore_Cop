// ---------------------------------------------------------------------------
// The bookshelf: books on Karnataka and Bengaluru by Indian writers, in shelf
// order. The state's long story comes first, then the city's, and Discovering
// Bengaluru closes the shelf.
//
// `rating` and `ratings` are the Goodreads average and count, and every review
// is quoted word for word from the book's Goodreads page (October 2026). Only
// four- and five-star reviews that recommend the book are picked. Trimmed
// quotes are marked with an ellipsis; nothing is reworded.
//
// Each book's cover is public/images/books/<id>.jpg (and a small <id>-sm.jpg
// for the shelf). `aspect` is the cover's width over its height, so every book
// stands on the shelf at its real proportions; `spine` is the colour along the
// cover's spine edge and `ink` the print on it; `short` is the spine title.
// ---------------------------------------------------------------------------

export const books = [
  {
    id: 'concise-history-karnataka',
    title: 'A Concise History of Karnataka',
    short: 'A Concise History of Karnataka',
    author: 'Suryanath U. Kamath',
    year: 1980,
    goodreads: 'https://www.goodreads.com/book/show/25054399',
    rating: 3.87,
    ratings: 106,
    aspect: 0.666,
    spine: '#c89f37',
    ink: '#1f1e1c',
    synopsis:
      'The one-volume history most Kannadigas meet first. Kamath covers the whole run, from the ancient and medieval kingdoms through every empire that ruled the region to the freedom struggle and the Ekikarana movement that made one Karnataka. It is also in Kannada as Karnatakada Sankshipta Itihasa.',
    reviews: [
      {
        by: 'Ashish Iyer',
        stars: 4,
        text: 'Great primer on Karnataka history. … I wish every state had this kind of history books.',
      },
      {
        by: 'Aditya Kulkarni',
        stars: 5,
        text: 'Any person who is interested in knowing about the history of Karnataka has to read this epic book.',
      },
    ],
  },
  {
    id: 'enigmas-of-karnataka',
    title: 'Enigmas of Karnataka: Mystery Meets History',
    short: 'Enigmas of Karnataka',
    author: 'S. Shyam Prasad',
    year: 2018,
    goodreads: 'https://www.goodreads.com/book/show/38329093',
    rating: 4.0,
    ratings: 32,
    aspect: 0.621,
    spine: '#3c1a14',
    ink: '#fffaf0',
    synopsis:
      'A short book that tests Karnataka’s favourite legends against the evidence. Did the Hoysala king Vishnuvardhana make up the story of his dynasty’s founder? Does Bengaluru’s Kadlekai Parishe really go back to the city’s founding? Was Jakanachari, the great temple builder, a real person? Shyam Prasad leans on the scholars to sort fact from story.',
    reviews: [
      {
        by: 'Bharat',
        stars: 4,
        text: 'A good book that encourages digging of historical tales you have been fed throughout your life.',
      },
      {
        by: 'Ashish Iyer',
        stars: 4,
        text: 'Small book. This book tries to clear some of myth or perception.',
      },
    ],
  },
  {
    id: 'lords-of-the-deccan',
    title: 'Lords of the Deccan: Southern India from the Chalukyas to the Cholas',
    short: 'Lords of the Deccan',
    author: 'Anirudh Kanisetti',
    year: 2022,
    goodreads: 'https://www.goodreads.com/book/show/60051983',
    rating: 4.2,
    ratings: 934,
    aspect: 0.662,
    spine: '#0e0d0a',
    ink: '#fffaf0',
    synopsis:
      'The Deccan between the sixth and twelfth centuries, when the Chalukyas of Badami and then the Rashtrakutas were among the strongest powers in India. Kanisetti tells it like a political thriller, with elephant warfare, betrayals, and kings using temples and languages to show who was in charge. It is popular history, written for anyone curious about the period.',
    reviews: [
      {
        by: 'SANJAY',
        stars: 4,
        text: 'This is perhaps history as it should have been taught in secondary schools, making it all come alive.',
      },
      {
        by: 'Harsha Raghuram',
        stars: 5,
        text: 'Standing ovation! Thoroughly enjoyed reading this debut work by Anirudh Kanisetti.',
      },
    ],
  },
  {
    id: 'raya',
    title: 'Raya: Krishnadevaraya of Vijayanagara',
    short: 'Raya',
    author: 'Srinivas Reddy',
    year: 2020,
    goodreads: 'https://www.goodreads.com/book/show/52668624',
    rating: 3.71,
    ratings: 273,
    aspect: 0.679,
    spine: '#121212',
    ink: '#fffaf0',
    synopsis:
      'Krishnadevaraya took the Vijayanagara throne in 1509 with enemies on every side: the Gajapati king of Orissa, the Deccan Sultans, rebel chiefs in the south and the Portuguese on the coast. This short biography follows his twenty-year reign and its campaigns, with passages from the Telugu poetry the king wrote himself, translated by Reddy.',
    reviews: [
      {
        by: 'VENKATRAMAN C K',
        stars: 5,
        text: 'The book is a must read for anyone interested in Indian history. The author manages to capture both the man and the king.',
      },
      {
        by: 'Chetan Kalyan',
        stars: 5,
        text: 'Short, yet filled with detail about the life of a legend.',
      },
    ],
  },
  {
    id: 'splendours-of-royal-mysore',
    title: 'Splendours of Royal Mysore: The Untold Story of the Wodeyars',
    short: 'Splendours of Royal Mysore',
    author: 'Vikram Sampath',
    year: 2008,
    goodreads: 'https://www.goodreads.com/book/show/6709752',
    rating: 4.21,
    ratings: 131,
    aspect: 0.637,
    spine: '#bc9067',
    ink: '#1f1e1c',
    synopsis:
      'Six hundred years of the Wodeyars, from the dynasty’s beginnings around 1399, through the fall of Vijayanagara and Mysore’s rise under kings like Raja Wodeyar and Chikkadevaraja, to the Haidar Ali and Tipu Sultan years and the family’s return to the throne. Sampath also writes about music, and the court’s music and art get as much room as its wars.',
    reviews: [
      {
        by: 'Santrupth Kumar',
        stars: 5,
        text: 'Look nowhere else for a more comprehensive yet elaborate and detailed description of the history of Mysore.',
      },
      {
        by: 'Raghu Chilukuri',
        stars: 5,
        text: 'May be somewhat terse/dull in places and the book may be slightly long (covers from 1300s to 1900s), but I would definitely recommend it if you’re a history buff.',
      },
    ],
  },
  {
    id: 'tipu-sultan-saga',
    title: 'Tipu Sultan: The Saga of Mysore’s Interregnum, 1760–1799',
    short: 'Tipu Sultan',
    author: 'Vikram Sampath',
    year: 2024,
    goodreads: 'https://www.goodreads.com/book/show/218693417',
    rating: 4.2,
    ratings: 86,
    aspect: 0.676,
    spine: '#2c6258',
    ink: '#fffaf0',
    synopsis:
      'A nearly 1,000-page account of the forty years when Haidar Ali and then Tipu Sultan ruled Mysore in place of the Wodeyars, and fought the British in four Anglo-Mysore Wars. Sampath credits Tipu as a soldier and administrator but is hard on his campaigns in Malabar, Coorg and Mangalore.',
    reviews: [
      {
        by: 'Aditya Saraff',
        stars: 5,
        text: 'Took two weeks to finish. 900 pages. This is the most exhaustive, extensive and authoritative account on Tipu that I have come across.',
      },
      {
        by: 'Nishu Thakur',
        stars: 5,
        text: 'Probably the best book on Tipu.',
      },
    ],
  },
  {
    // Not out yet, so Goodreads has no page for it and there are no ratings;
    // the second click goes to the publisher instead
    id: 'bengaluru-comprehensive-history',
    title: 'Bengaluru: The Comprehensive History to the Dawn of Independence',
    short: 'Bengaluru',
    author: 'Ramjee Chandran',
    year: 2026,
    due: 'November 2026',
    goodreads: null,
    elsewhere: { name: 'Penguin', url: 'https://www.penguin.co.in/book/bengaluru/' },
    rating: null,
    ratings: 0,
    aspect: 0.637,
    spine: '#fbeed7',
    ink: '#1f1e1c',
    synopsis:
      'Bengaluru had no obvious reason to exist: no big river, no port, no fertile plain, only a rocky plateau 3,000 feet up. Chandran traces how a city grew there anyway, from the dolmens and cave paintings of its first people and the Roman coins left along old trade routes, through Kempe Gowda’s great marketplace, to the British and the maharajas of Mysore. He also hosts the podcast The History of Bangalore.',
    reviews: [],
  },
  {
    id: 'bangalore-through-the-centuries',
    title: 'Bangalore Through the Centuries',
    short: 'Bangalore Through the Centuries',
    author: 'M. Fazlul Hasan',
    year: 1970,
    goodreads: 'https://www.goodreads.com/book/show/9824139',
    rating: 4.27,
    ratings: 33,
    aspect: 0.652,
    spine: '#687b8e',
    ink: '#fffaf0',
    synopsis:
      'The classic history of the city. It opens with Kempegowda’s fort and the boiled-beans story behind the name, then runs through Shahji Bhosle, the Wodeyars, Haidar and Tipu and the British Cantonment. It was out of print for decades and hard to find until a new edition came out in 2023.',
    reviews: [
      {
        by: 'Shyam Kodavarthi',
        stars: 4,
        text: 'A must read book for Bangaloreans and people interested in Bangalore. A thoroughly researched book.',
      },
      {
        by: 'Jonathan Steffanoni',
        stars: 5,
        text: 'The recently published edition of Bangalore through the Centuries (Metaform) is an absolute pleasure to read in hard copy.',
      },
    ],
  },
  {
    id: 'bangalore-story-of-a-city',
    title: 'Bangalore: The Story of a City',
    short: 'Bangalore',
    author: 'Maya Jayapal',
    year: 1997,
    goodreads: 'https://www.goodreads.com/book/show/785991',
    rating: 4.8,
    ratings: 5,
    aspect: 0.66,
    spine: '#9a9aa2',
    ink: '#1f1e1c',
    synopsis:
      'Maya Jayapal’s first book on Bangalore tells the city’s story up to the 1990s in photographs and short vignettes. It covers the Garden City, the Pensioner’s Paradise and the town that grew up around them, and it has become a rare find.',
    reviews: [
      {
        by: 'Raksha Bhat',
        stars: 5,
        text: 'With intensive research and references, photographs and vignettes are beautifully compiled. The writing is as welcoming as the city.',
      },
    ],
  },
  {
    id: 'century-of-tales',
    title: 'Bangalore: A Century of Tales from City & Cantonment',
    short: 'Bangalore',
    author: 'Peter Colaco',
    year: 2003,
    goodreads: 'https://www.goodreads.com/book/show/25350920',
    rating: 3.8,
    ratings: 153,
    aspect: 0.587,
    spine: '#4d7691',
    ink: '#fffaf0',
    synopsis:
      'Funny, fond essays on a hundred years of Bangalore by a man born on Great Road who grew up between there and Fraser Town. Colaco covers City versus Cantonment, monkey-top houses, the weather and school admissions, with drawings by Paul Fernandes.',
    reviews: [
      {
        by: 'Abhishek Anbazhagan',
        stars: 4,
        text: 'There are very few books that make you laugh out loud and fewer that achieve not just that but are also extremely insightful.',
      },
      {
        by: 'Chethan SP',
        stars: 5,
        text: 'A treasure for everyone who loves Bangalore.',
      },
    ],
  },
  {
    id: 'promise-of-the-metropolis',
    title: 'The Promise of the Metropolis: Bangalore’s Twentieth Century',
    short: 'The Promise of the Metropolis',
    author: 'Janaki Nair',
    year: 2005,
    goodreads: 'https://www.goodreads.com/book/show/1122257',
    rating: 4.32,
    ratings: 25,
    aspect: 0.68,
    spine: '#b6b1ad',
    ink: '#1f1e1c',
    synopsis:
      'A historian’s account of how Bangalore was planned, imagined and lived in over the twentieth century, as a Cantonment and a princely capital grew into a metropolis. Nair writes about planning, law, architecture, language and gender, and about how the city’s people kept arguing over what it means to be a citizen. It is an academic book, for readers who want depth.',
    reviews: [],
  },
  {
    id: 'multiple-city',
    title: 'Multiple City: Writings on Bangalore',
    short: 'Multiple City',
    author: 'Aditi De (ed.)',
    year: 2008,
    goodreads: 'https://www.goodreads.com/book/show/10529808',
    rating: 3.71,
    ratings: 105,
    aspect: 0.647,
    spine: '#f7f5ec',
    ink: '#1f1e1c',
    synopsis:
      'About fifty pieces on Bangalore, including essays, stories, poems, cartoons and translations from Kannada, by writers from R.K. Narayan and Ramachandra Guha to Mahatma Gandhi and Winston Churchill. Together they run from Kempe Gowda’s founding of the town around 1537 to the IT boom.',
    reviews: [
      {
        by: 'Swati',
        stars: 4,
        text: 'What a delightful book! Filled with essays, articles, poems and cartoons on Bangalore, this book gives you a multi-directional perspective on the city.',
      },
      {
        by: 'Aditi Mahale',
        stars: 5,
        text: 'An excellent read for anyone who wants to know about the origins and development of this city.',
      },
    ],
  },
  {
    id: 'nature-in-the-city',
    title: 'Nature in the City: Bengaluru in the Past, Present, and Future',
    short: 'Nature in the City',
    author: 'Harini Nagendra',
    year: 2016,
    goodreads: 'https://www.goodreads.com/book/show/29386799',
    rating: 4.15,
    ratings: 66,
    aspect: 0.665,
    spine: '#e3d8c5',
    ink: '#1f1e1c',
    synopsis:
      'An ecologist’s history of Bengaluru’s trees, gardens and lakes, from the first settlements in the sixth century CE to today. Nagendra goes through home gardens, slums, streets, parks, sacred spaces and lakes to show how the Garden City got its green, and how much of it has been lost.',
    reviews: [
      {
        by: 'T.R.',
        stars: 4,
        text: 'As a scholarly work on the ecological history of Bengaluru … this book breaks new ground and makes for a refreshing read.',
      },
      {
        by: 'Fred Rose',
        stars: 4,
        text: 'The clearest discussion I have seen about Bangalore’s history from an ecology standpoint.',
      },
    ],
  },
  {
    id: 'becoming-bangalore',
    title: 'Becoming Bangalore: Stories That Shaped a Hometown',
    short: 'Becoming Bangalore',
    author: 'Roopa Pai',
    year: 2025,
    goodreads: 'https://www.goodreads.com/book/show/222686558',
    rating: 4.25,
    ratings: 66,
    aspect: 0.818,
    spine: '#4b4243',
    ink: '#fffaf0',
    synopsis:
      'Seventy-five short essays, first written as a newspaper column, on how a sixteenth-century settlement became the city it is today. They follow a scientist’s quest, a maharani’s foresight, an entrepreneur’s vision and a chief minister’s ambition, and they are arranged by the seasons and the city’s flowering trees.',
    reviews: [
      {
        by: 'Vivek',
        stars: 4,
        text: '‘Becoming Bangalore: Stories That Shaped a Hometown’ feels like sitting with a chatty, well-read older cousin who loves this city a little too much and wants you to love it back.',
      },
      {
        by: 'Saraswati',
        stars: 5,
        text: 'Learned so much that I didn’t know before about my hometown!',
      },
    ],
  },
  {
    id: 'discovering-bengaluru',
    title: 'Discovering Bengaluru: History, Neighbourhoods, Walks',
    short: 'Discovering Bengaluru',
    author: 'Meera Iyer',
    year: 2019,
    goodreads: 'https://www.goodreads.com/book/show/61348117',
    rating: 4.51,
    ratings: 65,
    aspect: 0.675,
    spine: '#917e74',
    ink: '#1f1e1c',
    synopsis:
      'Part history and part walking guide, from the convenor of INTACH’s Bengaluru chapter. Each of its nine chapters covers one part of the city, such as the old pete, the Cantonment, Basavanagudi and Malleshwaram, with archival maps and photographs and a walk to do yourself. Read it before you try the B’lore Walks.',
    reviews: [
      {
        by: 'Pranave Nanda',
        stars: 5,
        text: 'Books chronicling the advent and expansion of Bengaluru are rare, and this one is among those gems.',
      },
      {
        by: 'Shyam Kodavarthi',
        stars: 5,
        text: 'It’s a must-have for people who want to walk Bangalore (like I do) or for armchair enthusiasts interested in Bangalore.',
      },
    ],
  },
]
