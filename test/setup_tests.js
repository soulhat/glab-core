/**
 * Created by Bin on 11/11/15.
 */
function connectDB(callback) {
    mongoClient.connect(dbConfig.testDBURL, function(err, db) {
        assert.equal(null, err);
        reader_test_db = db;
        console.log("Connected correctly to server");
        callback(0);
    });
}