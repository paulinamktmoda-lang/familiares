import { FaqItem, ScenarioPreset } from '../types';

export const BRAND_ASSETS = {
  headerLogo:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDlImUGxQonXOb5vLn0Gt0P_sm5MKVz-GCL51eoy3XVCfFq_JRa7xPpSZ7KyKaKJH1o0ikT46EwMukuyamYV-ih9RLVIMKNOlAhuTmWx06g-Aurf7RFUgRivZiFRk4qvGs85e5qan_gh3pA0HtpoRI-afeZGKt67kHcpmMnan_PC-lHlf4UwbXdRrBScGB0GzkkA_e1G1nvjOpjtuRIqnpde2-FD0zpX4pbWbaheYHhcBERP3gzXtztjW548rRAs2TTYg',
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDDbRJ3Eu6J8tPXbzLQuqR3b7nt95guJZyKcmNMnbAaeVKUKvSDxw9jsGtiQbi6ZlQG8wdUZhz97gaq_UpA5ucXePFlKKJ-gZZH9k8zLYQotZ0i2xNPaY0OM-gH-JeOGtgXrqpikGHAaUHK4rmqYOe1YbXwsSg17GLY1IFkFCQHueR8Wu8WponKd1aUE9xv828W3gce5u5YGUQuHlcPiKyo9YgiD1F2L_kGdUOzf_o5faTlGbwDv2k9',
  footerLogo:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBf-dYFglh2QtyZrCAcYaa-ysp82njdTePt58GBL6kxHGHgB3W7EP4XF_dMnNIzlmk39qeZTtMxpue1G0XL3P1BbPEqhz2jdMdRTt1oiNO6VQoyyUTkbtvCgf5UpSqhWm40guw6gX1wdDZYYBkW5KIND46kfU-TceC9S-3wSxqlshDGnxuJqnBXadIgXPLTRAdhiInYWwW-3ausMJgfPG-FVGwlISozOZS-tGINMonQJP_LMUw4-XOmdYGUOkybuKj_yg',
  footerBadge:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCm2XVoeHNBxHfC-xuwh93T0w_TDrvOP0DageK_7h-OUYrC327HnflV5QkixOhBVljT3BNhE1zxrl2YBTqCvtjmWZHlbjpWTsJVlPbM2NTmwXZH4nOF_G02fZgtdxV6sIzEqTDTiQ_3NQje-N662QQbHaD5itKKngFs5dIn7QESsESEomodoPiA6-yORq-YzefgT-ay_sZkJxYAoaUqLEdKMUPdrMeAKH4-vWqK3X22Y3x70yONIC8QQu9ZfEeIWWaKOA',
};

export const EVERYDAY_SITUATIONS = [
  {
    icon: 'update',
    number: '1',
    title: '1. Cambió la plataforma',
    desc: 'Una actualización movió de lugar el botón habitual o rediseñó la vista que ya tenían memorizada.',
  },
  {
    icon: 'near_me_disabled',
    number: '2',
    title: '2. No encuentra dónde continuar',
    desc: 'La pantalla muestra demasiadas opciones simultáneas o términos técnicos que confunden el próximo paso.',
  },
  {
    icon: 'chat_error',
    number: '3',
    title: '3. No entiende el mensaje',
    desc: 'Avisos automáticos como "Token expirado" o "Sesión no válida" que generan angustia innecesaria.',
  },
  {
    icon: 'touch_app',
    number: '4',
    title: '4. No sabe si debe presionar esa opción',
    desc: 'La duda sobre si un botón aceptará un cobro o eliminará información detiene por completo la tarea.',
  },
  {
    icon: 'key_off',
    number: '5',
    title: '5. No recuerda cómo ingresar',
    desc: 'Dificultad recurrente con contraseñas, confirmaciones por SMS o pasos de autenticación de dos factores.',
  },
  {
    icon: 'gpp_maybe',
    number: '6',
    title: '6. Teme equivocarse',
    desc: 'El miedo a arruinar algo importante frena la acción, incluso cuando el procedimiento es elemental.',
  },
];

