/* ============ NEXA shared app logic (used on every page) ============ */
var WHATSAPP_NUMBER = '8801951467502';

var ART = {
  phone: '<svg viewBox="0 0 100 100" fill="none" stroke="#F5F5F0" stroke-width="2.4"><rect x="32" y="10" width="36" height="80" rx="9"/><line x1="32" y1="20" x2="68" y2="20"/><line x1="32" y1="80" x2="68" y2="80"/><circle cx="50" cy="82" r="2.2" fill="#F5F5F0" stroke="none" opacity="0.6"/></svg>',
  adapter: '<svg viewBox="0 0 100 100" fill="none" stroke="#F5F5F0" stroke-width="2.4"><rect x="18" y="34" width="64" height="32" rx="7"/><path d="M53,42 L44,53 L50,53 L46,62 L59,49 L52,49 Z" fill="var(--accent)" stroke="none"/></svg>',
  magsafe: '<svg viewBox="0 0 100 100" fill="none" stroke="#F5F5F0" stroke-width="2.4"><circle cx="50" cy="50" r="24" /><circle cx="50" cy="50" r="9" fill="var(--accent)" stroke="none"/></svg>',
  adapter5w: '<svg viewBox="0 0 100 100" fill="none" stroke="#F5F5F0" stroke-width="2.4"><rect x="30" y="38" width="40" height="24" rx="5"/><path d="M52,44 L46,53 L50,53 L48,58 L56,49 L51,49 Z" fill="var(--accent)" stroke="none"/></svg>',
  cable: '<svg viewBox="0 0 100 100" fill="none" stroke="#F5F5F0" stroke-width="2.4"><path d="M20,50 Q50,30 80,50" /><circle cx="20" cy="50" r="5" fill="var(--accent)" stroke="none"/><circle cx="80" cy="50" r="5" fill="var(--accent)" stroke="none"/></svg>',
  earbuds: '<svg viewBox="0 0 100 100" fill="none" stroke="#F5F5F0" stroke-width="2.4"><rect x="30" y="20" width="14" height="26" rx="7"/><path d="M37,46 L37,58 Q37,66 30,68"/><circle cx="27" cy="70" r="4" fill="var(--accent)" stroke="none"/><rect x="56" y="20" width="14" height="26" rx="7"/><path d="M63,46 L63,58 Q63,66 70,68"/><circle cx="73" cy="70" r="4" fill="var(--accent)" stroke="none"/></svg>',
  speaker: '<svg viewBox="0 0 100 100" fill="none" stroke="#F5F5F0" stroke-width="2.4"><rect x="25" y="18" width="50" height="64" rx="10"/><circle cx="50" cy="40" r="9"/><circle cx="50" cy="65" r="13"/><circle cx="50" cy="65" r="5" fill="var(--accent)" stroke="none"/></svg>',
  smartwatch: '<svg viewBox="0 0 100 100" fill="none" stroke="#F5F5F0" stroke-width="2.4"><rect x="34" y="30" width="32" height="40" rx="8"/><rect x="42" y="16" width="16" height="16" rx="3"/><rect x="42" y="68" width="16" height="16" rx="3"/><circle cx="50" cy="50" r="3" fill="var(--accent)" stroke="none"/></svg>',
  powerbank: '<svg viewBox="0 0 100 100" fill="none" stroke="#F5F5F0" stroke-width="2.4"><rect x="30" y="18" width="40" height="64" rx="8"/><path d="M55,32 L44,50 L50,50 L46,66 L62,44 L54,44 Z" fill="var(--accent)" stroke="none"/></svg>',
  phonecase: '<svg viewBox="0 0 100 100" fill="none" stroke="#F5F5F0" stroke-width="2.4"><rect x="28" y="10" width="44" height="80" rx="13"/><circle cx="63" cy="24" r="4"/><rect x="34" y="16" width="24" height="48" rx="4" fill="#F5F5F0" stroke="none" opacity="0.18"/></svg>',
  screenguard: '<svg viewBox="0 0 100 100" fill="none" stroke="#F5F5F0" stroke-width="2.4"><rect x="30" y="12" width="40" height="76" rx="10"/><rect x="36" y="18" width="28" height="60" rx="3" fill="#F5F5F0" stroke="none" opacity="0.14"/><line x1="40" y1="30" x2="60" y2="30" stroke="var(--accent)" stroke-width="2" opacity="0.7"/></svg>'
};

