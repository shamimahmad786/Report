import { Pipe, PipeTransform, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeSvg'
})
export class SafeSvgPipe implements PipeTransform {

  constructor(private sanitizer: Sanitizer, private sanitized: DomSanitizer) { }

  transform(html) {
    return this.sanitized.bypassSecurityTrustHtml(html);
  }
}


@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value, show: string[], remove: string[]): any {
    let keys = [];
    for (let key in value) {
      keys.push(key);
    }
    if (show.length > 0) {
      keys =  keys.filter((el) => show.includes(el));
    }
    if(remove.length > 0)
    {
      keys =  keys.filter((el) => !remove.includes(el));
    }
    return keys;
  }
}
