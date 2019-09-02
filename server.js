const app = require('./src/app');

const port = process.env.PORT || '1973';

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})