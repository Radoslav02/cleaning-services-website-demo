export type Lang = 'sr' | 'en'

const sr = {
  titles: {
    '/': 'Revive Interiors: Dubinsko čišćenje auta i doma',
    '/our-work': 'Naši radovi · Revive Interiors',
    '/contact': 'Besplatna ponuda · Revive Interiors',
    fallback: 'Revive Interiors',
  } as Record<string, string>,
  common: {
    skipToContent: 'Preskoči na sadržaj',
    ctaQuote: 'Besplatna ponuda',
    ctaWork: 'Pogledajte radove',
    placeholderAria: 'Mesto za fotografiju',
    langSwitcherAria: 'Izbor jezika',
  },
  header: {
    logoAria: 'Revive Interiors, početna',
    nav: [
      { to: '/', label: 'Početna' },
      { to: '/our-work', label: 'Naši radovi' },
      { to: '/contact', label: 'Kontakt' },
    ],
    openMenu: 'Otvori meni',
    closeMenu: 'Zatvori meni',
  },
  home: {
    eyebrow: 'Dubinsko čišćenje auta i doma',
    heroTitle: 'Enterijer koji ponovo deluje kao nov.',
    heroSubtext:
      'Sedišta, tepisi, garniture i dušeci dubinski očišćeni kod vas. Sveže, besprekorno i suvo istog dana.',
    heroPlaceholder: 'Tehničar dubinski čisti svetlosivo auto sedište, krupni plan',
    servicesTitle: 'Dve stvari, urađene kako treba',
    servicesIntro:
      'Čistimo isključivo enterijere, pa svaki dolazak znači prave mašine, prava sredstva i tehničara koji je vaš tip fleke već video.',
    services: [
      {
        title: 'Dubinsko čišćenje auta',
        text: 'Kompletno osveženje kabine, od svakodnevnog auta do pripreme za prodaju.',
        items: ['Sedišta i plafon', 'Tepisi i patosnice', 'Tabla, plastika i ventilacija', 'Tretman mirisa'],
        placeholder: 'Kabina automobila nakon detailinga: čista sedišta, tepih i konzola',
      },
      {
        title: 'Dubinsko čišćenje doma',
        text: 'Ekstrakcija toplom vodom za nameštaj i tkanine koje vaša porodica koristi svakog dana.',
        items: ['Garniture i fotelje', 'Tepisi i staze', 'Dušeci i kreveti', 'Uklanjanje fleka i mirisa'],
        placeholder: 'Garnitura u dnevnoj sobi tokom čišćenja: jedan vidno osvežen jastuk',
      },
    ],
    processTitle: 'Kako funkcioniše',
    steps: [
      {
        title: 'Recite nam šta treba osvežiti',
        text: 'Pošaljite fotografiju ili kratak opis i dobijate fiksnu cenu istog dana. Izlazak na teren nije potreban.',
      },
      {
        title: 'Dolazimo kod vas',
        text: 'Naš kombi nosi vodu, struju i sve ostalo. Vi samo pokažete auto ili garnituru.',
      },
      {
        title: 'Suvo i gotovo za par sati',
        text: 'Dubinska ekstrakcija izvlači vlagu nazad, pa je većina tkanina spremna za korišćenje isto popodne.',
      },
    ],
    beforeAfterTitle: 'Razlika, jedno pored drugog',
    beforeAfterText:
      'Svaki posao završavamo parom fotografija. Ovo je porodični auto posle pet godina vožnje dece u školu.',
    beforeLabel: 'Pre: zadnja klupa sa mrvicama, flekama i dlakama ljubimaca',
    afterLabel: 'Posle: ista zadnja klupa, besprekorna presvlaka',
    quotesTitle: 'Šta kažu komšije',
    quotes: [
      {
        quote: 'Auto je mirisao kao iz salona kad su završili. Nedelju dana kasnije zakazala sam i garnituru.',
        name: 'Mila Petrović',
        role: 'Čišćenje enterijera auta, Centar',
      },
      {
        quote: 'Dva mališana, jedan krem tepih. Iskreno sam mislio da je nepovratno uništen. Nije bio.',
        name: 'Nikola Jović',
        role: 'Čišćenje tepiha, Severno naselje',
      },
      {
        quote: 'Vratili su nameštaj na mesto, obrisali tragove za sobom, a dušek se osušio pre spavanja.',
        name: 'Jelena Ilić',
        role: 'Čišćenje dušeka i tepiha, Jezerovo',
      },
    ],
    ctaTitle: 'Spremni za svež početak?',
    ctaSubtext: 'Besplatne ponude, fiksne cene i većina termina u istoj nedelji.',
  },
  work: {
    title: 'Naši radovi',
    intro:
      'Svaki posao završavamo parom fotografija, snimljenim na licu mesta pre nego što spakujemo kombi. Primeri ispod pokazuju kako će galerija izgledati.',
    carTitle: 'Enterijeri automobila',
    homeTitle: 'Enterijeri doma',
    carJobs: [
      {
        title: 'Porodični SUV, kompletno osveženje kabine',
        detail: 'Pet godina vožnje dece u školu: ekstrakcija sedišta, šamponiranje tepiha i ozonski tretman mirisa.',
        before: 'Pre: zadnja klupa SUV-a sa flekama od soka i mrvicama',
        after: 'Posle: zadnja klupa SUV-a, ujednačena čista tkanina',
      },
      {
        title: 'Detailing pre prodaje',
        detail: 'Čišćenje enterijera pre privatne prodaje, uključujući plafon i tapacirunge vrata.',
        before: 'Pre: vozačko sedište sa izlizanim, posivelim bočnim delom',
        after: 'Posle: vozačko sedište sa osveženom bojom i čistim šavovima',
      },
      {
        title: 'Kombi za prevoz ljubimaca, uklanjanje dlaka',
        detail: 'Sedišta i prtljažni prostor frizerskog kombija, očišćeni od utkanih dlaka i peruti.',
        before: 'Pre: tepih prtljažnika slepljen dlakama ljubimaca',
        after: 'Posle: isti tepih, bez dlaka i sa vidljivim vlaknima',
      },
    ],
    homeJobs: [
      {
        title: 'Krem tepih, izdanje za mališane',
        detail: 'Tepih u dnevnoj sobi sa flekama od boje, hrane i nepoznatog porekla. Ekstrakcija toplom vodom u celosti.',
        before: 'Pre: krem tepih sa razbacanim tamnim flekama',
        after: 'Posle: krem tepih vraćen u ujednačen ton',
      },
      {
        title: 'Oživljavanje troseda',
        detail: 'Omiljena platnena garnitura, očišćena jastuk po jastuk ekstrakcijom sa malo vlage.',
        before: 'Pre: jastuci troseda sa potamnelim, sjajnim tragovima habanja',
        after: 'Posle: trosed sa podignutim vlaknima i ujednačenom bojom',
      },
      {
        title: 'Dušek u spavaćoj sobi',
        detail: 'Dubinsko čišćenje i dezinfekcija, suv i vraćen na krevet istog dana.',
        before: 'Pre: dušek sa vidljivim kolutovima i tragovima prašine',
        after: 'Posle: površina dušeka čista i svetla',
      },
    ],
    ctaTitle: 'Vi ste sledeći?',
    ctaSubtext: 'Pošaljite fotografiju nereda. Gotovo sigurno smo videli i gore.',
  },
  contact: {
    title: 'Zatražite besplatnu ponudu',
    intro: 'Recite nam šta treba dubinski očistiti i odgovaramo fiksnom cenom istog dana.',
    callLabel: 'Pozovite ili pošaljite poruku',
    emailLabel: 'Imejl',
    areaLabel: 'Područje rada',
    areaText: 'Centar, Severno naselje, Jezerovo i 50 km okolo',
    hoursLabel: 'Radno vreme',
    hoursText: 'Ponedeljak do subote, 8:00-18:00',
    formTitle: 'Opišite nam posao',
    nameLabel: 'Vaše ime',
    phoneLabel: 'Broj telefona',
    phoneHelp: 'Koristimo ga samo da pošaljemo ponudu i potvrdimo termin.',
    serviceLabel: 'Šta treba očistiti?',
    serviceOptions: [
      { value: '', label: 'Izaberite uslugu' },
      { value: 'car', label: 'Dubinsko čišćenje auta' },
      { value: 'home', label: 'Dubinsko čišćenje doma' },
      { value: 'both', label: 'Oboje: auto i dom' },
    ],
    detailsLabel: 'Detalji',
    detailsOptional: '(opciono)',
    detailsHelp: 'Fleke, ljubimci, mirisi, broj sedišta ili prostorija. Sve pomaže proceni.',
    submit: 'Pošaljite zahtev',
    errors: {
      name: 'Recite nam svoje ime.',
      phone: 'Potreban nam je broj telefona da pošaljemo ponudu.',
      service: 'Izaberite uslugu.',
    },
    successTitle: 'Zahtev poslat',
    successBody: 'Hvala, {name}. Zvaćemo vas sa fiksnom cenom istog dana.',
  },
  footer: {
    blurb:
      'Mobilno dubinsko čišćenje automobilskih kabina i kućnih enterijera. Dolazimo kod vas, čistimo ono u čemu živite i ostavljamo suvo za par sati.',
    pagesTitle: 'Stranice',
    servicesTitle: 'Usluge',
    services: ['Dubinsko čišćenje auta', 'Garniture i fotelje', 'Tepisi i staze', 'Dušeci i kreveti'],
    reachTitle: 'Kontakt podaci',
    area: 'Centar, Severno naselje, Jezerovo i okolina',
    hours: 'Pon-sub, 8:00-18:00',
    legal: '© 2026 Revive Interiors. Demo sajt: sva imena, brojevi i sadržaj su primeri.',
    badges: 'Potpuno osigurani · Garancija zadovoljstva',
  },
}

