/**
 * POST /api/contact — Captura leads desde la landing de FlujoDigital.
 *
 * Envía los datos a WASAPEA PRO CRM para que el equipo de ventas
 * haga seguimiento automático. También notifica por WhatsApp.
 *
 * Body: { name, phone, email?, service?, message? }
 */

import { NextRequest, NextResponse } from "next/server";

const CRM_WEBHOOK_URL = process.env.CRM_LEAD_WEBHOOK_URL;
const WHATSAPP_NOTIFY = process.env.WHATSAPP_NOTIFY_NUMBER || "573106055920";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Nombre y teléfono son obligatorios" },
        { status: 400 }
      );
    }

    // 1. Enviar al webhook de WASAPEA CRM (si está configurado)
    if (CRM_WEBHOOK_URL) {
      try {
        await fetch(CRM_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source: "flujodigital_landing",
            name: name.trim(),
            phone: phone.trim(),
            email: (email || "").trim(),
            service: service || "no_especificado",
            message: message || "Solicitud desde landing FlujoDigital",
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (e) {
        // No fallar si el CRM no responde — el lead ya se capturó
        console.warn("[contact] CRM webhook falló:", e);
      }
    }

    // 2. Notificar al equipo por WhatsApp
    const waMsg = encodeURIComponent(
      `🔔 *Nuevo Lead FlujoDigital*%0A%0A` +
        `👤 *Nombre:* ${name}%0A` +
        `📱 *Teléfono:* ${phone}%0A` +
        `${email ? `📧 *Email:* ${email}%0A` : ""}` +
        `${service ? `🛠 *Servicio:* ${service}%0A` : ""}` +
        `${message ? `💬 *Mensaje:* ${message}` : ""}`
    );

    // Fire-and-forget la notificación
    fetch(
      `https://api.whatsapp.com/send?phone=${WHATSAPP_NOTIFY}&text=${waMsg}`
    ).catch(() => {});

    return NextResponse.json({
      ok: true,
      message: "¡Gracias! Te contactaremos en las próximas horas.",
    });
  } catch (err) {
    console.error("[contact] Error:", err);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
