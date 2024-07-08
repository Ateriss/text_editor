import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadertexetService } from '../../services/readertexet.service';


@Component({
  selector: 'app-textreader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textreader.component.html',
  styleUrls: ['./textreader.component.css']
})
export class TextreaderComponent {

  fileToRead: File | null = null
  @Output() contenFile = new EventEmitter()

constructor(private _readerService: ReadertexetService){

}

async readDoc(){
setTimeout(() => {
  if(this.fileToRead){
    let content: string | null = null
    try{

    }catch(err){
      console.log(err)
    }finally{

    }
  }
}, 0);
}

async handleFile(event:Event){
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.fileToRead = input.files[0];
    const content = await this._readerService.readWordDocument(this.fileToRead)
    this.contenFile.emit(content)
  }
}

}
