import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(image: string): string {
    if(image===null){
      return '../../../../assets/img/book2.jpg'
    }
    else{
      return image
    }
  }

}
