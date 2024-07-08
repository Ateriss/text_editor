
import { Component } from '@angular/core';
import { Editor } from 'tinymce';
import { EditorTextComponent } from '../components/editor/editor.component';
import { TagsboxComponent } from '../components/tagsbox/tagsbox.component';
import { TextreaderComponent } from 'src/app/shared/components/textreader/textreader.component';


@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css'],
  standalone: true,
  imports: [
    EditorTextComponent, 
    TagsboxComponent,
    TextreaderComponent]
})
export class TextEditorComponent {
  contentFile: string = ''
  contentToExport:string = ''

  async export(){
    let header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
            "xmlns:w='urn:schemas-microsoft-com:office:word' "+
            "xmlns='http://www.w3.org/TR/REC-html40'>"+
            "<head><meta charset='utf-8'><title></title></head><body>";
    let footer = "</body></html>";
    let sourceHTML = header+this.contentToExport+footer;
    let source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    let fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'document.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
      
  }

  setContent(content:string){
    this.contentToExport = content
  }
}
