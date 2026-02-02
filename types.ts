
export type Language = 'ka' | 'en';

export interface NavLink {
  id: string;
  label: Record<Language, string>;
}

export interface TeamMember {
  id: number;
  name: Record<Language, string>;
  position: Record<Language, string>;
  image: string;
  bio: Record<Language, string>;
  email?: string;
  phone?: string;
}

export interface Service {
  id: number;
  title: Record<Language, string>;
  description: Record<Language, string>;
  fullText: Record<Language, string>;
  icon: string;
  image: string;
}

export interface Course {
  id: number;
  title: Record<Language, string>;
  description: Record<Language, string>;
  duration: Record<Language, string>;
  price: string;
  image: string;
}

export interface Translations {
  hero: {
    title: Record<Language, string>;
    subtitle: Record<Language, string>;
    cta: Record<Language, string>;
  };
  sections: {
    team: Record<Language, string>;
    services: Record<Language, string>;
    courses: Record<Language, string>;
    contact: Record<Language, string>;
  };
  contactForm: {
    name: Record<Language, string>;
    email: Record<Language, string>;
    message: Record<Language, string>;
    send: Record<Language, string>;
    success: Record<Language, string>;
  };
}
