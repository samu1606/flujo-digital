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
  const [selectedService, setSelectedService] = useState(service || "");
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
          service: selectedService || undefined,
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
      setSelectedService("");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Error al enviar");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition";

  if (status === "ok") {
    return (
      <div className={`text-center p-4 ${className}`}>
        <div className="text-3xl mb-3">✅</div>
        <h3 className="text-lg font-bold text-white">¡Gracias!</h3>
        <p className="text-sm text-neutral-400 mt-2">
          Te contactaremos en las próximas horas.
        </p>
        <a
          href="https://wa.me/573106055920"
          target="_blank"
          rel="noopener"
          className="inline-block mt-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition"
        >
          💬 Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-3.5 ${className}`}>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Nombre completo *"
          className={inputClass}
        />
      </div>

      <div>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="WhatsApp *"
          className={inputClass}
        />
      </div>

      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email (opcional)"
          className={inputClass}
        />
      </div>

      <div>
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className={`${inputClass} appearance-none`}
        >
          <option value="">¿Qué servicio te interesa?</option>
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

      <div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={2}
          placeholder="Contanos brevemente qué necesitás..."
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-xs font-semibold">{errorMsg || "Error al enviar."}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:opacity-50 text-white font-extrabold py-3 rounded-xl text-sm transition"
      >
        {status === "sending" ? "Enviando..." : "Solicitar cotización gratis ✨"}
      </button>

      <p className="text-xs text-neutral-500 text-center">
        Sin compromiso. Respondemos en menos de 24h.
      </p>
    </form>
  );
}
