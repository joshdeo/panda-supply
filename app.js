/* Panda Supply: language, catalogue, quote list + form, a few quiet interactions. */
(function () {
  'use strict';

  var M = '−'; /* proper minus sign */
  var T = {
    en: {
      skip: 'Skip to content',
      ribbon: 'Exclusive Canadian distributor of Utilnova, Spain',
      nav_catalogue: 'Catalogue', nav_adhesive: 'Adhesive weights', nav_how: 'How it works', nav_order: 'Order',
      demo_note: '(Preview site: nothing was actually sent.)', eb_catalogue: 'Catalogue', eb_order: 'Ordering', order_sub: 'Build a list, send it, and get a confirmed quote.', eb_util: 'Brand / Spain',
      util_page_sub: 'Tire and wheel service equipment from Spain. Panda Supply is its exclusive Canadian distributor.',
      explore_util: 'Explore Utilnova', explore_adh: 'See the cold test', explore_cat: 'Browse the catalogue', start_list: 'Start your list',
      band_h: 'Ready when you are.', band_cta: 'Request a quote', home_adh_eyebrow: 'Panda Supply / Adhesive weights',
      my_list: 'My list',
      hero_kicker: 'Montréal · Tire and wheel service supply',
      hero_h1: 'Your workshop.<br><em>Our expertise.</em>',
      hero_sub: 'The essentials for tire and wheel service, together at Panda Supply.',
      cta_browse: 'Explore products', cta_quote: 'Request a quote',
      slide1: 'Guaranteed to ' + M + '30°C', slide2: 'New from Utilnova, Spain', slide3: 'Universal dual-band TPMS',
      stat1: 'Adhesive weights, guaranteed', stat2: 'Products in the catalogue', stat3: 'Exclusive distributor in Canada',
      'new': 'New',
      idx_eyebrow: '01 / Shop by the job', jobs_title: 'What are you working on today?',
      cat_eyebrow: '02 / Catalogue', cat_h2: 'The right equipment.',
      cat_sub: 'Explore. Select. Let’s discuss your order.',
      search_ph: 'Search products', all_brands: 'All brands', all_cats: 'All', show_all: 'Show all',
      n_products: '{n} products', n_product: '{n} product',
      empty: 'Nothing matches that search. Try fewer words, or send us a message and we will find it.',
      details: 'Details', add: 'Add to list', in_list: 'In your list', add_list: 'Add to my list',
      spain: 'Spain',
      util_h2: 'Speedplates.<br>Wheel centering,<br><em>reimagined.</em>',
      util_p: 'A wheel centering system for balancers. See it in action.',
      util_watch: 'Watch the demonstration', util_more: 'More from Utilnova',
      util_dist: 'Utilnova is a Spanish brand. Panda Supply is its exclusive Canadian distributor.',
      cold_kicker: 'Panda Supply / Adhesive weights',
      cold_h2: 'A hold you can<br><em>count on.</em>',
      cold_p: 'Low temperature adhesive. Guaranteed performance down to ' + M + '30°C.',
      cold_label: 'Outside temperature', cold_spin: 'Run the spin test', cold_shop: 'Shop adhesive weights',
      cold_fine: 'Guarantee applies when weights are applied according to installation instructions.',
      stamp_a: 'Holding at',
      how_eyebrow: '03 / Ordering', how_h2: 'Ordering, simplified.',
      how1_t: 'Build your list', how1_p: 'Search or filter, then add products. Quantities only, we confirm the rest.',
      how2_t: 'Send your request', how2_p: 'Tell us who you are and how to reach you. No email app needed.',
      how3_t: 'We confirm and quote', how3_p: 'You get pricing, pack sizes, compatibility and availability, straight from the people who stock it.',
      quote_kicker: 'Let’s talk about your workshop',
      quote_h2: 'Your next<br>well‑equipped<br><em>workshop.</em>',
      list_title: 'Your list', clear: 'Clear',
      list_empty: 'Nothing here yet. Add products from the catalogue, or just send us a message.',
      direct_phone: 'Call', direct_email: 'Email',
      form_title: 'Request your quote',
      f_shop: 'Shop or company', f_name: 'Your name', f_email: 'Email', f_phone: 'Phone', f_city: 'City',
      optional: '(optional)', f_reply: 'Reply by', f_reply_email: 'Email', f_reply_phone: 'Phone',
      f_msg: 'Anything we should know?', f_msg_ph: 'Machine make and model, pack sizes, timing...',
      send: 'Send my request', sending: 'Sending...',
      quote_fine: 'Pricing, pack sizes, compatibility and availability are confirmed when ordering.',
      err_required: 'Please fill in your shop, name and a valid email.',
      err_send: 'That did not go through. Please try again, or write to us at sales.pandasupplyinc@gmail.com.',
      thanks_h: 'Got it. Thank you.',
      thanks_email: 'We will reply to {v} soon.', thanks_phone: 'We will call you soon on {v}.',
      thanks_phone_missing: 'We will be in touch soon.',
      thanks_again: 'Send another request',
      foot_contact: 'Contact', foot_explore: 'Explore',
      foot_dist: 'Exclusive Canadian distributor of Utilnova · Spain', foot_dl: 'Download catalogue',
      fab_items: 'in your list', fab_cta: 'Request a quote',
      dlg_fine: 'Sizes, pack sizes and compatibility are confirmed when ordering.',
      toast_added: 'Added to your list', toast_view: 'View list',
      qty_for: 'Quantity for {n}', remove: 'Remove', items_lines: '{q} x {n}',
      page_title: 'Panda Supply Montréal | Garage and tire shop supplies'
    },
    fr: {
      skip: 'Passer au contenu',
      ribbon: 'Distributeur exclusif canadien de Utilnova, Espagne',
      nav_catalogue: 'Catalogue', nav_adhesive: 'Masses adhésives', nav_how: 'Comment ça marche', nav_order: 'Commander',
      demo_note: '(Site d\u2019aper\u00e7u : rien n\u2019a r\u00e9ellement \u00e9t\u00e9 envoy\u00e9.)', eb_catalogue: 'Catalogue', eb_order: 'Commande', order_sub: 'Créez une liste, envoyez-la et recevez une soumission confirmée.', eb_util: 'Marque / Espagne',
      util_page_sub: 'Équipement de service pour pneus et roues, d\u2019Espagne. Panda Supply en est le distributeur canadien exclusif.',
      explore_util: 'Explorer Utilnova', explore_adh: 'Voir le test du froid', explore_cat: 'Parcourir le catalogue', start_list: 'Commencer ma liste',
      band_h: 'Prêts quand vous l\u2019êtes.', band_cta: 'Demander une soumission', home_adh_eyebrow: 'Panda Supply / Masses adhésives',
      my_list: 'Ma liste',
      hero_kicker: 'Montréal · Fournitures pour pneus et roues',
      hero_h1: 'Votre atelier.<br><em>Notre métier.</em>',
      hero_sub: 'Les essentiels du service de pneus et roues, réunis chez Panda Supply.',
      cta_browse: 'Explorer les produits', cta_quote: 'Demander une soumission',
      slide1: 'Garanties jusqu’à ' + M + '30 °C', slide2: 'Nouveau chez Utilnova, Espagne', slide3: 'TPMS universel à double bande',
      stat1: 'Masses adhésives, garanties', stat2: 'Produits au catalogue', stat3: 'Distributeur exclusif au Canada',
      'new': 'Nouveau',
      idx_eyebrow: '01 / Magasiner selon le travail', jobs_title: 'Sur quoi travaillez-vous aujourd’hui ?',
      cat_eyebrow: '02 / Catalogue', cat_h2: 'Le bon matériel.',
      cat_sub: 'Explorez. Sélectionnez. Parlons de votre commande.',
      search_ph: 'Rechercher un produit', all_brands: 'Toutes les marques', all_cats: 'Tout', show_all: 'Tout afficher',
      n_products: '{n} produits', n_product: '{n} produit',
      empty: 'Aucun résultat. Essayez moins de mots, ou écrivez-nous et nous le trouverons.',
      details: 'Détails', add: 'Ajouter à la liste', in_list: 'Dans votre liste', add_list: 'Ajouter à ma liste',
      spain: 'Espagne',
      util_h2: 'Speedplates.<br>Le centrage.<br><em>Réinventé.</em>',
      util_p: 'Un système de centrage pour équilibreuses. Découvrez-le en action.',
      util_watch: 'Voir la démonstration', util_more: 'Plus de Utilnova',
      util_dist: 'Utilnova est une marque espagnole. Panda Supply en est le distributeur exclusif au Canada.',
      cold_kicker: 'Panda Supply / Masses autocollantes',
      cold_h2: 'Une tenue à<br><em>toute épreuve.</em>',
      cold_p: 'Adhésif basse température. Performance garantie jusqu’à ' + M + '30 °C.',
      cold_label: 'Température extérieure', cold_spin: 'Lancer le test de rotation', cold_shop: 'Voir les masses adhésives',
      cold_fine: 'Garantie applicable lorsque les masses sont posées selon les instructions.',
      stamp_a: 'Tient à',
      how_eyebrow: '03 / Commande', how_h2: 'Commander, simplement.',
      how1_t: 'Préparez votre liste', how1_p: 'Cherchez ou filtrez, puis ajoutez des produits. Les quantités suffisent, nous confirmons le reste.',
      how2_t: 'Envoyez votre demande', how2_p: 'Dites-nous qui vous êtes et comment vous joindre. Aucune application courriel requise.',
      how3_t: 'Nous confirmons et soumissionnons', how3_p: 'Vous recevez prix, formats, compatibilité et disponibilité, directement de ceux qui les ont en stock.',
      quote_kicker: 'Parlons de votre atelier',
      quote_h2: 'Votre prochain<br>atelier bien<br><em>équipé.</em>',
      list_title: 'Votre liste', clear: 'Vider',
      list_empty: 'Rien pour l’instant. Ajoutez des produits du catalogue, ou écrivez-nous simplement.',
      direct_phone: 'Téléphone', direct_email: 'Courriel',
      form_title: 'Demandez votre soumission',
      f_shop: 'Atelier ou entreprise', f_name: 'Votre nom', f_email: 'Courriel', f_phone: 'Téléphone', f_city: 'Ville',
      optional: '(facultatif)', f_reply: 'Répondre par', f_reply_email: 'Courriel', f_reply_phone: 'Téléphone',
      f_msg: 'Quelque chose à nous dire ?', f_msg_ph: 'Marque et modèle de machine, formats, échéancier...',
      send: 'Envoyer ma demande', sending: 'Envoi...',
      quote_fine: 'Prix, formats, compatibilité et disponibilité sont confirmés lors de la commande.',
      err_required: 'Veuillez indiquer votre atelier, votre nom et un courriel valide.',
      err_send: 'L’envoi n’a pas fonctionné. Réessayez, ou écrivez-nous à sales.pandasupplyinc@gmail.com.',
      thanks_h: 'Bien reçu. Merci.',
      thanks_email: 'Nous répondrons à {v} bientôt.', thanks_phone: 'Nous vous appellerons bientôt au {v}.',
      thanks_phone_missing: 'Nous communiquerons avec vous bientôt.',
      thanks_again: 'Envoyer une autre demande',
      foot_contact: 'Contact', foot_explore: 'Explorer',
      foot_dist: 'Distributeur exclusif canadien de Utilnova · Espagne', foot_dl: 'Télécharger le catalogue',
      fab_items: 'dans votre liste', fab_cta: 'Demander une soumission',
      dlg_fine: 'Formats, quantités par emballage et compatibilité sont confirmés lors de la commande.',
      toast_added: 'Ajouté à votre liste', toast_view: 'Voir la liste',
      qty_for: 'Quantité pour {n}', remove: 'Retirer', items_lines: '{q} x {n}',
      page_title: 'Panda Supply Montréal | Fournitures pour garages et ateliers de pneus'
    }
  };

  var $ = function (s, r) { return (r || document).querySelector(s) || document.createElement('div'); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var PRODUCTS = window.PS_PRODUCTS, CATS = window.PS_CATS, JOBS = window.PS_JOBS;
  var byId = {}; PRODUCTS.forEach(function (p) { byId[p.id] = p; });
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var JOB_IMG = { balance: 'adhesive', flat: 'repairset', mount: 'quickchange', tpms: 'u1', lug: 'spline', stock: 'lube' };

  function fmt(s, o) { return s.replace(/\{(\w+)\}/g, function (_, k) { return o[k]; }); }
  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  var lang = 'en';
  var state = { q: '', brand: 'all', cats: [] };
  var list = {};
  try { list = JSON.parse(safeGet('ps_list') || '{}') || {}; } catch (e) { list = {}; }
  Object.keys(list).forEach(function (k) { if (!byId[k]) delete list[k]; });

  function t(k) { return (T[lang] && T[lang][k] != null) ? T[lang][k] : (T.en[k] || k); }
  function pname(p) { return p[lang][0]; }
  function pdesc(p) { return p[lang][1]; }
  function brandName(p) { return p.brand === 'panda' ? 'Panda Supply' : 'Utilnova'; }

  /* ---------- language ---------- */
  function detectLang() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'fr' || q === 'en') return q;
    var s = safeGet('ps_lang');
    if (s === 'fr' || s === 'en') return s;
    return (navigator.language || 'en').toLowerCase().indexOf('fr') === 0 ? 'fr' : 'en';
  }
  function applyLang(l, persist) {
    lang = l;
    document.documentElement.lang = l === 'fr' ? 'fr-CA' : 'en-CA';
    document.title = t('page_title');
    $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    $$('[data-i18n-html]').forEach(function (el) { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
    $$('[data-i18n-ph]').forEach(function (el) { el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph'))); });
    $('#langCur').textContent = l.toUpperCase();
    $$('#langMenu [data-lang]').forEach(function (li) { li.setAttribute('aria-selected', li.dataset.lang === l ? 'true' : 'false'); });
    $('#fLang').value = l;
    if (persist) {
      safeSet('ps_lang', l);
      try { var u = new URL(location.href); u.searchParams.set('lang', l); history.replaceState(null, '', u); } catch (e) {}
    }
    $$('.slide').forEach(function (s) { $('.nm', s).textContent = pname(byId[s.dataset.p]); });
    renderChips(); renderJobs(); renderGrid(); renderRail(); renderList(); setTemp();
    if (dlg.open && dlgId) openDialog(dlgId, true);
  }
  var langBtn = $('#langBtn'), langMenu = $('#langMenu');
  function toggleLang(open) { var o = open == null ? langMenu.hidden : open; langMenu.hidden = !o; langBtn.setAttribute('aria-expanded', String(o)); }
  langBtn.addEventListener('click', function (e) { e.stopPropagation(); toggleLang(); });
  $$('#langMenu [data-lang]').forEach(function (li) {
    function pick() { applyLang(li.dataset.lang, true); toggleLang(false); langBtn.focus(); }
    li.addEventListener('click', pick);
    li.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); } });
  });
  document.addEventListener('click', function () { toggleLang(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { toggleLang(false); closeMenu(); } });

  /* ---------- mobile menu ---------- */
  var menu = $('#menu'), menuBtn = $('#menuBtn');
  function closeMenu() { menu.hidden = true; menuBtn.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
  menuBtn.addEventListener('click', function () {
    var open = menu.hidden; menu.hidden = !open; menuBtn.setAttribute('aria-expanded', String(open)); document.body.style.overflow = open ? 'hidden' : '';
  });
  $$('#menu a').forEach(function (a) { a.addEventListener('click', closeMenu); });

  /* ---------- hero slideshow ---------- */
  var slides = $$('.slide'), dots = $$('#dots button'), cur = 0, timer;
  function show(i) {
    if (!slides.length) return;
    cur = (i + slides.length) % slides.length;
    slides.forEach(function (s, k) { s.classList.toggle('on', k === cur); });
    dots.forEach(function (d, k) { d.classList.remove('on'); if (k === cur) { void d.offsetWidth; d.classList.add('on'); } });
  }
  function auto() { clearInterval(timer); if (!reduce && slides.length) timer = setInterval(function () { show(cur + 1); }, 5200); }
  dots.forEach(function (d, k) { d.addEventListener('click', function () { show(k); auto(); }); });
  auto();

  /* ---------- job index ---------- */
  var peek = $('#peek'), peekImg = $('#peek img'), px = 0, py = 0, tx = 0, ty = 0, raf = null;
  function renderJobs() {
    var g = $('#jobsGrid'); g.innerHTML = '';
    JOBS.forEach(function (j, i) {
      var n = PRODUCTS.filter(function (p) { return j.cats.indexOf(p.cat) > -1; }).length;
      var li = document.createElement('li');
      li.innerHTML = '<button class="idx__row" data-job="' + j.id + '"><span class="no">0' + (i + 1) + '</span><span class="lb">' + j[lang] + '</span><span class="ct">' + fmt(n === 1 ? t('n_product') : t('n_products'), { n: n }) + '</span><span class="ar" aria-hidden="true">→</span></button>';
      var b = $('button', li);
      b.addEventListener('click', function () {
        location.href = 'catalogue.html?cat=' + j.cats.join(',');
      });
      b.addEventListener('mouseenter', function () { peekImg.src = 'img/' + JOB_IMG[j.id] + '.webp'; peek.classList.add('on'); });
      b.addEventListener('mouseleave', function () { peek.classList.remove('on'); });
      g.appendChild(li);
    });
  }
  function loopPeek() {
    px += (tx - px) * .14; py += (ty - py) * .14;
    peek.style.transform = 'translate3d(' + (px + 28) + 'px,' + (py - 150) + 'px,0)';
    raf = requestAnimationFrame(loopPeek);
  }
  if (!reduce && window.matchMedia('(hover:hover)').matches) {
    window.addEventListener('pointermove', function (e) { tx = e.clientX; ty = e.clientY; if (!raf) loopPeek(); }, { passive: true });
  }

  /* ---------- chips, rail ---------- */
  function renderChips() {
    var box = $('#chips'); box.innerHTML = '';
    function chip(label, key) {
      var b = document.createElement('button'); b.textContent = label; b.dataset.cat = key;
      var on = key === 'all' ? state.cats.length === 0 : state.cats.indexOf(key) > -1;
      if (on) b.classList.add('on'); b.setAttribute('aria-pressed', on);
      b.addEventListener('click', function () {
        if (key === 'all') state.cats = []; else state.cats = (state.cats.length === 1 && state.cats[0] === key) ? [] : [key];
        renderChips(); renderGrid();
      });
      box.appendChild(b);
    }
    chip(t('all_cats'), 'all');
    Object.keys(CATS).forEach(function (k) { chip(CATS[k][lang], k); });
  }
  function renderRail() {
    var r = $('#utilRail'); r.innerHTML = '';
    PRODUCTS.filter(function (p) { return p.brand === 'utilnova' && p.id !== 'speedplates'; }).forEach(function (p) {
      var b = document.createElement('button'); b.className = 'rail__item';
      b.innerHTML = '<span class="im"><img src="img/' + p.img + '.webp" alt="" loading="lazy"></span><span class="t">' + esc(pname(p)) + '</span>';
      b.addEventListener('click', function () { openDialog(p.id); });
      r.appendChild(b);
    });
  }

  /* ---------- grid ---------- */
  function syncBrand() { $$('.seg button').forEach(function (b) { b.classList.toggle('on', b.dataset.brand === state.brand); }); }
  function matches(p) {
    if (state.brand !== 'all' && p.brand !== state.brand) return false;
    if (state.cats.length && state.cats.indexOf(p.cat) < 0) return false;
    if (state.q) {
      var hay = norm([p.en[0], p.en[1], p.fr[0], p.fr[1], CATS[p.cat].en, CATS[p.cat].fr, p.brand].join(' '));
      var words = norm(state.q).split(/\s+/).filter(Boolean);
      for (var i = 0; i < words.length; i++) if (hay.indexOf(words[i]) < 0) return false;
    }
    return true;
  }
  function renderGrid() {
    var grid = $('#grid'); grid.innerHTML = '';
    var items = PRODUCTS.filter(matches);
    items.forEach(function (p, i) {
      var qty = list[p.id] || 0;
      var el = document.createElement('article');
      el.className = 'card' + (qty ? ' card--in' : '');
      el.style.setProperty('--d', Math.min(i, 11) * 45 + 'ms');
      el.innerHTML =
        '<div class="card__img" role="group">' +
          '<button class="card__img-open" data-open="' + p.id + '" aria-label="' + t('details') + ': ' + esc(pname(p)) + '" style="position:absolute;inset:0;background:none;border:0;padding:0;z-index:1"></button>' +
          '<img src="img/' + p.img + '.webp" alt="" loading="lazy" width="360" height="360" style="pointer-events:none">' +
          '<span class="tag">' + brandName(p) + '</span>' + (p.isNew ? '<span class="new">' + t('new') + '</span>' : '') +
        '</div>' +
        '<div class="card__body"><div><h3 data-open="' + p.id + '">' + esc(pname(p)) + '</h3><p>' + CATS[p.cat][lang] + '</p></div></div>' +
        '<button class="card__add" data-add="' + p.id + '">' + (qty ? t('in_list') + ' · ' + qty + ' +' : '+ ' + t('add')) + '</button>';
      grid.appendChild(el);
    });
    $('#count').textContent = fmt(items.length === 1 ? t('n_product') : t('n_products'), { n: items.length });
    $('#empty').hidden = items.length > 0;
    $('#reset').hidden = !(state.q || state.brand !== 'all' || state.cats.length);
    $('#statCount').textContent = PRODUCTS.length;
  }
  $('#grid').addEventListener('click', function (e) {
    var a = e.target.closest('[data-add]'); if (a) { addItem(a.dataset.add, 1, true); return; }
    var o = e.target.closest('[data-open]'); if (o) openDialog(o.dataset.open);
  });
  $('#q').addEventListener('input', function (e) {
    state.q = e.target.value.trim();
    if (state.q) { state.cats = []; state.brand = 'all'; syncBrand(); renderChips(); }
    renderGrid();
  });
  $$('.seg button').forEach(function (b) { b.addEventListener('click', function () { state.brand = b.dataset.brand; syncBrand(); renderGrid(); }); });
  $('#reset').addEventListener('click', function () { state.q = ''; state.brand = 'all'; state.cats = []; $('#q').value = ''; syncBrand(); renderChips(); renderGrid(); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest('.util [data-add]'); if (a) addItem(a.dataset.add, 1, true);
    var j = e.target.closest('[data-jump]');
    if (j) { state.cats = [j.dataset.jump]; state.brand = 'all'; state.q = ''; $('#q').value = ''; syncBrand(); renderChips(); renderGrid(); $('#catalogue').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); }
  });

  /* ---------- list ---------- */
  function saveList() { safeSet('ps_list', JSON.stringify(list)); }
  function totalItems() { return Object.keys(list).reduce(function (s, k) { return s + list[k]; }, 0); }
  function addItem(id, n, toast) {
    list[id] = Math.min(999, (list[id] || 0) + n);
    saveList(); renderList(); renderGrid();
    if (toast) showToast(pname(byId[id]));
    var c = $('#listCount'); c.classList.add('bump'); setTimeout(function () { c.classList.remove('bump'); }, 500);
  }
  function setQty(id, q) { if (q <= 0) delete list[id]; else list[id] = Math.min(999, q); saveList(); renderList(); renderGrid(); }
  function renderList() {
    var ul = $('#listItems'); ul.innerHTML = '';
    var ids = Object.keys(list);
    ids.forEach(function (id) {
      var p = byId[id]; var li = document.createElement('li');
      li.innerHTML = '<img src="img/' + p.img + '.webp" alt="" width="54" height="54"><span class="nm">' + esc(pname(p)) + '</span>' +
        '<div class="qty qty--sm" role="group" aria-label="' + esc(fmt(t('qty_for'), { n: pname(p) })) + '"><button data-q="-1" aria-label="-">−</button><output>' + list[id] + '</output><button data-q="1" aria-label="+">+</button></div>' +
        '<button class="rm" data-rm="1" aria-label="' + t('remove') + '">×</button>';
      li.dataset.id = id; ul.appendChild(li);
    });
    $('#listEmpty').hidden = ids.length > 0; $('#clearList').hidden = ids.length === 0;
    var n = totalItems(); $('#listCount').textContent = n; $('#fabCount').textContent = n;
    $('#fItems').value = ids.map(function (id) { return fmt(t('items_lines'), { q: list[id], n: byId[id].en[0] + ' (' + id + ')' }); }).join('\n');
    updateFab();
  }
  $('#listItems').addEventListener('click', function (e) {
    var li = e.target.closest('li'); if (!li) return; var id = li.dataset.id;
    var q = e.target.closest('[data-q]'); if (q) setQty(id, (list[id] || 0) + parseInt(q.dataset.q, 10));
    if (e.target.closest('[data-rm]')) setQty(id, 0);
  });
  $('#clearList').addEventListener('click', function () { list = {}; saveList(); renderList(); renderGrid(); });

  var quoteVisible = false;
  function updateFab() { $('#fab').hidden = !(totalItems() > 0 && !quoteVisible); }
  new IntersectionObserver(function (es) { quoteVisible = es[0].isIntersecting; updateFab(); }, { threshold: 0.15 }).observe($('#quote'));

  var toastTimer;
  function showToast(name) {
    var el = $('#toast');
    el.innerHTML = '<span>' + t('toast_added') + '<small>' + esc(name) + '</small></span><a href="quote.html">' + t('toast_view') + '</a>';
    el.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(function () { el.classList.remove('show'); }, 3200);
  }

  /* ---------- product dialog ---------- */
  var dlg = $('#dlg'), dlgId = null, dQty = 1;
  function openDialog(id, keep) {
    var p = byId[id]; dlgId = id; if (!keep) dQty = 1;
    $('#dImg').src = 'img/' + p.img + '.webp'; $('#dImg').alt = pname(p);
    $('#dName').textContent = pname(p); $('#dDesc').textContent = pdesc(p);
    $('#dBrand').textContent = brandName(p); $('#dCat').textContent = CATS[p.cat][lang];
    $('#dQty').textContent = dQty;
    var v = $('#dVideo'); if (p.video) { v.href = p.video; v.hidden = false; } else v.hidden = true;
    if (!dlg.open) { if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', ''); }
  }
  $('#dMinus').addEventListener('click', function () { dQty = Math.max(1, dQty - 1); $('#dQty').textContent = dQty; });
  $('#dPlus').addEventListener('click', function () { dQty = Math.min(99, dQty + 1); $('#dQty').textContent = dQty; });
  $('#dAdd').addEventListener('click', function () { addItem(dlgId, dQty, true); dlg.close(); });
  $('#dlgX').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', function () { dlgId = null; });

  /* ---------- form ---------- */
  var DEMO = /(^|\.)github\.io$/.test(location.hostname); /* GitHub Pages preview: no form backend there */
  var form = $('#quoteForm');
  function validEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var err = $('#formErr'); err.hidden = true;
    var fd = new FormData(form);
    if (!fd.get('company').trim() || !fd.get('name').trim() || !validEmail((fd.get('email') || '').trim())) {
      err.textContent = t('err_required'); err.hidden = false;
      var bad = $$('input[required]', form).filter(function (i) { return !i.value.trim() || (i.type === 'email' && !validEmail(i.value.trim())); })[0];
      if (bad) bad.focus(); return;
    }
    var btn = $('#send'); btn.disabled = true; btn.classList.add('busy'); btn.firstElementChild.textContent = t('sending');
    if (DEMO) { setTimeout(function () { showThanks(fd, true); btn.disabled = false; btn.classList.remove('busy'); btn.firstElementChild.textContent = t('send'); }, 600); return; }
    fetch(location.pathname, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(fd).toString() })
      .then(function (r) { if (!r.ok) throw new Error('x'); showThanks(fd); })
      .catch(function () { err.textContent = t('err_send'); err.hidden = false; })
      .then(function () { btn.disabled = false; btn.classList.remove('busy'); btn.firstElementChild.textContent = t('send'); });
  });
  function showThanks(fd, demo) {
    var replyBy = fd.get('reply_by'), phone = (fd.get('phone') || '').trim();
    var msg = (replyBy === 'phone' && phone) ? fmt(t('thanks_phone'), { v: phone }) : (replyBy === 'phone' ? t('thanks_phone_missing') : fmt(t('thanks_email'), { v: fd.get('email') }));
    $('#thanksP').textContent = msg + (demo ? ' ' + t('demo_note') : '');
    form.hidden = true; var th = $('#thanks'); th.hidden = false; th.focus();
    form.reset(); list = {}; saveList(); renderList(); renderGrid();
  }
  $('#again').addEventListener('click', function () { $('#thanks').hidden = true; form.hidden = false; form.querySelector('input[name=company]').focus(); });

  /* ---------- scroll state, reveal ---------- */
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () { document.body.classList.toggle('scrolled', window.scrollY > 24); ticking = false; });
  }, { passive: true });

  var rev = $$('.pagehead, .teaser, .band__inner, .idx .sec-head, .idx__list, .cat .sec-head, .util__inner, .util__railwrap, .cold__inner, .how .sec-head, .steps li, .quote__side, .quote__form, .facts');
  rev.forEach(function (n) { n.classList.add('reveal'); });
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { threshold: 0.1 });
    rev.forEach(function (n) { io.observe(n); });
  } else rev.forEach(function (n) { n.classList.add('in'); });

  /* ---------- the cold test ---------- */
  var temp = $('#temp'), cold = $('#cold');
  function setTemp() {
    var v = parseInt(temp.value, 10), k = (25 - v) / 55;
    var s = (v < 0 ? M : '') + Math.abs(v) + (lang === 'fr' ? ' °C' : '°C');
    $('#tempOut').textContent = s; $('#stampT').textContent = s;
    $('#frost').style.opacity = String(Math.max(0, (k - .2) * 1.2));
    cold.style.setProperty('--k', k.toFixed(3));
    temp.style.setProperty('--p', ((v + 30) / 55 * 100) + '%');
  }
  temp.addEventListener('input', setTemp);
  $('#spin').addEventListener('click', function () {
    var w = $('#wheelSpin'), tag = $('.cold__tag'), art = $('#coldArt');
    if (w.animate && !reduce) {
      art.classList.add('shaking');
      w.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(1440deg)' }], { duration: 3000, easing: 'cubic-bezier(.15,.7,.15,1)' }).onfinish = function () { art.classList.remove('shaking'); };
    }
    tag.classList.remove('pop'); void tag.offsetWidth; tag.classList.add('pop');
  });

  /* ---------- scroll effects: parallax, counters, marquee, progress ---------- */
  (function () {
    var bar = document.createElement('div'); bar.className = 'progress'; document.body.appendChild(bar);
    var plx = $$('[data-plx]'), marq = document.getElementById('marq'), wheel = document.querySelector('.cold__art .wheel'), ticking2 = false;
    function frame() {
      ticking2 = false;
      var vh = window.innerHeight, sy = window.scrollY, max = document.documentElement.scrollHeight - vh;
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, sy / max) : 0).toFixed(4) + ')';
      if (reduce) return;
      plx.forEach(function (el) {
        var host = el.parentElement.getBoundingClientRect();
        if (host.bottom < -300 || host.top > vh + 300) return;
        var c = host.top + host.height / 2 - vh / 2;
        el.style.transform = 'translate3d(0,' + (c * parseFloat(el.getAttribute('data-plx'))).toFixed(1) + 'px,0)';
      });
      if (marq) {
        var r = marq.parentElement.getBoundingClientRect();
        marq.style.transform = 'translate3d(' + (-(r.top - vh) * 0.35 - 200).toFixed(1) + 'px,0,0)';
      }
      if (wheel) wheel.style.transform = 'rotate(' + (sy * 0.25).toFixed(1) + 'deg)';
    }
    window.addEventListener('scroll', function () { if (!ticking2) { ticking2 = true; requestAnimationFrame(frame); } }, { passive: true });
    window.addEventListener('resize', frame); frame();
    /* counters */
    var cs = $$('[data-count]');
    if ('IntersectionObserver' in window && !reduce) {
      var co = new IntersectionObserver(function (es) {
        es.forEach(function (x) {
          if (!x.isIntersecting) return; co.unobserve(x.target);
          var el = x.target, end = parseInt(el.getAttribute('data-count'), 10), pre = el.getAttribute('data-pre') || '', suf = el.getAttribute('data-suf') || '', t0 = null;
          function step(ts) { if (t0 === null) t0 = ts; var k = Math.min(1, (ts - t0) / 1400), e = 1 - Math.pow(1 - k, 3); el.textContent = pre + Math.round(end * e) + suf; if (k < 1) requestAnimationFrame(step); }
          requestAnimationFrame(step);
        });
      }, { threshold: 0.6 });
      cs.forEach(function (n) { co.observe(n); });
    }
  })();

  (function () {
    var sp = new URLSearchParams(location.search);
    var c = sp.get('cat'), b = sp.get('brand');
    if (c) state.cats = c.split(',').filter(function (k) { return CATS[k]; });
    if (b === 'panda' || b === 'utilnova') state.brand = b;
    syncBrand();
  })();
  applyLang(detectLang(), false);
})();
