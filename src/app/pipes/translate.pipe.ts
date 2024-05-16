import { Pipe, PipeTransform } from "@angular/core";
import { TranslatorService } from "../core/services/translator.service";

@Pipe({
    name: "translate",
    pure: false
})
export class TranslationPipe implements PipeTransform {
  constructor(private translatorService: TranslatorService){}

  transform(translationString: string): string {
    return this.translatorService.getTranslation(translationString);
  }
}