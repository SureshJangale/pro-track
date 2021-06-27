const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
// bring routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const projectRoutes = require('./routes/project');
const issueRoutes = require('./routes/issues');
const commentRoutes = require('./routes/comments');


// app
const app = express();

// db
mongoose
    .connect(process.env.DATABASE_NETWORK, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log('DB connected'))
    .catch(err => {
        console.log(err);
    });

// middlewares
app.use(morgan('prod'));
app.use(bodyParser.json());
app.use(cookieParser());

// cors
app.use(cors());
    
// routes middleware
app.use('/', authRoutes);
app.use('/', userRoutes);
app.use('/', projectRoutes);
app.use('/', issueRoutes);
app.use('/', commentRoutes);

app.use(express.static(`${__dirname}/../client/build`));

app.use(fallback(`${__dirname}/../client/build/index.html`));

// port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
