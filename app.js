// All project data is hardcoded — no fetch calls, works offline.
// pages_url is null for non-HTML projects (Launch button falls back to GitHub URL).
const PROJECTS = [
  // Web Tools (22)
  { name: 'aspect-ratio',       description: 'Image/video dimension calculator',                        stack: 'html',       pages_url: 'https://jpgbmr.github.io/aspect-ratio/',       url: 'https://github.com/JPGBMR/aspect-ratio' },
  { name: 'base64',             description: 'Base64 encoder/decoder',                                  stack: 'html',       pages_url: 'https://jpgbmr.github.io/base64/',             url: 'https://github.com/JPGBMR/base64' },
  { name: 'binary-converter',   description: 'Binary, decimal, hex, octal converter',                   stack: 'html',       pages_url: 'https://jpgbmr.github.io/binary-converter/',   url: 'https://github.com/JPGBMR/binary-converter' },
  { name: 'bmi-calculator',     description: 'BMI calculator with health range visualization',          stack: 'html',       pages_url: 'https://jpgbmr.github.io/bmi-calculator/',     url: 'https://github.com/JPGBMR/bmi-calculator' },
  { name: 'contract-generator', description: 'Contract document generator',                             stack: 'html',       pages_url: 'https://jpgbmr.github.io/contract-generator/', url: 'https://github.com/JPGBMR/contract-generator' },
  { name: 'countdown-timer',    description: 'Live countdown to any target date/time',                  stack: 'html',       pages_url: 'https://jpgbmr.github.io/countdown-timer/',    url: 'https://github.com/JPGBMR/countdown-timer' },
  { name: 'cron-builder',       description: 'Visual cron expression builder',                          stack: 'html',       pages_url: 'https://jpgbmr.github.io/cron-builder/',       url: 'https://github.com/JPGBMR/cron-builder' },
  { name: 'css-minifier',       description: 'CSS minifier and beautifier',                             stack: 'html',       pages_url: 'https://jpgbmr.github.io/css-minifier/',       url: 'https://github.com/JPGBMR/css-minifier' },
  { name: 'euro-castles',       description: 'European castles interactive guide',                      stack: 'html',       pages_url: 'https://jpgbmr.github.io/euro-castles/',       url: 'https://github.com/JPGBMR/euro-castles' },
  { name: 'hash-generator',     description: 'MD5/SHA1/SHA256 hash generator',                          stack: 'html',       pages_url: 'https://jpgbmr.github.io/hash-generator/',     url: 'https://github.com/JPGBMR/hash-generator' },
  { name: 'hex-palette',        description: 'Hex color mood palette (PWA)',                            stack: 'html',       pages_url: 'https://jpgbmr.github.io/hex-palette/',        url: 'https://github.com/JPGBMR/hex-palette' },
  { name: 'invoice-generator',  description: 'Invoice creation and export',                             stack: 'html',       pages_url: 'https://jpgbmr.github.io/invoice-generator/',  url: 'https://github.com/JPGBMR/invoice-generator' },
  { name: 'json-formatter',     description: 'JSON formatter, minifier, validator',                     stack: 'html',       pages_url: 'https://jpgbmr.github.io/json-formatter/',     url: 'https://github.com/JPGBMR/json-formatter' },
  { name: 'lorem-generator',    description: 'Placeholder text generator',                              stack: 'html',       pages_url: 'https://jpgbmr.github.io/lorem-generator/',    url: 'https://github.com/JPGBMR/lorem-generator' },
  { name: 'morse-translator',   description: 'Morse code translator with audio',                        stack: 'html',       pages_url: 'https://jpgbmr.github.io/morse-translator/',   url: 'https://github.com/JPGBMR/morse-translator' },
  { name: 'pixel-art-editor',   description: 'Pixel art drawing tool',                                  stack: 'html',       pages_url: 'https://jpgbmr.github.io/pixel-art-editor/',   url: 'https://github.com/JPGBMR/pixel-art-editor' },
  { name: 'reading-estimator',  description: 'Reading time, word count, readability stats',             stack: 'html',       pages_url: 'https://jpgbmr.github.io/reading-estimator/',  url: 'https://github.com/JPGBMR/reading-estimator' },
  { name: 'regex-tester',       description: 'Live regex tester with match highlighting',               stack: 'html',       pages_url: 'https://jpgbmr.github.io/regex-tester/',       url: 'https://github.com/JPGBMR/regex-tester' },
  { name: 'social-card',        description: 'Social media card designer',                              stack: 'html',       pages_url: 'https://jpgbmr.github.io/social-card/',        url: 'https://github.com/JPGBMR/social-card' },
  { name: 'timezone-converter', description: 'World timezone converter with visual clock',              stack: 'html',       pages_url: 'https://jpgbmr.github.io/timezone-converter/', url: 'https://github.com/JPGBMR/timezone-converter' },
  { name: 'tip-calculator',     description: 'Bill splitter and tip calculator',                        stack: 'html',       pages_url: 'https://jpgbmr.github.io/tip-calculator/',     url: 'https://github.com/JPGBMR/tip-calculator' },
  { name: 'word-counter',       description: 'Real-time word/character/sentence counter',               stack: 'html',       pages_url: 'https://jpgbmr.github.io/word-counter/',       url: 'https://github.com/JPGBMR/word-counter' },
  { name: 'password-generator', description: 'Secure password generator — crypto-safe, customizable',    stack: 'html',       pages_url: 'https://jpgbmr.github.io/password-generator/', url: 'https://github.com/JPGBMR/password-generator' },
  { name: 'url-shortener',      description: 'URL shortener with QR code, history, offline-first',         stack: 'html',       pages_url: 'https://jpgbmr.github.io/url-shortener/',      url: 'https://github.com/JPGBMR/url-shortener' },
  { name: 'unit-converter',     description: 'Multi-category unit converter with 80+ units and formula',   stack: 'html',       pages_url: 'https://jpgbmr.github.io/unit-converter/',     url: 'https://github.com/JPGBMR/unit-converter' },
  { name: 'image-compressor',   description: 'Browser-side image compressor with split-view preview',      stack: 'html',       pages_url: 'https://jpgbmr.github.io/image-compressor/',   url: 'https://github.com/JPGBMR/image-compressor' },
  { name: 'sleep-calculator',   description: 'Optimal bedtimes and wake times based on 90-min sleep cycles', stack: 'html',       pages_url: 'https://jpgbmr.github.io/sleep-calculator/',   url: 'https://github.com/JPGBMR/sleep-calculator' },
  { name: 'color-from-image',   description: 'Extract dominant colours from any image — CSS/JSON/PNG export', stack: 'html',       pages_url: 'https://jpgbmr.github.io/color-from-image/',   url: 'https://github.com/JPGBMR/color-from-image' },
  { name: 'fake-data-gen',      description: 'Generate names, emails, UUIDs, credit cards, dates, and more', stack: 'html',       pages_url: 'https://jpgbmr.github.io/fake-data-gen/',      url: 'https://github.com/JPGBMR/fake-data-gen' },
  { name: 'dice-roller',        description: 'Virtual dice roller — d4 through d100, crypto-random, roll history',            stack: 'html',       pages_url: 'https://jpgbmr.github.io/dice-roller/',        url: 'https://github.com/JPGBMR/dice-roller' },
  { name: 'url-parser',         description: 'URL decomposer — scheme, host, path, query params, fragment via native URL API', stack: 'html',       pages_url: 'https://jpgbmr.github.io/url-parser/',         url: 'https://github.com/JPGBMR/url-parser' },

  // Python Tools (10)
  { name: 'ascii-art',          description: 'ASCII art generator',                                     stack: 'python',     pages_url: null, url: 'https://github.com/JPGBMR/ascii-art' },
  { name: 'auto-prompter',      description: 'Auto prompt chaining tool',                               stack: 'python',     pages_url: null, url: 'https://github.com/JPGBMR/auto-prompter' },
  { name: 'cache-cleaner',      description: 'Cache cleaning utility (Python + PowerShell)',             stack: 'python',     pages_url: null, url: 'https://github.com/JPGBMR/cache-cleaner' },
  { name: 'conway-game',        description: 'Conway\'s Game of Life',                                  stack: 'python',     pages_url: null, url: 'https://github.com/JPGBMR/conway-game' },
  { name: 'maze-master',        description: 'Maze generation and solving',                              stack: 'python',     pages_url: null, url: 'https://github.com/JPGBMR/maze-master' },
  { name: 'qr-generator',       description: 'QR code generator',                                       stack: 'python',     pages_url: null, url: 'https://github.com/JPGBMR/qr-generator' },
  { name: 'secure-vault',       description: 'Encrypted secure vault',                                  stack: 'python',     pages_url: null, url: 'https://github.com/JPGBMR/secure-vault' },
  { name: 'seo-intel',          description: 'SEO intelligence tool (Flask)',                            stack: 'python',     pages_url: null, url: 'https://github.com/JPGBMR/seo-intel' },
  { name: 'text-summarizer',    description: 'Text summarization utility',                               stack: 'python',     pages_url: null, url: 'https://github.com/JPGBMR/text-summarizer' },
  { name: 'typing-test',        description: 'Typing speed test',                                        stack: 'python',     pages_url: null, url: 'https://github.com/JPGBMR/typing-test' },

  // System Tools (2)
  { name: 'cpu-benchmark',      description: 'CPU benchmarking tool',                                   stack: 'powershell', pages_url: null, url: 'https://github.com/JPGBMR/cpu-benchmark' },
  { name: 'system-health',      description: 'System health monitor and benchmark',                     stack: 'powershell', pages_url: null, url: 'https://github.com/JPGBMR/system-health' },
];

const STACK_LABELS = {
  html: 'HTML',
  python: 'Python',
  powershell: 'PowerShell',
};

function renderCards(filter) {
  const visible = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.stack === filter);

  document.getElementById('grid').innerHTML = visible.map(p => `
    <article class="card" data-stack="${p.stack}">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <div class="card-footer">
        <span class="badge badge-${p.stack}">${STACK_LABELS[p.stack]}</span>
        <a class="btn" href="${p.pages_url || p.url}" target="_blank" rel="noopener">
          ${p.pages_url ? 'Launch' : 'Source'}
        </a>
        ${p.pages_url ? `<a class="btn-outline" href="${p.url}" target="_blank" rel="noopener">Source</a>` : ''}
      </div>
    </article>
  `).join('');
}

function initFilters() {
  document.querySelectorAll('nav.filters button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('nav.filters button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCards(btn.dataset.filter);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCards('all');
  initFilters();
});
