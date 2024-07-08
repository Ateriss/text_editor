import { Injectable } from '@angular/core';
import * as JSZip from 'jszip';
// import * as mammoth from 'mammoth';

@Injectable({
  providedIn: 'root'
})
export class ReadertexetService{

  constructor() { }

  async readWordDocument(file: File): Promise<string> {
    // Verificar si el archivo es .docx
    if (!file.name.endsWith('.docx')) {
      throw new Error('Por favor seleccione un archivo .docx');
    }
  
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const arrayBuffer = event.target!.result as ArrayBuffer;
  
          // Descomprimir el archivo .docx con JSZip
          const zip = await JSZip.loadAsync(arrayBuffer);
  
          // Extraer el contenido del documento XML (word/document.xml)
          const contentXml = await zip.file('word/document.xml')!.async('string');
  
          // Procesar el contenido XML para extraer el texto
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(contentXml, 'application/xml');
          const paragraphs = xmlDoc.getElementsByTagName('w:t');
          
          let text = '';
          for (let i = 0; i < paragraphs.length; i++) {
            text += paragraphs[i].textContent + '\n';
          }
  
          resolve(text.trim()); // Devolver el texto sin espacios adicionales al inicio y al final
        } catch (error) {
          reject(error);
        }
      };
  
      reader.readAsArrayBuffer(file);
    });
  }
}
