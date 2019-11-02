const express = require("express");
const voucherRoutes = express.Router();

// Require Business model in our routes module
let Voucher = require("./vouchers.model");

// Defined store route
voucherRoutes.route("/add").post(function(req, res) {
  let voucher = new Voucher(req.body);
  voucher
    .save()
    .then(voucher => {
      res.status(200).json({ voucher: "voucher in added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
voucherRoutes.route("/").get((req, res) => {
  Voucher.find((err, vouchers) => {
    if (err) {
      console.log(err);
    } else {
      res.json(vouchers);
    }
  });
});

// Defined edit route
voucherRoutes.route("/edit/:id").get(function(req, res) {
  let id = req.params.id;
  Voucher.findById(id, (err, business) => {
    res.json(business);
  });
});

//  Defined update route
voucherRoutes.route("/update/:id").post((req, res) => {
  Voucher.findById(req.params.id, (err, voucher) => {
    if (!voucher) res.status(404).send("data is not found");
    else {
      console.log(voucher);
      voucher.name = req.body.name;

      voucher
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
voucherRoutes.route("/delete/:id").get(function(req, res) {
  Voucher.findByIdAndRemove({ _id: req.params.id }, function(err, voucher) {
    if (err) {
      res.json(err);
    } else res.json("Successfully removed");
  });
});

module.exports = voucherRoutes;
