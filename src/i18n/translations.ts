export type Lang = 'sr' | 'en'

/** Company name, language-independent. */
export const BRAND = 'Blistavo'

const sr = {
  titles: {
    '/': `${BRAND}: Dubinsko čišćenje auta i doma`,
    '/our-work': `Naši radovi · ${BRAND}`,
    '/contact': `Kontakt · ${BRAND}`,
    fallback: BRAND,
  } as Record<string, string>,
  common: {
    skipToContent: 'Preskoči na sadržaj',
    ctaQuote: 'Kontaktirajte nas',
    ctaWork: 'Pogledajte radove',
    placeholderAria: 'Mesto za fotografiju',
    langSwitcherAria: 'Izbor jezika',
  },
  header: {
    logoAria: `${BRAND}, početna`,
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
    heroTitle: 'Vaš enterijer, ponovo kao nov.',
    heroSubtext:
      'Sedišta, tepisi, garniture i dušeci dubinski očišćeni na vašoj adresi. Suvo istog dana.',
    heroPlaceholder: 'Tehničar čisti unutrašnju stranu vrata i sedište automobila',
    servicesTitle: 'Šta čistimo',
    servicesIntro:
      'Specijalizovani smo isključivo za enterijere: profesionalne mašine, proverena sredstva i iskusni tehničari.',
    services: [
      {
        title: 'Dubinsko čišćenje auta',
        text: 'Kompletno čišćenje kabine, za svakodnevnu vožnju ili pripremu za prodaju.',
        items: ['Sedišta i plafon', 'Tepisi i patosnice', 'Tabla, plastika i ventilacija', 'Uklanjanje neprijatnih mirisa'],
        placeholder: 'Mašinsko dubinsko čišćenje platnenog sedišta automobila',
      },
      {
        title: 'Dubinsko čišćenje doma',
        text: 'Pranje toplom vodom za nameštaj i tekstil koji svakodnevno koristite.',
        items: ['Garniture i fotelje', 'Tepisi i staze', 'Dušeci i kreveti', 'Uklanjanje fleka i mirisa'],
        placeholder: 'Usisavanje platnene garniture',
      },
    ],
    processTitle: 'Kako funkcioniše',
    steps: [
      {
        title: 'Javite nam šta treba očistiti',
        text: 'Pošaljite fotografiju ili kratak opis i istog dana dobijate fiksnu cenu.',
      },
      {
        title: 'Dolazimo na vašu adresu',
        text: 'Donosimo svu opremu, vodu i sredstva. Vi ne morate ništa da pripremate.',
      },
      {
        title: 'Suvo za nekoliko sati',
        text: 'Mašine izvlače vlagu iz tkanine, pa je većina predmeta spremna za korišćenje isto popodne.',
      },
    ],
    beforeAfterTitle: 'Pre i posle',
    beforeAfterText: 'Svaki posao fotografišemo tokom i nakon čišćenja, da razliku vidite i sami.',
    beforeLabel: 'Tokom: dubinsko čišćenje zaprljanog tepiha u automobilu',
    afterLabel: 'Posle: čista svetla zadnja sedišta automobila',
    quotesTitle: 'Šta kažu naši klijenti',
    quotes: [
      {
        quote: 'Auto je mirisao kao nov kad su završili. Nedelju dana kasnije zakazala sam i garnituru.',
        name: 'Mila Petrović',
        role: 'Čišćenje enterijera auta, Centar',
      },
      {
        quote: 'Dvoje male dece i jedan svetli tepih. Mislio sam da je uništen. Sada izgleda kao nov.',
        name: 'Nikola Jović',
        role: 'Čišćenje tepiha, Severno naselje',
      },
      {
        quote: 'Vratili su nameštaj na mesto, počistili za sobom, a dušek se osušio do večeri.',
        name: 'Jelena Ilić',
        role: 'Čišćenje dušeka i tepiha, Jezerovo',
      },
    ],
    ctaTitle: 'Zakažite čišćenje',
    ctaSubtext: 'Fiksne cene i slobodni termini već ove nedelje.',
  },
  work: {
    title: 'Naši radovi',
    intro: 'Izbor poslova iz naše prakse, fotografisanih tokom i posle čišćenja.',
    carTitle: 'Enterijeri automobila',
    homeTitle: 'Enterijeri doma',
    carJobs: [
      {
        title: 'Porodični SUV, kompletno čišćenje kabine',
        detail: 'Dubinsko pranje sedišta, šamponiranje tepiha i uklanjanje neprijatnih mirisa.',
        before: 'Tokom: brisanje table i plastike mikrofiber krpom',
        after: 'Posle: čista kožna zadnja sedišta',
      },
      {
        title: 'Priprema auta za prodaju',
        detail: 'Kompletno čišćenje enterijera pre prodaje, uključujući plafon i obloge vrata.',
        before: 'Tokom: čišćenje volana i komandi',
        after: 'Posle: čista svetla kožna sedišta, spremna za prodaju',
      },
      {
        title: 'Uklanjanje dlaka kućnih ljubimaca',
        detail: 'Sedišta i prtljažnik očišćeni od dlaka i prašine koje se zavuku duboko u tkaninu.',
        before: 'Tokom: čišćenje kabine i sedišta od dlaka',
        after: 'Posle: čist i prazan prtljažnik',
      },
    ],
    homeJobs: [
      {
        title: 'Tepih u dnevnoj sobi',
        detail: 'Tepih sa flekama od hrane i svakodnevnog korišćenja, dubinski opran toplom vodom.',
        before: 'Tokom: usisavanje tepiha pre pranja',
        after: 'Posle: sređena dnevna soba sa čistim tepihom',
      },
      {
        title: 'Platnena garnitura',
        detail: 'Garnitura i jastuci očišćeni deo po deo, uz minimalno vlaženje tkanine.',
        before: 'Tokom: usisavanje jastuka na garnituri',
        after: 'Posle: čista garnitura u dnevnoj sobi',
      },
      {
        title: 'Dušek u spavaćoj sobi',
        detail: 'Dubinsko čišćenje i dezinfekcija, suv i vraćen na krevet istog dana.',
        before: 'Tokom: usisavanje i dezinfekcija dušeka',
        after: 'Posle: čist dušek na krevetu',
      },
    ],
    ctaTitle: 'Imate sličan posao?',
    ctaSubtext: 'Pošaljite nam fotografiju i javljamo vam cenu istog dana.',
  },
  contact: {
    title: 'Kontaktirajte nas',
    intro: 'Opišite šta treba očistiti i javljamo vam fiksnu cenu istog dana.',
    callLabel: 'Pozovite ili pošaljite poruku',
    emailLabel: 'Imejl',
    areaLabel: 'Područje rada',
    areaText: 'Centar, Severno naselje, Jezerovo i 50 km okolo',
    hoursLabel: 'Radno vreme',
    hoursText: 'Ponedeljak do subote, 8:00-18:00',
    formTitle: 'Opišite nam posao',
    nameLabel: 'Vaše ime',
    phoneLabel: 'Broj telefona',
    phoneHelp: 'Koristimo ga samo da vam javimo cenu i potvrdimo termin.',
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
    submit: 'Pošaljite upit',
    errors: {
      name: 'Unesite svoje ime.',
      phone: 'Unesite broj telefona da bismo vam javili cenu.',
      service: 'Izaberite uslugu.',
    },
    successTitle: 'Upit je poslat',
    successBody: 'Hvala, {name}. Javićemo vam se sa cenom istog dana.',
  },
  footer: {
    blurb:
      'Mobilno dubinsko čišćenje automobila i kućnog nameštaja. Dolazimo na vašu adresu, a sve je suvo za nekoliko sati.',
    pagesTitle: 'Stranice',
    servicesTitle: 'Usluge',
    services: ['Dubinsko čišćenje auta', 'Garniture i fotelje', 'Tepisi i staze', 'Dušeci i kreveti'],
    reachTitle: 'Kontakt podaci',
    area: 'Centar, Severno naselje, Jezerovo i okolina',
    hours: 'Pon-sub, 8:00-18:00',
    photoCredits: 'Fotografije: Pexels (besplatna licenca)',
    legal: `© 2026 ${BRAND}. Demo sajt: sva imena, brojevi i sadržaj su primeri.`,
    badges: 'Potpuno osigurani · Garancija zadovoljstva',
  },
}

