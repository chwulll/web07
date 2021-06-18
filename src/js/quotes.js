const quotes = [
  {
    quote:
    "I’ve failed over and over and over again in my life and that is why I succeed.",
    author:
    "– Michael Jordan"
  },
  {
    quote:
    "Grind Hard, Shine Hard.",
    author:
    "– Dwayne Johnson"
  },
  {
    quote:
    "They always say time changes things, but you actually have to change them yourslef.",
    author:
    "– Andy Warhol"
  },
  {
    quote:
    "It is kind of fun to do the impossible. ",
    author:
    "– Walt Disney"
  },
  {
    quote:
    "Tough times never last, but tough people do.",
    author:
    "– Robert H. Schuller"
  },
  {
    quote:
    "I didn’t get there by wishing for it or hoping for it, but by working for it.",
    author:
    "– Estée Lauder"
  },
  {
    quote:
    "There is no substitute for hard work.",
    author:
    "– Thomas Edison"
  },
  {
    quote:
    "Psuh yourself, because no one else is going to do it for you.",
    author:
    "– unknown"
  },
  {
    quote:
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author:
    "– Mahatma Gandhi"
  },
  {
    quote:
    "Some people dream of accomplishing great things. Others stay awake and make it happen.",
    author:
    "– Mohsin jameel"
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;