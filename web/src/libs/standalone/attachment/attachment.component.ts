import { FilePickerComponent, ValidationError, FilePreviewModel, UploaderCaptions, FilePickerModule } from 'ngx-awesome-uploader';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { AttachmentAdapter } from './attachment.adapter';

@Component({
  selector: 'attachment',
  standalone: true,
  imports: [CommonModule, FilePickerModule],
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttachmentComponent implements OnInit {

  @Input() public uploadType;

  @ViewChild('uploader', { static: true }) uploader: FilePickerComponent;

  public allowExtensions = ['jpg', 'png', 'PNG', 'webp', 'jpeg'];

  public adapter = new AttachmentAdapter(this.http);

  public myFiles: FilePreviewModel[] = [];


  constructor(private http: HttpClient) { }

  public ngOnInit() {}

  public onValidationError(er: ValidationError): void {
    console.log('validationError', er);
  }

  public onUploadSuccess(res: FilePreviewModel): void {
    console.log('uploadSuccess', res);
    // console.log(this.myFiles)
  }

  public onUploadFail(er: HttpErrorResponse): void {
    console.log('uploadFail', er);
  }

  public onRemoveSuccess(res: FilePreviewModel): void {
    console.log('removeSuccess', res);
  }

  public onFileAdded(file: FilePreviewModel): void {
    console.log('fileAdded', file);
    this.myFiles.push(file);
  }

  public onFileRemoved(file: FilePreviewModel): void {
    console.log('fileRemoved', this.uploader.files);
  }

  public removeFile(): void {
    this.uploader.removeFileFromList(this.myFiles[0]);
  }

  public validateFile(file: File): Observable<boolean> {
    if (!file.name.includes('uploader')) {
      return of(true).pipe(delay(100));
    }
    return of(false).pipe(delay(100));
  }

  public clearAllFiles(): void {
    this.uploader.files = [];
  }

  public onRemoveFile(fileItem: FilePreviewModel): void {
    this.uploader.removeFile(fileItem);
  }
}
