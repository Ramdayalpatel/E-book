const postInsert = require("./index");
var reviewsPost = async (attributes) => {
    const response = await postInsert.connection(attributes)
    //console.log(attributes);
    return response;

}
var getreviews = async (id) => {
    const objectModel = await postInsert.getData();
    //console.log("BBBBBBBBBBBBBBBB",data)
    return objectModel
}
module.exports = { reviewsPost, getreviews };