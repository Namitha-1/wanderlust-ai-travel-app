import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Bot, User, Key, RefreshCcw, Compass, MapPin, ExternalLink } from 'lucide-react';
import { askTravelAssistant } from '../services/geminiService';

export default function AiChatbotDrawer({ 
  isOpen, 
  onClose, 
  activeDestination,
  apiKeySettings,
  onOpenSettings
}) {
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: `Hello! I'm Aura, your AI travel companion. ${
        activeDestination 
          ? `I see you're exploring **${activeDestination.name}, ${activeDestination.country}**! Ask me anything: how long to stay, what local food to try, or secret spots to visit.`
          : `Ask me anything about destinations worldwide, trip planning tips, or best seasons to travel!`
      }`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat thread
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const handleSend = async (queryText = inputQuery) => {
    const textToSend = typeof queryText === 'string' ? queryText : inputQuery;
    if (!textToSend.trim() || isTyping) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    try {
      const res = await askTravelAssistant(textToSend, activeDestination, apiKeySettings?.geminiKey);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: res.text,
        provider: res.provider,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: "I experienced a minor connection issue. Please try asking again!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const suggestedPrompts = activeDestination ? [
    `How long should I stay in ${activeDestination.name}?`,
    `What are top local dishes to try in ${activeDestination.name}?`,
    `Best time of year to visit ${activeDestination.name}?`,
    `What should I pack for ${activeDestination.name}?`
  ] : [
    "What are the best tropical beaches for budget travelers?",
    "Suggest a 5-day historic itinerary in Europe.",
    "Best places for cherry blossom season?"
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/70 backdrop-blur-md flex justify-end">
      
      {/* Drawer Container */}
      <div className="w-full max-w-lg bg-slate-900 border-l border-slate-800 h-full flex flex-col shadow-2xl animate-slideLeft">
        
        {/* Chat Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-5 h-5 text-white animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white font-display">Aura AI Travel Assistant</h3>
                <span className="px-2 py-0.5 rounded text-[10px] bg-indigo-950 text-indigo-300 border border-indigo-800 font-medium">
                  {apiKeySettings?.geminiKey ? 'Gemini 1.5 Flash' : 'Google Gemini AI'}
                </span>
              </div>
              
              {activeDestination && (
                <p className="text-xs text-cyan-400 flex items-center gap-1 font-medium">
                  <MapPin className="w-3 h-3" />
                  Context: {activeDestination.name}, {activeDestination.country}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSettings}
              title="Configure API Keys"
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Key className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Thread Messages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 custom-scrollbar">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center shrink-0 text-indigo-300 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-br-none shadow-md'
                  : 'bg-slate-800/90 text-slate-200 border border-slate-700/80 rounded-bl-none'
              }`}>
                {/* Render Markdown-like formatting */}
                <div className="whitespace-pre-line">
                  {msg.text}
                </div>

                <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                  <span>{msg.timestamp}</span>
                  {msg.provider && (
                    <span className="text-cyan-300/80 italic">{msg.provider}</span>
                  )}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-cyan-600/30 border border-cyan-500/40 flex items-center justify-center shrink-0 text-cyan-300 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 items-center text-slate-400 text-xs py-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                <Bot className="w-4 h-4 animate-bounce" />
              </div>
              <span className="italic animate-pulse">Aura AI is thinking...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        <div className="p-3 bg-slate-950/60 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto custom-scrollbar">
          {suggestedPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[11px] text-cyan-300 whitespace-nowrap shrink-0 transition-all hover:border-cyan-500"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Chat Input Bar */}
        <div className="p-4 bg-slate-950 border-t border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder={activeDestination ? `Ask about ${activeDestination.name}...` : "Ask AI a travel question..."}
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 bg-slate-900 text-slate-100 text-sm rounded-xl px-4 py-3 outline-none border border-slate-800 focus:border-cyan-500 transition-all placeholder-slate-500"
            />

            <button
              type="submit"
              disabled={!inputQuery.trim() || isTyping}
              className="p-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-lg disabled:opacity-40 transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}
