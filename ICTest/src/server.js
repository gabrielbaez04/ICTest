/* eslint-disable no-param-reassign */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

const DATA_FILE = path.join(__dirname, 'auctions.json');

app.set('port', (process.env.PORT || 3001));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.get('/api/auctions', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data).sort((prev, curr)=>{return prev.remainingTime - curr.remainingTime}));
  });
});

app.post('/api/auctions/timerStart', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const auctions = JSON.parse(data);
    auctions.forEach((auction) => {
      if (auction.remainingTime > 0) {
        auction.runningSince = Date.now();
      }
    });
    fs.writeFile(DATA_FILE, JSON.stringify(auctions, null, 4), () => {
      res.json({});
    });
  });
});

app.post('/api/auctions/timerStop', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const auctions = JSON.parse(data);
    auctions.forEach((auction) => {
            const delta =  Date.now() - auction.runningSince;
            auction.remainingTime = auction.remainingTime - delta < 0 ? 0 : auction.remainingTime - delta;
            auction.runningSince = null;     
    });
    fs.writeFile(DATA_FILE, JSON.stringify(auctions, null, 4), () => {
      res.json({});
    });
  });
});
//params id,dealership,chnner
app.put('/api/auctions/bid', (req, res) => {
    fs.readFile(DATA_FILE, (err, data) => {
      const auctions = JSON.parse(data);
      auctions.forEach((auction) => {
        if (auction.id === req.body.id) {
          var date = new Date(); 
            auction.bids.push(
                {
                    "amount": auction.bids.length>0 ? auction.bids[auction.bids.length-1].amount + 250 : 250,
                    "dealership": req.body.dealership,
                    "createdAt": date.toISOString(),
                    "channel": req.body.channel
                }
              )
        }
      });
      fs.writeFile(DATA_FILE, JSON.stringify(auctions, null, 4), () => {
        res.json({});
      });
    });
  });


app.use(express.static('public'))
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
