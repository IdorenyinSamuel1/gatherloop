/*
 * All public-facing copy lives here so the team can replace placeholder text
 * in one place once GatherLoop supplies approved event information.
 *
 * Every value marked `placeholder: true` is NOT approved content.
 */
export const event = {
  name: 'GatherLoop Conference',
  shortName: 'GatherLoop',
  tagline: 'Good ideas go further when the right people gather.',
  intro:
    'A one-day conference for the people who plan, build and share experiences that bring communities together. Full event details are awaiting client approval.',
  date: 'Date to be confirmed',
  venue: 'Venue to be confirmed',
  city: 'City to be confirmed',
  placeholderNotice: 'Placeholder — awaiting approved information from GatherLoop.',

  about: {
    heading: 'About the conference',
    paragraphs: [
      'GatherLoop is a small events company bringing together organisers, creators and community leaders for a focused day of practical talks and honest conversation. The conference is designed to help attendees leave with ideas they can use, not just notes they will forget.',
      'The programme will cover what works in modern events: audience engagement, thoughtful logistics, accessible design and the measured use of technology. Final themes and session titles are pending client approval.',
    ],
    audience: [
      'Event organisers and coordinators',
      'Community managers and facilitators',
      'Creators, educators and small-team leaders',
      'Anyone planning their first conference',
    ],
    outcomes: [
      'Practical takeaways you can apply to your next event',
      'Clear examples of accessible, audience-first planning',
      'Time to meet peers who solve similar problems',
      'A realistic view of tools and budgets that actually work',
    ],
  },

  // Do NOT invent real speakers or credentials. Replace these entries only
  // with names and bios supplied and approved by GatherLoop.
  speakers: [
    {
      name: 'Speaker name to be confirmed',
      role: 'Role and organisation to be confirmed',
      bio: 'Approved short biography to be supplied by GatherLoop.',
      initials: 'TBC',
    },
    {
      name: 'Speaker name to be confirmed',
      role: 'Role and organisation to be confirmed',
      bio: 'Approved short biography to be supplied by GatherLoop.',
      initials: 'TBC',
    },
    {
      name: 'Speaker name to be confirmed',
      role: 'Role and organisation to be confirmed',
      bio: 'Approved short biography to be supplied by GatherLoop.',
      initials: 'TBC',
    },
    {
      name: 'Speaker name to be confirmed',
      role: 'Role and organisation to be confirmed',
      bio: 'Approved short biography to be supplied by GatherLoop.',
      initials: 'TBC',
    },
  ],

  schedule: [
    { time: 'Time TBC', title: 'Registration and welcome', facilitator: 'Facilitator to be confirmed' },
    { time: 'Time TBC', title: 'Opening session', facilitator: 'Speaker to be confirmed' },
    { time: 'Time TBC', title: 'Break', facilitator: '' },
    { time: 'Time TBC', title: 'Featured talk', facilitator: 'Speaker to be confirmed' },
    { time: 'Time TBC', title: 'Panel discussion', facilitator: 'Participants to be confirmed' },
    { time: 'Time TBC', title: 'Close and networking', facilitator: 'Facilitator to be confirmed' },
  ],

  tickets: [
    {
      name: 'Early bird',
      price: 'Price to be confirmed',
      note: 'Category subject to client approval',
      details: ['Limited release — quantity TBC', 'Full-day access', 'Lunch and breaks — TBC'],
    },
    {
      name: 'Standard',
      price: 'Price to be confirmed',
      note: 'Category subject to client approval',
      details: ['Full-day access', 'Lunch and breaks — TBC', 'Session materials — TBC'],
    },
    {
      name: 'Group',
      price: 'Price to be confirmed',
      note: 'Category subject to client approval',
      details: ['For teams of size TBC', 'Full-day access', 'Contact us for details'],
    },
  ],

  // No payment or registration system exists in this static site.
  registrationUrl: '',

  contact: {
    email: 'hello@gatherloop.example',
    emailIsPlaceholder: true,
    phone: 'To be confirmed',
    social: [
      { label: 'LinkedIn — link to be supplied', href: '' },
      { label: 'Instagram — link to be supplied', href: '' },
    ],
  },
}

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Tickets', href: '#tickets' },
  { label: 'Contact', href: '#contact' },
]
