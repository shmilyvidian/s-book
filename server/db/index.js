const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(res=>console.log('connected successful'))
.catch(err=>console.log(err))