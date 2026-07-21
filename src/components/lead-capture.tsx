"use client";

import { useState } from "react";

interface LeadCaptureProps {
  service?: string;
  className?: string;
}

export function LeadCapture({ service, className = "" }: LeadCaptureProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          service: service || undefined,
          message: message.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error desconocido");

      setStatus("ok");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Error al enviar");
    }
  }

  if (status === "ok") {
    return (
      <div className={`text-center p-6 ${className}`}>
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-slate-900">¡Gracias!</h3>
        <p className="text-sm text-slate-500 mt-2">
          Te contactaremos en las próximas horas. Mientras tanto, podés escribirnos por WhatsApp.
        </p>
        <a
          href="https://wa.me/573106055920"
          target="_blank"
          rel="noopener"
          className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition"
        >
          💬 Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          Nombre completo *
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Ej: María García"
          className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          WhatsApp *
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="+57 300 123 4567"
          className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          Email <span className="text-slate-400 font-normal">(opcional)</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="maria@ejemplo.com"
          className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
        />
      </div>

      {!service && (
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            ¿Qué servicio te interesa?
          </label>
          <select
            value={service || ""}
            onChange={(e) => {
              /* handled by props if passed */
            }}
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition text-slate-600"
          >
            <option value="">Seleccionar...</option>
            <option value="pagina_web">Página Web</option>
            <option value="tienda_virtual">Tienda Virtual</option>
            <option value="app_movil">App Móvil</option>
            <option value="bot_whatsapp">Bot de WhatsApp</option>
            <option value="rag_privado">RAG Privado (IA)</option>
            <option value="automatizacion">Automatización</option>
            <option value="dashboard">Dashboard / CRM</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      )}

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          Mensaje <span className="text-slate-400 font-normal">(opcional)</span>
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          placeholder="Cuéntanos brevemente qué necesitas..."
          className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-500 text-xs font-semibold">{errorMsg || "Error al enviar. Intenta por WhatsApp."}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-bold py-3 rounded-xl text-sm transition"
      >
        {status === "sending" ? "Enviando..." : "Solicitar cotización gratis ✨"}
      </button>

      <p className="text-xs text-slate-400 text-center">
        Sin compromiso. Te respondemos en menos de 24h.
      </p>
    </form>
  );
}
