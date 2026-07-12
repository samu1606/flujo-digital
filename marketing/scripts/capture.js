const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const SITE_URL = 'http://flujo-digital-fronted-vhasjg-a1e9ea-148-230-90-171.sslip.io';
const TEMP_DIR = path.join(__dirname, '..', 'temp');

// Asegurar que el directorio temporal existe
if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
}

async function captureSections() {
  console.log('Iniciando Puppeteer...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Configurar viewport de alta resolución (Retina @2x para nitidez premium)
    await page.setViewport({
      width: 1280,
      height: 800,
      deviceScaleFactor: 2
    });

    console.log(`Navegando a ${SITE_URL}...`);
    await page.goto(SITE_URL, { waitUntil: 'networkidle2', timeout: 60000 });
    
    console.log('Ocultando barra de navegación pegajosa para capturas limpias...');
    await page.evaluate(() => {
      const nav = document.querySelector('nav');
      if (nav) nav.style.display = 'none';
      
      // Ajustar animaciones o transiciones si existen
      const style = document.createElement('style');
      style.textContent = `
        * {
          transition: none !important;
          animation: none !important;
        }
      `;
      document.head.appendChild(style);
    });

    // Definición de las secciones a capturar
    const sections = [
      {
        name: 'hero',
        selector: 'section:first-of-type',
        description: 'Sección Hero principal'
      },
      {
        name: 'servicios',
        selector: '#servicios',
        description: 'Sección de Servicios principales'
      },
      {
        name: 'catalogo',
        selector: '#catalogo',
        description: 'Catálogo de 30 tipos de sitios web'
      },
      {
        name: 'nichos',
        selector: '#nichos',
        description: 'Sección de casos de nichos de venta'
      },
      {
        name: 'precios',
        selector: '#precios',
        description: 'Planes de precios de IA y RAG'
      },
      {
        name: 'comparacion',
        selector: 'section:has(table)',
        description: 'Tabla comparativa vs competencia'
      },
      {
        name: 'faq',
        selector: '#faq',
        description: 'Preguntas Frecuentes (FAQ)'
      }
    ];

    for (const sec of sections) {
      console.log(`Capturando sección: ${sec.description} (${sec.name})...`);
      
      // Esperar a que el selector esté en la página
      try {
        await page.waitForSelector(sec.selector, { timeout: 10000 });
        const element = await page.$(sec.selector);
        
        if (element) {
          // Desplazar a la sección para asegurar que carguen imágenes lazy si las hay
          await page.evaluate((sel) => {
            const el = document.querySelector(sel);
            if (el) el.scrollIntoView();
          }, sec.selector);
          
          // Esperar un breve instante para renderizado
          await new Promise(r => setTimeout(r, 1000));
          
          const outputPath = path.join(TEMP_DIR, `${sec.name}.png`);
          await element.screenshot({ path: outputPath });
          console.log(`✓ Guardado: ${outputPath}`);
        } else {
          console.error(`⚠️ No se encontró el elemento para el selector: ${sec.selector}`);
        }
      } catch (err) {
        console.error(`❌ Error capturando la sección ${sec.name}:`, err.message);
      }
    }

  } catch (error) {
    console.error('Error general durante la captura:', error);
  } finally {
    await browser.close();
    console.log('Proceso de captura finalizado.');
  }
}

captureSections();
