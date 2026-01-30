// year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// WhatsApp lead form
const form = document.getElementById("quoteForm");
const success = document.getElementById("successMsg");

// Change this number to your real WhatsApp number (no +, no spaces)
const WA_NUMBER = "447000000000";

form.addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const business = document.getElementById("business").value.trim();
  const postcode = document.getElementById("postcode").value.trim();
  const details = document.getElementById("details").value.trim();

  const msg =
`Hello Thrive Group Solutions 👋
Name: ${name}
Phone: ${phone}
Business: ${business}
Area/Postcode: ${postcode}

Request:
${details}`;

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank", "noopener");

  success.style.display = "block";
  form.reset();
});
