const Kladr = require("kladrapi-for-node");

const kladr = new Kladr();

exports.getCity = (req, res, next) => {
    const city = req.params.cityName;
    console.log(city);
    const query = {
        query: city,
        contentType: "city",
        limit: 10,
    };
    kladr.getData(query, (err, result) => {
        const cities = result.result
            .filter((data) => data.type === "Город")
            .map((city) => city.name);
        res.status(200).json({
            cities: cities,
            searchContext: result.searchContext,
        });
        console.log(result);
    });
    //
};
