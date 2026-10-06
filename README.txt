<p align="center">
  <img src="recall_icon.png" alt="Recall Logo" width="140">
</p>

<h1 align="center">Recall</h1>

<p align="center">
  Practice interview questions in Data Science, Machine Learning, and Deep Learning.
</p>

<p align="center">
  <a href="https://ziraddingulumjanly.github.io/Recall/">
    <strong>See Live Website</strong>
  </a>
</p>

<p align="center">
  <img src="interface.png" alt="Recall Interface" width="900">
</p>


> **Coming soon:** AI Engineering interview questions will be added in a future update.

Also see [ML Projects](https://github.com/ziraddingulumjanly).

A focused, browser-based interview practice tool for **Data Science, Machine Learning, and Deep Learning**.

Practice Orb keeps the experience intentionally simple: choose a topic if you want, click the glowing orb, answer the question yourself, then click the question card to reveal the reference answer.

The goal is not to turn interview preparation into another large learning platform. It is a lightweight practice loop built around **recall, repetition, and random questioning**.

## What it does

- Click the glowing orb to generate an interview question.
- Questions appear with a letter-by-letter typing animation.
- Click anywhere inside the question card to reveal the answer.
- Answers stay inside the same card and preserve the original bullet structure.
- The answer text automatically scales down when necessary so the card does not use an internal scrollbar.
- The page stays locked to the browser viewport, so the website itself does not need to scroll during normal use.
- The amber Practice UI, pulsing orb, and top-right GitHub shortcut remain part of the experience.

## Question bank

The current bank contains **147 interview questions** from the supplied DS / ML / DL Interview Guide:

| Topic | Questions |
| --- | ---: |
| Data Science | 38 |
| Machine Learning | 41 |
| Deep Learning | 68 |
| **All topics** | **147** |

The guide covers statistics, model evaluation, data workflows, classical ML algorithms, training and tuning, production ML, neural networks, CNNs, sequence models, generative models, attention, and Transformers.

## Topic filter

The small topic selector in the top-left defaults to **All topics**.

Users can switch between:

- **All topics** — 147 questions
- **Data Science** — 38 questions
- **Machine Learning** — 41 questions
- **Deep Learning** — 68 questions

Each selection maintains its own shuffled question cycle.

## Random no-repeat logic

Practice Orb does **not** simply choose a random question independently on every click, because that could produce repeated questions too often.

Instead, each topic mode uses a shuffled deck:

1. The questions for the selected topic are shuffled.
2. Each question is shown once.
3. No question repeats during that cycle.
4. When the full cycle is complete, the deck is shuffled again and a new cycle begins.
5. The last question from the previous cycle is prevented from immediately becoming the first question of the next cycle when possible.

Progress is stored locally in the browser, so refreshing the page does not intentionally restart the active deck.

## Run locally

No installation or build step is required.

1. Download or clone the project.
2. Open `index.html` in a modern browser.
3. Click the orb and start practicing.

The project is a static front-end website and does not require a backend for its current functionality.


## Replacing or extending the question bank

Questions and answers are stored in `script.js`.

New questions can be added while keeping the existing interface and deck behavior. Each question should keep its topic/category metadata so the topic filter continues to work correctly.

The current UI and interaction logic do not need to change when the question bank is expanded.

## Design philosophy

Practice Orb is built around a very small interaction loop:

**Choose → Recall → Answer → Check → Repeat**

There are deliberately no unnecessary dashboards, timers, accounts, sound controls, or complicated navigation in the current version. The interface keeps the focus on answering one interview question at a time.

---

**Recall** — simple interview practice, one question at a time.