export const SCENARIO_PRESETS: ScenarioPreset[] = [
  {
    id: 'confirmar-datos',
    title: 'Confirmación en pantalla (EPS)',
    badge: 'Caso Oficial',
    description: 'Duda con un formulario que solicita verificar datos antes de continuar.',
    messages: [
      {
        id: '1',
        sender: 'user',
        text: 'No entiendo qué me está pidiendo esta pantalla.',
        time: '10:42 AM',
      },
      {
        id: '2',
        sender: 'teguio',
        text: 'Esta pantalla le está pidiendo confirmar sus datos antes de continuar. Revise que la información sea correcta y luego seleccione "Continuar".',
        time: '10:43 AM',
        highlightText: 'Continuar',
      },
      {
        id: '3',
        sender: 'teguio',
        text: 'Recuerde: No me envíe contraseñas ni códigos de seguridad.',
        time: '10:43 AM',
        isSafetyWarning: true,
      },
      {
        id: '4',
        sender: 'user',
        text: 'Ya lo hice.',
        time: '10:44 AM',
      },
      {
        id: '5',
        sender: 'teguio',
        text: '¡Perfecto! Puede continuar con el siguiente paso.',
        time: '10:44 AM',
      },
    ],
  },
  {
    id: 'orden-medica',
    title: '¿Radicar solicitud o Consultar estado?',
    badge: 'Trámite de Salud',
    description: 'Confusión entre términos técnicos en el portal de la EPS.',
    messages: [
      {
        id: 'om-1',
        sender: 'user',
        text: 'Tengo una orden médica del doctor y me salen dos botones: "Radicar solicitud" y "Consultar estado". ¿Cuál toco?',
        time: '02:15 PM',
      },
      {
        id: 'om-2',
        sender: 'teguio',
        text: '"Radicar" significa enviar su orden médica por primera vez para que la revisen. Como es nueva, presione "Radicar solicitud".',
        time: '02:16 PM',
        highlightText: 'Radicar solicitud',
      },
      {
        id: 'om-3',
        sender: 'user',
        text: 'Listo, ahora me pide una foto de la orden.',
        time: '02:17 PM',
      },
      {
        id: 'om-4',
        sender: 'teguio',
        text: 'Excelente. Toque "Adjuntar foto", tome la foto donde se lean bien la fecha y la firma, y pulse "Enviar". No necesita ingresar ninguna clave.',
        time: '02:18 PM',
      },
    ],
  },
  {
    id: 'token-expirado',
    title: 'Aviso: "Token expirado"',
    badge: 'Alerta digital',
    description: 'Susto por un mensaje técnico habitual que no reviste peligro.',
    messages: [
      {
        id: 'tk-1',
        sender: 'user',
        text: '¡Hola! Me apareció una ventana roja que dice "Token expirado". ¿Se dañó mi cuenta o me hackearon?',
        time: '11:05 AM',
      },
      {
        id: 'tk-2',
        sender: 'teguio',
        text: 'Tranquilo/a, no hay ningún daño ni peligro. "Token expirado" solo significa que pasó un tiempo sin usar la pantalla y se cerró por seguridad.',
        time: '11:06 AM',
      },
      {
        id: 'tk-3',
        sender: 'teguio',
        text: 'Solo debe presionar "Volver a ingresar" y escribir de nuevo su usuario habitual.',
        time: '11:06 AM',
        highlightText: 'Volver a ingresar',
      },
      {
        id: 'tk-4',
        sender: 'user',
        text: '¡Ah, qué alivio! Ya entré de nuevo.',
        time: '11:08 AM',
      },
      {
        id: 'tk-5',
        sender: 'teguio',
        text: '¡Muy bien hecho! Recuerde que puede consultarnos cuando cualquier mensaje le genere duda.',
        time: '11:08 AM',
      },
    ],
  },
  {
    id: 'audio-consulta',
    title: 'Consulta con Nota de Voz',
    badge: 'Nota de Voz',
    description: 'El usuario prefiere hablar libremente sin tener que teclear.',
    messages: [
      {
        id: 'aud-1',
        sender: 'user',
        text: 'Nota de voz: "Hija... digo Teguío, me llegó un mensaje que dice que actualice la app del banco, pero me da miedo que me borren las fotos o me cobren algo..."',
        time: '04:20 PM',
        isAudio: true,
        audioDuration: '0:18',
      },
      {
        id: 'aud-2',
        sender: 'teguio',
        text: 'Le escuché con total claridad. Las actualizaciones no borran sus fotos ni tienen ningún costo. Se hacen desde la tienda oficial (Play Store) para que la aplicación funcione mejor y más segura.',
        time: '04:21 PM',
      },
      {
        id: 'aud-3',
        sender: 'teguio',
        text: 'Presione con confianza el botón verde "Actualizar". Nosotros le acompañamos en todo el proceso.',
        time: '04:21 PM',
        highlightText: 'Actualizar',
      },
      {
        id: 'aud-4',
        sender: 'user',
        text: 'Ya terminó de actualizar y abrió perfecto. ¡Muchas gracias por la paciencia!',
        time: '04:24 PM',
      },
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: '¿Qué es Teguío?',
    answer:
      'Teguío es una solución de orientación y acompañamiento digital que ayuda a personas mayores a entender pantallas confusas o pasos bloqueantes en sus celulares y computadores, permitiéndoles completar sus trámites por sí mismas sin depender de que un familiar lo haga por ellas.',
  },
  {
    id: 'faq-2',
    category: 'general',
    question: '¿Para quién es?',
    answer:
      'Está diseñado para adultos mayores que ya usan dispositivos móviles pero experimentan dudas o frenos en momentos clave, y para familiares que desean acompañar con amor y respeto sin verse forzados a asumir todo el trabajo operativo.',
  },
  {
    id: 'faq-3',
    category: 'uso',
    question: '¿Teguío hace el trámite por mi familiar?',
    answer:
      'No. Teguío nunca toma el control del dispositivo ni realiza gestiones en su nombre. Nuestra labor es explicar con palabras claras qué significa la pantalla y cuál es la opción correcta para que el usuario siempre conserve la ejecución y el aprendizaje.',
  },
  {
    id: 'faq-4',
    category: 'uso',
    question: '¿Necesita instalar una aplicación pesada?',
    answer:
      'No. La interacción está pensada para aprovechar canales habituales y accesibles como WhatsApp y la web móvil, sin instalaciones engorrosas ni registros complicados.',
  },
  {
    id: 'faq-5',
    category: 'uso',
    question: '¿Qué tipo de dificultades puede consultar?',
    answer:
      'Preguntas sobre botones confusos, mensajes de error, trámites en portales de salud (EPS), solicitud de citas, descarga de certificados o facturas, y navegación cotidiana en aplicaciones de uso diario.',
  },
  {
    id: 'faq-6',
    category: 'seguridad',
    question: '¿Puede enviar capturas de pantalla de forma segura?',
    answer:
      'Sí. Antes de procesar una imagen, orientamos a la persona para evitar que comparta datos privados y aplicamos estrictos protocolos de anonimización y protección de la privacidad.',
  },
  {
    id: 'faq-7',
    category: 'seguridad',
    question: '¿Teguío solicitará contraseñas?',
    answer:
      'Bajo ninguna circunstancia. Teguío jamás le pedirá contraseñas, claves bancarias, números PIN de tarjetas ni códigos temporales SMS. Si una consulta requiere ingresar credenciales, le indicaremos en qué campo oficial de la plataforma debe hacerlo él mismo.',
  },
  {
    id: 'faq-8',
    category: 'seguridad',
    question: '¿Puede tomar decisiones médicas o financieras?',
    answer:
      'No. Teguío es un orientador de usabilidad y comprensión digital, no un asesor médico, financiero o jurídico. Solo guiamos la interacción con la pantalla.',
  },
  {
    id: 'faq-9',
    category: 'piloto',
    question: '¿Cómo puedo participar en la prueba piloto?',
    answer:
      'Solo debe completar el formulario que se encuentra en esta página. Es un proceso voluntario y gratuito para ayudarnos a calibrar la mejor experiencia para las familias.',
  },
];
