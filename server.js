import express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema';

const APP_PORT = 3000;

const app = express();

app.use('/graphql', GraphHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
}));

app.listen(APP_PORT, () => {
    console.log(`App listen on port ${APP_PORT}`);
});