const en: typeof sr = {
  titles: {
    '/': `${BRAND}: Car & Home Deep Cleaning`,
    '/our-work': `Our Work · ${BRAND}`,
    '/contact': `Contact · ${BRAND}`,
    fallback: BRAND,
  },
  common: {
    skipToContent: 'Skip to content',
    ctaQuote: 'Contact us',
    ctaWork: 'See our work',
    placeholderAria: 'Image placeholder',
    langSwitcherAria: 'Language selection',
  },
  header: {
    logoAria: `${BRAND}, home`,
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
    heroTitle: 'Your interior, like new again.',
    heroSubtext:
      'Seats, carpets, sofas, and mattresses deep-cleaned at your address. Dry the same day.',
    heroPlaceholder: 'Technician cleaning a car door panel and seat',
    servicesTitle: 'What we clean',
    servicesIntro:
      'We specialize in interiors only: professional machines, proven products, and experienced technicians.',
    services: [
      {
        title: 'Car interior deep clean',
        text: 'A complete cabin clean, for everyday driving or getting ready to sell.',
        items: ['Seats & headliner', 'Carpets & floor mats', 'Dashboard, trim & vents', 'Odor removal'],
        placeholder: 'Machine deep-cleaning a fabric car seat',
      },
      {
        title: 'Home interior deep clean',
        text: 'Hot-water extraction for the furniture and fabrics you use every day.',
        items: ['Sofas & upholstered chairs', 'Carpets & rugs', 'Mattresses & beds', 'Stain & odor removal'],
        placeholder: 'Vacuuming a fabric sofa',
      },
    ],
    processTitle: 'How it works',
    steps: [
      {
        title: 'Tell us what needs cleaning',
        text: 'Send a photo or a short description and get a fixed price the same day.',
      },
      {
        title: 'We come to your address',
        text: 'We bring all the equipment, water, and products. You do not need to prepare anything.',
      },
      {
        title: 'Dry within hours',
        text: 'Our machines pull the moisture back out, so most items are ready to use the same afternoon.',
      },
    ],
    beforeAfterTitle: 'Before and after',
    beforeAfterText: 'We photograph every job during and after cleaning, so you can see the difference yourself.',
    beforeLabel: 'During: deep-cleaning a dirty car floor carpet',
    afterLabel: 'After: clean light-colored rear car seats',
    quotesTitle: 'What our clients say',
    quotes: [
      {
        quote: 'The car smelled like new when they were done. I booked them for the sofa a week later.',
        name: 'Mila Petrović',
        role: 'Car interior clean, City Center',
      },
      {
        quote: 'Two small kids and one light carpet. I thought it was ruined. Now it looks new.',
        name: 'Nikola Jović',
        role: 'Carpet clean, Northside',
      },
      {
        quote: 'They put the furniture back, cleaned up after themselves, and the mattress was dry by evening.',
        name: 'Jelena Ilić',
        role: 'Mattress & rug clean, Lakeview',
      },
    ],
    ctaTitle: 'Book your cleaning',
    ctaSubtext: 'Fixed prices and open slots as soon as this week.',
  },
  work: {
    title: 'Our work',
    intro: 'A selection of jobs, photographed during and after cleaning.',
    carTitle: 'Car interiors',
    homeTitle: 'Home interiors',
    carJobs: [
      {
        title: 'Family SUV, full cabin clean',
        detail: 'Deep seat extraction, carpet shampoo, and odor removal.',
        before: 'During: wiping the dashboard and trim with a microfiber cloth',
        after: 'After: clean leather rear seats',
      },
      {
        title: 'Getting a car ready to sell',
        detail: 'A complete interior clean before sale, including headliner and door panels.',
        before: 'During: cleaning the steering wheel and controls',
        after: 'After: clean light leather seats, ready for buyers',
      },
      {
        title: 'Pet hair removal',
        detail: 'Seats and trunk cleared of hair and dust buried deep in the fabric.',
        before: 'During: clearing hair from the cabin and seats',
        after: 'After: a clean, empty trunk',
      },
    ],
    homeJobs: [
      {
        title: 'Living room carpet',
        detail: 'A carpet with food stains and everyday wear, deep-washed with hot water.',
        before: 'During: vacuuming the carpet before washing',
        after: 'After: a tidy living room with a clean carpet',
      },
      {
        title: 'Fabric sofa',
        detail: 'Sofa and cushions cleaned section by section with minimal moisture.',
        before: 'During: vacuuming a sofa cushion',
        after: 'After: a clean sofa in the living room',
      },
      {
        title: 'Bedroom mattress',
        detail: 'Deep clean and sanitizing treatment, dry and back on the bed the same day.',
        before: 'During: vacuuming and sanitizing the mattress',
        after: 'After: a clean mattress on the bed',
      },
    ],
    ctaTitle: 'Have a similar job?',
    ctaSubtext: 'Send us a photo and we will reply with a price the same day.',
  },
  contact: {
    title: 'Contact us',
    intro: 'Tell us what needs cleaning and we’ll reply with a fixed price the same day.',
    callLabel: 'Call or text',
    emailLabel: 'Email',
    areaLabel: 'Service area',
    areaText: 'City Center, Northside, Lakeview, and 50 km around',
    hoursLabel: 'Hours',
    hoursText: 'Monday to Saturday, 8:00-18:00',
    formTitle: 'Tell us about the job',
    nameLabel: 'Your name',
    phoneLabel: 'Phone number',
    phoneHelp: 'We only use it to send you a price and confirm the visit.',
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
    submit: 'Send inquiry',
    errors: {
      name: 'Please enter your name.',
      phone: 'Please enter a phone number so we can send you a price.',
      service: 'Please pick a service.',
    },
    successTitle: 'Inquiry sent',
    successBody: 'Thanks, {name}. We’ll get back to you with a price the same day.',
  },
  footer: {
    blurb:
      'Mobile deep cleaning for cars and home furniture. We come to your address, and everything is dry within hours.',
    pagesTitle: 'Pages',
    servicesTitle: 'Services',
    services: ['Car interior deep clean', 'Sofas & upholstered chairs', 'Carpets & rugs', 'Mattresses & beds'],
    reachTitle: 'Reach us',
    area: 'City Center, Northside, Lakeview and nearby',
    hours: 'Mon-Sat, 8:00-18:00',
    photoCredits: 'Photos: Pexels (free license)',
    legal: `© 2026 ${BRAND}. Demo site: all names, numbers, and content are placeholders.`,
    badges: 'Fully insured · Satisfaction guaranteed',
  },
}

export type Dict = typeof sr
export const translations: Record<Lang, Dict> = { sr, en }

/** Shared, language-independent contact details. */
export const CONTACT = {
  phoneDisplay: '060 014 2368',
  phoneHref: 'tel:+381600142368',
  email: 'info@blistavo.example',
}
