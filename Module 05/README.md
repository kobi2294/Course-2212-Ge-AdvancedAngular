## Module 05 - NgRx Part 2, ScSS, CDK and Angular Material

### Projects:
|     |     |
| --- | --- |
| [quiz-with-ngrx](./quiz-with-ngrx/) | A practical example using NgRX |
| [fun-with-mat](./fun-with-mat/) | Introduction to Angular Material, ScSS and the CDK |

### Working with immutable data
* How to define immutable entity?
  * We saw that we can create immutable entities by defining an interface where each property is `readonly`
* How to derive new object from existing one?
  * We saw that we can use several javscript tools to help us
  * Modifying object property using the spread operator (`...`) where we only specifiy the changed property
  
```javascript
newObj = {...oldObj, prop1: newValue}
```

  * Add item to array using the spread operator on arrays, so we create a new array which contains all the elements of the original array, with the new item.

```javascript
newArray = [...oldArray, newValue];
newArray2 = [newValue, ...oldArray];
```

  * Change item in array using either `slice` or `map`
  * Remove item from array using either `slice` or `filter`
* We saw how to create helper functions to make our code more readable.

### Redux and NgRx
* We saw how to define actions and how to group them under a namespace
* We saw how to define `on` parts in the reducer, that respond to specific actions and calculate the next state
* We saw how to dispatch actions from the components
* We saw how to define a hierarchy of selectors
    - We used `createFeatureSelector` to define the root selector
    - We used `createSelector` to create a selector from other more primitive selectors
* We saw how to use a selector to create observables which we can consume in the components


### ScSS and SaSS
* We talked about **CSS Preprocessors**
* We saw how to use `ScSS` in Angular
* We talked about `ScSS` variables 
* We talked about `ScSS` functions
* We saw how to use the `ScSS colors` library
* We talked about `ScSS` mixins
* We talked about `ScSS` partials
* We saw how to configure angular where to look for `ScSS` partials
* We saw how to debug `ScSS`

### Themeing Angular 
* We understood the concept of `Palette`
* We saw how to define a theme by selecting 4 values:
    * The Primary palette
    * The Secondary (Accent) palette
    * The Warn Palette (usually red...)
    * The Foreground and Background palletes (resulting from either light or dark theme).
* We saw how to run code that converts the selected theme into CSS variables

### The CDK
* Using Drag & Drop
* Using Virtual Scrolling
