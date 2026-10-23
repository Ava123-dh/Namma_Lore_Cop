// ---------------------------------------------------------------------------
// The five quizzes the wheel picks from. Questions avoid asking for dates —
// the one exception is the year Karnataka was formed, in "Modern Karnataka".
// `color` is the quiz's slice on the wheel.
// ---------------------------------------------------------------------------

export const quizzes = [
  {
    id: 'dynasties',
    title: 'Dynasties & Rulers',
    short: ['Dynasties', '& Rulers'],
    color: '#f97316',
    questions: [
      {
        question: 'Who founded the Kadamba Dynasty, the first native kingdom of Karnataka?',
        options: ['Mayurasharma', 'Pulakeshin I', 'Harihara I', 'Vishnuvardhana'],
        correct: 0,
        explanation: 'Mayurasharma founded the Kadamba dynasty, the first native kingdom of Karnataka, with Banavasi as its capital.'
      },
      {
        question: 'Which was the capital of the Kadamba dynasty?',
        options: ['Badami', 'Banavasi', 'Hampi', 'Halebidu'],
        correct: 1,
        explanation: 'Banavasi was the Kadamba capital and is one of the oldest towns in Karnataka.'
      },
      {
        question: 'Which empire had Hampi as its capital?',
        options: ['Chalukya Empire', 'Hoysala Empire', 'Vijayanagara Empire', 'Rashtrakuta Empire'],
        correct: 2,
        explanation: 'Hampi was the capital of the Vijayanagara Empire and one of the largest cities in the world at its peak.'
      },
      {
        question: 'Which Vijayanagara emperor is considered the greatest ruler of the dynasty?',
        options: ['Harihara I', 'Bukka Raya I', 'Krishnadevaraya', 'Achyuta Deva Raya'],
        correct: 2,
        explanation: 'Under Krishnadevaraya the empire reached its height in territory, culture and wealth.'
      },
      {
        question: 'The Battle of Talikota led to the decline of which empire?',
        options: ['Chalukya', 'Hoysala', 'Vijayanagara', 'Rashtrakuta'],
        correct: 2,
        explanation: 'The allied Deccan Sultanates defeated Vijayanagara at Talikota, and Hampi was sacked soon after.'
      },
      {
        question: 'Which Chalukya king stopped Emperor Harsha on the banks of the Narmada?',
        options: ['Pulakeshin II', 'Kirtivarman I', 'Vikramaditya VI', 'Mangalesha'],
        correct: 0,
        explanation: 'Pulakeshin II of Badami halted Harsha’s march south, one of the most celebrated victories in Karnataka’s history.'
      }
    ]
  },
  {
    id: 'temples',
    title: 'Temples & Monuments',
    short: ['Temples &', 'Monuments'],
    color: '#e11d48',
    questions: [
      {
        question: 'Which dynasty built the Kailasa Temple at Ellora?',
        options: ['Hoysala', 'Rashtrakuta', 'Chalukya', 'Kadamba'],
        correct: 1,
        explanation: 'The Kailasa Temple was carved out of a single rock by the Rashtrakuta king Krishna I.'
      },
      {
        question: 'Which dynasty is known for the temples at Belur and Halebidu?',
        options: ['Chalukya', 'Hoysala', 'Kadamba', 'Ganga'],
        correct: 1,
        explanation: 'The Hoysalas built Belur, Halebidu and Somanathapura, famous for their intricate soapstone carving.'
      },
      {
        question: 'The rock-cut cave temples at Badami were made by which dynasty?',
        options: ['Rashtrakuta', 'Chalukya', 'Hoysala', 'Kadamba'],
        correct: 1,
        explanation: 'The Chalukyas of Badami carved the cave temples into the red sandstone cliffs above Agastya lake.'
      },
      {
        question: 'Where is the giant monolithic statue of Gommateshwara (Bahubali)?',
        options: ['Hampi', 'Shravanabelagola', 'Mysuru', 'Udupi'],
        correct: 1,
        explanation: 'The Gommateshwara statue stands on Vindhyagiri hill at Shravanabelagola, a major Jain pilgrimage site.'
      },
      {
        question: 'The famous stone chariot of Hampi stands in which temple?',
        options: ['Virupaksha Temple', 'Vittala Temple', 'Hazara Rama Temple', 'Achyutaraya Temple'],
        correct: 1,
        explanation: 'The stone chariot, a shrine to Garuda, is in the courtyard of the Vittala Temple — it is on the ₹50 note.'
      },
      {
        question: 'The Gol Gumbaz, with its famous whispering gallery, is in which city?',
        options: ['Kalaburagi', 'Bidar', 'Vijayapura', 'Raichur'],
        correct: 2,
        explanation: 'Gol Gumbaz in Vijayapura (Bijapur) is the tomb of Mohammed Adil Shah of the Adil Shahi dynasty.'
      }
    ]
  },
  {
    id: 'literature',
    title: 'Kannada Language & Literature',
    short: ['Language &', 'Literature'],
    color: '#eab308',
    questions: [
      {
        question: 'Who is known as "Adikavi" (First Poet) in Kannada literature?',
        options: ['Ranna', 'Pampa', 'Ponna', 'Basavanna'],
        correct: 1,
        explanation: 'Pampa is called "Adikavi". His Vikramarjuna Vijaya is a retelling of the Mahabharata.'
      },
      {
        question: 'Pampa, Ponna and Ranna are together known as the…',
        options: ['Ratnatraya (Three Gems)', 'Trimurti', 'Dasa trio', 'Navaratna'],
        correct: 0,
        explanation: 'The three great poets of early Kannada literature are honoured as the Ratnatraya, the "three gems".'
      },
      {
        question: 'Kavirajamarga, the earliest surviving Kannada work on poetics, is linked to which king’s court?',
        options: ['Amoghavarsha I', 'Krishnadevaraya', 'Vishnuvardhana', 'Tipu Sultan'],
        correct: 0,
        explanation: 'Kavirajamarga came out of the court of the Rashtrakuta king Amoghavarsha I.'
      },
      {
        question: 'Vachanas — short, plain-spoken poems — are most closely tied to which saint-reformer?',
        options: ['Purandara Dasa', 'Basavanna', 'Kanaka Dasa', 'Madhvacharya'],
        correct: 1,
        explanation: 'Basavanna led the Vachana movement, writing in everyday Kannada against caste and ritual.'
      },
      {
        question: 'Who was the first Kannada writer to win the Jnanpith Award?',
        options: ['Kuvempu', 'D. R. Bendre', 'Shivaram Karanth', 'U. R. Ananthamurthy'],
        correct: 0,
        explanation: 'Kuvempu won the Jnanpith for Sri Ramayana Darshanam. He also wrote the state anthem, "Jaya Bharata Jananiya Tanujate".'
      },
      {
        question: 'Purandara Dasa is called the "Pitamaha" (grandfather) of which music tradition?',
        options: ['Hindustani music', 'Carnatic music', 'Yakshagana', 'Qawwali'],
        correct: 1,
        explanation: 'Purandara Dasa laid out the basic lessons still used to teach Carnatic music today.'
      }
    ]
  },
  {
    id: 'warriors',
    title: 'Forts & Warriors',
    short: ['Forts &', 'Warriors'],
    color: '#16a34a',
    questions: [
      {
        question: 'Tipu Sultan was also known as the…',
        options: ['Lion of Mysore', 'Tiger of Mysore', 'Eagle of Mysore', 'Falcon of Mysore'],
        correct: 1,
        explanation: 'Tipu Sultan was called the "Tiger of Mysore" for his fierce resistance against the British.'
      },
      {
        question: 'Which military innovation is Tipu Sultan best known for?',
        options: ['War elephants', 'Naval warfare', 'Rocket artillery', 'Cavalry tactics'],
        correct: 2,
        explanation: 'Mysorean iron-cased rockets were far ahead of their time and were later studied and copied by the British.'
      },
      {
        question: 'Who was Tipu Sultan’s father, who rose from soldier to ruler of Mysore?',
        options: ['Hyder Ali', 'Chikka Devaraja', 'Kempe Gowda', 'Nanjaraja'],
        correct: 0,
        explanation: 'Hyder Ali rose through the Mysore army to become the kingdom’s de facto ruler.'
      },
      {
        question: 'Which island town was Tipu Sultan’s capital and last stand?',
        options: ['Srirangapatna', 'Shivanasamudra', 'Gokarna', 'Hampi'],
        correct: 0,
        explanation: 'Tipu died defending Srirangapatna, his fortified capital on an island in the Kaveri.'
      },
      {
        question: 'Onake Obavva fought off invaders with a wooden pestle at which fort?',
        options: ['Bidar Fort', 'Chitradurga Fort', 'Bangalore Fort', 'Gajendragad Fort'],
        correct: 1,
        explanation: 'Obavva guarded a narrow gap in Chitradurga Fort’s walls with an onake, a rice-pounding pestle.'
      },
      {
        question: 'Kittur Rani Chennamma led an armed rebellion against whom?',
        options: ['The Mughals', 'The Marathas', 'The British East India Company', 'The Portuguese'],
        correct: 2,
        explanation: 'Rani Chennamma of Kittur fought the East India Company over its refusal to recognise her adopted heir.'
      }
    ]
  },
  {
    id: 'modern',
    title: 'Modern Karnataka',
    short: ['Modern', 'Karnataka'],
    color: '#2563eb',
    questions: [
      {
        question: 'In which year was Karnataka state officially formed?',
        options: ['1947', '1950', '1956', '1973'],
        correct: 2,
        explanation: 'Karnataka was formed on November 1, 1956, under the States Reorganisation Act.'
      },
      {
        question: 'What was the state called when it was first formed?',
        options: ['Karunadu', 'Mysore State', 'Kannada Nadu', 'Deccan State'],
        correct: 1,
        explanation: 'The unified Kannada-speaking state was first called Mysore State and was renamed Karnataka later.'
      },
      {
        question: 'Who founded the city of Bengaluru?',
        options: ['Tipu Sultan', 'Kempe Gowda I', 'Hyder Ali', 'Krishnadevaraya'],
        correct: 1,
        explanation: 'Kempe Gowda I, a chieftain under Vijayanagara, founded Bengaluru and built a mud fort there.'
      },
      {
        question: 'Which building in Bengaluru houses the state legislature?',
        options: ['Attara Kacheri', 'Vidhana Soudha', 'Bangalore Palace', 'Town Hall'],
        correct: 1,
        explanation: 'The Vidhana Soudha, built in the Neo-Dravidian style, is the seat of the Karnataka legislature.'
      },
      {
        question: 'Which engineer and Diwan of Mysore designed the Krishna Raja Sagara dam?',
        options: ['Sir M. Visvesvaraya', 'Sir Mirza Ismail', 'C. V. Raman', 'Kengal Hanumanthaiah'],
        correct: 0,
        explanation: 'Sir M. Visvesvaraya designed the KRS dam. India celebrates Engineers’ Day on his birthday.'
      },
      {
        question: 'What is the name "Karnataka" generally taken to mean?',
        options: ['Land of rivers', 'Lofty or elevated land', 'Land of kings', 'Land of sandalwood'],
        correct: 1,
        explanation: 'The name is usually traced to "Karu nadu", meaning elevated or lofty land.'
      }
    ]
  }
]
