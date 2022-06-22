
import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType, HttpHeaders, HttpRequest, } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { FilePickerAdapter, FilePreviewModel, UploadStatus } from 'ngx-awesome-uploader';
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
      Key: `${file.type}/${file.name}`,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType,
    };


    bucket.upload(params, function (err: any, data: any) {
      if (err) {
        reject(err);
      }
      resolve(data);
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
function reject(err: any) {
  throw new Error('Function not implemented.');
}

function resolve(data: any) {
  throw new Error('Function not implemented.');
}

