PRACTICE ORB WEBSITE

Open index.html in a browser.

Current behavior:
- The amber Practice UI is preserved.
- The page stays locked to the browser viewport, so the page itself does not scroll.
- Click the glowing orb to generate a question with the keyboard-style typing animation.
- The bank contains all 147 questions from the supplied DS / ML / DL Interview Guide.
- Questions are shuffled: every question is used once per cycle before a new shuffled cycle begins.
- Progress through the shuffled cycle is saved locally in the browser, so refreshing does not intentionally restart the deck.
- Click anywhere inside the visible question card to reveal its answer.
- There is no Show Answer button and no sound / listening control.
- The full answer stays inside the same card. The answer text automatically sizes down when needed so the card does not use an internal scrollbar.
- Answers preserve the guide's bullet structure.
- The GitHub icon remains at the top-right.
- GitHub Pages deployment is included in .github/workflows/deploy.yml.

Files:
- index.html
- styles.css
- script.js
- .github/workflows/deploy.yml

TOPIC FILTER
------------
The small top-left topic picker defaults to All topics (all 147 questions).
Users can switch to Data Science (38), Machine Learning (41), or Deep Learning (68).
Each selection has its own shuffled no-repeat deck: every question in that selection appears once before that selection reshuffles for a new cycle.
