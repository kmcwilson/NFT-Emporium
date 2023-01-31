const mongoose = require ('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/nft-emporium', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

module.exports= mongoose.connection;