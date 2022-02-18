import { Pipe, PipeTransform } from '@angular/core';

// This is a hack to get svg filters to work in safari and angular
// If you don't include the full url, the filters and masks break
// Once the svg is generated, this is removed and the svg saved

@Pipe({
  name: 'urlfix'
})
export class UrlFixPipe implements PipeTransform {
  transform(path: string) {
    return `url(${window.location.href}#${path})`;
  }
}
