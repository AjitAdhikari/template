const SITE_LOGO_URL = 'images/logo.png';
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuOpen = document.getElementById('menuOpen');
  const menuClose = document.getElementById('menuClose');
  if (!menuBtn) return;
  function setLogo(url) {
    const img = document.getElementById('siteLogo');
    const fallback = document.getElementById('logoFallback');
    if (!img || !fallback) return;
    if (url) {
      img.src = url;
      img.classList.remove('hidden');
      fallback.classList.add('hidden');
    } else {
      img.src = '';
      img.classList.add('hidden');
      fallback.classList.remove('hidden');
    }
  }
  window.setLogo = setLogo;
  try { setLogo(SITE_LOGO_URL); } catch (e) { /* ignore */ }
 menuBtn.addEventListener('click', function () {
  const open = mobileMenu.classList.toggle('hidden');
   menuOpen.classList.toggle('hidden');
 menuClose.classList.toggle('hidden');
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', (!expanded).toString());
  });
});
