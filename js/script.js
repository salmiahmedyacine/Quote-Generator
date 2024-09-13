let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('btn');

btn.onclick = function(){
    const url = "https://quotes-api-self.vercel.app/quote";

    let getQuote = () => {
        fetch(url)
        .then((data) => data.json())
        .then((item) => {
            quote.innerHTML = item.quote;
            author.innerHTML = item.author;
        })
    };
    quote.style.display = 'block';
    author.style.display = 'block';

    getQuote();
}
