const res = require('express/lib/response');
const mongoose = require('mongoose');

async function dbConnection() {
    await mongoose.connect('mongodb://localhost:27017/reviewsData')
        .then(() => console.log("Connection Sucessfully"))
        .catch((err) => console.log("Error", err));
}
// connection establish with Database
async function connection(post) {
    dbConnection()
    // create Scheme
    var Post = new mongoose.Schema({
        _id: Number,
        product_ID: Number,
        cust_ID: String,
        content: String
    });

    // craete Models
    const Model = mongoose.model("ReviewDataCollections", Post);

    //insert Documnets into data

    const insertDoc = new Model({
        _id: 115,
        product_ID: post.product_id,
        cust_ID: post.cust_id,
        content: post.content
    });
    await insertDoc.save();
    // console.log(Model.findById(100))
    return "Your Post has been Inserted";
}





// retriving data from databse
async function getData() {
    await dbConnection()
    var Get = new mongoose.Schema({
        _id: Number,
        product_ID: Number,
        cust_ID: String,
        content: String
    });

    // craete Models
    const Model = mongoose.model("ReviewDataCollections", Get);
    //stroe date a new variable
    //  console.log(getdata)
    // return Model.find((err, data) => {
    //     //console.log(data);
    //     if (!err) {
    //         return data;
    //     } else {
    //         return err
    //     }

    // });



    // let data = Model.find((err, data) => {
    //     console.log('vvvvvvvvvvvvvvvvvvvvvvvv', data)

    //     if (err) throw err;
    //     // object of all the users
    //     res.render('index', { users: users });

    // });
    // console.log(getdata);
    // console.log(getdata)
    return Model;

}
module.exports = { connection, getData }