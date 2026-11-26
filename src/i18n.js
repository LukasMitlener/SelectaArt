/* The Czech HTML remains the source copy. English is applied to its text nodes. */
const englishText = new Map([
  [`Přejít na obsah`, `Skip to content`],
  [`Příběh`, `Story`], [`Fotografie`, `Photography`], [`Kaligrafie`, `Calligraphy`], [`Galerie`, `Gallery`], [`Kontakt`, `Contact`],
  [`FOTOGRAFIE & KALIGRAFIE`, `PHOTOGRAPHY & CALLIGRAPHY`],
  [`Umělecká fotografie`, `Fine art photography`],
  [`a zakázková kaligrafie`, `and bespoke calligraphy`],
  [`Prostor, kde se světlo a stín potkávají s tahem pera. Zachycuji prchavé emoce, autentické příběhy a tvořím umění s duší.`, `A space where light and shadow meet the stroke of a pen. I capture fleeting emotions and authentic stories, and create art with soul.`],
  [`Prohlédnout tvorbu`, `Explore the work`], [`Nezávazná poptávka`, `Get in touch`],
  [`Vidět. Cítit. Uchovat.`, `See. Feel. Preserve.`],
  [`ILUSTRAČNÍ VIZUÁL · NAHRAĎTE PORTRÉTEM AUTORA`, `ILLUSTRATIVE IMAGE · REPLACE WITH THE ARTIST'S PORTRAIT`],
  [`Přejít níž`, `Scroll down`],

  [`01 / PŘÍBĚH`, `01 / THE STORY`],
  [`Příběh Selecta Art:`, `The Selecta Art story:`],
  [`Kde se vnitřní svět`, `Where the inner world`],
  [`potkává s vnějším`, `meets the outer one`],
  [`…S focením jsem začal v roce 2011, kdy jsem hledal způsob, jak dát podobu emocím a pocitům ukrytým hluboko v sobě. Jako introvert a umělecky založený pozorovatel jsem se na svět vždy díval trochu jiným pohledem – všímal jsem si detailů, nálad, gest a okamžiků, které by jinak mohly zůstat přehlíženy. Fotografie pro mě nikdy nebyla jen o samotném pořízení snímku... Je o emocích, okamžicích, radosti i smutku. Jde o zachycení pocitu dříve, než navždy zmizí.`, `…I began taking photographs in 2011, looking for a way to give shape to emotions and feelings hidden deep within me. As an introvert and an artistically minded observer, I have always seen the world a little differently – noticing details, moods, gestures and moments that might otherwise go unseen. Photography has never been just about taking a picture for me... It is about emotion, moments, joy and sorrow. It is about capturing a feeling before it disappears forever.`],
  [`...představuje kreativní stránku mého nitra. Prostor, kde se potkává fotografie, kaligrafie, hudba, příroda a vše, co propojuje můj vnitřní svět s tím vnějším. Někdy introvert, jindy extrovert.`, `...represents the creative side of my inner world. A space where photography, calligraphy, music, nature and everything that connects my inner world with the outer one come together. Sometimes an introvert, sometimes an extrovert.`],
  [`… myšlenka vznikla ve chladný podzimní večer roku 2011 kdy jsem hledal způsob, jak dát podobu emocím a pocitům, které se ve mně skrývaly. Jako introvert a umělecky založený pozorovatel jsem se na svět vždy díval trochu jiným pohledem – všímal jsem si detailů, nálad, gest i okamžiků, které by jinak mohly zůstat bez povšimnutí.`, `… the idea was born on a cold autumn evening in 2011, when I was searching for a way to give shape to the emotions and feelings hidden inside me. As an introvert and an artistically minded observer, I have always looked at the world a little differently – noticing details, moods, gestures and moments that might otherwise have gone unnoticed.`],
  [`Vzhledem k tomu, že jsem dvakrát moc peněz neměl, to byl docela švihlý nápad, ale hned druhý den jsem si koupil svůj první fotoaparát... a narodil projekt Selecta Art.`, `I did not have much money, so it was a rather wild idea. But the very next day I bought my first camera... and Selecta Art was born.`],
  [`Fotografie se okamžitě stala mou vášní. Začínal jsem fotit události, interprety, energii a ducha reggae kultury ve svém okolí, protože jsem s ní byl hluboce spjat – sám jsem totiž byl interpretem. Nelákalo mě jen to, co se dělo před objektivem, ale i to, co bylo možné cítit za ním: okamžiky v čase, pohyb, spojení mezi umělcem a publikem či pomíjivá emoce.`, `Photography immediately became my passion. I started by photographing events, performers, and the energy and spirit of the reggae culture around me, because I was deeply connected to it – I was a performer myself. I was drawn not only to what happened in front of the lens, but also to what could be felt behind it: moments in time, movement, the connection between artist and audience, and fleeting emotion.`],
  [`Fotografie pro mě nikdy nebyla pouhým snímkem...Jsou to emoce, momenty, radost i smutek. Zachycení pocitu dříve, než zmizí.`, `Photography has never been just an image to me... It is emotion, moments, joy and sorrow. The capture of a feeling before it fades.`],
  [`Protože neustále zkoumám a hledám nové způsoby, jak propojit svůj vnitřní vesmír s fyzickým světem, jsem v roce 2014 objevil kaligrafii. Pro někoho to může znamenat „pouhé“ psaní na papír, ale ve mně se postupně proměnila v něco mnohem hlubšího. Věřím, že kaligrafie je hudbou pro oči a potravou pro duši, stala se pro mě dokonalým spojením mé mysli a fyzického světa.`, `I am always exploring new ways to connect my inner universe with the physical world, and in 2014 I discovered calligraphy. To some, it may mean “just” writing on paper, but for me it gradually became something much deeper. I believe calligraphy is music for the eyes and nourishment for the soul. It became the perfect meeting point between my mind and the physical world.`],
  [`Dnes je Selecta Art kreativní stránkou mé osobnosti – prostorem, kde mohu kombinovat fotografii, kaligrafii, přírodu, muziku a různé formy fyzického i duchovního umění. Hledám krásu, která se skrývá jak ve výjimečném, tak ve všedním okamžiku...v lidech, v krajině, v nedokonalých tvarech, v hudbě, v tichu i v momentech, které nelze zopakovat.`, `Today, Selecta Art is the creative side of who I am – a space where I can bring together photography, calligraphy, nature, music and different forms of physical and spiritual art. I look for beauty in both the extraordinary and the everyday... in people, landscapes, imperfect shapes, music, silence and moments that can never be repeated.`],
  [`Věřím, že umění patří všem – zkušenému umělci i zvídavému začátečníkovi, člověku s profesionálním fotoaparátem i tomu, kdo si všimne stínu na zdi. Zkušeným sběratelům i těm, kteří jen tak zahlédnou obraz na stěně... Umění je vesmírem pro každého.`, `I believe art belongs to everyone – the experienced artist and the curious beginner, the person with a professional camera and the one who notices a shadow on a wall. Seasoned collectors and those who simply glimpse a painting on a wall... Art is a universe open to all.`],
  [`Selecta Art je způsob, jak vnímám svět, jak navazuji vztahy s lidmi a jak přetvářím tyto vjemy v něco hmatatelného. Ve fotografii zachycuji světlo a okamžik, v kaligrafii předávám myšlenky. Obojí v souznění se stává odrazem duše.`, `Selecta Art is how I perceive the world, connect with people and turn these impressions into something tangible. In photography, I capture light and a moment; in calligraphy, I convey thoughts. Together, they become a reflection of the soul.`],

  [`02 / FOTOGRAFIE`, `02 / PHOTOGRAPHY`],
  [`Fotografické služby:`, `Photography services:`],
  [`Emoce ve světle a stínu`, `Emotion in light and shadow`],
  [`Zachycuji okamžiky, osobnosti a příběhy pro jednotlivce, umělce i firmy. Každý snímek má svůj vlastní tep.`, `I capture moments, personalities and stories for individuals, artists and businesses. Every image has a pulse of its own.`],
  [`Reportážní a eventová fotografie`, `Documentary and event photography`],
  [`Festivaly, koncerty, kulturní akce a firemní setkání. Autentická atmosféra tak, jak se odehrává.`, `Festivals, concerts, cultural events and company gatherings. Their authentic atmosphere, just as it unfolds.`],
  [`Portrétní a rodinná fotografie`, `Portrait and family photography`],
  [`Individuální, párové i rodinné portréty s přirozeným charakterem a opravdovým výrazem.`, `Individual, couple and family portraits that reveal natural character and genuine expression.`],
  [`Umělecké a kreativní portréty`, `Fine art and creative portraits`],
  [`Světlo, stíny a vizuální vyprávění proměňují portrét v osobní umělecké dílo.`, `Light, shadow and visual storytelling turn a portrait into a personal work of art.`],
  [`Svatební fotografie`, `Wedding photography`],
  [`Váš den od intimních detailů po spontánní oslavy, citlivě a bez zbytečného aranžování.`, `Your day, from intimate details to spontaneous celebrations, photographed with care and without unnecessary staging.`],
  [`Hudební fotografie a zákulisí`, `Music photography and backstage`],
  [`Živá hudba, DJové, performeři a energie mezi umělcem a publikem.`, `Live music, DJs, performers and the energy between artist and audience.`],
  [`Lifestylová a osobní brandingová fotografie`, `Lifestyle and personal branding photography`],
  [`Vizuální příběhy pro kreativce, umělce a značky s autentickou identitou.`, `Visual stories for creatives, artists and brands building an authentic identity.`],
  [`Produktová a komerční fotografie`, `Product and commercial photography`],
  [`Čisté i kreativní snímky pro značky, weby a propagační materiály.`, `Clean or creative images for brands, websites and promotional materials.`],

  [`03 / KALIGRAFIE`, `03 / CALLIGRAPHY`],
  [`Kaligrafické služby:`, `Calligraphy services:`],
  [`Hudba pro oči.`, `Music for the eyes.`],
  [`Místo, kde se slova stávají vizuálním zážitkem a trvalou vzpomínkou. Rukopis jako umění.`, `A place where words become a visual experience and a lasting memory. Handwriting as art.`],
  [`Zakázková a umělecká kaligrafie`, `Bespoke and artistic calligraphy`],
  [`Ručně psaná slova, jména a fráze proměněné v originální kompozice.`, `Handwritten words, names and phrases transformed into original compositions.`],
  [`Kaligrafie pro svatby a události`, `Calligraphy for weddings and events`],
  [`Svatební kaligrafie pro oznámení, jmenovky, menu, obálky i zasedací pořádky.`, `Wedding calligraphy for invitations, place cards, menus, envelopes and seating plans.`],
  [`Personalizované dárky na míru`, `Personalized gifts`],
  [`Jména, data a osobní vzkazy jako smysluplný a trvalý dar.`, `Names, dates and personal messages made into meaningful, lasting gifts.`],
  [`Ručně psané citáty a poezie`, `Handwritten quotes and poetry`],
  [`Texty písní, básně a myšlenky navržené jako obrazy pro domovy i kreativní prostory.`, `Lyrics, poems and thoughts composed as artwork for homes and creative spaces.`],

  [`04 / VIZUÁLNÍ SVĚT`, `04 / VISUAL WORLD`],
  [`Galerie fotografií`, `Photography gallery`],
  [`a kaligrafie`, `and calligraphy`],
  [`Výběr ilustračních vizuálů naznačuje atmosféru webu. Před zveřejněním portfolia je nahraďte vlastní tvorbou.`, `These illustrative images suggest the mood of the website. Replace them with original work before publishing the portfolio.`],
  [`Vše`, `All`],
  [`Reportáž & eventy`, `Documentary & events`], [`Portréty`, `Portraits`], [`Svatby`, `Weddings`],
  [`Hudba & zákulisí`, `Music & backstage`], [`Produkt`, `Product`], [`Rukopis`, `Handwriting`],
  [`Svatební detaily`, `Wedding details`], [`Umění inkoustu`, `Ink art`],
  [`Vizuály v této ukázce byly vytvořeny pro návrh webu a nepředstavují skutečné portfolio Selecta Art.`, `The images in this preview were created for the website design and do not represent Selecta Art's actual portfolio.`],

  [`05 / KONTAKT`, `05 / CONTACT`],
  [`Pojďme společně`, `Let's create`], [`vytvořit něco`, `something`], [`smysluplného.`, `meaningful together.`],
  [`Každý projekt začíná nápadem a každý příběh si zaslouží individuální přístup. Hledáte fotografa, umělecký portrét nebo kaligrafický originál? Napište mi.`, `Every project begins with an idea, and every story deserves a personal approach. Looking for a photographer, an artistic portrait or an original calligraphy piece? Write to me.`],
  [`TELEFON`, `PHONE`], [`Zobrazit e-mail`, `Show email`], [`Zobrazit telefon`, `Show phone number`],
  [`Řekněte mi o svém nápadu`, `Tell me about your idea`], [`Ozvu se vám osobně, jakmile to bude možné.`, `I'll get back to you personally as soon as I can.`],
  [`Vaše jméno`, `Your name`], [`E-mail`, `Email`], [`Co vás zajímá?`, `What are you interested in?`],
  [`Vyberte službu`, `Choose a service`], [`Jiné`, `Other`], [`Váš nápad`, `Your idea`],
  [`Webová stránka`, `Website`], [`Odeslat poptávku`, `Send inquiry`],
  [`Údaje použiji pouze k odpovědi na vaši zprávu. Formulář vyžaduje nastavené doručování e-mailů.`, `I will use your details only to reply to your message. Email delivery must be configured for this form.`],
  [`Světlo. Stín. Příběh.`, `Light. Shadow. Story.`], [`Selecta Art. Všechna práva vyhrazena.`, `Selecta Art. All rights reserved.`]
]);

