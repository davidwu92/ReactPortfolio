require('dotenv').config()
const express = require('express')
const { join } = require('path')
const app = express()


// const uri = "mongodb+srv://USERNAME:PASSWORD@CLUSTER_NAME.n9z04.mongodb.net/DATABASE_NAME?retryWrites=true&w=majority";



const mongoURI = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://localhost/portfoliodb'
// const mongoose = require('mongoose')
// const conn = mongoose.createConnection(mongoURI, {
//   // these methods are rarely used
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

//middleware
app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//DEPLOYING TO HEROKU
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

//routes
require('./routes')(app)

//Catches all; sends any routes NOT found in the server directly into our home.
app.get('*', (req, res) => res.sendFile(join(__dirname, 'client', 'build', 'index.html')))

/*<<<<<<< ORIGINAL CONNECTION >>>>>>*/
//connect to the database and listen on a port
// require('mongoose')
//   .connect(process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://localhost/portfoliodb', {
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     app.listen(process.env.PORT || 3001)
//   })
//   .catch(e => console.error(e))

/*<<<<<<< MONGO CLIENT ATTEMPT >>>>>>*/
// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://davidwu92:GvVdUU0IBOZgSSgL@davidportfoliocluster.cnri8.mongodb.net/portfoliodb?retryWrites=true&w=majority";
// const uri2 = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://localhost/portfoliodb'
// const client = new MongoClient(uri,
//   {
//     // useCreateIndex: true,
//     // useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });
// client.connect(err => {
//   // console.log(uri2)
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// })


require('mongoose')
  .connect(process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://localhost/portfoliodb', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(process.env.PORT || 3001)
  })
  .catch(e => console.error(e))