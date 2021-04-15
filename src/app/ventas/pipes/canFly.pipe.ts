import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'volar'
})

export class CanFlyPipe implements PipeTransform{
  transform( flagVolar: boolean): string{
    return flagVolar === true ? 'puede volar' : 'no puede volar'
  }
}
