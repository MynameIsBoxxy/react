import express from 'express';
import ReactDOM from 'react-dom/server';
import { Header } from '../shared/Header';
import { indexTemlate } from './indexTemplate';

const app = express();

app.unsubscribe('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
    res.send(
        indexTemlate(ReactDOM.renderToString(Header()))
    );
})

app.listen(3000, () => {
    console.log('Server started on localhost:3000')
})