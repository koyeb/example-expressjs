const expressApp = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const cors = require('cors');


const languageRoutes = require('./src/routes/languageRoutes');
const companyRoutes = require('./src/routes/companyRoutes');
const themesRoutes = require('./src/routes/themesRoutes');
const textsRoutes = require('./src/routes/textsRoutes');
const challengesRoutes = require('./src/routes/challengeRoutes');
const quizRoutes = require('./src/routes/quizRoutes');
const imageRoutes = require('./src/routes/imageRoutes');
const retoImageRoutes = require('./src/routes/retoImageRoutes');
const gameRoutes = require('./src/routes/gameRoutes');
const textsLanguagesRoutes = require('./src/routes/textsLanguagesRoutes');

const app = expressApp(); 
app.set('port', process.env.PORT || 3000);
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "root",
    database: 'casinodb_concurso',
}

//middlewares--------------------------------------------------
app.use(myconn(mysql, dbOptions, 'single'));
app.use(expressApp.json());

//routes-------------------------------------------------------
app.use(cors());
app.get('/', (req, res) => {res.send('Welcome to BackOffice API!');})
app.use('/languages', languageRoutes);
app.use('/companies', companyRoutes);
app.use('/themes', themesRoutes);
app.use('/texts', textsRoutes);
app.use('/challenges', challengesRoutes);
app.use('/quiz', quizRoutes);
app.use('/images', imageRoutes);
app.use('/retoImage', retoImageRoutes);
app.use('/games', gameRoutes);
app.use('/textsLanguages', textsLanguagesRoutes);
app.use((req, res) => {
    res.status(404).send('Error 404 - Página no encontrada');
});


//server runing------------------------------------------------
app.listen(app.get('port'), () => {
    console.log('Server is running on port', app.get('port'));
});