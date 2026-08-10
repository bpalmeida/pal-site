import type { Translations } from './pt';

export const en: Translations = {
  htmlLang: 'en',

  nav: {
    schoolMenu: 'Riding School',
    aulas: 'Lessons',
    passeios: 'Trail Rides',
    eventos: 'Events',
    atls: 'Kids Camp',
    cavalosPenso: 'Horse Boarding',
    instalacoes: 'Facilities',
    galeria: 'Gallery',
    ondeEstamos: 'Find Us',
  },

  footer: {
    rights: '© 2026 Picadeiro Arena Lusitana. All rights reserved.',
  },

  home: {
    title: 'Picadeiro Arena Lusitana',
    subtitle: 'Discover excellence in horsemanship. Join us.',
  },

  instalacoes: {
    heroTitle: 'Our Facilities',
    intro:
      'Picadeiro Arena Lusitana prides itself on offering facilities designed to provide the best environment for both horses and riders. All of our infrastructure is regularly maintained to ensure an exceptional equestrian experience.',
    facilities: [
      {
        title: 'Indoor Arena',
        description:
          'Covered arena with silica/fiber flooring, lighting, and an automatic watering system. Ideal for training in any weather condition.',
      },
      // {
      //   title: 'Outdoor Arena',
      //   description:
      //     'A 60x80m outdoor arena with specialised draining footing, perfect for jumping and dressage. Enclosed with safety fencing and spectator stands.',
      // },
      {
        title: 'Stables',
        description:
          '25 stalls with natural ventilation and an automatic watering system. ',
      },
      {
        title: 'Grazing Fields',
        description:
          'Herd pastures and individual paddocks. All fields have covered shelters, automatic watering systems, and secure fencing.',
      },
      {
        title: 'Wash Area',
        description:
          'Four covered wash areas with hot and cold water, non-slip flooring.',
      },
      {
        title: 'Tack Room & Storage',
        description:
          'Tack room with individual lockers for equipment.',
      },
    ],
    amenitiesTitle: 'Additional Amenities',
    amenities: [
      { icon: '🅿️', title: 'Parking', description: 'Free parking for visitors and clients' },
      // { icon: '☕', title: 'Lounge Area', description: 'A comfortable space with a café and rest area' },
      // { icon: '📶', title: 'Free Wi-Fi', description: 'High-speed internet throughout the facility' },
    ],
  },

  cavalosPenso: {
    heroTitle: 'Horse Boarding',
    intro1:
      'At Picadeiro Arena Lusitana, we offer horse boarding services, ensuring maximum comfort, care, and wellbeing for your animal. Our modern facilities and dedicated team make sure your horse gets the best attention every day.',
    intro2:
      'We offer two boarding options, tailored to the specific needs of each horse and owner: box boarding and field boarding.',
    boxPlan: {
      title: 'Box Boarding',
      price: '€375',
      period: '/month',
      includesLabel: 'Includes:',
      features: [
        'Individual stall',
        'Full feeding (3x daily)',
        'Hay during all day',
        'Daily stall cleaning',
        'Straw or shavings bedding',
        'Fresh water via automatic troughs',
        'Access to the indoor arena',
        'Hot/cold water shower',
        'Access to the solarium',
      ],
      noteLabel: 'Additional services available:',
      note: 'Individual paddock for daily turnout, daily work, farrier, veterinarian',
    },
    fieldPlan: {
      title: 'Field Boarding',
      price: '€250',
      period: '/month',
      includesLabel: 'Includes:',
      features: [
        'Fenced, secure field',
        'Individual or with company of other horses',
        'Daily supplemental feeding',
        'Hay during all day',
        'Covered shelter',
        'Fresh water via automatic troughs',
        'Daily supervision',
        'Access to the arena',
        'Space for free movement',
        'Hot/cold water shower',
        'Access to the solarium',
      ],
      noteLabel: 'Ideal for:',
      note: 'Horses that benefit from socialising and permanent free movement',
    },
    additionalServicesTitle: 'Additional Services',
    additionalServices: [
      { title: 'Daily work', description: 'Personalised training and exercise', price: '€15/day' },
      { title: 'Bathing with grooming', description: 'Hygiene and presentation', price: '€25' },
      { title: 'Transport', description: 'Travel to events', price: 'On request' },
    ],
  },

  aulas: {
    heroTitle: 'Riding Lessons',
    intro1:
      'We offer riding lessons for all levels, from beginners to advanced riders. Our lessons are taught by certified, experienced instructors, ensuring safe and effective learning.',
    intro2:
      'Every lesson is tailored to the rider’s level and goals, providing a personalised, enriching experience. We use trained, gentle horses, perfect for developing equestrian skills.',
    pricingTitle: 'Pricing',
    individual: {
      title: 'Private Lesson',
      description: 'Personalised attention with a dedicated instructor',
      price: '€40',
      period: '/lesson',
      features: ['1 hour long', 'Dedicated instructor', 'Horse matched to your level', 'Equipment included'],
    },
    group: {
      title: 'Group Lesson',
      description: 'Groups of up to 4 riders',
      price: '€30',
      period: '/lesson',
      features: ['1 hour long', 'Maximum 4 students', 'Similar skill levels', 'Equipment included'],
    },
    package: {
      badge: 'Most Popular',
      title: 'Monthly Package',
      description: '4 group lessons per month',
      price: '€100',
      period: '/month',
      features: ['4 lessons included', 'Save €20', 'Flexible scheduling', 'Personalised progress tracking'],
    },
  },

  passeios: {
    heroTitle: 'Trail Rides',
    intro1:
      'Explore the natural beauty of the Portuguese countryside on horseback. Our trail rides are ideal for anyone wanting a unique experience in nature, along safe trails and breathtaking scenery.',
    intro2:
      'Accompanied by experienced guides, our trail rides suit beginners and experienced riders alike. We provide an unforgettable experience in a safe, relaxing setting.',
    pricingTitle: 'Pricing',
    short: {
      title: 'Short Ride',
      description: '1-hour route',
      price: '€80',
      period: '/person',
      features: ['1 hour long', 'Easy trails', 'Accompanying guide', 'Suitable for all levels'],
    },
    medium: {
      title: 'Long Ride',
      description: '2-hour route',
      price: '€120',
      period: '/person',
      features: ['2 hours long', 'Panoramic scenery', 'Specialised guide', 'Suitable for all levels'],
    },
    sunset: {
      title: 'Group Rides',
      description: 'Minimum 4 people',
      price: 'On request',
      period: '',
      features: ['Variable duration', 'Spectacular views', 'Small groups'],
    },
  },

  eventos: {
    heroTitle: 'Events',
    intro1:
      'Picadeiro Arena Lusitana organises and hosts a variety of events throughout the year. Our facilities and prime location make our arena the ideal setting for birthday parties and private celebrations.',
    pricingTitle: 'Event Pricing',
    // competitions: {
    //   title: 'Competitions',
    //   description: 'Organisation of official events',
    //   price: 'On request',
    //   features: ['Full use of the facilities', 'Support team', 'Professional timing', 'Catering available', 'Ample parking'],
    // },
    // workshops: {
    //   title: 'Workshops & Clinics',
    //   description: 'Take part in training events',
    //   price: '€80',
    //   period: '/day',
    //   features: ['Full day of training', 'Specialised instructors', 'Teaching materials included', 'Certificate of participation'],
    // },
    privateEvents: {
      title: 'Private Events',
      description: 'Celebrations and corporate events',
      price: 'On request',
      features: ['Venue rental', 'Equestrian demonstrations', 'Rides for guests', 'Customisable space', 'Catering on request'],
    },
    birthdayParty: {
      title: 'Birthday Parties',
      description: 'A unique celebration with horses',
      price: 'On request  ',
      period: '',
      features: ['A jam-packed day', 'Horse rides', 'Themed activities', 'Decorations included'],
    },
  },

  atls: {
    heroTitle: 'Kids Riding Camp',
    intro1:
      'Our equestrian holiday camp gives children a unique, educational experience during school breaks. We combine learning to ride with fun, hands-on activities in a safe, supervised environment.',
    intro2:
      'Children learn not only to ride, but also to care for horses, building responsibility, teamwork, and respect for animals. A complete programme that blends fun and learning.',
    pricingTitle: 'Pricing',
    daily: {
      title: 'Day Camp',
      description: 'Full-day programme',
      price: '€40',
      period: '/day',
      features: ['9am to 5pm', 'Riding lessons', 'Fun activities', 'Snack included', 'Insurance included'],
    },
    weekly: {
      badge: 'Recommended',
      title: 'Week Camp',
      description: 'A full week of activities',
      price: '€180',
      period: '/week',
      features: ['5 days (Mon–Fri)', 'Complete programme', 'Lunch and snacks', 'Camp t-shirt', 'Save €20'],
    },
    summerCamp: {
      title: 'Summer Camp',
      description: 'Intensive summer programme',
      price: '€650',
      period: '/month',
      features: ['4 full weeks', 'Daily lessons', 'Trail excursions', 'All meals included', 'Rider kit'],
    },
    infoTitle: 'Important Information',
    infoItems: [
      'Ages: 6 to 14 years old',
      'All levels welcome (beginners and advanced)',
      'Safety equipment provided',
      'Maximum 12 children per group',
      'Enrolment open year-round',
    ],
  },

  galeria: {
    heroTitle: 'Gallery',
    heroSubtitle: 'Memorable moments at Picadeiro Arena Lusitana',
    categories: {
      todos: 'All',
      cavalos: 'Horses',
      aulas: 'Lessons',
      instalacoes: 'Facilities',
      passeios: 'Trail Rides',
    },
    imageTitles: [
      'Lusitano Horse Portrait',
      'Dressage Training',
      'Show Jumping',
      'Riding Lesson',
      'White Horse',
      'Luxury Stables',
      'Training Arena',
      'Horse at Sunset',
      'Riding Equipment',
      'Horse Close-up',
      'Horses Running Free',
      'Outdoor Trail Ride',
    ],
    emptyState: 'No images found in this category.',
  },

  ondeEstamos: {
    heroTitle: 'Find Us',
    contactsTitle: 'Contact',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    socialLabel: 'Social Media',
    hoursLabel: 'Opening Hours',
    hoursWeekday: 'Monday to Saturday:',
    hoursSunday: 'Sunday:',
    locationTitle: 'Location',
    howToArriveLabel: 'How to Get Here:',
    howToArriveText: '200m from the Rotunda da Paz.',
  },
};