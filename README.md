# Di

[Angular Challenges](https://github.com/tomalaforge/angular-challenges) #16 Dependency Injection

## Directions

To successfully complete this challenge, you will need to have a good understanding of how Dependency Injection works inside Angular.

The goal is to provide the CurrencyService at the row level, so that each row displays the correct currency. Currently, the CurrencyService is only provided at the table level, which results in an error as the same currency is displayed for each row, despite each product having a different currency.

One way to achieve this is by adding a second argument to the pipe, but this is not allowed.

### Statement
Your task is to display the correct currency for each row.

### Constraints:
You cannot modify the pipe.
You cannot wrap the row inside a component, as this will break the layout.

## Thoughts

- If you wrap each row inside another component, then you can initialize a store for each wrapper component. 
- I modified the pipe just to see what it would take to achieve the result.  
- I passed currencyCode to the pipe.  I was able to display the currencyCode but displaying the symbol doesn't seem possible without a dictionary / lookup object.  
- The `currency` object is already exported so I imported it and used the find method to get the symbol in the html.
- I tried to use patchState inside the transform pipe but you get `Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '1000 US$'. Current value: '1000 €'.` 
- Also, "Writing to signals is not allowed in a `computed` or an `effect` by default. Use `allowSignalWrites` in the `CreateEffectOptions` to enable this inside effects."
- Could you combine the component store and a directive and eliminate the currency service and pipe?  
- `currency-code.directive` is my exploration of this idea.  I was influenced by this [Angular Snippet](https://angularsnippets.dev/snippets/stateful-directive-with-output/).

## Useful Resources

- [Stack Overflow](https://stackoverflow.com/questions/36816788/how-do-i-call-an-angular-2-pipe-with-multiple-arguments) - how do I call angular pipe with multiple arguments
- [Stack Overflow](https://stackoverflow.com/questions/39038791/inheritance-and-dependency-injection) - inheritance and dependency injection
- [Stack Overflow](https://stackoverflow.com/questions/34887596/angular-extending-services-and-passing-parameters) - angular extending services and passing parameters
- [NgJournal](https://ng-journal.com/blog/2022-12-08-ngrx-component-store-meets-facade-pattern/) - component store meets facade pattern
- [Angular University](https://blog.angular-university.io/angular-2-redux-ngrx-rxjs/) - angular redux ngrx rxjs
- [Stack Overflow](https://stackoverflow.com/questions/39570247/how-can-i-call-a-service-from-a-directive-in-angular-2) - how can i call a service from a directive in angular 2
- [Stack Overflow](https://stackoverflow.com/questions/71619121/how-to-inject-a-service-into-a-directive-in-angular-13) - how to inject a service into a directive in angular 13
- [Stack Overflow](https://stackoverflow.com/questions/15569168/can-i-inject-a-service-into-a-directive-in-angularjs) - inject a service into a directive
- [Dev.to](https://dev.to/armandotrue/series/22266) - Superpowers with Directives and Dependency Injection Series' Articles
- [Angular Snippets](https://angularsnippets.dev/snippets/stateful-directive-with-output/) - stateful directive with output
- [Stack Overflow](https://stackoverflow.com/questions/43124998/how-to-pass-values-to-directive-in-angular) - how to pass values to directive in angular
- [YouTube](https://www.youtube.com/watch?v=SK-xlWW4pOM) - Custom Directive in Angular - Attribute Directive | Structural Directive | Component Directive
