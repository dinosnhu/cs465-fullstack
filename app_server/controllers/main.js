/* GET index page */

const index = (req, res) => {
    res.render("index", { title: "Travelr Gateways" });

    ;
}

module.exports = {
    index
};