export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: 'general' | 'seguridad' | 'uso' | 'piloto';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'teguio' | 'system';
  text: string;
  time: string;
  isAudio?: boolean;
  audioDuration?: string;
  hasImage?: boolean;
  imageUrl?: string;
  isSafetyWarning?: boolean;
  highlightText?: string;
}

export interface ScenarioPreset {
  id: string;
  title: string;
  badge: string;
  description: string;
  messages: ChatMessage[];
}

export interface PilotFormData {
  fullName: string;
  contactInfo: string;
  troubleDetails: string;
  userType: 'familiar' | 'adulto_mayor' | 'otro';
}