var CATEGORY_LABELS = { phones: 'Mobile Phones', power: 'Apple Chargers', audio: 'Audio', wearables: 'Wearables', accessories: 'Accessories' };

var CATEGORY_DESCRIPTIONS = {
  phones: 'Used iPhones, individually checked before listing. Battery health and cosmetic condition confirmed over chat before you pay.',
  power: 'Genuine Apple charging gear — the exact adapter, MagSafe puck, or cable your iPhone shipped with.',
  audio: 'Everyday audio gear to pair with your phone — earbuds and speakers for daily use.',
  wearables: 'Wrist-worn companions for your phone, with size variants where it matters.',
  accessories: 'The small stuff that protects and powers your phone day to day.'
};

var PRODUCTS = [
  { id:'iphone11', name:'iPhone 11 (Used)', category:'phones', badge:'Used', art:'phone',
    variants:[ {label:'64GB', price:null}, {label:'128GB', price:27000}, {label:'256GB', price:null} ] },
  { id:'iphone12', name:'iPhone 12 (Used)', category:'phones', badge:'Used', art:'phone',
    variants:[ {label:'64GB', price:null}, {label:'128GB', price:32000}, {label:'256GB', price:null} ] },
  { id:'iphone13', name:'iPhone 13 (Used)', category:'phones', badge:'Best seller', art:'phone',
    variants:[ {label:'128GB', price:34900}, {label:'256GB', price:null} ] },
  { id:'iphone13pro', name:'iPhone 13 Pro (Used)', category:'phones', badge:'Used', art:'phone',
    variants:[ {label:'128GB', price:52500}, {label:'256GB', price:null} ] },
  { id:'iphone14', name:'iPhone 14 (Used)', category:'phones', badge:'Used', art:'phone',
    variants:[ {label:'128GB', price:44999}, {label:'256GB', price:null} ] },
  { id:'iphone14pro-usa', name:'iPhone 14 Pro, USA Variant', category:'phones', badge:'USA', art:'phone',
    variants:[ {label:'128GB', price:62999}, {label:'256GB', price:65999} ] },
  { id:'charger20w', name:'Apple 20W USB-C Power Adapter', category:'power', badge:'New', art:'adapter',
    variants:[ {label:'Standard', price:2800} ] },
  { id:'magsafe', name:'Apple MagSafe Charger', category:'power', badge:'New', art:'magsafe',
    variants:[ {label:'Standard', price:2500} ] },
  { id:'charger5w', name:'Apple 5W USB Power Adapter', category:'power', badge:'New', art:'adapter5w',
    variants:[ {label:'Standard', price:1200} ] },
  { id:'cable', name:'Apple USB-C to Lightning Cable, 1m', category:'power', badge:'New', art:'cable',
    variants:[ {label:'1m', price:990} ] },
  { id:'earbuds', name:'Wireless Earbuds', category:'audio', badge:'New', art:'earbuds',
    variants:[ {label:'Standard', price:null} ] },
  { id:'speaker', name:'Bluetooth Speaker', category:'audio', badge:'New', art:'speaker',
    variants:[ {label:'Standard', price:null} ] },
  { id:'smartwatch', name:'Smart Watch', category:'wearables', badge:'New', art:'smartwatch',
    variants:[ {label:'42mm', price:null}, {label:'46mm', price:null} ] },
  { id:'powerbank', name:'10,000mAh Power Bank', category:'accessories', badge:'New', art:'powerbank',
    variants:[ {label:'Standard', price:null} ] },
  { id:'phonecase', name:'Silicone Phone Case', category:'accessories', badge:'New', art:'phonecase',
    variants:[ {label:'iPhone 13', price:null}, {label:'iPhone 14', price:null} ] },
  { id:'screenguard', name:'Tempered Glass Screen Guard', category:'accessories', badge:'New', art:'screenguard',
    variants:[ {label:'Standard', price:null} ] }
];

function getProduct(id){ return PRODUCTS.find(function(p){ return p.id === id; }); }
function formatPrice(p){ return (p === null || p === undefined) ? 'TBA' : ('\u09F3' + p.toLocaleString('en-US')); }

