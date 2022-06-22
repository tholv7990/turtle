import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import * as AWS from "aws-sdk";

@ApiTags('attachment')
@Controller()
export class AttachmentController {


    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    public async save(@UploadedFile() file: Express.Multer.File): Promise<any> {


        const s3 = new AWS.S3
            ({
                secretAccessKey: 'wGwhx7LKjujpWDHCYuvWjgoShOnKAWKFt+uxSMyK',
                accessKeyId: 'AKIATUG34ZRIIHKDCOEZ',
                region: 'ap-southeast-1'
            });

        const params =
        {
            Bucket: 'turtle-trading',
            Key: file?.filename,
            Body: file,
            ACL: "public-read",
            ContentType: file.mimetype,
            ContentDisposition: "inline",
            CreateBucketConfiguration:
            {
                LocationConstraint: "ap-southeast-1"
            }
        };

        try {
            let s3Response = await s3.upload(params).promise();

            console.log(s3Response);
        }
        catch (e) {
            console.log(e);
        }

    }

}
