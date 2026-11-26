# Selecta Art — Vercel preview

Responzivní portfolio v češtině. Statický HTML/CSS/JS frontend se sestaví do `public/`; kontaktní formulář používá Vercel Function v `api/contact.js`. Projekt nemá externí balíčky.

## Lokálně

```bash
npm run build
npm test
```

Vercel používá `vercel.json` (`outputDirectory: public`). Při sestavení nahradí SEO adresy doménou z `VERCEL_PROJECT_PRODUCTION_URL` a vloží CSP pro lokální skripty a JSON-LD.
Dočasný náhled na Vercelu se sestavuje s `noindex`; zdrojový HTML zůstává připravený pro finální doménu.

## Před ostrým spuštěním

- Obrázky v `src/assets/` jsou **ilustrační**, nikoli skutečné portfolio autora. Nahraďte je vlastní tvorbou a aktualizujte popisky.
- Pro doručování formuláře nastavte v prostředí Vercelu `RESEND_API_KEY` a ověřenou odesílací adresu `RESEND_FROM_EMAIL`. Bez nich endpoint vrací 503 a stránka nabídne přímý e-mail.
- Po přesunu na finální doménu znovu sestavte web s odpovídajícím `VERCEL_PROJECT_PRODUCTION_URL`, aby souhlasily canonical, Open Graph a sitemap.
