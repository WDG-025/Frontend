# JavaScript Array Methods: Mutating vs Immutable Reference

This reference guide categorizes JavaScript array methods based on whether they **mutate** (modify) the original array or create a **copy** (immutable).

## 🔴 Methods That **MUTATE** the Original Array

These methods modify the original array directly and cannot be undone.

### Basic Array Operations

| Method       | Description                    | Returns                   | Example                   |
| ------------ | ------------------------------ | ------------------------- | ------------------------- |
| `.push()`    | Adds elements to the end       | New length                | `arr.push('item')`        |
| `.pop()`     | Removes element from the end   | Removed element           | `arr.pop()`               |
| `.shift()`   | Removes element from the start | Removed element           | `arr.shift()`             |
| `.unshift()` | Adds elements to the start     | New length                | `arr.unshift('item')`     |
| `.reverse()` | Reverses array in place        | The reversed array        | `arr.reverse()`           |
| `.splice()`  | Removes/replaces/adds elements | Array of deleted elements | `arr.splice(2, 1, 'new')` |

### Array Iteration

| Method       | Description                        | Returns     | Example                                  |
| ------------ | ---------------------------------- | ----------- | ---------------------------------------- |
| `.forEach()` | Executes function for each element | `undefined` | `arr.forEach(item => console.log(item))` |

> **Note:** `.forEach()` doesn't directly mutate, but allows you to modify elements if you explicitly change them within the callback.

## 🟢 Methods That **CREATE A COPY** (Immutable)

These methods return a new array or value without modifying the original.

### Traditional Immutable Methods

| Method      | Description                                    | Returns                | Example                  |
| ----------- | ---------------------------------------------- | ---------------------- | ------------------------ |
| `.slice()`  | Extracts section into new array                | New array              | `arr.slice(1, 3)`        |
| `.join()`   | Creates string from elements                   | String                 | `arr.join('-')`          |
| `.map()`    | Creates new array with transformed elements    | New array              | `arr.map(x => x * 2)`    |
| `.filter()` | Creates new array with elements that pass test | New array              | `arr.filter(x => x > 5)` |
| `.find()`   | Returns first matching element                 | Element or `undefined` | `arr.find(x => x > 5)`   |
| `.some()`   | Tests if any element passes test               | Boolean                | `arr.some(x => x > 5)`   |
| `.every()`  | Tests if all elements pass test                | Boolean                | `arr.every(x => x > 0)`  |

### Modern Immutable Alternatives

| Method          | Description                        | Returns            | Example                      |
| --------------- | ---------------------------------- | ------------------ | ---------------------------- |
| `.toReversed()` | Modern alternative to `.reverse()` | New reversed array | `arr.toReversed()`           |
| `.toSpliced()`  | Modern alternative to `.splice()`  | New modified array | `arr.toSpliced(2, 1, 'new')` |

## 📋 Quick Reference Examples

### Mutating Methods

```javascript
const fruits = ['apple', 'banana', 'cherry'];

// These CHANGE the original array
fruits.push('date'); // fruits = ['apple', 'banana', 'cherry', 'date']
fruits.pop(); // fruits = ['apple', 'banana', 'cherry']
fruits.reverse(); // fruits = ['cherry', 'banana', 'apple']
```

### Immutable Methods

```javascript
const fruits = ['apple', 'banana', 'cherry'];

// These CREATE NEW arrays/values
const doubled = fruits.map((fruit) => fruit.toUpperCase()); // NEW: ['APPLE', 'BANANA', 'CHERRY']
const sliced = fruits.slice(1); // NEW: ['banana', 'cherry']
const filtered = fruits.filter((fruit) => fruit.length > 5); // NEW: ['banana', 'cherry']

// Original array is unchanged
console.log(fruits); // Still: ['apple', 'banana', 'cherry']
```

## 💡 Best Practices

### The Golden Rule

> **Use `const` for arrays** - It prevents reassignment while still allowing mutation when needed, but prefer immutable methods to keep your original data safe!

### When to Use Each Type

**Use Mutating Methods When:**

- You want to modify the original array directly
- Memory efficiency is critical
- You're building up an array incrementally

**Use Immutable Methods When:**

- You want to preserve the original data
- Working with functional programming patterns
- You need to chain multiple operations
- Working with React or other libraries that expect immutable updates

### Modern JavaScript Trend

There's a clear trend toward **immutable methods** in modern JavaScript. The newer `.toReversed()` and `.toSpliced()` methods were added specifically to provide safer alternatives that don't mutate the original array.

## ⚠️ Common Gotchas

1. **String Comparison Trap**: `'2' > '10'` returns `true` because strings are compared character by character
2. **Reference vs Value**: Objects and arrays are passed by reference, so mutations affect all references
3. **Chaining**: Only immutable methods can be safely chained without side effects

```javascript
// Safe chaining with immutable methods
const result = arr
  .filter((x) => x > 5)
  .map((x) => x * 2)
  .slice(0, 3);

// Dangerous - mutating methods in chain
const dangerous = arr
  .reverse() // Mutates original!
  .slice(0, 3);
```
