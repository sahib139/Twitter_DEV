import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import {AWS_S3_Bucket,AWS_Access_KEY,AWS_Secret_KEY} from "./serverConfig.js";

aws.config.update({
    region : "ap-south-1",
    accessKeyId : AWS_Access_KEY,
    secretAccessKey : AWS_Secret_KEY,
});

const S3 = new aws.S3();

const upload = multer({
    storage:multerS3({
        s3:S3,
        bucket:AWS_S3_Bucket,
        acl:"public-read",
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    }),
});

export default upload;