'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    listingData ={},
    i = 0,
    config = require('./config');

/* Connect to your database */
mongoose.connect('mongodb://test:test@ds127564.mlab.com:27564/cen3031_assign3');
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
 var entries = JSON.parse(fs.readFileSync('listings.json', 'utf8'))['entries'];


  for (i = 0; i < entries.length; i++)
{
  var readData = new Listing({
  code: entries[i].code,
  name: entries[i].name,
  coordinates: {
    latitude: entries[i].latitude,
    longitude: entries[i].longitude
  } ,
  address: entries[i].address
});
  readData.save(function(err) {
  if (err) throw err;
  console.log('entry added!');
});
}





/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */