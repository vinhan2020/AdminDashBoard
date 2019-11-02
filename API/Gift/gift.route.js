const express = require("express");
const GiftRoute = express.Router();

// Require Business model in our routes module
let Gift = require("./gift.model");

// Defined store route
GiftRoute.route("/add").post(function(req, res) {
  let gift = new Gift(req.body);
  gift
    .save()
    .then(gift => {
      res.status(200).json({ gift: "gift in added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
GiftRoute.route("/").get((req, res) => {
  Gift.find((err, gifts) => {
    if (err) {
      console.log(err);
    } else {
      res.json(gifts);
    }
  });
});

// Defined edit route
GiftRoute.route("/edit/:id").get(function(req, res) {
  let id = req.params.id;
  Gift.findById(id, (err, business) => {
    res.json(business);
  });
});

//  Defined update route
GiftRoute.route("/update/:id").post((req, res) => {
  Gift.findById(req.params.id, (err, gift) => {
    if (!gift) res.status(404).send("data is not found");
    else {
      console.log(gift);
      gift.name = req.body.name;
      gift.datestart = req.body.datestart
      gift.dateend = req.body.dateend
      gift.value = req.body.value

      gift
        .save()
        .then(business => {
          res.json("Update complete");
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
GiftRoute.route("/delete/:id").get(function(req, res) {
  Gift.findByIdAndRemove({ _id: req.params.id }, function(err, gift) {
    if (err) {
      res.json(err);
    } else res.json("Successfully removed");
  });
});

module.exports = GiftRoute;