const en: typeof sr = {
  titles: {
    '/': 'Revive Interiors: Car & Home Deep Cleaning',
    '/our-work': 'Our Work · Revive Interiors',
    '/contact': 'Free Quote · Revive Interiors',
    fallback: 'Revive Interiors',
  },
  common: {
    skipToContent: 'Skip to content',
    ctaQuote: 'Get a free quote',
    ctaWork: 'See our work',
    placeholderAria: 'Image placeholder',
    langSwitcherAria: 'Language selection',
  },
  header: {
    logoAria: 'Revive Interiors, home',
    nav: [
      { to: '/', label: 'Home' },
      { to: '/our-work', label: 'Our work' },
      { to: '/contact', label: 'Contact' },
    ],
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  home: {
    eyebrow: 'Car & home deep cleaning',
    heroTitle: 'Interiors that feel new again.',
    heroSubtext:
      'Seats, carpets, sofas, and mattresses deep-cleaned at your place. Fresh, spotless, and dry the same day.',
    heroPlaceholder: 'Technician extraction-cleaning a light grey car seat, close up',
    servicesTitle: 'Two things, done properly',
    servicesIntro:
      'We only clean interiors, so every visit comes with the right machines, the right products, and a technician who has seen your kind of stain before.',
    services: [
      {
        title: 'Car interior deep clean',
        text: 'A full reset for your cabin, from daily-driver refresh to pre-sale detail.',
        items: ['Seats & headliner', 'Carpets & floor mats', 'Dashboard, trim & vents', 'Odor treatment'],
        placeholder: 'Finished car cabin after detail: clean seats, carpet and console',
      },
      {
        title: 'Home interior deep clean',
        text: 'Hot-water extraction for the furniture and fabrics your family uses every day.',
        items: ['Sofas & upholstered chairs', 'Carpets & rugs', 'Mattresses & beds', 'Stain & odor removal'],
        placeholder: 'Living room sofa mid-cleaning: one visibly refreshed cushion',
      },
    ],
    processTitle: 'How it works',
    steps: [
      {
        title: 'Tell us what needs reviving',
        text: 'Send a photo or a short description and get a fixed price the same day. No site visit needed.',
      },
      {
        title: 'We come to you',
        text: 'Our van carries water, power, and everything else. You just point us at the car or the couch.',
      },
      {
        title: 'Dry and done in hours',
        text: 'Deep extraction pulls the moisture back out, so most fabrics are ready to use the same afternoon.',
      },
    ],
    beforeAfterTitle: 'The difference, side by side',
    beforeAfterText:
      'Every job ends with a photo pair. This one is a family car after five years of school runs.',
    beforeLabel: 'Before: rear seat with crumbs, stains and pet hair',
    afterLabel: 'After: same rear seat, spotless upholstery',
    quotesTitle: 'What neighbors say',
    quotes: [
      {
        quote: 'The car smelled showroom-new when they were done. Booked them for the sofa a week later.',
        name: 'Mila Petrović',
        role: 'Car interior clean, City Center',
      },
      {
        quote: 'Two toddlers, one cream carpet. I honestly thought it was ruined for good. It was not.',
        name: 'Nikola Jović',
        role: 'Carpet clean, Northside',
      },
      {
        quote: 'They moved the furniture back, wiped their tracks, and the mattress dried before bedtime.',
        name: 'Jelena Ilić',
        role: 'Mattress & rug clean, Lakeview',
      },
    ],
    ctaTitle: 'Ready for a fresh start?',
    ctaSubtext: 'Free quotes, fixed prices, and most jobs booked within the week.',
  },
  work: {
    title: 'Our work',
    intro:
      'Every job ends with a photo pair, taken on the spot before we pack up the van. Sample jobs below show how the gallery will look.',
    carTitle: 'Car interiors',
    homeTitle: 'Home interiors',
    carJobs: [
      {
        title: 'Family SUV, full cabin reset',
        detail: 'Five years of school runs: seat extraction, carpet shampoo, and an ozone odor treatment.',
        before: 'Before: SUV rear bench with juice stains and crumbs',
        after: 'After: SUV rear bench, uniform clean fabric',
      },
      {
        title: 'Pre-sale hatchback detail',
        detail: 'Interior detail before a private sale, including headliner and door cards.',
        before: 'Before: hatchback driver seat with worn, greyed bolster',
        after: 'After: driver seat with revived color and clean stitching',
      },
      {
        title: 'Pet-taxi van, hair removal',
        detail: 'A groomer’s van seats and cargo area, cleared of embedded pet hair and dander.',
        before: 'Before: van cargo carpet matted with pet hair',
        after: 'After: same cargo carpet, hair-free with visible pile',
      },
    ],
    homeJobs: [
      {
        title: 'Cream carpet, toddler edition',
        detail: 'Living room carpet with paint, food, and mystery stains. Hot-water extraction throughout.',
        before: 'Before: cream carpet with scattered dark stains',
        after: 'After: cream carpet restored to an even tone',
      },
      {
        title: 'Three-seater sofa revival',
        detail: 'A well-loved fabric sofa, cleaned cushion by cushion with low-moisture extraction.',
        before: 'Before: sofa seat cushions with darkened, shiny wear areas',
        after: 'After: sofa with lifted pile and even color',
      },
      {
        title: 'Master bedroom mattress',
        detail: 'Deep clean and sanitizing treatment, dry and back on the bed frame the same day.',
        before: 'Before: mattress with visible rings and dust marks',
        after: 'After: mattress surface clean and bright',
      },
    ],
    ctaTitle: 'Your turn?',
    ctaSubtext: 'Send a photo of the mess. We have almost certainly seen worse.',
  },
  contact: {
    title: 'Get a free quote',
    intro: 'Tell us what needs a deep clean and we’ll reply with a fixed price the same day.',
    callLabel: 'Call or text',
    emailLabel: 'Email',
    areaLabel: 'Service area',
    areaText: 'City Center, Northside, Lakeview, and 50 km around',
    hoursLabel: 'Hours',
    hoursText: 'Monday to Saturday, 8:00-18:00',
    formTitle: 'Tell us about the job',
    nameLabel: 'Your name',
    phoneLabel: 'Phone number',
    phoneHelp: 'We only use it to send your quote and confirm the visit.',
    serviceLabel: 'What needs cleaning?',
    serviceOptions: [
      { value: '', label: 'Choose a service' },
      { value: 'car', label: 'Car interior deep clean' },
      { value: 'home', label: 'Home interior deep clean' },
      { value: 'both', label: 'Both: car and home' },
    ],
    detailsLabel: 'Details',
    detailsOptional: '(optional)',
    detailsHelp: 'Stains, pets, smells, how many seats or rooms. Anything helps the estimate.',
    submit: 'Send request',
    errors: {
      name: 'Please tell us your name.',
      phone: 'We need a phone number to send your quote.',
      service: 'Please pick a service.',
    },
    successTitle: 'Request sent',
    successBody: 'Thanks, {name}. We’ll call you back with a fixed price the same day.',
  },
  footer: {
    blurb:
      'Mobile deep cleaning for car cabins and home interiors. We come to you, clean what you live in, and leave it dry within hours.',
    pagesTitle: 'Pages',
    servicesTitle: 'Services',
    services: ['Car interior deep clean', 'Sofas & upholstered chairs', 'Carpets & rugs', 'Mattresses & beds'],
    reachTitle: 'Reach us',
    area: 'City Center, Northside, Lakeview and nearby',
    hours: 'Mon-Sat, 8:00-18:00',
    legal: '© 2026 Revive Interiors. Demo site: all names, numbers, and content are placeholders.',
    badges: 'Fully insured · Satisfaction guaranteed',
  },
}

export type Dict = typeof sr
export const translations: Record<Lang, Dict> = { sr, en }

/** Shared, language-independent contact details. */
export const CONTACT = {
  phoneDisplay: '060 014 2368',
  phoneHref: 'tel:+381600142368',
  email: 'hello@reviveinteriors.example',
}
