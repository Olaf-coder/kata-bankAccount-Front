import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'hideZero'
})
export class PipeHideZero  implements PipeTransform{

    transform(value: number ): any {
        return value == 0 ? undefined : value
    }

}
