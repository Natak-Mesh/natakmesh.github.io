/* Mobile menu for the new layout (_layouts/page.html). Old pages use main.js. */
(function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;

  function setOpen(open, returnFocus) {
    btn.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
    if (!open && returnFocus) btn.focus();
  }

  btn.addEventListener('click', function () {
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) setOpen(false, true);
  });

  // Close on a click outside the header.
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('open') && !e.target.closest('.site-header')) setOpen(false);
  });

  // Reset when the window grows past the mobile breakpoint.
  var wide = window.matchMedia('(min-width: 54.0625rem)');
  var reset = function (e) { if (e.matches) setOpen(false); };
  if (wide.addEventListener) wide.addEventListener('change', reset);
  else if (wide.addListener) wide.addListener(reset);
})();
