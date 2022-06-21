import { ChangeDetectionStrategy, Component, EventEmitter,  OnChanges,  SimpleChanges,  ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUploaderModule, UploaderOptions, UploadFile, UploadInput, humanizeBytes, UploadOutput } from 'ngx-uploader';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'attachment',
  standalone: true,
  imports: [CommonModule, NgxUploaderModule],
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttachmentComponent implements ControlValueAccessor, OnChanges  {

 public options = { concurrency: 1, maxUploads: 3, maxFileSize: 1000000 } as UploaderOptions;
 public  formData: FormData;
 public files: UploadFile[] = [];
 public uploadInput = new EventEmitter<UploadInput>();
 public humanizeBytes = humanizeBytes;
 public  dragOver: boolean;
 public attachments = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    
  }
  
  writeValue(value: any): void {
    this.attachments = value;
  }
  registerOnChange(fn: any): void {
   
  }
  registerOnTouched(fn: any): void {
    
  }

  setDisabledState?(isDisabled: boolean): void {
   
  }

 public onUploadOutput(output: UploadOutput): void {

  console.log('output ', output)

  const {type} = output;

    switch (type) {
      case 'allAddedToQueue':
        // uncomment this if you want to auto upload files when added
        // const event: UploadInput = {
        //   type: 'uploadAll',
        //   url: '/upload',
        //   method: 'POST',
        //   data: { foo: 'bar' }
        // };
        // this.uploadInput.emit(event);
        break;
      case 'addedToQueue':
        if (typeof output.file !== 'undefined') {
          this.files.push(output.file);
        }
        break;
      case 'uploading':

      console.log('uploading ', output.file)

        if (typeof output.file !== 'undefined') {
          // update current data in files array for uploading file
          const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
          this.files[index] = output.file;
        }
        break;
      case 'removed':
        // remove file from array when removed
        this.files = this.files.filter((file: UploadFile) => file !== output.file);
        break;
      case 'dragOver':
        this.dragOver = true;
        break;
      case 'dragOut':
      case 'drop':
        this.dragOver = false;
        break;
      case 'done':
        // The file is downloaded
        break;
    }
  }

 public onStartUpload(): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: 'http://ngx-uploader.com/upload',
      method: 'POST',
      data: { foo: 'bar' }
    };

    this.uploadInput.emit(event);
  }

 public cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  public removeFile(id: string): void {
    this.uploadInput.emit({ type: 'remove', id: id });
  }

  public removeAllFiles(): void {
    this.uploadInput.emit({ type: 'removeAll' });
  }

}
