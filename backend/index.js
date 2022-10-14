// import express from 'express';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import authRoutes from './routes/auth.js';
// import hotelsRoutes from './routes/hotels.js';
// import usersRoutes from './routes/users.js';
// import roomsRoutes from './routes/rooms.js';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import path from 'path';
// //Create Port for Backend

// const app = express();
// var PORT = process.env.PORT || 5000;
// dotenv.config();

// // const connect = async () => {
// //   try {
// //     await mongoose.connect(process.env.MONGODB_URI);
// //     console.log('Connected to DB');
// //   } catch (error) {
// //     throw error;
// //   }
// // };

// mongoose
//   .connect(process.env.MONGODB_URL)
//   .then(() => {
//     console.log('connected to db');
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

//   ///////////
// app.use(cors());
// app.use(cookieParser());
// app.use(express.json());

// app.use('/api/author', authRoutes);
// app.use('/api/hotels', hotelsRoutes);
// app.use('/api/users', usersRoutes);
// app.use('/api/rooms', roomsRoutes);

// app.use((err, req, res, next) => {
//   const errorStatus = err.status || 500;
//   const errorMessage = err.message || 'Error!';
//   return res.status(errorStatus).json({
//     success: false,
//     status: errorStatus,
//     message: errorMessage,
//     stack: err.stack,
//   });
// });

// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, '/front-end/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(`${__dirname}/front-end/build/index.html`));
// });

// app.listen(PORT, () => {
//   connect();
//   console.log('Server started at http://localhost:5000');
// });

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config.js';
import authRoutes from './routes/auth.js';
import hotelsRoutes from './routes/hotels.js';
import usersRoutes from './routes/users.js';
import roomsRoutes from './routes/rooms.js';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';


// const mongodbUrl = config.MONGODB_URL;
// const mongodbUrl = process.env.mongodbUrl;
// mongoose
//   .connect(mongodbUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .catch((error) => console.log(error.reason));

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

//////////
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(bodyParser.json());
app.use(cors());
app.use('/api/author', authRoutes);
app.use('/api/hotels', hotelsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/rooms', roomsRoutes);



const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/front-end/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/front-end/build/index.html`));
});



app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000');
});