const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const TEMPLATE_PATH = path.join(__dirname, '..', 'template.html');
const OUTPUT_DIR = path.join(__dirname, '..', 'images');

// Asegurar que el directorio de salida existe
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function generateMarketingImages() {
  console.log('Iniciando generador de imágenes...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Configurar un viewport grande para renderizar todas las tarjetas cómodamente
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2 // Alta nitidez (Retina @2x)
    });

    const fileUrl = `file://${path.resolve(TEMPLATE_PATH)}`;
    console.log(`Cargando plantilla desde ${fileUrl}...`);
    
    // Cargar la plantilla local y esperar a que carguen fuentes externas (Google Fonts)
    await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 60000 });
    
    // Esperar un segundo extra para asegurar el correcto renderizado de las fuentes
    await new Promise(r => setTimeout(r, 2000));

    // Definición de las 19 imágenes a generar
    const cards = [
      // Estados de WhatsApp (7)
      { id: '#wa-status-1', file: 'whatsapp_status_1.png', type: 'WhatsApp' },
      { id: '#wa-status-2', file: 'whatsapp_status_2.png', type: 'WhatsApp' },
      { id: '#wa-status-3', file: 'whatsapp_status_3.png', type: 'WhatsApp' },
      { id: '#wa-status-4', file: 'whatsapp_status_4.png', type: 'WhatsApp' },
      { id: '#wa-status-5', file: 'whatsapp_status_5.png', type: 'WhatsApp' },
      { id: '#wa-status-6', file: 'whatsapp_status_6.png', type: 'WhatsApp' },
      { id: '#wa-status-7', file: 'whatsapp_status_7.png', type: 'WhatsApp' },

      // Facebook Posts (5)
      { id: '#fb-post-1', file: 'facebook_post_1.png', type: 'Facebook' },
      { id: '#fb-post-2', file: 'facebook_post_2.png', type: 'Facebook' },
      { id: '#fb-post-3', file: 'facebook_post_3.png', type: 'Facebook' },
      { id: '#fb-post-4', file: 'facebook_post_4.png', type: 'Facebook' },
      { id: '#fb-post-5', file: 'facebook_post_5.png', type: 'Facebook' },

      // Instagram Stories (7)
      { id: '#ig-story-1', file: 'instagram_story_1.png', type: 'Instagram' },
      { id: '#ig-story-2', file: 'instagram_story_2.png', type: 'Instagram' },
      { id: '#ig-story-3', file: 'instagram_story_3.png', type: 'Instagram' },
      { id: '#ig-story-4', file: 'instagram_story_4.png', type: 'Instagram' },
      { id: '#ig-story-5', file: 'instagram_story_5.png', type: 'Instagram' },
      { id: '#ig-story-6', file: 'instagram_story_6.png', type: 'Instagram' },
      { id: '#ig-story-7', file: 'instagram_story_7.png', type: 'Instagram' },

      // Diseños Adicionales de Referencia (2)
      { id: '#extra-catalog', file: 'flujo_catalog_grid.png', type: 'Extra' },
      { id: '#extra-services-flyer', file: 'flujo_services_neon.png', type: 'Extra' }
    ];

    for (const card of cards) {
      console.log(`Generando imagen [${card.type}]: ${card.file}...`);
      try {
        const element = await page.$(card.id);
        if (element) {
          // Desplazar al elemento antes de capturar para asegurar que esté en viewport si es necesario
          await page.evaluate((selector) => {
            const el = document.querySelector(selector);
            if (el) el.scrollIntoView();
          }, card.id);
          
          await new Promise(r => setTimeout(r, 200)); // Pequeña espera tras scroll
          
          const outputPath = path.join(OUTPUT_DIR, card.file);
          await element.screenshot({ path: outputPath });
          console.log(`✓ Creada con éxito: ${outputPath}`);
        } else {
          console.error(`⚠️ No se encontró la tarjeta con ID: ${card.id}`);
        }
      } catch (err) {
        console.error(`❌ Error al capturar la tarjeta ${card.id}:`, err.message);
      }
    }

  } catch (error) {
    console.error('Error general durante la generación:', error);
  } finally {
    await browser.close();
    console.log('Proceso de generación finalizado.');
  }
}

generateMarketingImages();