/* ================= page transition (game-style wipe) ================= */
(function setupPageTransition(){
  var overlay = document.getElementById('pageTransition');
  if(!overlay) return;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if(sessionStorage.getItem('nexa_transitioning') === '1'){
    sessionStorage.removeItem('nexa_transitioning');
    overlay.classList.add('cover');
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){ overlay.classList.add('reveal'); overlay.classList.remove('cover'); });
    });
  }

  document.addEventListener('click', function(e){
    var link = e.target.closest('a[href]');
    if(!link) return;
    var href = link.getAttribute('href');
    if(!href || href.charAt(0) === '#' || link.target === '_blank' || href.indexOf('http') === 0 || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0 || href.indexOf('wa.me') !== -1) return;
    if(href.indexOf('.html') === -1) return;
    e.preventDefault();
    if(reduceMotion){ window.location.href = href; return; }
    overlay.classList.remove('reveal');
    overlay.classList.add('cover');
    sessionStorage.setItem('nexa_transitioning', '1');
    setTimeout(function(){ window.location.href = href; }, 480);
  });
})();

/* ================= cart ================= */
var cart = [];
try{ cart = JSON.parse(localStorage.getItem('nexa_cart') || '[]'); }catch(e){ cart = []; }

function saveCart(){ try{ localStorage.setItem('nexa_cart', JSON.stringify(cart)); }catch(e){} }

function addToCart(productId, name, variantLabel, price){
  var existing = cart.find(function(i){ return i.productId === productId && i.variantLabel === variantLabel; });
  if(existing){ existing.qty += 1; }
  else{ cart.push({ productId: productId, name: name, variantLabel: variantLabel, price: price, qty: 1 }); }
  saveCart();
  renderCart();
}
function changeQty(index, delta){
  cart[index].qty += delta;
  if(cart[index].qty <= 0){ cart.splice(index, 1); }
  saveCart();
  renderCart();
}
function removeItem(index){
  cart.splice(index, 1);
  saveCart();
  renderCart();
}
function cartTotal(){ return cart.reduce(function(sum, i){ return sum + i.price * i.qty; }, 0); }

function renderCart(){
  var cartItemsEl = document.getElementById('cartItems');
  var cartSubtotalEl = document.getElementById('cartSubtotal');
  var cartCountEl = document.getElementById('cartCount');
  var checkoutWhatsappEl = document.getElementById('checkoutWhatsapp');
  if(!cartItemsEl) return;

  var count = cart.reduce(function(n, i){ return n + i.qty; }, 0);
  cartCountEl.textContent = count;
  cartCountEl.classList.toggle('show', count > 0);

  if(cart.length === 0){
    cartItemsEl.innerHTML = '<p class="cart-empty">Your cart is empty. Add something from the shelf.</p>';
  } else {
    cartItemsEl.innerHTML = cart.map(function(item, i){
      return '<div class="cart-item">' +
        '<div class="cart-item-info">' +
          '<h4>' + item.name + '</h4>' +
          '<div class="variant">' + item.variantLabel + '</div>' +
          '<div class="qty-stepper">' +
            '<button data-action="dec" data-idx="' + i + '" aria-label="Decrease quantity">&minus;</button>' +
            '<span>' + item.qty + '</span>' +
            '<button data-action="inc" data-idx="' + i + '" aria-label="Increase quantity">+</button>' +
          '</div>' +
          '<div class="line-price mono">\u09F3' + (item.price * item.qty).toLocaleString('en-US') + '</div>' +
        '</div>' +
        '<button class="cart-item-remove" data-action="remove" data-idx="' + i + '" aria-label="Remove item">&times;</button>' +
      '</div>';
    }).join('');
  }

  var total = cartTotal();
  cartSubtotalEl.textContent = '\u09F3' + total.toLocaleString('en-US');

  var lines = cart.map(function(i){ return '- ' + i.name + ' (' + i.variantLabel + ') x' + i.qty + ' \u2014 \u09F3' + (i.price*i.qty).toLocaleString('en-US'); }).join('\n');
  var message = cart.length
    ? ('Hi! I\'d like to order:\n' + lines + '\n\nTotal: \u09F3' + total.toLocaleString('en-US') + '\n\nPlease confirm availability, delivery time, and bKash number.')
    : 'Hi! I\'d like to place an order.';
  checkoutWhatsappEl.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
  window.__nexaCartMessage = message;
}

