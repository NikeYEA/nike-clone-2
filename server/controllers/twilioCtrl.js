var app = require('./../index');
var db = app.get('db');
var client = require('twilio')('ACe9d83d04deacdf40673b9822f3addee7','68d5e4fbb222435cb64e698b01589eb7');

module.exports = {
  getTwilioImages: function(req, res, next) {
    db.twiliocheckout([req.params.order_id], function(err, twilio) {
      console.log('this is twilio: ',twilio);
      if (err) {
        return res.status(500)
          .send(err);
      }
    var x = twilio.map(function(el) {
        console.log('el.img:',el.img);
        return el.img;
      })
      console.log('this is the motherfucking XXXXXXX: ',x);
      client.sendMessage({
        to:'+18016945874',
        from: '+13857071154',
        body: 'Here is your shit',
        mediaUrl: x
      }, function(err, twilio) {
        if(err) {
          console.log(err);
        } else {
          console.log(twilio);
        }

      })
    })
  }
};
