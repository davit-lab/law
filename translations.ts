
import { Translations, TeamMember, Service, Course, NavLink } from './types';

export const navLinks: NavLink[] = [
  { id: 'hero', label: { ka: 'მთავარი', en: 'Home' } },
  { id: 'services', label: { ka: 'სპეციალიზაცია', en: 'Services' } },
  { id: 'team', label: { ka: 'გუნდი', en: 'Team' } },
  { id: 'courses', label: { ka: 'კურსები', en: 'Courses' } },
  { id: 'contact', label: { ka: 'კონტაქტი', en: 'Contact' } },
];

export const content: Translations = {
  hero: {
    title: {
      ka: 'სამართლებრივი სრულყოფილება საქართველოში',
      en: 'Defining Legal Excellence in Georgia'
    },
    subtitle: {
      ka: 'Lawgical შექმნის მიზანი სამართლის სფეროში ცოდნის, გამოცდილებისა და პროფესიული მხარდაჭერის ხელმისაწვდომად ქცევაა. ჩვენი პლათფორმა ყველასთვისაა, ვისაც სურს განვითარება, პრაქტიკული გამოცდილება ან სანდო იურიდიული კონსულტაცია. ჩვენი გუნდი გთავაზობთ მაღალი დონის იურიდიულ მომსახურებას, რომელიც დაფუძნებულია ნდობასა და ათწლეულების გამოცდილებაზე.',
      en: 'The mission of Lawgical is to make legal knowledge, experience, and professional support accessible. Our platform is for everyone seeking growth, practical experience, or reliable legal consultation. Our team provides high-level legal services built on trust and decades of experience.'
    },
    cta: {
      ka: 'დაგვიკავშირდით',
      en: 'Request Briefing'
    }
  },
  sections: {
    team: { ka: 'ადვოკატთა გუნდი', en: 'Our Partners' },
    services: { ka: 'სპეციალიზაცია', en: 'Practice Areas' },
    courses: { ka: 'აკადემია', en: 'Legal Academy' },
    contact: { ka: 'კონსულტაცია', en: 'Get In Touch' }
  },
  contactForm: {
    name: { ka: 'სრული სახელი', en: 'Your Name' },
    email: { ka: 'ელ-ფოსტა', en: 'Email Address' },
    message: { ka: 'აღწერეთ თქვენი ქეისი', en: 'Inquiry Details' },
    send: { ka: 'მოთხოვნის გაგზავნა', en: 'SEND REQUEST' },
    success: { ka: 'თქვენი მოთხოვნა მიღებულია. ჩვენ დაგიკავშირდებით უახლოეს პერიოდში.', en: 'Inquiry received. A representative will contact you shortly.' }
  }
};

export const team: TeamMember[] = [
  {
    id: 1,
    name: { ka: 'მარიამ გვასალია', en: 'Mariam Gvasalia' },
    position: { ka: 'დამფუძნებელი / მმართველი პარტნიორი', en: 'Founder / Managing Partner' },
    image: 'blob:https://ibb.co/8D54cJNX',
    bio: {
      ka: 'საჯარო სამართლისა და პოლიტიკის მაგისტრი. პლატფორმა „LAWGICAL“-ის დამფუძნებელი. იურისტი და პრაქტიკოსი ადვოკატი სამოქალაქო სამართალში. პერსონალურ მონაცემთა დაცვის სერთიფიცირებული ოფიცერი. სამართლებრივი კონსულტანტი კორპორატიულ კლიენტებთან.',
      en: 'Master of Public Law and Policy. Founder of Lawgical. Practicing attorney in Civil Law and Certified Data Protection Officer. Senior Legal Consultant for corporate entities.'
    },
    phone: '592 821 842',
    email: 'mariamgvasalialw@gmail.com'
  },
  {
    id: 2,
    name: { ka: 'ნიკოლოზ ბერიძე', en: 'Nikoloz Beridze' },
    position: { ka: 'უფროსი პარტნიორი', en: 'Senior Partner' },
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
    bio: {
      ka: '20 წლიანი გამოცდილება ბიზნეს სამართალში და რთულ კომერციულ დავებში.',
      en: 'Architect of complex commercial litigations with over two decades of courtroom experience.'
    },
    phone: '599 00 00 00',
    email: 'n.beridze@lawgical.ge'
  },
  {
    id: 3,
    name: { ka: 'ლევან აბაშიძე', en: 'Levan Abashidze' },
    position: { ka: 'სისხლის სამართლის ადვოკატი', en: 'Criminal Defense Attorney' },
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    bio: {
      ka: 'თეთრსაყელოიანთა დანაშაულებების დაცვის უმაღლესი სტანდარტები.',
      en: 'Unrivaled success in high-stakes white-collar criminal defense.'
    },
    phone: '599 11 11 11',
    email: 'l.abashidze@lawgical.ge'
  },
  {
    id: 4,
    name: { ka: 'ანნა კვაჭაძე', en: 'Anna Kvachadze' },
    position: { ka: 'ინტელექტუალური საკუთრება', en: 'Intellectual Property Lead' },
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    bio: {
      ka: 'ტექნოლოგიური კომპანიებისა და სტარტაპების სამართლებრივი მხარდაჭერა.',
      en: 'Securing legal foundations for tech giants and emerging startups alike.'
    },
    phone: '599 22 22 22',
    email: 'a.kvachadze@lawgical.ge'
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: { ka: 'შრომის სამართალი', en: 'Labor Law' },
    description: { ka: 'დამსაქმებელსა და დასაქმებულს შორის არსებული ურთიერთობების რეგულირება.', en: 'Regulation of relations between employer and employee.' },
    fullText: {
      ka: 'თუკი ხართ დამსაქმებელი ან დასაქმებული, მაშინ შრომითსამართლებრივი საკითხები შენ აუცილებლად შეგეხება. შრომის სამართლის რეგულირების საგანია დამსაქმებელსა და დასაქმებულს შორის არსებული ურთიერთობები. ეს ურთიერთობები წარმოიშობა დამსაქმებლის მხრიდან სამუშაოს შესრულებასა და ანაზღაურებასთან დაკავშირებით. აღნიშნული ურთიერთობები რეგულირდება საქართველოს კონსტიტუციით, საერთაშორისო შეთანხმებებით, სამოქალაქო კოდექსითა და შრომის კოდექსით. გახსოვდეს, კონსულტაცია უფასოა!',
      en: 'Whether you are an employer or an employee, labor law issues will inevitably affect you. Labor law regulates the relationship between employers and employees concerning work performance and compensation. These relationships are governed by the Constitution of Georgia, international agreements, the Civil Code, and the Labor Code. Remember, consultation is free!'
    },
    icon: '🤝',
    image: 'https://images.unsplash.com/photo-1521791136364-798a7bc0d262?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    title: { ka: 'პერსონალურ მონაცემთა დაცვა', en: 'Data Protection' },
    description: { ka: 'ადამიანის უფლებათა და პირადი ცხოვრების ხელშეუხებლობის დაცვა.', en: 'Protection of human rights and privacy in data processing.' },
    fullText: {
      ka: 'პერსონალურ მონაცემთა დაცვის შესახებ საქართველოს კანონი უზრუნველყოფს პერსონალური მონაცემის დამუშავებისას ადამიანის უფლებათა და თავისუფლებათა, მათ შორის, პირადი ცხოვრების ხელშეუხებლობის დაცვის საკითხებს. პერსონალური მონაცემია ნებისმიერი ინფორმაცია, რომელიც უკავშირდება იდენტიფიცირებულ ან იდენტიფიცირებად ფიზიკურ პირს. განსაკუთრებული კატეგორიის მონაცემია ინფორმაცია რასობრივ, ეთნიკურ კუთვნილებასთან, პოლიტიკურ შეხედულებებთან, ჯანმრთელობის მდგომარეობასთან და სხვ. დაკავშირებით. გახსოვდეს, კონსულტაცია უფასოა!',
      en: 'The Law of Georgia on Personal Data Protection ensures the protection of human rights and freedoms, including the right to privacy, during data processing. Personal data is any information related to an identified or identifiable individual. Special categories include information on racial or ethnic origin, political opinions, health status, and more. Remember, consultation is free!'
    },
    icon: '🛡️',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    title: { ka: 'სამეწარმეო სამართალი', en: 'Entrepreneurial Law' },
    description: { ka: 'ბიზნესის დაფუძნება, კორპორაციული მართვა და რეორგანიზაცია.', en: 'Business formation, corporate governance, and reorganization.' },
    fullText: {
      ka: 'თუკი ხარ მეწარმე სუბიექტი ან/და გაინტერესებს სამეწარმეო სამართლის საკითხები, როგორიცაა საწარმოს დირექტორისა და პარტნიორების პასუხისმგებლობა, წილების გასხვისება, პარტნიორის გარიცხვა და ა.შ. ჩვენ მზად ვართ დაგეხმაროთ. გთავაზობთ: თქვენს ინტერესებზე მორგებულ იურიდიულ მოწესრიგებას, სადამფუძნებლო დოკუმენტაციის შედგენას, წესდების რევიზიას ახალ კანონთან შესაბამისობაში მოსაყვანად და წარმომადგენლობას სასამართლოში. გახსოვდეს, კონსულტაცია უფასოა!',
      en: 'If you are an entrepreneur or interested in entrepreneurial law, such as the responsibility of directors and partners, share alienation, or exclusion of a partner, we are ready to help. We offer legal arrangements tailored to your interests, preparation of foundation documentation, charter revision for compliance with the new law, and court representation. Remember, consultation is free!'
    },
    icon: '🏢',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 4,
    title: { ka: 'სახელშეკრულებო სამართალი', en: 'Contract Law' },
    description: { ka: 'ხელშეკრულებების მომზადება, გადახედვა და სამართლებრივი ანალიზი.', en: 'Preparation, review, and legal analysis of contracts.' },
    fullText: {
      ka: 'გთავაზობთ: ხელშეკრულებების მომზადებას ან/და უკვე არსებულ ხელშეკრულებების გადახედვას და საჭირო დაცვის მექანიზმების ინტეგრაციას; ფიზიკური და იურიდიული პირების წარმომადგენლობას ხელშეკრულების მომზადების, გაფორმებისა და შესრულების ნებისმიერ სტადიაზე; ნებისმიერი ტიპის ხელშეკრულების სრულ სამართლებრივ ანალიზს, მოსალოდნელი რისკების განსაზღვრასა და დაზღვევის მექანიზმების გაწერას. გახსოვდეს, კონსულტაცია უფასოა!',
      en: 'We offer: Preparation and review of contracts with integration of necessary protection mechanisms; Representation of individuals and legal entities at any stage of contract preparation and execution; Full legal analysis of any type of contract, determination of expected risks, and definition of insurance mechanisms. Remember, consultation is free!'
    },
    icon: '📜',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 5,
    title: { ka: 'საოჯახო და მემკვიდრეობა', en: 'Family & Inheritance' },
    description: { ka: 'განქორწინება, ქონების გაყოფა და მემკვიდრეობითი დავები.', en: 'Divorce, division of property, and inheritance disputes.' },
    fullText: {
      ka: 'გთავაზობთ კონსულტაციებს საოჯახო და მემკვიდრეობითი სამართლის ნებისმიერ ასპექტთან დაკავშირებით: განქორწინება, საალიმენტო ვალდებულებები, მშობლებსა და შვილებს შორის არაქონებრივი ურთიერთობების მოწესრიგება; სამკვიდრო მოწმობის გასაცემად აუცილებელ პროცედურებში ჩართულობა, მემკვიდრედ ცნობა და სამკვიდრო ქონების სასამართლოს გზით მიღება. გახსოვდეს, კონსულტაცია უფასოა!',
      en: 'We offer consultations on any aspect of family and inheritance law: Divorce, alimony obligations, regulation of non-property relations between parents and children; Involvement in procedures for issuing inheritance certificates, recognition as an heir, and obtaining inheritance property through the court. Remember, consultation is free!'
    },
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1591115765373-520b7a3f7294?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 6,
    title: { ka: 'უძრავი ქონება', en: 'Real Estate Law' },
    description: { ka: 'უძრავი ქონების კვლევა, რეგისტრაცია და უფლებების აღიარება.', en: 'Real estate research, registration, and recognition of rights.' },
    fullText: {
      ka: 'გთავაზობთ: უძრავი ქონების სამართლებრივი მდგომარეობის კვლევას, იპოთეკის, ყადაღის ან სხვა ვალდებულებების შემოწმებას; გადაცემასთან დაკავშირებული დოკუმენტაციის მომზადებას და საჯარო რეესტრში საკუთრების უფლების რეგისტრაციას; მართლზომიერ მფლობელობაში არსებული ან თვითნებურად დაკავებული სახელმწიფო მიწის საკუთრების უფლების აღიარებასთან დაკავშირებული პროცედურების წარმოებას. გახსოვდეს, კონსულტაცია უფასოა!',
      en: 'We offer: Legal research of real estate status, checking for mortgages, encumbrances, or other liabilities; Preparation of transfer documentation and registration of ownership in the Public Registry; Handling procedures related to the recognition of ownership rights on lawfully possessed or arbitrarily occupied state land. Remember, consultation is free!'
    },
    icon: '🏗️',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80'
  }
];

