const express = require("express");
const knex = require("../db/client");

const router = express.Router();

router.get("/new", (req, res) => {
    res.render("bills/new");
});

router.post("/", (req, res) => {
    knex("bills")
        .insert(
            {
                billTotal: req.body.billTotal,
                tipPercent: req.body.tipPercent,
                groupSize: req.body.groupSize,
                taxPercent: req.body.taxPercent
            },
            "*"
        )
        .then(bills => {
            console.log(bills);
            res.redirect(`/`);
        });
});


router.get("/", (req, res) => {
    knex
        .select("*")
        .from("bills")
        .orderBy("createdAt", "DESC")
        .then(bills => {
            res.render("bills/index", { bills: bills });
        });
});


router.get("/:id", (req, res) => {
    const id = req.params.id;
    knex("bills")
        .where("id", id)
        .first()
        .then(bill => {
            if (bill) {
                const amount = bill.billTotal * (1 + bill.taxPercent + bill.tipPercent) / bill.groupSize;
                console.log(amount)
                res.render("bills/show", {
                    bill: bill,
                    amount: amount
                });
            } else {
                res.redirect("/bills");
            }
        });
});

module.exports = router;