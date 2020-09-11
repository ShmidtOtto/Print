const mongoose = require( "mongoose" );
const User = require( "./models/User.js" );
const Filament = require( "./models/Filament.js" );
const PrinterType = require( "./models/PrinterType.js" );
mongoose.connect( "mongodb+srv://Otto:529440@cluster0.fx1qy.mongodb.net/Cluster0?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
} );