const englishAttributes = new Map([
  [`Selecta Art, úvod`, `Selecta Art, home`],
  [`Hlavní navigace`, `Main navigation`], [`Mobilní navigace`, `Mobile navigation`],
  [`Filtrovat galerii`, `Filter gallery`], [`Náhled fotografie`, `Image preview`],
  [`Zavřít náhled`, `Close preview`], [`Předchozí obrázek`, `Previous image`], [`Další obrázek`, `Next image`],
  [`Napište pár slov o svém projektu...`, `Tell me a little about your project...`],
  [`Ilustrační portrét fotografa v dramatickém světle`, `Illustrative portrait of a photographer in dramatic light`],
  [`Ilustrační portrét fotografa s fotoaparátem ve světle a stínu`, `Illustrative portrait of a photographer with a camera in light and shadow`],
  [`Ilustrační abstraktní tahy štětce na papíře – zakázková kaligrafie`, `Illustrative abstract brushstrokes on paper – bespoke calligraphy`],
  [`Ilustrační reportážní a eventová fotografie koncertu v teplém světle`, `Illustrative documentary and event photograph of a concert in warm light`],
  [`Ilustrační portrétní fotografie ženy v přirozeném světle`, `Illustrative portrait photograph of a woman in natural light`],
  [`Ilustrační svatební fotografie páru v intimním okamžiku`, `Illustrative wedding photograph of a couple in an intimate moment`],
  [`Ilustrační hudební fotografie DJe v zákulisí`, `Illustrative music photograph of a DJ backstage`],
  [`Ilustrační produktová fotografie keramiky ve světle a stínu`, `Illustrative product photograph of ceramics in light and shadow`],
  [`Ilustrační zakázková kaligrafie psaná perem na papír`, `Illustrative bespoke calligraphy written with a pen on paper`],
  [`Ilustrační svatební kaligrafie na papírových jmenovkách`, `Illustrative wedding calligraphy on paper place cards`],
  [`Ilustrační abstraktní inkoustové tahy pro ručně psané citáty`, `Illustrative abstract ink strokes for handwritten quotes`],
  [`Reportážní a eventová fotografie – koncertní atmosféra`, `Documentary and event photography – concert atmosphere`],
  [`Portrétní fotografie – přirozený výraz`, `Portrait photography – natural expression`],
  [`Svatební fotografie – spontánní chvíle`, `Wedding photography – a spontaneous moment`],
  [`Hudební fotografie – DJ v zákulisí`, `Music photography – DJ backstage`],
  [`Produktová a komerční fotografie – keramický detail`, `Product and commercial photography – a ceramic detail`],
  [`Zakázková kaligrafie – práce perem`, `Bespoke calligraphy – pen work`],
  [`Svatební kaligrafie – ručně zdobené jmenovky`, `Wedding calligraphy – hand-decorated place cards`],
  [`Ručně psané citáty a umělecké tahy inkoustem`, `Handwritten quotes and artistic ink strokes`],
  [`Selecta Art: umělecká, reportážní, eventová, portrétní a svatební fotografie. Zakázková a svatební kaligrafie, ručně psané citáty a osobní dárky.`, `Selecta Art: fine art, documentary, event, portrait and wedding photography. Bespoke and wedding calligraphy, handwritten quotes and personal gifts.`],
  [`Světlo, stín a tah pera. Autentické příběhy ve fotografii a kaligrafii.`, `Light, shadow and the stroke of a pen. Authentic stories through photography and calligraphy.`]
]);

