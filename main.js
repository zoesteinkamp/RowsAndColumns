// Typewriter query animation
  const queries = [
    [
      { text: 'SELECT ', cls: 'keyword' },
      { text: '* ', cls: '' },
      { text: 'FROM ', cls: 'keyword' },
      { text: 'transactions ', cls: '' },
      { text: 'JOIN ', cls: 'keyword' },
      { text: 'analytics ', cls: '' },
      { text: 'USING ', cls: 'keyword' },
      { text: '(data)', cls: '' },
    ]
  ];

  const queryEl = document.getElementById('queryText');
  const flat = queries[0];
  let charIndex = 0;
  let segIndex = 0;
  let built = [];

  function typeNext() {
    if (segIndex >= flat.length) return;

    const seg = flat[segIndex];
    if (charIndex < seg.text.length) {
      // Build the full HTML from completed segments + partial current
      let html = '';
      for (let i = 0; i < segIndex; i++) {
        html += flat[i].cls
          ? `<span class="${flat[i].cls}">${flat[i].text}</span>`
          : flat[i].text;
      }
      const partial = seg.text.slice(0, charIndex + 1);
      html += seg.cls ? `<span class="${seg.cls}">${partial}</span>` : partial;
      queryEl.innerHTML = html;
      charIndex++;
      setTimeout(typeNext, 38);
    } else {
      segIndex++;
      charIndex = 0;
      setTimeout(typeNext, 38);
    }
  }

  setTimeout(typeNext, 800);

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));