import { FilePickerComponent, ValidationError, FilePreviewModel, UploaderCaptions, FilePickerModule } from 'ngx-awesome-uploader';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { AttachmentAdapter } from './attachment.adapter';
import { UploadType } from './attachment.model';

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

  @Input() public uploadType  = UploadType.Multi;

  @ViewChild('uploader', { static: true }) uploader: FilePickerComponent;

  public allowExtensions = ['jpg', 'png', 'PNG', 'webp', 'jpeg'];

  public adapter = new AttachmentAdapter(this.http);

  public myFiles: FilePreviewModel[] = [];


  constructor(private http: HttpClient) { }

  public ngOnInit() {}

  public onValidationError(er: ValidationError): void {
   
  }

  public onUploadSuccess(res: FilePreviewModel): void {
  
  }

  public onUploadFail(er: HttpErrorResponse): void {
   
  }

  public onRemoveSuccess(res: FilePreviewModel): void {
   
  }

  public onFileAdded(file: FilePreviewModel): void {
    this.myFiles.push(file);
  }

  public onFileRemoved(file: FilePreviewModel): void {
   
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