export const courses: Course[] = [
  {
    id: 1,
    title: { ka: 'პერსონალური მონაცემთა დაცვა', en: 'Personal Data Protection' },
    description: { ka: 'პერსონალურ მონაცემთა დაცვის სამართლებრივი სტანდარტები და პრაქტიკული გამოყენება.', en: 'Legal standards for personal data protection and their practical application.' },
    duration: { ka: '8 კვირა', en: '8 Weeks' },
    price: '800 GEL',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    title: { ka: 'სამოქალაქო სამართალის ზოგადი ნაწილი', en: 'General Part of Civil Law' },
    description: { ka: 'სამოქალაქო სამართლის ფუნდამენტური პრინციპები და ინსტიტუტები.', en: 'Fundamental principles and institutions of the general part of civil law.' },
    duration: { ka: '12 კვირა', en: '12 Weeks' },
    price: '1,200 GEL',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    title: { ka: 'სისხლის სამართალი', en: 'Criminal Law' },
    description: { ka: 'სისხლის სამართლის თეორია, პრაქტიკა და საპროცესო თავისებურებები.', en: 'Theory, practice, and procedural features of criminal law.' },
    duration: { ka: '10 კვირა', en: '10 Weeks' },
    price: '1,000 GEL',
    image: 'https://images.unsplash.com/photo-1453941403708-341ff5b41264?auto=format&fit=crop&w=1200&q=80'
  }
];
