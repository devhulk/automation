let express = require('express');
let app = express();

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 5555;

app.get('/api', (req,res) => {
	res.send('This is a generic API')
});

app.listen(port, () => {
	console.log(`listening on port ${port}`)
})
