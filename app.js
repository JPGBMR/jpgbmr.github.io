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
  { name: 'dice-roller',        description: 'Virtual dice roller — d4 through d100, crypto-random, roll history', stack: 'html', pages_url: 'https://jpgbmr.github.io/dice-roller/',        url: 'https://github.com/JPGBMR/dice-roller' },
  { name: 'url-parser',         description: 'URL decomposer — scheme, host, path, query params, fragment', stack: 'html',       pages_url: 'https://jpgbmr.github.io/url-parser/',         url: 'https://github.com/JPGBMR/url-parser' },

  // Visualizers & Simulations (12)
  { name: '3d-particle-system-visualizer', description: 'Interactive 3D particle system with React, TypeScript, and Three.js', stack: 'html', pages_url: 'https://jpgbmr.github.io/3d-particle-system-visualizer/', url: 'https://github.com/JPGBMR/3d-particle-system-visualizer' },
  { name: 'audio-visualizer',   description: 'Microphone-driven real-time frequency visualizer',        stack: 'html',       pages_url: 'https://jpgbmr.github.io/audio-visualizer/',   url: 'https://github.com/JPGBMR/audio-visualizer' },
  { name: 'fluid-sim',          description: 'Performance-capped fluid diffusion simulation',           stack: 'html',       pages_url: 'https://jpgbmr.github.io/fluid-sim/',          url: 'https://github.com/JPGBMR/fluid-sim' },
  { name: 'fourier-visualizer', description: 'Interactive FFT and Fourier series visualizer',           stack: 'html',       pages_url: 'https://jpgbmr.github.io/fourier-visualizer/', url: 'https://github.com/JPGBMR/fourier-visualizer' },
  { name: 'gravity-sim',        description: 'N-body gravity simulation with Three.js',                 stack: 'html',       pages_url: 'https://jpgbmr.github.io/gravity-sim/',        url: 'https://github.com/JPGBMR/gravity-sim' },
  { name: 'lorenz-attractor',   description: 'Interactive Lorenz attractor via Euler integration',      stack: 'html',       pages_url: 'https://jpgbmr.github.io/lorenz-attractor/',   url: 'https://github.com/JPGBMR/lorenz-attractor' },
  { name: 'matrix-rain-3d',     description: '3D matrix rain animation',                                stack: 'html',       pages_url: 'https://jpgbmr.github.io/matrix-rain-3d/',     url: 'https://github.com/JPGBMR/matrix-rain-3d' },
  { name: 'particle-galaxy',    description: 'Performance-capped procedural galaxy renderer',           stack: 'html',       pages_url: 'https://jpgbmr.github.io/particle-galaxy/',    url: 'https://github.com/JPGBMR/particle-galaxy' },
  { name: 'solar-system',       description: 'Simplified orbital simulation with bounded controls',     stack: 'html',       pages_url: 'https://jpgbmr.github.io/solar-system/',       url: 'https://github.com/JPGBMR/solar-system' },
  { name: 'terrain-generator',  description: 'Seed-based procedural terrain map generator',             stack: 'html',       pages_url: 'https://jpgbmr.github.io/terrain-generator/',  url: 'https://github.com/JPGBMR/terrain-generator' },
  { name: 'complex-plane',      description: 'Argand plane operations and complex number visualizer',   stack: 'html',       pages_url: 'https://jpgbmr.github.io/complex-plane/',      url: 'https://github.com/JPGBMR/complex-plane' },
  { name: 'laplace-visualizer', description: 'Pole-zero and frequency response visualizer',             stack: 'html',       pages_url: 'https://jpgbmr.github.io/laplace-visualizer/', url: 'https://github.com/JPGBMR/laplace-visualizer' },

  // Math & Science (6)
  { name: 'eulers-story',       description: 'Interactive visual story of Euler\'s formula',            stack: 'html',       pages_url: 'https://jpgbmr.github.io/eulers-story/',       url: 'https://github.com/JPGBMR/eulers-story' },
  { name: 'graphing-calculator',description: 'Browser graphing calculator with strict expression grammar', stack: 'html',    pages_url: 'https://jpgbmr.github.io/graphing-calculator/', url: 'https://github.com/JPGBMR/graphing-calculator' },
  { name: 'linear-solver',      description: 'Linear system solver — Gaussian elimination, parity-first', stack: 'html',    pages_url: 'https://jpgbmr.github.io/linear-solver/',      url: 'https://github.com/JPGBMR/linear-solver' },
  { name: 'math-lab',           description: '7-in-1 calculator suite — arithmetic, algebra, finance, and more', stack: 'html', pages_url: 'https://jpgbmr.github.io/math-lab/',     url: 'https://github.com/JPGBMR/math-lab' },
  { name: 'matrix-calculator',  description: 'In-browser matrix calculator — add, multiply, determinant, inverse', stack: 'html', pages_url: 'https://jpgbmr.github.io/matrix-calculator/', url: 'https://github.com/JPGBMR/matrix-calculator' },
  { name: 'nodejs-history-website', description: 'Educational interactive site on Node.js evolution',   stack: 'html',       pages_url: 'https://jpgbmr.github.io/nodejs-history-website/', url: 'https://github.com/JPGBMR/nodejs-history-website' },

  // Dev & AI Tools (13)
  { name: 'agent-workflow-builder', description: 'Visual builder for AI agent workflows',               stack: 'html',       pages_url: 'https://jpgbmr.github.io/agent-workflow-builder/', url: 'https://github.com/JPGBMR/agent-workflow-builder' },
  { name: 'context-estimator',  description: 'Context window size and token estimator',                 stack: 'html',       pages_url: 'https://jpgbmr.github.io/context-estimator/',  url: 'https://github.com/JPGBMR/context-estimator' },
  { name: 'context-packer',     description: 'Text compaction utility with deterministic transforms',   stack: 'html',       pages_url: 'https://jpgbmr.github.io/context-packer/',     url: 'https://github.com/JPGBMR/context-packer' },
  { name: 'crypto-lab',         description: 'Unified suite — hashing, encryption, encoding, signing', stack: 'html',       pages_url: 'https://jpgbmr.github.io/crypto-lab/',         url: 'https://github.com/JPGBMR/crypto-lab' },
  { name: 'eval-dataset-curator', description: 'Evaluation dataset builder and curator for LLM testing', stack: 'html',     pages_url: 'https://jpgbmr.github.io/eval-dataset-curator/', url: 'https://github.com/JPGBMR/eval-dataset-curator' },
  { name: 'llm-cost-estimator', description: 'LLM API cost estimator across providers and models',     stack: 'html',       pages_url: 'https://jpgbmr.github.io/llm-cost-estimator/', url: 'https://github.com/JPGBMR/llm-cost-estimator' },
  { name: 'prompt-bench',       description: 'Prompt benchmarking and side-by-side comparison tool',   stack: 'html',       pages_url: 'https://jpgbmr.github.io/prompt-bench/',       url: 'https://github.com/JPGBMR/prompt-bench' },
  { name: 'prompt-playground',  description: 'Interactive prompt editor and live tester',               stack: 'html',       pages_url: 'https://jpgbmr.github.io/prompt-playground/',  url: 'https://github.com/JPGBMR/prompt-playground' },
  { name: 'prompt-style-library', description: 'Library of reusable prompt patterns and styles',       stack: 'html',       pages_url: 'https://jpgbmr.github.io/prompt-style-library/', url: 'https://github.com/JPGBMR/prompt-style-library' },
  { name: 'prompt-token-budget', description: 'Prompt token budget planner and tracker',               stack: 'html',       pages_url: 'https://jpgbmr.github.io/prompt-token-budget/', url: 'https://github.com/JPGBMR/prompt-token-budget' },
  { name: 'rag-cost-latency',   description: 'RAG pipeline cost and latency estimator',                 stack: 'html',       pages_url: 'https://jpgbmr.github.io/rag-cost-latency/',   url: 'https://github.com/JPGBMR/rag-cost-latency' },
  { name: 'regex-testing-playground', description: 'Real-time regex tester with flags, groups, and match explorer', stack: 'html', pages_url: 'https://jpgbmr.github.io/regex-testing-playground/', url: 'https://github.com/JPGBMR/regex-testing-playground' },
  { name: 'token-counter',      description: 'Offline token and cost estimator for LLM prompts',       stack: 'html',       pages_url: 'https://jpgbmr.github.io/token-counter/',      url: 'https://github.com/JPGBMR/token-counter' },

  // Text & Writing (6)
  { name: 'case-converter',     description: 'Live text case converter — camel, snake, kebab, and more', stack: 'html',      pages_url: 'https://jpgbmr.github.io/case-converter/',     url: 'https://github.com/JPGBMR/case-converter' },
  { name: 'landing-copy-generator', description: 'Landing page headline and copy generator',            stack: 'html',       pages_url: 'https://jpgbmr.github.io/landing-copy-generator/', url: 'https://github.com/JPGBMR/landing-copy-generator' },
  { name: 'linkedin-dm-rewriter', description: 'LinkedIn DM tone and clarity rewriter',                 stack: 'html',       pages_url: 'https://jpgbmr.github.io/linkedin-dm-rewriter/', url: 'https://github.com/JPGBMR/linkedin-dm-rewriter' },
  { name: 'markdown-preview',   description: 'Split-pane markdown editor with sanitized live preview',  stack: 'html',       pages_url: 'https://jpgbmr.github.io/markdown-preview/',   url: 'https://github.com/JPGBMR/markdown-preview' },
  { name: 'text-lab',           description: '7-tool text analysis suite — diff, readability, stats, and more', stack: 'html', pages_url: 'https://jpgbmr.github.io/text-lab/',        url: 'https://github.com/JPGBMR/text-lab' },
  { name: 'tweet-refiner',      description: 'Tweet clarity and tone refiner',                          stack: 'html',       pages_url: 'https://jpgbmr.github.io/tweet-refiner/',      url: 'https://github.com/JPGBMR/tweet-refiner' },

  // Data & Converters (3)
  { name: 'data-converter',     description: 'CSV, JSON, and YAML converter with strict parsing',       stack: 'html',       pages_url: 'https://jpgbmr.github.io/data-converter/',     url: 'https://github.com/JPGBMR/data-converter' },
  { name: 'data-lab',           description: '6-tool data format conversion and transformation toolkit', stack: 'html',      pages_url: 'https://jpgbmr.github.io/data-lab/',           url: 'https://github.com/JPGBMR/data-lab' },

  // Color & Media (3)
  { name: 'color-lab',          description: '4-in-1 color design tool — picker, mixer, gradients, palettes', stack: 'html', pages_url: 'https://jpgbmr.github.io/color-lab/',         url: 'https://github.com/JPGBMR/color-lab' },
  { name: 'color-scheme',       description: 'Palette generator with lock controls and CSS/JSON export', stack: 'html',      pages_url: 'https://jpgbmr.github.io/color-scheme/',       url: 'https://github.com/JPGBMR/color-scheme' },
  { name: 'media-lab',          description: '4-tool creative media toolkit for digital artists',        stack: 'html',       pages_url: 'https://jpgbmr.github.io/media-lab/',          url: 'https://github.com/JPGBMR/media-lab' },

  // Apps & Games (5)
  { name: 'arcade',             description: '10 HTML/JS games in one — chess, Snake, Tetris, and more', stack: 'html',      pages_url: 'https://jpgbmr.github.io/arcade/',             url: 'https://github.com/JPGBMR/arcade' },
  { name: 'idea-scorer',        description: 'Idea evaluation and scoring tool',                         stack: 'html',       pages_url: 'https://jpgbmr.github.io/idea-scorer/',        url: 'https://github.com/JPGBMR/idea-scorer' },
  { name: 'persona-cards',      description: 'User persona card generator for product teams',            stack: 'html',       pages_url: 'https://jpgbmr.github.io/persona-cards/',      url: 'https://github.com/JPGBMR/persona-cards' },
  { name: 'time-lab',           description: '5-tool time management suite — timers, clocks, planners', stack: 'html',       pages_url: 'https://jpgbmr.github.io/time-lab/',           url: 'https://github.com/JPGBMR/time-lab' },
  { name: 'todo-list-app',      description: 'Vanilla JS todo list with localStorage persistence',       stack: 'html',       pages_url: 'https://jpgbmr.github.io/todo-list-app/',      url: 'https://github.com/JPGBMR/todo-list-app' },

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
