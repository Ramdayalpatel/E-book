import express from "express";
const routes = express.Router();
import R from "ramda";
const { reviewsPost, getreviews } = require("../src/reviews");

routes.post('/api/v1/post', async (req, resp) => {
    //console.log(req.body)
    const attribute = R.pick(["product_id", "cust_id", "content"], req.body);
    resp.send(await reviewsPost(attribute));

})
routes.get('/api/v1/get/:id', async (res, resp) => {
    let data = await getreviews()
    // const get = JSON.stringify(data.find({ _id: res.params.id }));
    data.findById({ _id: res.params.id }, function (err:any, data:any) {
            resp.send(data);
        })

})
module.exports = routes;