function wireCartDrawer(){
  var cartItemsEl = document.getElementById('cartItems');
  if(!cartItemsEl) return;
  cartItemsEl.addEventListener('click', function(e){
    var btn = e.target.closest('button[data-action]');
    if(!btn) return;
    var idx = parseInt(btn.dataset.idx, 10);
    if(btn.dataset.action === 'inc') changeQty(idx, 1);
    else if(btn.dataset.action === 'dec') changeQty(idx, -1);
    else if(btn.dataset.action === 'remove') removeItem(idx);
  });

  var cartDrawer = document.getElementById('cartDrawer');
  var cartOverlay = document.getElementById('cartOverlay');
  var cartToggle = document.getElementById('cartToggle');
  var cartClose = document.getElementById('cartClose');

  function openCart(){
    cartDrawer.classList.add('open'); cartOverlay.classList.add('open');
    cartDrawer.setAttribute('aria-hidden', 'false'); cartToggle.setAttribute('aria-expanded', 'true');
  }
  function closeCart(){
    cartDrawer.classList.remove('open'); cartOverlay.classList.remove('open');
    cartDrawer.setAttribute('aria-hidden', 'true'); cartToggle.setAttribute('aria-expanded', 'false');
  }
  cartToggle.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  var fbBtn = document.getElementById('checkoutFacebook');
  if(fbBtn){
    fbBtn.addEventListener('click', function(){
      var msg = window.__nexaCartMessage || '';
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(msg).then(function(){ showToast('Order copied — paste it into Facebook chat'); })
          .catch(function(){ showToast('Could not copy — try WhatsApp checkout instead'); });
      } else { showToast('Could not copy — try WhatsApp checkout instead'); }
    });
  }
}

/* ================= toast ================= */
var toastTimer;
function showToast(text){
  var toast = document.getElementById('toast');
  if(!toast) return;
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ toast.classList.remove('show'); }, 2600);
}

/* ================= product card rendering (shop grid + related) ================= */
function buildProductCard(p, opts){
  opts = opts || {};
  var card = document.createElement('article');
  card.className = 'card reveal';
  card.dataset.cat = p.category;
  card.dataset.id = p.id;

  var multi = p.variants.length > 1;
  var variantSelectHtml = multi
    ? '<select class="variant-select mono" aria-label="Choose variant">' + p.variants.map(function(v,i){ return '<option value="'+i+'">'+v.label+'</option>'; }).join('') + '</select>'
    : '<span class="variant-select mono" style="border:none; background:none; padding:0;">' + p.variants[0].label + '</span>';

  card.innerHTML =
    '<div class="card-media">' +
      '<span class="card-badge">' + p.badge + '</span>' +
      '<div class="shine"></div>' +
      ART[p.art] +
    '</div>' +
    '<div class="card-body">' +
      '<span class="cat">' + CATEGORY_LABELS[p.category] + '</span>' +
      '<h3>' + p.name + '</h3>' +
      variantSelectHtml +
      '<span class="price mono" data-price-display></span>' +
    '</div>' +
    '<div class="view-details">View details &rarr;</div>' +
    '<div class="card-actions">' +
      '<button class="btn btn-solid add-cart-btn"></button>' +
      '<a class="btn btn-outline whatsapp-ask-btn" target="_blank" rel="noopener">Ask</a>' +
    '</div>';

  var select = card.querySelector('.variant-select');
  var priceEl = card.querySelector('[data-price-display]');
  var addBtn = card.querySelector('.add-cart-btn');
  var askLink = card.querySelector('.whatsapp-ask-btn');

  function currentVariantIndex(){ return multi ? parseInt(select.value, 10) : 0; }

  function syncCardState(){
    var v = p.variants[currentVariantIndex()];
    priceEl.textContent = formatPrice(v.price);
    priceEl.classList.toggle('tba', v.price === null);
    addBtn.textContent = (v.price === null) ? 'Message for Price' : 'Add to Cart';
    askLink.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent('Hi! I want to ask about ' + p.name + ' (' + v.label + ').');
  }
  if(multi){ select.addEventListener('change', function(e){ syncCardState(); e.stopPropagation(); }); }
  select.addEventListener('click', function(e){ e.stopPropagation(); });
  syncCardState();

  addBtn.addEventListener('click', function(e){
    e.stopPropagation();
    var v = p.variants[currentVariantIndex()];
    if(v.price === null){ window.open(askLink.href, '_blank', 'noopener'); return; }
    addToCart(p.id, p.name, v.label, v.price);
    showToast('Added ' + p.name + ' (' + v.label + ') to cart');
  });
  askLink.addEventListener('click', function(e){ e.stopPropagation(); });

  card.addEventListener('click', function(){ navigateTo('product.html?id=' + p.id); });

  return card;
}

