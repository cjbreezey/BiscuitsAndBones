const aws = require('aws-sdk');
const multer = require("multer");
const multerS3 = require('multer-s3');
require('dotenv').config()
const keys = require('../config/keys')

const s3 = new aws.S3(); 
aws.config.update({
    AWSsecretAccessKey: keys.AWSsecretAccessKey,
    AWSaccessKeyId: keys.AWSaccessKeyId,
    region: "us-west-1"
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
    }
};

const upload = multer({
    fileFilter,
    storage: multerS3({      
        acl: "public-read",
        s3,
        bucket: "biscuitsandbones-profilepics",
        metadata: function (req, file, cb) {
            cb(null, { fieldname: "TESTING_METADATA"});
        },
        content: multerS3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            cb(null, `${Date.now().toString()}` + "-" + file.originalname);
        },
    }),
});

module.exports = upload;