import { oTag } from './../../../../shared/Interfaces';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { EditorComponent } from '@tinymce/tinymce-angular';
import tinymce, { TinyMCE } from 'tinymce';
import { dataTags } from './config';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  standalone: true,
  imports:[EditorComponent]
})
export class EditorTextComponent implements OnInit, OnChanges {
  @Input() FileContent:string = ''
  @Output() content= new EventEmitter()
  
  @ViewChild(EditorComponent) tinyEditor!: EditorComponent;
  @ViewChild('EnterArea') enterArea!: ElementRef

  tags: {[key:string]:oTag} = dataTags
  
  tinyKey: string = 'mr7lo3z1un7vow5oytvrv9ja7opr5h2zrrmeea7lo45k2fyu'
  initEdit: EditorComponent['init'] = {
     plugins: 'anchor  emoticons image  lists  table visualblocks wordcount   autocorrect  inlinecss',
     toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | image  table | lists align lineheight ',
     language: 'es',
     emoticons_append: this.tags,
     content_css: "./editor.component.css"
  };
  constructor(){

  }

  handleChangesText(event:string){
    let text = event
    let tags = Object.values(this.tags)
    tags.map(tag =>{
      text = text.replace(`${tag.char.trim()}`, tag.tagName)
    })
    this.content.emit(text)
  }



  ngOnChanges(changes: SimpleChanges): void {
    if(changes['FileContent'] && this.FileContent){
      this.setTextOnTinyCME(this.FileContent)
    }
  }

  ngOnInit(): void {

  }

  setTextOnTinyCME(newText:string){
    this.tinyEditor.writeValue(newText)
  }

  getText(){
    this.handleChangesText(this.tinyEditor.editor.getContent())
  }

  



}