const czechTitle = document.title;
const englishTitle = 'Selecta Art – Fine art photography and bespoke calligraphy';
const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
for (let node; (node = walker.nextNode());) {
  if (node.parentElement?.closest('script,style,.theme-toggle,.language-switch,#form-status')) continue;
  const source = node.nodeValue;
  const translated = englishText.get(source.trim());
  if (translated) textNodes.push({node, source, translated});
}
const attributes = [];
for (const element of document.querySelectorAll('[alt],[aria-label],[placeholder],[data-caption],meta[name="description"],meta[property="og:title"],meta[property="og:description"],meta[property="og:image:alt"]')) {
  if (element.matches('.theme-toggle,.menu-toggle,.language-switch,.language-switch *')) continue;
  for (const name of ['alt','aria-label','placeholder','data-caption','content']) {
    const source = element.getAttribute(name);
    if (source && englishAttributes.has(source)) attributes.push({element, name, source, translated:englishAttributes.get(source)});
  }
}
const ogTitle = document.querySelector('meta[property="og:title"]');
const czechOgTitle = ogTitle.content;
let locale = 'cs';

function setLocale(next, {updateUrl = true} = {}) {
  locale = next === 'en' ? 'en' : 'cs';
  for (const item of textNodes) {
    const leading = item.source.match(/^\s*/)[0];
    const trailing = item.source.match(/\s*$/)[0];
    item.node.nodeValue = locale === 'en' ? leading + item.translated + trailing : item.source;
  }
  for (const item of attributes) item.element.setAttribute(item.name, locale === 'en' ? item.translated : item.source);
  document.title = locale === 'en' ? englishTitle : czechTitle;
  ogTitle.content = locale === 'en' ? englishTitle : czechOgTitle;
  document.querySelector('meta[property="og:locale"]').content = locale === 'en' ? 'en_US' : 'cs_CZ';
  document.documentElement.lang = locale;
  for (const button of document.querySelectorAll('.language-switch button')) button.setAttribute('aria-pressed', String(button.dataset.lang === locale));
  if (updateUrl) {
    const url = new URL(location.href);
    if (locale === 'en') url.searchParams.set('lang', 'en'); else url.searchParams.delete('lang');
    history.replaceState(null, '', url.pathname + url.search + url.hash);
  }
  try { localStorage.setItem('selecta-language', locale); } catch { /* Storage can be disabled. */ }
  window.dispatchEvent(new CustomEvent('languagechange', {detail:{locale}}));
}

window.selectaI18n = {get locale() { return locale; }, setLocale};
for (const button of document.querySelectorAll('.language-switch button')) button.addEventListener('click', () => setLocale(button.dataset.lang));
const queryLocale = new URLSearchParams(location.search).get('lang');
let savedLocale;
try { savedLocale = localStorage.getItem('selecta-language'); } catch { /* Storage can be disabled. */ }
setLocale(queryLocale === 'en' || queryLocale === 'cs' ? queryLocale : savedLocale);
window.addEventListener('popstate', () => setLocale(new URLSearchParams(location.search).get('lang') || 'cs', {updateUrl:false}));
