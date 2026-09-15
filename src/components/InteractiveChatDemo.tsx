import React, { useState } from 'react';
import { SCENARIO_PRESETS } from '../data/content';
import { ChatMessage } from '../types';

export const InteractiveChatDemo: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('confirmar-datos');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [userCustomInput, setUserCustomInput] = useState('');
  const [customMessages, setCustomMessages] = useState<ChatMessage[]>([]);
  const [isSimulatingTyping, setIsSimulatingTyping] = useState(false);

  const currentPreset =
    SCENARIO_PRESETS.find((s) => s.id === selectedScenarioId) || SCENARIO_PRESETS[0];

  const displayedMessages =
    customMessages.length > 0 ? customMessages : currentPreset.messages;

  const handleSelectScenario = (id: string) => {
    setSelectedScenarioId(id);
    setCustomMessages([]);
    setIsPlayingAudio(false);
  };

  const handleSendCustomMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userCustomInput.trim() || isSimulatingTyping) return;

    const newQuery = userCustomInput.trim();
    setUserCustomInput('');

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: newQuery,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updated = [...displayedMessages, userMsg];
    setCustomMessages(updated);
    setIsSimulatingTyping(true);

    // Simulate thoughtful, warm Teguio guidance response
    setTimeout(() => {
      let replyText =
        'Comprendo su duda. En esa pantalla no tiene que preocuparse: revise con calma el título y busque la opción que dice continuar o aceptar. Recuerde que usted tiene el control.';
      let isSafety = false;

      const lower = newQuery.toLowerCase();
      if (lower.includes('clave') || lower.includes('contraseña') || lower.includes('pin') || lower.includes('banco')) {
        replyText =
          'Para su completa seguridad, jamás comparta conmigo ni con nadie su contraseña ni códigos SMS. Ingrésela usted mismo únicamente dentro de la casilla segura de su entidad.';
        isSafety = true;
      } else if (lower.includes('actualizar') || lower.includes('borr')) {
        replyText =
          'No se preocupe: las actualizaciones oficiales de aplicaciones no borran sus fotos, chats ni contactos. Puede tocar "Actualizar" con tranquilidad.';
      } else if (lower.includes('cita') || lower.includes('medico') || lower.includes('médica') || lower.includes('eps')) {
        replyText =
          'Para citas médicas, busque la sección "Agenda" o "Solicitud de cita", seleccione la especialidad y elija la fecha disponible que más le convenga.';
      }

      const teguioMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'teguio',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isSafetyWarning: isSafety,
      };

      setCustomMessages([...updated, teguioMsg]);
      setIsSimulatingTyping(false);
    }, 1000);
  };

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
    if (!isPlayingAudio && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(
        'Hija, digo Teguío... me llegó un mensaje que dice que actualice la aplicación del banco, pero me da miedo que me borren las fotos.'
      );
      utterance.lang = 'es-ES';
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <section id="demostracion" className="w-full bg-surface py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Info Left */}
        <div className="lg:col-span-5 flex flex-col items-start gap-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-xs uppercase tracking-wider">
            <span className="material-symbols-outlined text-[18px]">forum</span>
            <span>Experiencia conversacional</span>
          </div>

          <h2 className="text-headline-lg text-primary font-bold leading-tight">
            Así de sencillo y cercano es resolver una duda con Teguío.
          </h2>

          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Sin menús complicados ni interfaces abrumadoras. A través de un canal familiar y cómodo,
            como un mensaje cotidiano por WhatsApp o la web.
          </p>

          <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex items-start gap-3.5 w-full">
            <span className="material-symbols-outlined text-secondary text-[28px] shrink-0 mt-0.5">
              check_box
            </span>
            <div>
              <p className="text-label-lg font-bold text-primary">Control en manos del usuario</p>
              <p className="text-body-md text-on-surface-variant mt-1 leading-relaxed">
                Teguío orienta con serenidad. El usuario actúa y conserva en todo momento el control de sus
                aplicaciones y datos.
              </p>
            </div>
          </div>

          {/* Interactive Scenario Presets */}
          <div className="w-full pt-1">
            <p className="text-[13px] font-bold uppercase tracking-wider text-secondary mb-2.5">
              Pruebe ejemplos reales de consulta:
            </p>
            <div className="flex flex-wrap gap-2">
              {SCENARIO_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  id={`preset-${preset.id}`}
                  onClick={() => handleSelectScenario(preset.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                    selectedScenarioId === preset.id && customMessages.length === 0
                      ? 'bg-primary text-white border-primary shadow-xs'
                      : 'bg-surface-container-low text-primary border-outline-variant/40 hover:bg-surface-container-high'
                  }`}
                >
                  {preset.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Simulation Container */}
        <div className="lg:col-span-7 flex justify-center w-full">
          <div
            id="chat-simulator-device"
            className="w-full max-w-md bg-surface-container-lowest rounded-3xl shadow-2xl overflow-hidden border border-outline-variant/40"
          >
            {/* Phone Header */}
            <div className="bg-primary p-4 text-white flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold shadow-xs">
                  <span className="material-symbols-outlined text-[24px]">support</span>
                </div>
                <div>
                  <p className="text-[16px] font-bold text-white leading-tight">Orientador Teguío</p>
                  <p className="text-[12px] text-secondary-fixed flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
                    En línea para orientarle
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  title="Restablecer conversación"
                  onClick={() => {
                    setCustomMessages([]);
                    setIsPlayingAudio(false);
                  }}
                  className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 text-xs flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[20px]">refresh</span>
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div
              id="chat-messages-container"
              className="p-4 bg-surface-container-low flex flex-col gap-3.5 min-h-[420px] max-h-[460px] overflow-y-auto"
            >
              <div className="text-center my-1">
                <span className="text-[11px] font-semibold bg-surface-container px-3 py-1 rounded-full text-on-surface-variant/80 border border-outline-variant/30">
                  Hoy • Conversación de orientación protegida
                </span>
              </div>

              {displayedMessages.map((msg) => {
                if (msg.sender === 'user') {
                  return (
                    <div key={msg.id} className="flex items-end justify-end">
                      <div className="max-w-[84%] bg-primary text-white rounded-2xl rounded-tr-xs p-3.5 px-4 shadow-xs">
                        {msg.isAudio ? (
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                              <button
                                type="button"
                                onClick={toggleAudio}
                                className="w-9 h-9 rounded-full bg-white text-primary flex items-center justify-center shadow-xs hover:scale-105 active:scale-95 transition-all"
                              >
                                <span className="material-symbols-outlined text-[22px]">
                                  {isPlayingAudio ? 'pause' : 'play_arrow'}
                                </span>
                              </button>
                              <div className="flex-1">
                                <div className="h-1.5 w-28 bg-white/30 rounded-full overflow-hidden">
                                  <div
                                    className={`h-full bg-white transition-all duration-300 ${
                                      isPlayingAudio ? 'w-full animate-pulse' : 'w-1/3'
                                    }`}
                                  ></div>
                                </div>
                                <span className="text-[11px] text-white/80 mt-1 block">
                                  {msg.audioDuration || '0:18'} • Nota de voz
                                </span>
                              </div>
                            </div>
                            <p className="text-[13px] text-white/90 italic mt-1 border-t border-white/20 pt-1.5">
                              {msg.text}
                            </p>
                          </div>
                        ) : (
                          <p className="text-[15px] leading-relaxed">{msg.text}</p>
                        )}
                        <span className="block text-right text-[11px] text-primary-fixed-dim mt-1">
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  );
                }

                // Teguío message
                return (
                  <div key={msg.id} className="flex items-start justify-start flex-col gap-1.5">
                    {msg.isSafetyWarning ? (
                      <div className="max-w-[88%] bg-tertiary-fixed text-on-tertiary-fixed rounded-2xl p-3.5 shadow-xs flex items-start gap-2.5 border border-tertiary-fixed-dim/50">
                        <span className="material-symbols-outlined text-tertiary text-[22px] shrink-0 mt-0.5">
                          lock
                        </span>
                        <div>
                          <p className="text-[13px] font-bold text-on-tertiary-fixed leading-tight">
                            Aviso de seguridad Teguío
                          </p>
                          <p className="text-[13px] text-on-tertiary-fixed/95 mt-0.5">{msg.text}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="max-w-[88%] bg-surface-container-lowest text-on-surface rounded-2xl rounded-tl-xs p-3.5 px-4 shadow-xs border border-outline-variant/30">
                        <p className="text-[15px] text-on-surface leading-relaxed">
                          {msg.highlightText ? (
                            <>
                              {msg.text.split(msg.highlightText).map((part, i, arr) => (
                                <React.Fragment key={i}>
                                  {part}
                                  {i < arr.length - 1 && (
                                    <strong className="text-primary font-bold bg-secondary-container/40 px-1 py-0.5 rounded">
                                      "{msg.highlightText}"
                                    </strong>
                                  )}
                                </React.Fragment>
                              ))}
                            </>
                          ) : (
                            msg.text
                          )}
                        </p>
                        <span className="block text-left text-[11px] text-outline mt-1.5">
                          {msg.time}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}

              {isSimulatingTyping && (
                <div className="flex items-center gap-2 text-outline text-xs p-2 bg-surface-container-lowest w-fit rounded-full border border-outline-variant/30 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-secondary animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 rounded-full bg-secondary animate-bounce [animation-delay:0.4s]"></span>
                  <span>Teguío está orientando...</span>
                </div>
              )}
            </div>

            {/* Interactive Input Form in Phone */}
            <form
              onSubmit={handleSendCustomMessage}
              className="p-3 bg-surface-container-lowest border-t border-outline-variant/30 flex items-center gap-2"
            >
              <input
                id="simulator-custom-input"
                type="text"
                value={userCustomInput}
                onChange={(e) => setUserCustomInput(e.target.value)}
                placeholder="Escriba su consulta o duda..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-[14px] focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
              />
              <button
                id="simulator-send-btn"
                type="submit"
                disabled={!userCustomInput.trim() || isSimulatingTyping}
                className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-container disabled:opacity-40 transition-all"
                title="Enviar consulta"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
            </form>

            {/* Bottom Footer Callout */}
            <div className="p-2.5 bg-surface-container text-center border-t border-outline-variant/20">
              <span className="text-[12px] text-on-surface-variant font-bold">
                Teguío orienta. El usuario actúa y conserva el control.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
