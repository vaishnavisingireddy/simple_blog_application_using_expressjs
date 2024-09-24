const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let reviews = [
    { title: "iPhone 16", body: " The iPhone 16 Pro has a slightly bigger 6.3-inch display to the 6.1-inch of its predecessor. Like the Pro Max, this year's Pro also has a new 48MP ultrawide angle camera, but it also ditches the subpar 3x camera for the same 5x zoom." },
    { title: "Mac Book ", body: "The MacBook’s design is sleek and modern, crafted from premium materials that exude a sense of luxury. The Retina display is a highlight, offering vibrant colors and stunning clarity" },
    { title: "iPad", body: "The iPad has long been hailed as one of the best tablets on the market, and after using it for several months, I can confidently say it lives up to the hype. Here’s a detailed look" },
];

app.get('/', (req, res) => {
    res.render('index', { reviews });
});


app.post('/reviews', (req, res) => {
    const { title, body } = req.body;
    reviews.push({ title, body });
    res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
