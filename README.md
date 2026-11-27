# Selecta Art — Vercel preview

Responzivní portfolio v češtině a angličtině. Úvodní stránka představuje autora, tři ukázky a kontakt. Samostatné stránky `services.html`, `gallery.html`, `choice.html` a `story.html` obsahují služby, galerii, připravovaný výběr děl a celý příběh. Přepínač CZ/EN si pamatuje zvolený jazyk; anglickou verzi lze sdílet pomocí `?lang=en`. Statický HTML/CSS/JS frontend se sestaví do `public/`; kontaktní formulář používá Vercel Function v `api/contact.js`. Projekt nemá externí balíčky.

## Lokálně

```bash
npm run build
npm test
```

Vercel používá `vercel.json` (`outputDirectory: public`). Při sestavení nahradí SEO adresy doménou z `VERCEL_PROJECT_PRODUCTION_URL` a vloží CSP pro lokální skripty a JSON-LD.
Dočasný náhled na Vercelu se sestavuje s `noindex`; zdrojový HTML zůstává připravený pro finální doménu.

## Před ostrým spuštěním

- `artist-portrait.jpg` je skutečný portrét dodaný autorem. Tři ukázky na úvodu a obsah galerie zatím zůstávají **ilustrační**; nahraďte je vlastní tvorbou a aktualizujte popisky. Stránka Selecta's Choice neuvádí žádné konkrétní dílo jako dostupné k prodeji.
- Písmo Bodoni Moda v `src/assets/fonts/` pochází z Google Fonts a je šířeno s licencí OFL 1.1.
- Pro doručování formuláře nastavte v prostředí Vercelu `RESEND_API_KEY` a ověřenou odesílací adresu `RESEND_FROM_EMAIL`. Bez nich endpoint vrací 503 a stránka nabídne přímý e-mail.
- Po přesunu na finální doménu znovu sestavte web s odpovídajícím `VERCEL_PROJECT_PRODUCTION_URL`, aby souhlasily canonical, Open Graph a sitemap.
