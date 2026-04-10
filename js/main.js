/* =============================================
   ASHUTOSH PATRA — Portfolio Scripts
   ============================================= */

// ---- Custom Cursor ----
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

document.addEventListener('mousemove', e => {
  cursor.style.left     = e.clientX + 'px';
  cursor.style.top      = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top  = e.clientY + 'px';
});

// ---- Tools Marquee ----
const tools = [
  'Burp Suite', 'Nmap', 'Nessus', 'Metasploit', 'SQLMap',
  'OWASP ZAP', 'Nikto', 'DirBuster', 'Sublist3r', 'Kali Linux',
  'Parrot OS', 'MITRE ATT&CK', 'OWASP Top 10', 'NIST CSF',
  'Wireshark', 'Hydra', 'John the Ripper', 'BloodHound',
];

const marquee = document.getElementById('marquee');
// Double list for seamless infinite scroll
[...tools, ...tools].forEach(name => {
  const el = document.createElement('span');
  el.className   = 'tool-pill';
  el.textContent = name;
  marquee.appendChild(el);
});

// ---- Scroll-in Animations ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .cert-card, .stat-card').forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.2s';
  observer.observe(el);
});