function navigateTo(href){
  var overlay = document.getElementById('pageTransition');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!overlay || reduceMotion){ window.location.href = href; return; }
  overlay.classList.remove('reveal');
  overlay.classList.add('cover');
  sessionStorage.setItem('nexa_transitioning', '1');
  setTimeout(function(){ window.location.href = href; }, 480);
}

/* ================= motion: cursor glow, magnetic, tilt, reveal, counters ================= */
var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

function setupCursorGlow(){
  if(reduceMotion || isTouch) return;
  var cGlow = document.getElementById('cursor-glow');
  var orbs = document.querySelectorAll('.orb');
  if(!cGlow) return;
  window.addEventListener('mousemove', function(e){
    cGlow.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px) translate(-50%,-50%)';
    var dx = (e.clientX / window.innerWidth - 0.5);
    var dy = (e.clientY / window.innerHeight - 0.5);
    orbs.forEach(function(orb,i){
      var strength = (i+1) * 18;
      orb.style.transform = 'translate(' + (dx*strength) + 'px, ' + (dy*strength) + 'px)';
    });
  }, { passive:true });
}

function setupMagnetic(){
  if(reduceMotion || isTouch) return;
  document.querySelectorAll('.magnetic').forEach(function(btn){
    if(btn.dataset.magBound) return;
    btn.dataset.magBound = '1';
    btn.addEventListener('mousemove', function(e){
      var r = btn.getBoundingClientRect();
      var x = e.clientX - r.left - r.width/2;
      var y = e.clientY - r.top - r.height/2;
      btn.style.transform = 'translate(' + (x*0.25) + 'px, ' + (y*0.35) + 'px)';
    });
    btn.addEventListener('mouseleave', function(){ btn.style.transform = ''; });
  });
}

function attachCardInteractions(){
  if(reduceMotion || isTouch) return;
  document.querySelectorAll('.card, .cat-card, .product-showcase').forEach(function(el){
    if(el.dataset.tiltBound) return;
    el.dataset.tiltBound = '1';
    el.addEventListener('mousemove', function(e){
      var r = el.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width;
      var py = (e.clientY - r.top) / r.height;
      var rx = (py - 0.5) * -8;
      var ry = (px - 0.5) * 8;
      if(!el.classList.contains('product-showcase')){
        el.style.transform = 'perspective(600px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateY(-3px)';
      }
      el.style.setProperty('--mx', (px*100) + '%');
      el.style.setProperty('--my', (py*100) + '%');
    });
    el.addEventListener('mouseleave', function(){ el.style.transform = ''; });
  });
}

var revealIO;
function attachRevealObserver(){
  var revealEls = document.querySelectorAll('.reveal:not(.in)');
  if('IntersectionObserver' in window){
    if(!revealIO){
      revealIO = new IntersectionObserver(function(entries){
        entries.forEach(function(entry, i){
          if(entry.isIntersecting){
            setTimeout(function(){ entry.target.classList.add('in'); }, i * 60);
            revealIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
    }
    revealEls.forEach(function(el){ revealIO.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in'); });
  }
}

function setupCounters(){
  var counters = document.querySelectorAll('.stat .num');
  if(!counters.length) return;
  var countIO = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        var el = entry.target;
        var target = parseInt(el.dataset.count, 10);
        var suffix = el.dataset.suffix || '';
        var dur = reduceMotion ? 0 : 1400;
        var start = performance.now();
        function tick(now){
          var p = dur === 0 ? 1 : Math.min((now - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if(p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        countIO.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(function(el){ countIO.observe(el); });
}

/* ================= boot ================= */
document.addEventListener('DOMContentLoaded', function(){
  wireCartDrawer();
  renderCart();
  setupCursorGlow();
  setupMagnetic();
  setupCounters();
  attachRevealObserver();
  if(typeof pageInit === 'function') pageInit();
  attachCardInteractions();
  attachRevealObserver();
});
