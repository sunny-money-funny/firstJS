const quotes = [
    {
    quote: "A woman must have money and a room of her own if she is to write fiction.",
    author: "Virginia Woolf"
},{
    quote: "No need to hurry. No need to sparkle. No need to be anybody but oneself.",
    author: "Virginia Woolf"
},{
    quote: "My only advice is to stay aware, listen carefully, and yell for help if you need it.",
    author: "Judy Blume"
},{
    quote: "Forever is composed of nows.",
    author: "Emily Dickinson"
},{
    quote:"I attribute my success to this: I never gave or took any excuse.",
    author:"Florence Nightingale"
},{
    quote:"Like and equal are not the same thing at all.",
    author:"Madeleine L'Engle"
},{
    quote:"I am too intelligent, too demanding, and too resourceful for anyone to be able to take charge of me entirely. No one knows me or loves me completely. I have only myself.",
    author:"Simone de Beauvoir"
},{
    quote:"I dwell in possibility.",
    author:"Emily Dickinson"
},{
    quote:"Do one thing every day that scares you.",
    author:"Eleanor Roosevelt"
},{
    quote:"It is our choices, that show what we truly are, far more than our abilities.",
    author:"J.K. Rowling"
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;