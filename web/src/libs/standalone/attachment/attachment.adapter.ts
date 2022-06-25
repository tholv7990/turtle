
import { HttpClient,} from '@angular/common/http';
import {  Observable, of } from 'rxjs';
import { FilePickerAdapter, FilePreviewModel } from 'ngx-awesome-uploader';
import { S3 } from 'aws-sdk';
import { environmentEdge } from '@libs/model';
export class AttachmentAdapter extends FilePickerAdapter {

  constructor(private http: HttpClient) {
    super();
  }
  
  public uploadFile(item: FilePreviewModel): Observable<any> {

    const file = item.file as File;

    const { bucketName, accessKey, secretKey, region } = environmentEdge.aws

    const contentType = file.type;

    const bucket = new S3({
      accessKeyId: accessKey,
      secretAccessKey: secretKey,
      region: region
    });

    const params = {
      Bucket: bucketName,
      Key: `image/${file.name}`,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType,
    };


    bucket.upload(params,  (err, data) => {
      if (err) {
      console.log('EROOR: ',JSON.stringify( err));
      return false;
      }
      console.log('File Uploaded.', data);
      return true;
      });

    return of(null);



  }

  public removeFile(fileItem: FilePreviewModel): Observable<any> {
    const id = 50;
    const responseFromBackend = fileItem.uploadResponse;
    const removeApi = 'https://run.mocky.io/v3/dedf88ec-7ce8-429a-829b-bd2fc55352bc';
    return this.http.post(removeApi, { id });
  }

}
