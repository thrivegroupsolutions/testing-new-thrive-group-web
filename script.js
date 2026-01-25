document.getElementById("year").textContent = new Date().getFullYear();

/* ✅ CHANGE THESE 2 BEFORE USING LIVE */
const COMPANY_PHONE = "+447000000000";      // with +, no spaces
const COMPANY_WA = "447000000000";          // WhatsApp number without +

/* Update links */
const links = [
  ["topCallBtn", `tel:${COMPANY_PHONE}`],
  ["contactPhone", `tel:${COMPANY_PHONE}`],
  ["footerCall", `tel:${COMPANY_PHONE}`],
  ["stickyCall", `tel:${COMPANY_PHONE}`],

  ["heroWhatsAppBtn", `https://wa.me/${COMPANY_WA}`],
  ["contactWA", `https://wa.me/${COMPANY_WA}`],
  ["footerWA", `https://wa.me/${COMPANY_WA}`],
  ["stickyWA", `https://wa.me/${COMPANY_WA}`],
];
links.forEach(([id, href]) => {
  const el = document.getElementById(id);
  if (el) el.setAttribute("href", href);
});

/* Form -> opens WhatsApp with prefilled message */
const form = document.getElementById("quoteForm");
const success = document.getElementById("successMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const business = document.getElementById("business").value.trim();
  const postcode = document.getElementById("postcode").value.trim();
  const details = document.getElementById("details").value.trim();

  success.style.display = "block";

  const msg =
    `New website enquiry (demo)\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Business: ${business}\n` +
    `Area/Postcode: ${postcode}\n` +
    `Requirement: ${details}`;

  window.open(`https://wa.me/${COMPANY_WA}?text=${encodeURIComponent(msg)}`, "_blank");

  form.reset();
});
