// Four heritage walking routes through Bengaluru's old city.
//
// The ground covered is the Pete (Kempegowda's merchant town) and the Kote
// (the fort Hyder Ali and Tipu Sultan rebuilt in stone). Rather than one long
// march through each, the area is split into four shorter themed routes that
// overlap on the map: two through the Pete and two through the Kote.
//
// The routes are our own. Stops, sequence and framing were chosen for what
// makes a coherent two-hour walk, and several places that rarely appear on
// the standard fort-and-market itinerary are included — the commodity streets
// west of Avenue Road, the Karaga temple in Thigalarpet, Cottonpete's dargah,
// the civic buildings on JC Road, Chamarajpet and Lalbagh.
//
// Each stop carries three layers:
//   bullets — what you are looking at
//   context — where it sits in the wider history of the city and the state
//   fact    — the story worth repeating afterwards
//
// Coordinates are careful approximations placed in walking order along the
// real streets; use the Directions button for exact navigation.

export const walks = [
  {
    id: 'pete-north',
    name: 'Walk 1: North Pete — Gates, Guilds & Avenue Road',
    short: 'North Pete',
    subtitle: 'The upper half of the merchant town: a vanished city gate, mission schools, and the trades that still name the streets',
    distance: '~2 km · about 2 hours',
    color: '#ea580c',
    colorSoft: '#f97316',
    center: [12.9705, 77.5786],
    intro:
      "Kempegowda's town was an oval of mud wall with four gates, and this walk covers its northern half. It runs down Avenue Road — the old Doddapete spine — past the buildings that arrived with the nineteenth century, then turns west into the lanes still named after what they sold.",
    // Things to do — every item below was checked against a public source in
    // September 2026 (Karnataka Tourism, the institutions' own sites, ASI and
    // press reporting). Anything that could not be confirmed was left out.
    todo: [
      {
        tag: 'Shop',
        title: 'Buy books on Avenue Road — on a weekday',
        detail:
          "Avenue Road and the lanes off it are the city's second-hand textbook market, and the shops buy books back as well as sell them. Most of them close on Sundays, so come midweek.",
      },
      {
        tag: 'Visit',
        title: 'Ask to see the Nenapu Museum of Banking',
        detail:
          'The banking museum inside the old Bank of Mysore has eight rooms of records and two old strong rooms. It is opened on request rather than kept open, so ask at the counter and expect to wait if the branch is busy.',
      },
      {
        tag: 'Shop',
        title: 'Balepet for bangles, Chickpet for cloth',
        detail:
          'Balepet is named for its bangle and musical-instrument sellers and still trades in both. Chickpet, a street away, is the old wholesale cloth and saree market.',
      },
      {
        tag: 'Festival',
        title: 'Catch the Karaga at the Cottonpete dargah',
        detail:
          'If you are here around the Chaitra full moon in March or April, the Bengaluru Karaga procession reaches the Tawakkal Mastan dargah — the last stop on this walk — during the night.',
      },
    ],
    stops: [
      {
        id: 'north1',
        num: 1,
        name: 'Anjaneya Temple at the Yelahanka Gate',
        position: [12.9745, 77.5803],
        type: 'Temple',
        address: 'Mysore Bank Circle, where Avenue Road meets KG Road',
        period: 'Kempegowda era · 16th–17th century',
        bullets: [
          "A Hanuman shrine that stood beside the Yelahanka Gate, the northern entrance to Kempegowda's mud-walled town.",
          'The deity is a Vijayanagara-style relief of Hanuman in mid-stride; smaller shrines to Vishnu and Lakshmi flank him.',
          'Vijayanagara vassals routinely posted Hanuman at gateways — a guardian for travellers and a warning to raiders.',
          'The gates were named for the roads they opened onto: Yelahanka, Halasuru, Anekal and Mysore. Not one survives.',
          'The temple is now the only marker of where the town ended and the road north began.',
        ],
        context:
          "Bengaluru was one of a string of Vijayanagara-era market towns laid out on the same plan — an oval walled pete, gates named for destinations, a guardian shrine at each. Chikkaballapur, Devanahalli and Magadi were built to the same idea.",
        fact:
          "At 4am on 7 March 1791, Cornwallis's infantry rushed this gate. The pete fell in roughly two hours — around 2,000 Mysorean and 131 British dead — and the grain and fodder captured inside made the siege of the stone fort only a matter of time.",
      },
      {
        id: 'north2',
        num: 2,
        name: 'The Old Bank of Mysore',
        position: [12.9743, 77.5808],
        type: 'Heritage Building',
        address: 'Mysore Bank Circle, opposite the Anjaneya temple',
        period: 'Bank founded 1913 · building 1923',
        bullets: [
          "Founded in 1913 by Krishnaraja Wodeyar IV, on Sir M Visvesvaraya's argument that the state needed a bank that would lend to farmers and small industry.",
          'The 1923 banking hall is double-height, carried on slim cast-iron columns and lit by clerestory windows above the ledger desks.',
          'Founded as The Bank of Mysore Ltd on 2 October 1913, it became State Bank of Mysore on 10 September 1959 as an SBI subsidiary.',
          "It merged into SBI on 1 April 2017, ending 104 years of independent banking. Inside is the Nenapu ('memory') museum of banking — eight rooms of ledgers, records and old strong rooms.",
          'The junction is still called Mysore Bank Circle, an address that outlived the bank itself.',
        ],
        context:
          'Princely Mysore built its own economic machinery rather than wait for British India to supply it — a state bank, a state-owned iron works at Bhadravathi, a hydroelectric station at Sivasamudram, the University of Mysore. The bank was one piece of that programme.',
        fact:
          'This circle was a flashpoint in the 1942 Quit India movement. Police firing on 17–18 August killed several protesters; a 1972 Martyrs Memorial behind the nearby Shanishwara temple names four of the dead.',
      },
      {
        id: 'north3',
        num: 3,
        name: 'Department of Public Instruction Offices',
        position: [12.9738, 77.5800],
        type: 'Heritage Building',
        address: 'Avenue Road at District Office Road',
        period: 'A school on this site from 1861',
        bullets: [
          'The deep-red building began as the London Mission High School, which moved into its own premises here in 1861.',
          "The plot was once part of the wide, cactus-choked ditch that ringed Kempegowda's mud fort — moat land nobody else wanted.",
          'It became Central High School in 1932 and later passed to the state education department.',
          'A hybrid: colonial proportions over a Madras-terrace roof, Mangalore tiles and lime-mortar walls that breathe.',
          'Protestant missions ran much of the early formal schooling here — the London Missionary Society, the Wesleyans and the Basel Mission all set up in the 1800s.',
        ],
        context:
          "Mission schools were also the reason a standardised written Kannada spread: missionaries needed textbooks, so they compiled grammars and dictionaries, and the state later adopted much of that work for its own schools.",
        fact:
          'Mission schools came with mission presses. From the mid-1800s the presses in Bengaluru were turning out Kannada primers, dictionaries and hymnals — among the earliest sustained printing in the language in this region, and part of the reason Avenue Road became a paper-and-books street.',
      },
      {
        id: 'north4',
        num: 4,
        name: 'Rice Memorial Church',
        position: [12.9712, 77.5795],
        type: 'Church',
        address: 'Avenue Road, about 300 m south of the school',
        period: 'Congregation from 1834 · present building 1917',
        bullets: [
          'Christians have worshipped on this spot since 1834; the present red building opened on 27 January 1917.',
          'It is named for Rev Benjamin Rice of the London Missionary Society, who preached the first Kannada sermon here.',
          'The front is unusually formal for a mission church — a classical pediment, paired Tuscan columns and Roman semi-circular arches.',
          'The earlier chapel was declared unsafe in 1907 after cracks appeared and was pulled down in 1912.',
          'It has been a Kannada-speaking congregation from the beginning, which is the whole point of its name.',
        ],
        context:
          'The pete had a church, a mosque, dozens of temples and several dargahs inside a square kilometre, all of them working at once. That density is the most honest thing about the old town.',
        fact:
          'Two Benjamin Rices left a mark on Karnataka. The father learned Kannada in about five months and wrote school textbooks and hymns. His son B L Rice read and published some 9,000 inscriptions across the twelve volumes of Epigraphia Carnatica — work that earned him the title Shasanapitamaha, grandsire of inscriptions.',
      },
      {
        id: 'north5',
        num: 5,
        name: 'Avenue Road: the Paper Spine',
        position: [12.9700, 77.5791],
        type: 'Trade Street',
        address: 'Avenue Road, between the church and Chickpete Road',
        period: 'Kempegowda-era spine · rebuilt frontages early 1900s',
        bullets: [
          "The town's main north–south street, laid out as Doddapete — the big market road — and renamed Avenue Road under municipal improvements.",
          'It was widened and given continuous arcaded shopfronts in the early twentieth century, which is why the ground floors line up above a jumble of much older buildings.',
          "Today it is the city's wholesale street for paper, stationery, account books and second-hand textbooks.",
          'Shops still run on the old logic: one commodity per stretch, family firms, narrow plots running deep behind a small frontage.',
          'Walk it early. By mid-morning the handcarts have taken every inch of road that the two-wheelers left.',
        ],
        context:
          'The pete was a wholesale town before it was anything else, and it still is. What changed is the commodity: cotton and grain gave way to paper, hardware and electronics, but the street-by-street specialisation survived intact.',
        fact:
          'Much of early Kannada publishing was sold from this street. Firms on and around Avenue Road printed and distributed the school texts, panchangas and novels that carried standardised written Kannada out to the rest of the state.',
      },
      {
        id: 'north6',
        num: 6,
        name: 'Ranganathaswamy Temple, Mutyalapete',
        position: [12.9690, 77.5783],
        type: 'Temple',
        address: 'Mutyalapete, a lane west off Avenue Road',
        period: 'Inscription dated 1628',
        bullets: [
          'Dedicated to Ranganatha — Vishnu reclining — with his consorts Bhoodevi and Niladevi.',
          'The mantapa pillars carry riders on rearing horses: Vijayanagara style with a Wodeyar stamp, and no two of them alike.',
          "It sits in the goldsmiths' quarter, an example of how the pete grouped each trade around its own temple.",
          'A Telugu inscription of 1628 records an agreement among the merchants of the Bengaluru pete.',
          'Mutyalapete means the pearl market — one more street named for what it once traded.',
        ],
        context:
          'That 1628 inscription is a rare direct voice from the merchant town: not a king recording a grant, but traders recording a deal among themselves, in Telugu, in a Kannada town. The pete was always a mixed-language place.',
        fact:
          'Temple pillars in the pete are a decent guide to who was in charge when. Rearing-horse yali pillars point to Vijayanagara and its successors; the Wodeyars kept the form but made the carving looser and more individual, which is why the horses here all differ.',
      },
      {
        id: 'north7',
        num: 7,
        name: 'The Katte off RT Street',
        position: [12.9685, 77.5780],
        type: 'Public Square',
        address: 'Down a zigzag lane off RT Street, past the temple',
        period: 'Old town square · 1791 battery position',
        bullets: [
          'A hidden open square under a peepal tree, reached down a narrow lane that gives no hint of it.',
          'Kattes are raised platforms around a tree, used for meetings, rest and trade — the pete kept dozens of them.',
          'They were the breathing spaces of a dense town, and the nearest thing it had to public parks.',
          'During the 1791 siege the British used these open squares as gun positions.',
          'On 12 March 1791, enfilading batteries of 12-pounders opened fire on the fort from squares like this one.',
        ],
        context:
          'Kattes are disappearing faster than any monument, because nobody lists a platform under a tree as heritage. A handful survive in the pete, usually because a shrine grew on them.',
        fact:
          'The pete was taken first precisely because it was useful: its kattes gave the British level, sheltered ground within range of the fort walls, and its godowns gave them the food and fodder to sustain a two-week bombardment.',
      },
      {
        id: 'north8',
        num: 8,
        name: 'CVMS Hostel & Choultry',
        position: [12.9682, 77.5790],
        type: 'Heritage Building',
        address: 'Avenue Road, through the Karur Vysya Bank gate',
        period: 'Established 1911 · building 1930',
        bullets: [
          "CVM Setty's Free Boarding Hostel and Choultry opened in 1911 so that Arya Vysya students could stay in the city at no cost.",
          'The 1930 building is full of craft — winged figures, cast-iron columns and a red-oxide floored hall.',
          'Its iron beams are stamped Dorman Long & Co, England; a Krishna figure crowns the parapet.',
          'It was once the tallest building on Avenue Road, and won an INTACH award in 2017.',
          'Merchant communities funded hostels, choultries and drinking-water sheds across the pete — the town had a welfare system before it had a municipality.',
        ],
        context:
          'Caste and trade associations were the pete\'s real institutions: they lent money, settled disputes, ran hostels and maintained temples. Colonial and princely government sat on top of that, not in place of it.',
        fact:
          'Those stamped English beams tell a second story. By 1930 a merchant charity in the Bengaluru pete was ordering structural steel from a Middlesbrough mill — the same firm that would later build the Sydney Harbour Bridge.',
      },
      {
        id: 'north9',
        num: 9,
        name: 'Balepet & Akkipet',
        position: [12.9676, 77.5764],
        type: 'Trade Street',
        address: 'Balepet Main Road and Akkipet, west of Avenue Road',
        period: 'Laid out with the town, 1500s–1600s',
        bullets: [
          'The pete was zoned by trade and the names stuck: Akkipet for rice merchants, Balepet for bangle and musical-instrument sellers, Tharagupet for grain traders, Ganigarapet for the Ganiga oil merchants, Kumbarpet for pot traders, Thigalarpet for the Tigala gardeners and flower sellers.',
          'Nagarthpet takes its name from the Nagartha merchant community; Cubbonpet was added later and named after Mark Cubbon, Commissioner of Mysore from 1834 to 1861.',
          'Balepet still sells glass bangles, sarees and wedding goods wholesale, and is busiest in the marriage months.',
          'The plots give the age away: long narrow strips with a shop in front and the family home behind, a pattern set when the town was first pegged out.',
          'These lanes are the clearest surviving picture of how a pre-colonial south Indian market town actually worked.',
        ],
        context:
          'Read the street names in order and you get an inventory of what the region produced in 1600 — rice, oil, pots, bangles, cotton, grain. No document survives that lists it as plainly as the map does.',
        fact:
          'Bengaluru grew as two towns that barely spoke to each other. The pete was the Kannada-speaking merchant city; the Cantonment, three kilometres east, was English-speaking and run separately by the British from 1809. They were only merged into a single municipal body in 1949.',
      },
      {
        id: 'north10',
        num: 10,
        name: 'Tawakkal Mastan Dargah, Cottonpete',
        position: [12.9652, 77.5748],
        type: 'Dargah',
        address: 'Cottonpete, about 400 m west of Avenue Road',
        period: 'Hyder Ali era · 18th century',
        bullets: [
          'The shrine of Tawakkal Mastan, one of three labourer-saints the pete remembers together.',
          'The story goes that three workers on a building site — Tipu Mastan, Manik Mastan and Tawakkal Mastan — turned out to be Sufi saints. Their shrines are scattered across the old town and beyond.',
          'The Bengaluru Karaga procession halts here, and devotees of both faiths take part in the ritual.',
          "It is the clearest surviving example of the city's shared shrine culture, where Hindu and Muslim worship overlap without anyone finding it strange.",
          'Cottonpete, as the name says, was the cotton traders quarter; thread and textile trades still cluster nearby.',
        ],
        context:
          'Shared shrines are common across the Deccan, from Gulbarga to Srirangapatna, and they are usually the oldest religious institutions in a town — older than the communal categories later imposed on them.',
        fact:
          "The Karaga's halt here is usually explained by a legend that Tawakkal Mastan was wounded helping carry the pot, and the procession has honoured him ever since. Whatever its origin, the custom is centuries old and still observed every year.",
      },
    ],
  },
  {
    id: 'pete-south',
    name: 'Walk 2: South Pete — Chowks, Saints & the Civic Edge',
    short: 'South Pete',
    subtitle: 'The founding crossroads, the Karaga temple, the dargahs of the siege, and the market and town hall that modernised the old town',
    distance: '~2.2 km · about 2 hours',
    color: '#7c3aed',
    colorSoft: '#a855f7',
    center: [12.9643, 77.5812],
    intro:
      'This route starts where the city is supposed to have begun, at the Doddapete–Chickpete crossroads, and works south through the quarters that took the worst of 1791. It ends on JC Road, where twentieth-century Mysore built the market, the town hall and the corporation offices against the edge of the old town.',
    todo: [
      {
        tag: 'Timing',
        title: 'Reach the KR Market flower halls by 5am',
        detail:
          'Trade starts well before sunrise and the flower market is at its most intense between roughly 5 and 8am, when temples, florists and wedding buyers stock up for the day.',
      },
      {
        tag: 'Festival',
        title: 'Plan around the Bengaluru Karaga',
        detail:
          'The nine-day festival at Dharmaraya Swamy Temple is built around the Chaitra full moon, so it falls in March or April. The main procession runs through the night and visits the Tawakkal Mastan dargah in Cottonpete.',
      },
      {
        tag: 'Shop',
        title: 'Work north into Chickpet',
        detail:
          "Chickpet, immediately north of the Doddapete crossing, is the oldest cloth and saree wholesale market in the city and the easiest way to see the pete still doing what it was built for.",
      },
      {
        tag: 'Visit',
        title: 'Check what is on at the Town Hall',
        detail:
          'Sir Puttanna Chetty Town Hall is still a working civic and cultural venue rather than a monument, so it is worth seeing whether an event is on before you arrive.',
      },
    ],
    stops: [
      {
        id: 'south1',
        num: 1,
        name: 'Mohan Buildings',
        position: [12.9670, 77.5785],
        type: 'Heritage Building',
        address: 'Old Taluk Cutcherry Road, off Avenue Road',
        period: 'Rebuilt 1909',
        bullets: [
          'This was the old taluk cutcherry, the revenue office that gave OTC Road its name.',
          "By local tradition, Shivaji's father Shahji held a palace called Gauri Mahal on or near this site.",
          'The present building went up in 1909 and later housed the Rex cinema and the Bombay Anand Bhavan lodge.',
          'Exposed brickwork, lime-plaster ornament and a gandabherunda emblem over the front; the fabric is now badly decayed.',
          'It is the best example in the pete of a heritage building that nobody is quite responsible for.',
        ],
        context:
          "Shahji held Bengaluru as a jagir in the mid-1600s, which is the strongest early link between the city and the Maratha world. Shivaji spent part of his childhood in the region, though how much of the Gauri Mahal story is documented and how much is local memory is genuinely unclear.",
        fact:
          'The gandabherunda — the two-headed mythical bird on the façade — was a Wodeyar emblem, was used by the Vijayanagara rulers before them, and is now the state emblem of Karnataka. You will find it again on Minto Hospital, on state buses and on the Karnataka government seal.',
      },
      {
        id: 'south2',
        num: 2,
        name: 'Doddapete–Chickpete Chowk',
        position: [12.9665, 77.5788],
        type: 'Public Square',
        address: 'Where Doddapete and Chickpete cross',
        period: 'Traditionally founded 1537',
        bullets: [
          'By tradition, the exact centre of the town Kempegowda founded.',
          'The story says four pairs of white oxen were set loose from this point to plough in four directions in 1537.',
          'Their furrows became Doddapete and Chickpete, and where they stopped fixed the limits of the walled town.',
          'Whatever the truth of it, the two streets really do meet here and really are the oldest axes in the city.',
          'The pillared shopfronts around the crossing date from a municipal beautification drive in the 1930s.',
        ],
        context:
          'Founding legends involving ploughed furrows are a standard way of marking out a town across the Deccan; the ritual asserts that the land was consecrated, not simply occupied. The detail worth keeping is the shape it produced — two crossing streets, four quarters, one market.',
        fact:
          'Kempegowda I was a vassal of the Vijayanagara empire when he laid this out, and the town paid tribute to Hampi. Bengaluru is therefore one of the last significant cities founded under Vijayanagara authority — about thirty years before the empire lost at Talikota.',
      },
      {
        id: 'south3',
        num: 3,
        name: 'Dharmaraya Swamy Temple, Thigalarpet',
        position: [12.9651, 77.5813],
        type: 'Temple',
        address: 'Thigalarpet, off OTC Road near Nagarthpet',
        period: 'Ancient foundation · present form 1600s–1800s',
        bullets: [
          'The temple of the Vahnikula Kshatriya (Tigala) community, dedicated to Dharmaraya — Yudhishthira of the Mahabharata — with Draupadi as the presiding goddess.',
          'It is the home of the Bengaluru Karaga, a nine-day festival in the Kannada month of Chaitra and the oldest continuously celebrated festival in the city.',
          'The Karaga is an earthen pot carried unaided on the head by a priest dressed as a woman, through the streets of the pete at night.',
          'The Tigalas were the gardeners and horticulturists of the region; the tank-fed vegetable plots that once ringed the town were theirs.',
          'It is one of very few temples in India where Draupadi is worshipped as a goddess in her own right — a tradition shared with the Draupadi Amman temples of Tamil Nadu.',
        ],
        context:
          "The Tigalas are Tamil-speaking in origin and settled here centuries ago, which is why the Karaga's ritual vocabulary has more in common with northern Tamil Nadu than with the rest of Karnataka. The festival is one of the city's oldest pieces of migration history.",
        fact:
          'The Karaga procession is a map of the old city drawn in footsteps. Over a single night it visits temples, kattes and the Tawakkal Mastan dargah in Cottonpete, tracing a route through quarters that have changed beyond recognition — the festival still remembers streets the streets have forgotten.',
      },
      {
        id: 'south4',
        num: 4,
        name: 'Manik Mastan Dargah',
        position: [12.9648, 77.5790],
        type: 'Dargah',
        address: 'Down a lane off Avenue Road, opposite Kusum Stores',
        period: 'Hyder Ali era',
        bullets: [
          'A wide, quiet dargah hidden behind the shopfronts of Avenue Road.',
          'Manik Mastan was one of the three labourer-saints of pete folklore, and belonged to the Suharwady Sufi order.',
          'His companions lie at Cottonpete and near Arcot in Tamil Nadu, which is how far the story travels.',
          'The courtyard is one of the few places on Avenue Road where the street noise drops away completely.',
          'Like most pete dargahs, it draws visitors of every faith, particularly on Thursday evenings.',
        ],
        context:
          'The Suharwady (Suhrawardiyya) order arrived in the Deccan with the Bahmani and later sultanates. Sufi shrines are often the earliest Muslim presence in a south Indian town, predating any mosque of consequence.',
        fact:
          "The three Mastans are always described as ordinary labourers first and saints second — the sainthood is discovered, not announced. That inversion is the whole moral of the story, and it is why the shrines sit in working quarters rather than on grand sites.",
      },
      {
        id: 'south5',
        num: 5,
        name: 'Kumbarpet: Ibrahim Shah Mosque & Dargah',
        position: [12.9643, 77.5786],
        type: 'Dargah',
        address: 'Sadar Patrappa Road, Kumbarpet',
        period: 'c. 1761 · disputed',
        bullets: [
          'Named for Ibrahim Khan, killedar — fort commandant — of Bengaluru for around ten years under Hyder Ali.',
          'He is credited with rebuilding the mud fort in stone and setting up cannon and gun foundries in the town.',
          'One source dates the structure to 1761; others hold that the British raised it over his grave after 1791.',
          'The open ground beside it was another British firing position during the siege.',
          'Kumbarpet was the potters quarter, and a few kiln families still work in the lanes behind.',
        ],
        context:
          'Hyder Ali ran Mysore as a military-industrial state: foundries, rocket works, arsenals and a standing infantry drilled on French lines. The fort commandant at Bengaluru was therefore an industrial administrator as much as a soldier.',
        fact:
          'The uncertainty here is honest and worth sitting with. Two respectable accounts of the same small building differ by thirty years and by who built it — which is roughly the state of evidence for most of the pete, where almost nothing was documented until the British started surveying it in the 1790s.',
      },
      {
        id: 'south6',
        num: 6,
        name: 'Jamia Masjid, OTC Road',
        position: [12.9635, 77.5794],
        type: 'Mosque',
        address: 'Old Taluk Cutcherry Road, near City Market',
        period: 'Older mosque on the site · present building mid-1900s',
        bullets: [
          'The largest congregational mosque in the old town, rising in white granite above the shopfronts.',
          'An earlier mosque stood here first; the present multi-storeyed building went up in stages through the twentieth century.',
          'Slim minarets and arcaded prayer halls, Indo-Islamic in spirit rather than a copy of any single style.',
          'Friday prayers spill into the surrounding lanes, and the whole quarter stays awake through Ramzan.',
          'Muslim settlement in the pete goes back to Hyder and Tipu, when Bengaluru was a garrison town as well as a market.',
        ],
        context:
          'City Market and Shivajinagar are the two ends of a single history: the pete-side Muslim quarter grew under Mysore rule, the Cantonment-side one under the British. Both still have their own food streets, mosques and dialects of Dakhni Urdu.',
        fact:
          'Bengaluru holds two Ramzan night-market traditions running in parallel, one here around City Market and one in Shivajinagar, three kilometres apart. They developed separately for a century and a half, under two different administrations, and the menus still differ.',
      },
      {
        id: 'south7',
        num: 7,
        name: 'KR Market',
        position: [12.9627, 77.5803],
        type: 'Market',
        address: 'The southern end of Avenue Road',
        period: 'Opened 1921',
        bullets: [
          'Krishnarajendra Market opened on 11 October 1921, on ground the City Improvement Committee had resolved in January 1914 to acquire from the low-lying Siddikatte quarter.',
          "It was designed by S H Lakshminarasappa, modelled on the Sir Stuart Hogg Market (New Market) in Calcutta with modifications.",
          'The Victorian frontage carries twin towers and mansard roofs, deliberately echoing Victoria Hospital across the road.',
          'Only the original frontage survives — the interior was demolished and rebuilt in 1997.',
          'It remains south India\'s largest flower market, and is at its best between 5 and 7 in the morning.',
        ],
        context:
          'Bengaluru grew on a chain of man-made tanks, and most of them are now under something: KR Market on Siddikatte, the bus station on Dharmambudhi tank, the football stadium and Kanteerava on others. The city\'s flooding problems are largely the ghosts of that drainage system.',
        fact:
          'The market sits on a tank because the tank was already the market. Siddikatte was where traders gathered on the bund to sell; when the tank was drained in the 1920s the state simply built a roof over a trade that had been happening there for centuries.',
      },
      {
        id: 'south8',
        num: 8,
        name: 'Bahadur Shah Dargah',
        position: [12.9620, 77.5795],
        type: 'Dargah',
        address: 'Where Silver Jubilee Park Road meets Avenue Road',
        period: 'After 1791',
        bullets: [
          "The tomb of Bahadur Khan, the elderly killedar who commanded the fort's defence on the night of 21 March 1791.",
          'He fought to his last breath; the British buried him with full military honours on the spot where he fell.',
          'Both Muslim and Hindu devotees pray here, and the Karaga procession stops at the shrine.',
          'The road outside is named for the silver jubilee of Krishnaraja Wodeyar IV in 1927.',
          'It is the only memorial in the city to anyone who died defending it in 1791.',
        ],
        context:
          "Cornwallis's Bengaluru campaign was one front of the Third Anglo-Mysore War (1790–92), which ended with Tipu ceding half his territory and sending two sons to Madras as hostages. The fort's fall here was the opening move of that settlement.",
        fact:
          "The honours were not sentiment. British accounts of the storming record genuine astonishment at the old commandant's refusal to withdraw, and burying him where he fell was a professional army's acknowledgement of another professional soldier.",
      },
      {
        id: 'south9',
        num: 9,
        name: 'Sir Puttanna Chetty Town Hall',
        position: [12.9637, 77.5846],
        type: 'Heritage Building',
        address: 'JC Road, near Corporation Circle',
        period: 'Built 1935',
        bullets: [
          'A white neoclassical hall behind a deep colonnaded portico. The foundation stone was laid by Krishnaraja Wodeyar IV on 6 March 1933 and the building was completed on 11 September 1935.',
          'It is named after Sir K P Puttanna Chetty, administrator and philanthropist, who was elected the first president of the Bangalore municipality in 1913 and served until 1919; he also donated land for the hall.',
          'For decades this was where Bengaluru held its public meetings, literary functions, plays and concerts.',
          'It marks the seam between the old pete and the newer civic quarter laid out along JC Road.',
          'It still hosts Kannada literary and cultural events, and the steps are still a favoured place to protest from.',
        ],
        context:
          'Municipal government here is older than most people assume. Separate municipal boards for the pete-side city and the Cantonment were set up in 1862 and ran as two towns until they merged in 1949; today\'s BBMP, formed in 2007 by absorbing the surrounding municipalities, descends from them.',
        fact:
          'The Town Hall, KR Market and the Corporation offices went up within about fifteen years of each other, all on the edge of the old town. The strategy is visible on the map: princely Mysore gave the pete a modern civic face by building along its boundary rather than by demolishing its middle.',
      },
      {
        id: 'south10',
        num: 10,
        name: 'Hudson Memorial Church',
        position: [12.9646, 77.5851],
        type: 'Church',
        address: 'Hudson Circle, off JC Road',
        period: 'Built 1904',
        bullets: [
          'Dedicated for worship on 23 September 1904, at the roundabout that now takes its name from it.',
          'It is a Wesleyan foundation, named for Rev Josiah Hudson — a missionary and Kannada scholar who came from England in 1865, served 32 years, and started Kannada schools across the pete.',
          'The congregation is older than the building: it worshipped earlier as the Wesleyan Kannada chapel at Nagarthpet, known locally as the Gudi Hatti or Peta chapel.',
          'It is a Kannada-language church, now part of the Church of South India.',
          'With Rice Memorial Church at the other end of the walk, it shows the two missions that shaped the pete — Wesleyan here, London Missionary Society there.',
        ],
        context:
          'The Church of South India, formed in 1947, united Anglican, Methodist and Congregational congregations — which is why churches founded by very different missions now share one denomination and often one service in three languages.',
        fact:
          'Kannada Protestant worship in Bengaluru traces back to services held in the fort area in the 1820s, and the mission schools that followed were among the first to teach Kannada in a classroom. This congregation is a surviving thread of that: an English missionary is remembered by a church that has never worshipped in English.',
      },
    ],
  },
  {
    id: 'kote-arms',
    name: 'Walk 3: The Kote — Arms, Rockets & Gardens',
    short: 'The Kote',
    subtitle: 'What is left of the fort Hyder and Tipu built, the ground where it fell in 1791, and the garden they planted behind it',
    distance: '~2.5 km · about 2 hours',
    color: '#0d9488',
    colorSoft: '#14b8a6',
    center: [12.9570, 77.5768],
    intro:
      'The Kote was a working military installation: a stone fort, magazines, foundries and a palace inside it. This route follows the military logic of the place — gate, ditch, armoury, temple, palace — and then walks ten minutes further south to Lalbagh, the garden the same two rulers laid out, because the fort only makes sense alongside it.',
    todo: [
      {
        tag: 'Visit',
        title: "Go inside Tipu Sultan's Summer Palace",
        detail:
          'An ASI ticketed monument with a small museum on the ground floor covering the Anglo-Mysore wars. Open daily, roughly 8.30am to 5.30pm; tickets online or at the gate.',
      },
      {
        tag: 'Visit',
        title: 'The fort is free to walk into',
        detail:
          'Bangalore Fort is ASI-maintained with no entry charge, open through the day. Only the Delhi Gate and a stretch of the fortification survive, so it takes about twenty minutes.',
      },
      {
        tag: 'Timing',
        title: 'Climb the Lalbagh rock early',
        detail:
          'Lalbagh is open from about 6am to 7pm, and entry is free during the early-morning and evening windows. The Peninsular Gneiss outcrop — a National Geological Monument since 1975 — carries the Kempegowda watchtower at the top.',
      },
      {
        tag: 'Festival',
        title: 'Two flower shows a year',
        detail:
          "Lalbagh's Glass House holds flower shows around Republic Day in January and Independence Day in August. They are the busiest days in the garden's calendar and are separately ticketed.",
      },
      {
        tag: 'Eat',
        title: 'Two old tiffin rooms within reach',
        detail:
          'MTR on Lalbagh Road opened in 1924 as the Brahmin Coffee Club and is where rava idli was popularised. Vidyarthi Bhavan in Gandhi Bazaar has been making its masala dosa since 1943.',
      },
      {
        tag: 'Eat',
        title: 'Finish on VV Puram Food Street',
        detail:
          'Thindi Beedi at Sajjan Rao Circle, a short walk from the Lalbagh west side, is a vegetarian street-food lane packed into about 150 metres. It fills up in the evening, from around 6pm.',
      },
    ],
    stops: [
      {
        id: 'arms1',
        num: 1,
        name: 'Delhi Gate, Bengaluru Fort',
        position: [12.9631, 77.5772],
        type: 'Fort',
        address: 'KR Road, at the Victoria Hospital junction',
        period: 'Mud fort 1600s · rebuilt in stone by Hyder and Tipu',
        bullets: [
          'What survives is a portion of the northern Delhi Gate and a run of wall — the rest was demolished in stages after 1889.',
          'Chikkadevaraja Wodeyar built the first mud fort in the 1600s; Hyder Ali rebuilt it in stone and Tipu Sultan strengthened it.',
          'Look for iron spikes on the gate leaves, set at elephant-forehead height to stop a battering charge.',
          'The doorways turn at right angles so that no attacker can build up speed or fire straight through.',
          'The ramparts were oval, echoing the shape of the pete to the north, with the two joined into one defensive system.',
        ],
        context:
          'Hyder and Tipu rebuilt forts across their territory in the same idiom — Bengaluru, Srirangapatna, Devanahalli, Nandi Hills. The design borrowed from French military engineering, which they had studied closely and which the British had to work hard to breach.',
        fact:
          "After taking the pete on 7 March 1791, the British spent two weeks inching batteries closer. On the moonlit night of 21 March they stormed a breach in the wall near today's KR Road; amid rockets and fireballs the fighting was over in under two hours, with 2,000 to 3,000 dead.",
      },
      {
        id: 'arms2',
        num: 2,
        name: 'The Breach and the Fort Ditch',
        position: [12.9616, 77.5786],
        type: 'Battle Site',
        address: 'KR Road towards Kalasipalyam, south of the gate',
        period: 'Night of 21 March 1791',
        bullets: [
          'The road between the fort and Kalasipalyam runs along the line of the old fort ditch, filled in and built over during the nineteenth century.',
          'Somewhere on this face the assault columns went in through the breach the batteries had opened.',
          'The bus stand and market sheds stand on what was glacis — the cleared killing ground outside the walls that no defender would let anyone build on.',
          'Nothing at all is marked. The only surviving clue is the curve of the roads, which still follow the curve of the ditch.',
          'Kalasipalyam grew as a settlement outside the walls and later became the main mofussil bus terminus, linking the city to the rest of old Mysore.',
        ],
        context:
          "Fort ditches are the most reliably erased feature of an Indian city, because the land is flat, public and already cleared. In Bengaluru the ditch became roads and a bus stand; the same thing happened at Srirangapatna and Vellore.",
        fact:
          "The pete's kattes were the firing positions for this breach: 12-pounders firing in enfilade from the market squares, two weeks of bombardment, and then a night assault. The capture of the merchant town on 7 March effectively decided what happened here on 21 March.",
      },
      {
        id: 'arms3',
        num: 3,
        name: "Tipu's Armoury",
        position: [12.9602, 77.5766],
        type: 'Military',
        address: 'Off KR Road, past the petrol pump',
        period: 'Late 1700s',
        bullets: [
          'A brick-and-mortar store for arms, ammunition and rockets, built under Hyder Ali and Tipu Sultan.',
          'British army maps of the 1790s label it the Grand Magazine.',
          'It sits partly underground in a sunken court, so that a fire would be contained and the interior would stay cool.',
          'It was one of at least five armouries inside the fort; this is the one that survived.',
          'The sunken plan is why it is easy to walk past — the building barely rises above street level.',
        ],
        context:
          "Mysore under Hyder and Tipu ran state arsenals and foundries at Bengaluru, Srirangapatna and Chitradurga, producing cannon, muskets and iron rocket casings in quantity. It was among the most industrialised military systems in eighteenth-century India.",
        fact:
          "Hyder and Tipu pioneered iron-cased war rockets. Captured examples were studied at Britain's Woolwich Arsenal and developed into the Congreve rocket. Fired at Fort McHenry in 1814, those rockets' red glare moved Francis Scott Key to write the poem that became the American national anthem.",
      },
      {
        id: 'arms4',
        num: 4,
        name: 'Kote Venkataramana Swamy Temple',
        position: [12.9593, 77.5762],
        type: 'Temple',
        address: 'At the KR Road signal, beside the palace',
        period: 'Built c. 1700',
        bullets: [
          'A Vishnu temple built by Chikkadevaraja Wodeyar around 1700, immediately next to what became Tipu\'s palace.',
          'The architecture is close to the temples of Hampi, with a Wodeyar layout and characteristic pillar carving.',
          'A frieze on the outer wall shows the marriage of Shiva and Parvati; four central pillars each carry four yali-and-rider pairs.',
          "In the 1791 battle a cannonball struck a pillar just outside, and is said to have spared Tipu's life.",
          'That story is the reason the temple is remembered as one he was fond of.',
        ],
        context:
          'A Hindu royal temple standing intact beside a Muslim ruler\'s palace, both in daily use, is the normal condition of an eighteenth-century Deccan capital rather than an exception to it. Tipu made grants to temples at Srirangapatna, Melkote and Sringeri on the same basis.',
        fact:
          'Tipu\'s correspondence with the Sringeri matha survives, including letters after a Maratha raid in 1791 in which he funded the restoration of the shrine and the reinstallation of the goddess. It is among the best-documented pieces of evidence for how he actually governed.',
      },
      {
        id: 'arms5',
        num: 5,
        name: "Tipu Sultan's Summer Palace",
        position: [12.9592, 77.5740],
        type: 'Palace',
        address: 'Albert Victor Road, inside the old fort',
        period: '1781–1791',
        bullets: [
          'The Rashk-e-Jannat, "envy of heaven", begun by Hyder Ali in 1781 and completed by Tipu ten years later.',
          'A two-storeyed teak palace of cusped arches, fluted pillars and carved brackets, close in spirit to the Shivappa Nayaka palace at Shivamogga.',
          'After 1799 the British used it as offices for the Mysore Commissioners, Sir Mark Cubbon among them.',
          'It was declared a monument and placed under the Archaeological Survey of India in 1950.',
          'A small museum on the ground floor holds prints, arms and material on the Anglo-Mysore wars.',
        ],
        context:
          'Almost all of it is timber, not stone, which is unusual for a palace of this rank and is why so little of the original decoration survives. The building is really a pavilion — the serious construction here went into walls and magazines.',
        fact:
          'The palace was once richly painted. Star-patterned floral motifs and borders of carnations in geometric frames survive on the ceilings, typical of Islamic decorative work. One ribbon-and-bow motif is distinctly French, probably taken from the Savonnerie carpets Louis XVI sent Tipu in 1788.',
      },
      {
        id: 'arms6',
        num: 6,
        name: 'Lalbagh West Gate & the Kempegowda Tower',
        position: [12.9520, 77.5800],
        type: 'Garden',
        address: 'Lalbagh West Gate, on the Basavanagudi side',
        period: 'Begun c. 1760 by Hyder Ali',
        bullets: [
          'Hyder Ali began this garden around 1760 as a Mughal-style pleasure garden; Tipu extended it and stocked it with plants gathered from across Asia.',
          'The British turned it into a botanical garden after 1799, and under superintendents including John Cameron it became a serious centre for plant introduction.',
          "On the rock outcrop inside stands one of the four watchtowers attributed to Kempegowda II, marking the limits of the old town — this one the southern corner.",
          'The other three stand in Sri Ramana Maharshi Park at Mekhri Circle, near Kempambudhi tank at Gavipura, and at Ulsoor lake inside the Madras Sappers campus, which is not open to visitors.',
          'The rock is Peninsular Gneiss, among the oldest on earth at roughly 3,000 million years, declared a National Geological Monument by the Geological Survey of India in 1975.',
        ],
        context:
          "The tower here is the reason the fort walk ends in a garden. Kempegowda's four towers, Hyder's bagh and Tipu's kote are three layers of the same claim over the same ground, stacked within two kilometres of each other.",
        fact:
          "Tipu's garden was statecraft as much as pleasure. He sent agents to collect seeds and cuttings from Persia, Afghanistan, Mauritius and France, and exchanged plants diplomatically — through the same channels that brought him the French carpets whose pattern ended up on his palace ceiling.",
      },
    ],
  },
  {
    id: 'kote-civic',
    name: "Walk 4: The Dewans' Quarter — Hospitals, Schools & Domes",
    short: "Dewans' Quarter",
    subtitle: 'What princely Mysore built on the cleared fort land: hospitals, a girls college, a Sanskrit college, and the first planned suburb',
    distance: '~1.8 km · about 90 minutes',
    color: '#2563eb',
    colorSoft: '#3b82f6',
    center: [12.9600, 77.5720],
    intro:
      'When the fort was pulled down after 1889, the land went to institutions. In forty years this small area acquired a general hospital, a maternity hospital, an eye hospital, a girls college, a high school and a Sanskrit college — a visible record of what the Mysore state thought a modern city needed. The walk ends in Chamarajpet, the first suburb laid out on the same thinking.',
    todo: [
      {
        tag: 'Festival',
        title: 'Time it for the Ramaseva Mandali season',
        detail:
          "Fort High School's grounds host the Sree Ramaseva Mandali's Rama Navami festival — about a month of Carnatic concerts across March and April, held in a makeshift pandal here since 1968.",
      },
      {
        tag: 'Etiquette',
        title: 'These are working hospitals',
        detail:
          'Victoria, Vani Vilas and Minto are busy public hospitals, not museums. Look at the buildings from the road and stay out of the way of patients and families.',
      },
      {
        tag: 'Visit',
        title: 'Walk the Chess Box grid',
        detail:
          "Chamarajpet's five Main Roads and nine Cross Roads were laid out on square plots in 1892, which is how it got its nickname. There is a temple on each Main Road.",
      },
      {
        tag: 'Timing',
        title: 'Join this route to the fort walk',
        detail:
          "Tipu's palace and the Kote Venkataramana temple on Walk 3 are about five minutes on foot from Fort High School, so the two routes can be done back to back.",
      },
    ],
    stops: [
      {
        id: 'civic1',
        num: 1,
        name: 'Vani Vilas Hospital',
        position: [12.9627, 77.5758],
        type: 'Heritage Building',
        address: 'KR Road, behind the KR Market metro station',
        period: 'Built and opened 1935',
        bullets: [
          'A maternity and children\'s hospital named after Vani Vilas Sannidhana, the queen regent — mother of Krishnaraja Wodeyar IV.',
          'It was built in 1935 at a cost of about four lakh rupees and opened by the Maharaja on 8 March that year.',
          'It stands on the ground where the Fort Church and the fort cemetery once were; the Mysore government acquired the land from the Church of England and gave the congregation a site in Chamarajpet instead.',
          'An imposing two-storeyed granite building set around a large open central quadrangle.',
          'It is still a working public hospital and one of the busiest maternity units in the state.',
        ],
        context:
          'Maternal and infant mortality was the headline public-health problem of the 1920s, and princely Mysore treated it as a state project — training midwives, subsidising deliveries and building hospitals like this one.',
        fact:
          'Follow this hospital backwards and you get the whole quarter in one line: a garrison chapel of 1808 inside the fort, demolished around 1932 to clear this site, its congregation resettled in Chamarajpet as St Luke\'s — the last stop but two on this walk — and its bell still in use there.',
      },
      {
        id: 'civic2',
        num: 2,
        name: 'Vani Vilas Institute',
        position: [12.9622, 77.5764],
        type: 'Heritage Building',
        address: 'Across KR Road from the hospital',
        period: 'Founded 1918',
        bullets: [
          "Founded in 1918 as a school for girls, directly opposite the maternity hospital named after the same queen.",
          'It was raised to an Intermediate college in 1926, specialising in mathematics and science.',
          "Its women's college later moved to Seshadri Road and became today's Maharani's College.",
          "Girls' education was a declared priority of the Mysore government well before it was elsewhere in India.",
          'The hospital and the institute together are the clearest statement of intent in this whole quarter.',
        ],
        context:
          "Mysore had one of the higher female literacy rates among Indian states by the 1930s, the result of a sustained programme rather than a single institution. It is a large part of why Karnataka's education indicators started ahead and stayed there.",
        fact:
          'Teaching mathematics and science to girls at Intermediate level in 1926 was genuinely unusual — most equivalent institutions across India offered arts subjects only, on the assumption that science was neither necessary nor suitable.',
      },
      {
        id: 'civic3',
        num: 3,
        name: 'Victoria Hospital',
        position: [12.9616, 77.5747],
        type: 'Heritage Building',
        address: 'Fort Road, off KR Road',
        period: 'Opened 1900',
        bullets: [
          'Formally inaugurated on 8 December 1900 by Lord Curzon, then Viceroy, the first of the large hospital buildings in this zone.',
          "Its foundation stone was laid on 22 June 1897 by the maharani regent Kempananjammani — Vani Vilas Sannidhana — to mark Queen Victoria's diamond jubilee.",
          'Victorian neo-Gothic, with steep four-sided mansard roofs and heavily worked parapets.',
          'Its stone was very likely reused from the dismantled fort next door.',
          'It opened with 140 beds and is now one of the largest government hospitals in the country.',
        ],
        context:
          'A hospital of this scale in 1900 was a response to the plague that hit Bengaluru in 1898 and killed thousands in the crowded pete. Public health, not prestige, drove the building programme in this quarter.',
        fact:
          "Bengaluru's first electric street lamps were switched on at KR Market — a few minutes north of here — on 5 August 1905. Over a hundred lamps lit at once, drawing surplus power from the Shivanasamudra hydroelectric station on the Cauvery, built in 1902 to run the Kolar gold mines. It is widely cited as the first electric street lighting in an Asian city.",
      },
      {
        id: 'civic4',
        num: 4,
        name: 'Bangalore Medical College',
        position: [12.9607, 77.5742],
        type: 'Institution',
        address: 'Fort Road, next to Victoria Hospital',
        period: 'Founded 1955',
        bullets: [
          'Founded in 1955 by Dr Shivram and Dr Mohammed Shafi Mekhri, and handed over to the state government the following year; now Bangalore Medical College and Research Institute.',
          'Victoria, Vani Vilas and Minto all became its teaching hospitals, which is why so much of the medical history of the city sits in these few hundred metres.',
          'Before it opened, most of the state\'s doctors trained at Mysore Medical College, founded in 1924.',
          'The campus stands on old fort land; the 1791 siege lines ran within a few hundred metres of the lecture halls.',
          'It is the institution that ties the three separate hospitals of this quarter into one system.',
        ],
        context:
          'Karnataka\'s public medical infrastructure was largely a Mysore-state inheritance. Victoria for general medicine, Vani Vilas for maternity, Minto for eyes — each built for a specific need between 1900 and 1935 — and the medical college later stitched them together into a teaching hospital network.',
        fact:
          'The state got its first medical college in 1924 and its second in 1955, in a period when most Indian provinces had one or none. That head start is a direct reason Bengaluru later became a centre for specialist hospitals.',
      },
      {
        id: 'civic5',
        num: 5,
        name: 'Fort High School',
        position: [12.9601, 77.5751],
        type: 'Heritage Building',
        address: 'KR Road, opposite Bangalore Medical College',
        period: 'Present building 1907',
        bullets: [
          'Built in 1907 by the Mysore government on a three-acre plot inside the old fort, about a hundred metres south of the KR Road signal.',
          'It began as an Anglo-vernacular school, teaching in eight languages — Kannada, English, Telugu, Tamil, Hindi, Sanskrit, Persian and Arabic — and was later renamed Fort High School after the fort it stands in.',
          'Colonial and vernacular together: gabled roofs, monkey-top windows and a central courtyard. INTACH has led a long restoration of the building.',
          'Alumni include the cricketer G R Vishwanath, the freedom fighter H S Doreswamy, the chief minister Kengal Hanumanthaiah and Maharaja Jayachamarajendra Wadiyar.',
          'The Sree Ramaseva Mandali has held its Rama Navami classical music festival in these grounds since 1968 — about a month of concerts each year, in March and April.',
        ],
        context:
          'The Mandali itself was founded on 29 March 1939 by S V Narayanaswamy Rao, then about fifteen, who started it on the footpath of 3rd Main Road in Chamarajpet. It moved into this schoolyard in 1968 and now draws audiences in the lakhs — one of the longest-running Carnatic festivals anywhere, still held in a makeshift pandal rather than a concert hall.',
        fact:
          'Kengal Hanumanthaiah, who studied here, later became chief minister and pushed through the construction of the Vidhana Soudha, insisting on a Indian architectural idiom against considerable official resistance. A boy from this schoolyard set the look of the state\'s most recognisable building.',
      },
      {
        id: 'civic6',
        num: 6,
        name: 'Minto Ophthalmic Hospital',
        position: [12.9588, 77.5717],
        type: 'Heritage Building',
        address: 'Albert Victor Road, west of the palace',
        period: 'Built 1910–1913',
        bullets: [
          'One of the earliest specialised eye hospitals in India, about 300 m west of Tipu\'s palace.',
          'Named after Lord Minto, viceroy from 1905 to 1910. The Maharaja laid the foundation stone on 17 December 1910 and formally opened the hospital on 31 January 1913.',
          'It grew out of an eye infirmary started in Chickpete in 1896, which moved to Lalbagh Lodge in 1897 before reaching this building.',
          'A heavy granite façade blending colonial and neo-Gothic, with a gandabherunda set into the pediment.',
          'It is now among the largest eye hospitals in the country by patient numbers.',
        ],
        context:
          'Eye disease — trachoma, cataract, vitamin A deficiency blindness — was one of the largest causes of disability in south India, and a specialist hospital in 1913 was a targeted public-health intervention rather than a general upgrade.',
        fact:
          'The gandabherunda on a British-era hospital pediment is the give-away: the building was paid for and run by the Mysore state, not the Raj, and the state signed its work with its own emblem even while naming the place after a viceroy.',
      },
      {
        id: 'civic7',
        num: 7,
        name: "St Luke's Church",
        position: [12.9576, 77.5716],
        type: 'Church',
        address: 'Pampa Mahakavi Road',
        period: 'Built 1932–1935',
        bullets: [
          "About 150 m south of Minto, and the direct descendant of the Fort Church — the Drummer's Chapel built inside Bangalore Fort in 1808 by Lieutenant John Blakiston.",
          'That chapel was the first Protestant church raised in Bengaluru. It was pulled down around 1932 so that Vani Vilas Hospital could be built, and the Mysore government gave the congregation this site in Chamarajpet plus compensation.',
          'Fittings were carried across from the old church, among them the bell, which is inscribed "Madras Mint 1868".',
          'The new building was put up with subscriptions totalling a little over 36,000 rupees.',
          'The street outside is named for Pampa, the tenth-century poet who is the first great name in Kannada literature.',
        ],
        context:
          'Mirza Ismail, Dewan of Mysore from 1926 to 1941, laid foundation stones for temples, mosques and churches alike and drove much of the building in this quarter. He is also the reason so many Bengaluru streets were planted with flowering trees.',
        fact:
          'The chain here is worth following: a garrison chapel inside the fort, demolished when the fort came down; its site became Vani Vilas Hospital at the start of this walk; and its bell and font ended up in this church at the end of it. One institution, three addresses, two hundred years.',
      },
      {
        id: 'civic8',
        num: 8,
        name: 'Sri Chamarajendra Sanskrit College',
        position: [12.9573, 77.5719],
        type: 'Heritage Building',
        address: "Next to St Luke's Church",
        period: 'Established 1885',
        bullets: [
          'One of the oldest Sanskrit colleges in the state, founded as the Vaani Vidya Patashaalaa in 1885.',
          'It was renamed Sri Chamarajendra Sanskrit College in 1896, after the maharaja.',
          'The 1930s building carries a central masonry dome ringed by miniature domes, mixing Islamic and Hindu elements freely.',
          'It functioned earlier from the old Lower Arsenal and, for a while, from Tipu\'s palace itself.',
          'Traditional pathashala teaching continues alongside a university-affiliated degree course.',
        ],
        context:
          'Princely Mysore funded traditional learning and English-medium science education at the same time and with the same seriousness, which is why a Sanskrit college and a medical college sit within a kilometre of each other here.',
        fact:
          'That domed style — a big central dome ringed by small ones, over an otherwise Hindu plan — is sometimes called Indo-Saracenic and was a deliberate Mysore-state choice. You can see the same instinct at the Bangalore Palace, the Mysore Palace and the Vidhana Soudha: build modern, look Indian.',
      },
      {
        id: 'civic9',
        num: 9,
        name: 'Chamarajpet',
        position: [12.9583, 77.5680],
        type: 'Neighbourhood',
        address: 'Chamarajpet, immediately west of the fort',
        period: 'Laid out 1892',
        bullets: [
          'The first systematically planned extension laid out beyond the old city, founded in 1892 on open land west of the fort.',
          'It is named after Maharaja Chamarajendra Wodeyar X, whose name is on half the institutions on this walk.',
          'It was laid out as a grid of five Main Roads and nine Cross Roads on square plots, which earned it the nickname the Chess Box Colony — the template every later Bengaluru layout copied.',
          'Basavanagudi and Malleswaram followed at the end of the 1890s on the same principles, which is why all three feel alike.',
          'It kept a strong Kannada literary and theatre culture, and still has some of the best surviving bungalow-and-courtyard housing near the centre.',
        ],
        context:
          'Once you have walked the pete and then this grid, the contrast does the explaining: organic trade-zoned lanes on one side of the fort, numbered cross roads on the other, with about 350 years between them.',
        fact:
          'The grid extensions came out of a public-health emergency. Plague struck in 1898 and killed thousands in the packed pete; the state\'s answer was to open low-density suburbs with wide roads, gridded house sites and drains. Chamarajpet, begun six years earlier, was the prototype they reached for.',
      },
    ],
  },
  {
    id: 'cantonment',
    name: 'Walk 5: Cantonment Edge — Parade, Church & Museums',
    short: 'Cantonment Edge',
    subtitle: 'The British-run half of the city: a garrison church, a members’ club, an empress in marble, and the museums on the park’s eastern rim',
    distance: '~2.2 km · about 2 hours',
    color: '#db2777',
    colorSoft: '#ec4899',
    center: [12.9733, 77.6000],
    intro:
      "Bengaluru spent a hundred and forty years as two towns. This route covers the eastern one — the Civil and Military Station the British ran from 1809, governed separately from the Maharaja’s city until the two merged in 1949. It works west along MG Road, which everyone called South Parade until Independence, and finishes at the museums on the edge of Cubbon Park.",
    todo: [
      {
        tag: 'Visit',
        title: 'Enter St Mark’s from the side gate',
        detail:
          'The MG Road entrance is usually shut. Go in from the road beside Koshy’s instead, and look at the glass: the chancel windows show the Adoration of the Magi, and St Mark’s winged lion sits above the door opposite the altar.',
      },
      {
        tag: 'Visit',
        title: 'Three museums, three tickets',
        detail:
          'The Visvesvaraya science museum, the Government Museum and the Venkatappa gallery sit within a few hundred metres of each other on Kasturba Road but are run separately, so each is entered on its own.',
      },
      {
        tag: 'Etiquette',
        title: 'Mayo Hall is a working courthouse',
        detail:
          'It holds a unit of the City Civil Courts. Expect lawyers and litigants rather than a visitor desk, and treat it as a place of business.',
      },
      {
        tag: 'Etiquette',
        title: 'Bowring Institute is a private club',
        detail:
          'Not a public building. The grounds and the gate are best seen from St Mark’s Road; there is no walk-in access for visitors.',
      },
    ],
    stops: [
      {
        id: 'cant1',
        num: 1,
        name: 'Mayo Hall',
        position: [12.9719, 77.6088],
        type: 'Heritage Building',
        address: 'MG Road, near the Residency Road junction',
        period: 'Begun 1875 · opened 1883',
        bullets: [
          'Built as a memorial to Richard Bourke, Lord Mayo, the fourth Viceroy of India, who was assassinated in 1872.',
          'Construction started in 1875 and dragged; the British Resident finally inaugurated the building on 6 June 1883.',
          'Greco-Roman throughout — pedimented windows, keystoned arches, Tuscan columns, balustraded ledges and wooden floors above.',
          'It was the Cantonment’s public hall: where committees met, subscriptions were raised and the station held its functions.',
          'It now houses a unit of the City Civil Courts, so the building is at work rather than on display.',
        ],
        context:
          'The Cantonment had its own hall, church, club and municipal board inside a few hundred metres. It was not a district of Bengaluru but a separate town under separate law, and the buildings on this walk are that town’s civic set.',
        fact:
          'The Queen Victoria Memorial Fund met in this hall a little over a year after Victoria died, to decide how Bengaluru should remember her. The committee wanted a technical institute with a statue in front of it, could not raise the money, and settled for the statue alone — stop five on this walk.',
      },
      {
        id: 'cant2',
        num: 2,
        name: 'MG Road, once South Parade',
        position: [12.9740, 77.6050],
        type: 'Trade Street',
        address: 'Mahatma Gandhi Road, between Brigade Road and Trinity Circle',
        period: 'Cantonment spine from the early 1800s',
        bullets: [
          'The main street of the Cantonment, laid along the southern edge of the parade ground and known for well over a century as South Parade.',
          'It was renamed Mahatma Gandhi Road after Independence, and hardly anybody has used the old name since.',
          'The shops, tailors, auction houses and hotels along it served the garrison and the European civil population.',
          'The street names around it are a muster roll: Brigade Road, Infantry Road, Cavalry Road, Artillery Road.',
          'Arcot Narrainswamy Mudaliar ran his auction house, the Bangalore Agency, on South Parade; the site became the Plaza Theatre and is now the MG Road metro station.',
        ],
        context:
          'Two main streets, two languages, two municipalities. Avenue Road on Walk 1 and South Parade here did exactly the same job for two towns that sat three kilometres and one administration apart.',
        fact:
          'Narrainswamy Mudaliar began at twenty-two carrying vegetables from Bengaluru to Madras to sell, moved into the salt trade, then won the contract to build the Attara Kacheri on the next walk. He ended as the ‘Merchant Prince of Bangalore’, and the fifteen educational institutions that carry his name are still run by his descendants.',
      },
      {
        id: 'cant3',
        num: 3,
        name: 'St Mark’s Cathedral',
        position: [12.9738, 77.6012],
        type: 'Church',
        address: '1 MG Road, at the Queen’s Road junction',
        period: 'Foundation stone 1808 · rebuilt 1927',
        bullets: [
          'The oldest Protestant church in the Cantonment. The foundation stone was laid in 1808, the building finished in 1812, and the Bishop of Calcutta consecrated it in 1816.',
          'It began as the garrison church of the East India Company’s Madras Army, seating about 400.',
          'It has been rebuilt again and again: an enlarged church of 1902 collapsed and was rebuilt in 1906; fire gutted it on 17 February 1923; the repaired dome fell in once more in February 1924.',
          'What stands now is the reconstruction of 1926–27 — semi-circular arches, Ionic columns and pilasters, and prominent domes.',
          'It joined the Church of South India after 1947 and became the cathedral of the Karnataka Central Diocese in 1961.',
        ],
        context:
          'Early Bengaluru churches map where the troops were. The Fort Church of 1808 on Walk 4 served the garrison inside the kote; St Mark’s, begun the same year, served the new Cantonment. The same army, the same year, three kilometres apart.',
        fact:
          'While St Mark’s was being rebuilt after the 1923 fire the congregation worshipped at St Andrew’s Kirk on Cubbon Road. The two-manual pipe organ installed in 1928, cased in Burma teak, was a gift from the mother of the England cricketer Colin Cowdrey.',
      },
      {
        id: 'cant4',
        num: 4,
        name: 'Bowring Institute',
        position: [12.9724, 77.5988],
        type: 'Club',
        address: 'St Mark’s Road',
        period: 'Founded 1868 · this site from 1888',
        bullets: [
          'Founded in 1868 as a scientific and literary institute for the Cantonment — a reading room and lecture society before it was ever a sports club.',
          'It is named after Lewin Bentham Bowring, Chief Commissioner of Mysore from 1862 to 1870.',
          'Its founder was Benjamin Lewis Rice, the epigraphist behind Epigraphia Carnatica.',
          'The foundation stone of the present twelve-acre property on St Mark’s Road was laid on 22 November 1888.',
          'It has what is probably the largest private library in the city, and is best known today for its tennis.',
        ],
        context:
          'B L Rice appears twice across these walks — here as the founder of a learned society in the Cantonment, and on Walk 1 at the church named for his father, who preached the first Kannada sermon in the pete. One family, both halves of the city.',
        fact:
          'Bowring, whose name is on the door, also had the great Begur hero stone brought into the Government Museum in the 1860s — the carved slab you can see near the entrance on the next walk. The same administrator signed off on the club and on the museum.',
      },
      {
        id: 'cant5',
        num: 5,
        name: 'The Victoria Statue',
        position: [12.9748, 77.5958],
        type: 'Statue',
        address: 'Queen’s Park, at Queen’s Road and Kasturba Road',
        period: 'Unveiled 5 February 1906',
        bullets: [
          'An eleven-foot marble Victoria on a thirteen-foot granite pedestal, standing behind a screen of trees.',
          'It was unveiled on 5 February 1906 by the Prince of Wales, the future George V, during a tour on which he unveiled Victoria memorials across India.',
          'The sculptor was Thomas Brock, whose best-known work is the Victoria Memorial outside Buckingham Palace.',
          'Bengaluru’s figure follows one Brock made for Worcester in 1890; versions of it also went to Cape Town, Birmingham, Carlisle and Belfast.',
          'The statue was shipped from England and reached the city in July 1905.',
        ],
        context:
          'Six months of public subscription raised only about ten thousand rupees, and nearly all of it came from one man, Narrainswamy Mudaliar. Krishnaraja Wodeyar IV made up the rest — so a British Cantonment monument was largely paid for by an Indian merchant and an Indian king.',
        fact:
          'Of more than fifty Victoria statues once installed across India, only about five still stand where they were put, and this is one of them. Her sceptre broke and her orb lost its cross over the years; the Horticulture Department restored both in 2017, giving her a shortened sceptre and a miniature cross.',
      },
      {
        id: 'cant6',
        num: 6,
        name: 'Cubbon Park Police Station',
        position: [12.9742, 77.5948],
        type: 'Heritage Building',
        address: 'Kasturba Road, at the edge of the park',
        period: 'Built 1910',
        bullets: [
          'A small period building with a monkey-top entrance and the year 1910 set into the gable.',
          'It stands here because of the statue you have just passed.',
          'The original police station was much closer to the Victoria statue, and the park’s superintendents wanted it out of the way.',
          'John Cameron and then G H Krumbiegel, successive Superintendents of Government Gardens and Parks, pressed for its removal so an ornamental railing could go round the statue instead.',
          'The move was approved in 1909 and this replacement went up the following year.',
        ],
        context:
          'Krumbiegel, a German horticulturist who stayed on in Mysore service, shaped a great deal of what the city looks like at street level. He is the reason so many Bengaluru avenues are planted with a single flowering species that comes into bloom all at once.',
        fact:
          'The monkey-top — a small sloping wooden hood over a window or door — is the most local detail in colonial architecture here. It throws off rain and low sun, and you meet it again on Fort High School on Walk 4.',
      },
      {
        id: 'cant7',
        num: 7,
        name: 'Visvesvaraya Industrial & Technological Museum',
        position: [12.9726, 77.5945],
        type: 'Museum',
        address: 'Kasturba Road, on the eastern edge of the park',
        period: 'Opened 14 July 1962',
        bullets: [
          'Opened on 14 July 1962 and inaugurated by Jawaharlal Nehru, on a site inside Cubbon Park.',
          'It is named after Sir M Visvesvaraya, the engineer and Dewan whose bank stands at the top of Walk 1.',
          'It is a hands-on museum — engines, levers, electricity, things you work rather than things behind glass.',
          'It is run by the National Council of Science Museums, a central body, rather than by the state.',
          'Its building covers about 4,000 square metres, put up next door to the nineteenth-century Government Museum.',
        ],
        context:
          'Setting a science museum beside an archaeology museum in 1962 was a statement about what the new republic thought a citizen ought to know. One building holds the oldest Kannada inscription; the other holds a steam engine you are allowed to touch.',
        fact:
          'Visvesvaraya ties half of these walks together: the Bank of Mysore on Walk 1 was his argument, the Shivanasamudram power that lit KR Market flowed through the state he helped run, and this museum carries his name. He died in April 1962, three months before it opened.',
      },
      {
        id: 'cant8',
        num: 8,
        name: 'Venkatappa Art Gallery',
        position: [12.9722, 77.5938],
        type: 'Gallery',
        address: 'Kasturba Road, adjoining the Government Museum',
        period: 'Foundation stone 1967 · opened 1975',
        bullets: [
          'The state art gallery, built to house the work of K Venkatappa (1886–1965), the best-known Karnataka artist of his generation.',
          'Venkatappa was a pupil of Abanindranath Tagore, which puts him in the Bengal School at the moment it reached the south.',
          'The collection holds his paintings and plaster bas-reliefs, and — unusually for an art gallery — his musical instruments.',
          'Works by K K Hebbar were added in 1993, along with sculpture by Rajaram; the upper floors take temporary shows.',
          'Chief Minister S Nijalingappa laid the foundation stone on 24 November 1967, but the building was not finished until 1975.',
        ],
        context:
          'Venkatappa sits precisely on the seam these walks keep crossing: trained in a modern art school in Calcutta, working in a princely state, painting subjects the Mysore court would have recognised.',
        fact:
          'The gallery was designed as an artificial island, ringed by a moat with a lotus pond. Five floors were planned and only three were ever built — so the building you see is, quite literally, two-fifths of the idea.',
      },
    ],
  },
  {
    id: 'cubbon',
    name: 'Walk 6: Inside Cubbon Park — Stone, Statues & the Soudha',
    short: 'Cubbon Park',
    subtitle: 'A designed landscape of 1870 and the public buildings set into it, from an 1860s museum to a legislature built to tower over the Raj',
    distance: '~2.5 km · about 2 hours',
    color: '#16a34a',
    colorSoft: '#22c55e',
    center: [12.9755, 77.5915],
    intro:
      'Cubbon Park is not a wilderness that survived. It is a designed landscape, laid out in 1870 by an engineer who painted, and then stocked with the public buildings of two successive governments. This route reads it the way its builders meant it to be read — museum, bandstand, courts, legislature — and finishes on the park itself.',
    todo: [
      {
        tag: 'Timing',
        title: 'Come on a Sunday',
        detail:
          'The park is closed to vehicles on Sundays and public holidays, which is the only time it reads as the landscape Sankey drew. Vehicles are also barred every night between 10pm and 8am. The rules for other days have changed more than once, so check before relying on them.',
      },
      {
        tag: 'Timing',
        title: 'See the Soudha lit',
        detail:
          'The Vidhana Soudha is floodlit on Sunday evenings and public holidays, usually between about 6 and 8.30pm. Visitors are not allowed inside at any time, so the lighting is the closest you get.',
      },
      {
        tag: 'Visit',
        title: 'Find the Halmidi inscription',
        detail:
          'In the Government Museum: a stone of about 450 CE from Hasan district, the oldest known inscription in Kannada. The same museum holds pottery, dice and toys excavated at Mohenjo-daro.',
      },
      {
        tag: 'Visit',
        title: 'The library is a real library',
        detail:
          'The State Central Library inside Seshadri Iyer Memorial Hall is a working public reference library with well over two lakh volumes, including several thousand rare books. You can walk in during library hours.',
      },
    ],
    stops: [
      {
        id: 'park1',
        num: 1,
        name: 'Government Museum',
        position: [12.9723, 77.5935],
        type: 'Museum',
        address: 'Kasturba Road, beside the Venkatappa gallery',
        period: 'Founded 1865 · this building 1877',
        bullets: [
          'Established on 18 August 1865, which makes it one of the oldest museums in India.',
          'The surgeon Edward Green Balfour, who had founded the Madras museum in 1851, talked the government into starting one here.',
          'Officers across the state were asked to send in anything of interest and the public donated more, so the first collection was in effect crowd-sourced.',
          'It opened in a room in the Cantonment jail, moved to rented premises on Museum Road, and reached this building in 1877–78.',
          'Col Richard Sankey designed it in a classical Greco-Roman manner — Corinthian columns, and different window treatments on each of the two floors.',
        ],
        context:
          'Balfour founded two of south India’s major museums within fifteen years and set the same pattern for both: a general collection spanning geology, archaeology, art and industry, built for public instruction rather than for scholars.',
        fact:
          'The Halmidi inscription is here — a stone from a village in Hasan district carved around 450 CE, and the oldest known inscription in Kannada. The museum also holds objects from Mohenjo-daro and the massive Begur hero stone that L B Bowring had brought in from a temple in the 1860s.',
      },
      {
        id: 'park2',
        num: 2,
        name: 'The Bandstand & Mark Cubbon’s Horse',
        position: [12.9735, 77.5920],
        type: 'Public Square',
        address: 'Central Cubbon Park, about 550 m in from the Victoria statue',
        period: 'Present structure late 1920s',
        bullets: [
          'Bandstands came out of the brass band movement in Victorian Britain, where free park concerts drew crowds in the tens of thousands.',
          'Cubbon Park’s have been restless. The earliest stood near where Bowring Institute is now and was pulled down around 1888.',
          'A replacement near Seshadri Iyer Memorial Hall was begun in 1913 and paid for by the Maharaja; the present one was built here in the late 1920s.',
          'It is typical of the type — cast-iron columns, timber frame, decorative roofline, octagonal plan, raised plinth. The roof is a 2013 replacement.',
          'Bands of the British and Mysore armies and of the police played here at least once a week.',
        ],
        context:
          'A bandstand is civic equipment rather than decoration: it exists so that a state can put on free music in a public park. Both of Bengaluru’s governments used this one, which is how the same platform carried a British garrison band and the Maharaja’s band in the same week.',
        fact:
          'The equestrian statue of Sir Mark Cubbon beside it was sculpted by Carlo Marochetti, cast in London, and unveiled at the Parade Ground on 16 March 1866 by Bowring. It then stood for over a century in the High Court grounds, and was moved here in 2020 so that the public could actually reach it.',
      },
      {
        id: 'park3',
        num: 3,
        name: 'Attara Kacheri, the High Court',
        position: [12.9745, 77.5918],
        type: 'Heritage Building',
        address: 'Dr Ambedkar Veedhi, opposite the Vidhana Soudha',
        period: 'Built 1864–1868',
        bullets: [
          'Built between 1864 and 1868 for government offices that had until then worked out of Tipu’s palace in the fort — the palace on Walk 3.',
          'The name means eighteen offices: attara, eighteen, and kacheri, department.',
          'Richard Sankey drew the plans after earlier designs were rejected in Delhi; Arcot Narrainswamy Mudaliar built it.',
          'Neoclassical in red ochre, with Ionic porticoes, long arcades and deep verandahs, in gneiss and brick set in chunam.',
          'The Mysore government worked here until 1956, when it crossed the road to the Vidhana Soudha and the High Court took the whole building.',
        ],
        context:
          'Sankey was proudest of the verandahs. ‘Hardly a ray of direct sunlight finds its way into the building,’ he wrote, ‘while at the same time there is abundant light and ventilation.’ The shell is European; the way it handles heat is entirely local.',
        fact:
          'The building has been condemned twice. In the 1950s Kengal Hanumanthaiah wanted this symbol of colonial power demolished and agreed to spare it only if the new legislature across the road would tower over it. In 1982 the government approved demolition outright; a public interest litigation — among the first heritage campaigns in the city — reached the Supreme Court, and the plan was dropped in 1985.',
      },
      {
        id: 'park4',
        num: 4,
        name: 'Vidhana Soudha',
        position: [12.9794, 77.5912],
        type: 'Heritage Building',
        address: 'Dr Ambedkar Veedhi, across from the High Court',
        period: 'Built 1952–1956',
        bullets: [
          'Karnataka’s legislature and part of its secretariat, and the largest legislature-cum-office complex in the country.',
          'Nehru laid the foundation stone on 13 July 1951; construction ran from 1952 to 1956.',
          'It was the project of Kengal Hanumanthaiah, Chief Minister from 1951 to 1956, who wanted a building that would reflect ‘the power and dignity of the people’.',
          'The style is called Neo-Dravidian: a modern granite office block carrying the vocabulary of south Indian temple architecture, with Indo-Islamic and colonial touches.',
          'Visitors are not allowed inside, so it is a building to be read from the road.',
        ],
        context:
          'Hanumanthaiah travelled through Europe, Russia and the United States before building it, and came back certain that a free state should not house its legislature in a borrowed European style. The argument he was having was with the building directly across the road.',
        fact:
          'The site is an argument in stone. He placed the Soudha opposite the Attara Kacheri and raised it on a flight of steps so the new legislature would look down on the old colonial offices — the price he set for not knocking them down. He had been a pupil at Fort High School, on Walk 4.',
      },
      {
        id: 'park5',
        num: 5,
        name: 'Vikasa Soudha',
        position: [12.9800, 77.5893],
        type: 'Heritage Building',
        address: 'Immediately west of the Vidhana Soudha',
        period: 'Inaugurated February 2005',
        bullets: [
          'The annexe built to take the departments the Vidhana Soudha could no longer hold.',
          'It was inaugurated in February 2005, almost fifty years after its neighbour.',
          'It follows the Neo-Dravidian idiom closely — the same granite, pillars and domed pavilions.',
          'Eight floors, some 360 rooms and fifteen conference halls, over about eight acres, with a three-level basement for six hundred cars.',
          'Like the Soudha, it is a working office complex and not open to visitors.',
        ],
        context:
          'Whether the resemblance is homage or a failure of nerve is still argued over by architects here. It does settle one thing: the style Hanumanthaiah invented in 1956 had become, fifty years on, simply what a Karnataka government building looks like.',
        fact:
          'Line up the three and you get a hundred and forty years of who was in charge: the Attara Kacheri of 1868 for the British administration, the Vidhana Soudha of 1956 for the new state, and the Vikasa Soudha of 2005 for a government that had outgrown both.',
      },
      {
        id: 'park6',
        num: 6,
        name: 'Seshadri Iyer Memorial Hall',
        position: [12.9757, 77.5903],
        type: 'Heritage Building',
        address: 'Ringwood Circle, central Cubbon Park',
        period: 'Foundation stone 1903 · library from the 1910s',
        bullets: [
          'The red building at the middle of the park, now the State Central Library.',
          'It commemorates Sir K Seshadri Iyer, Dewan of Mysore from 1883 to 1901 and the longest-serving holder of that office.',
          'Lord Curzon suggested a memorial; Sir Donald Robertson, the British Resident, laid the foundation stone on 15 October 1903.',
          'It was paid for by public donation, on the express condition that it be used for ‘a Public Hall with a statue and a Library’.',
          'European classical in style, with Tuscan and Corinthian columns, curved Dutch gables, an unusual apsidal plan and wooden roofs nearly fourteen metres high.',
        ],
        context:
          'Seshadri Iyer is often called the maker of modern Bengaluru. The Basavanagudi, Malleswaram and Seshadripuram extensions, the Chamarajendra Water Works drawing from Hesaraghatta, and the Shivanasamudram hydroelectric scheme that later lit KR Market all date from his administration.',
        fact:
          'For a public hall raised by public subscription it took a remarkably long time to become public. From about 1908 to 1920 part of it was rented to a club, which used the big hall as a billiards room and laid tennis courts outside. The library moved in in 1914, shared the building with the club and an educational museum for six years, and only got the whole place in 1920.',
      },
      {
        id: 'park7',
        num: 7,
        name: 'Chamarajendra Statue',
        position: [12.9742, 77.5902],
        type: 'Statue',
        address: 'On the right fork south of Ringwood Circle',
        period: 'Installed 1927',
        bullets: [
          'A marble statue of Chamaraja Wodeyar, who ruled Mysore from 1881 until his death in 1894 at the age of thirty-one.',
          'It was executed in 1927 by G K Mhatre, a sculptor from Bombay.',
          'Look above the inscription for the gandabherunda, the Wodeyars’ two-headed bird — the same emblem as on Mohan Buildings and Minto Hospital.',
          'His short reign began the moves towards representative government that made Mysore the first princely state in India to attempt it.',
          'He also pushed the education of women, the thread that runs through the Vani Vilas Institute on Walk 4.',
        ],
        context:
          'The Rendition of 1881 returned Mysore to its Maharaja after half a century of direct British administration, and Chamarajendra was the ruler it was returned to. The Attara Kacheri, built for British officials, became his government’s offices almost overnight.',
        fact:
          'The park was officially renamed Sri Chamarajendra Park in his memory in 1927, the same year this statue went up — which is why every official sign calls it that and nobody in the city ever does.',
      },
      {
        id: 'park8',
        num: 8,
        name: 'The Park Itself',
        position: [12.9728, 77.5898],
        type: 'Park',
        address: 'Sri Chamarajendra Park, between Kasturba Road and Dr Ambedkar Veedhi',
        period: 'Laid out 1870',
        bullets: [
          'Cubbon Park was laid out in 1870 by Richard Sankey, then Chief Engineer of Mysore, over about a hundred acres.',
          'It was first called Meade’s Park after Sir John Meade, the acting Commissioner, then renamed for Sir Mark Cubbon, who held the post far longer.',
          'In 1927 it was officially renamed Sri Chamarajendra Park. It now runs to roughly three hundred acres.',
          'Sankey painted landscapes, and it shows — winding paths and picturesque water rather than the straight avenues of a formal garden.',
          'The land around the library, including a hamlet called Sillubande, was bought up and folded into the park around 1910.',
        ],
        context:
          'Sankey surveyed the old tank system before he built anything here and concluded that sixty per cent of Mysore was already under tank irrigation — ‘it would now require some ingenuity’, he wrote in 1866, ‘to discover a site within this great area suitable for a new tank’. He then built one anyway, and for years it was known as Sankey’s Folly.',
        fact:
          'Sankey designed the High Court, the Government Museum and this park, laid out Mayo Hall’s Cantonment and dammed Sankey Tank — and he was an Irishman from Tipperary who had designed his first building, a cathedral in Nagpur, at twenty-two. Five stops on these two walks are his.',
      },
    ],
  },
]

export default walks
