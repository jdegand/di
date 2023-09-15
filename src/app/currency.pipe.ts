import { inject, Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs';
import { CurrencyService } from './currency.service';
import { currency } from './currency.service';

@Pipe({
  name: 'currency',
  standalone: true,
})
export class CurrencyPipe implements PipeTransform {
  currencyService = inject(CurrencyService);

  transform(price: number, currencyCode: string) {

    const curr = currency.find(c => c.code === currencyCode);

    return this.currencyService.symbol$.pipe(
      map((s) => `${String(price)} ${curr?.symbol}`)
    );
  }
}
