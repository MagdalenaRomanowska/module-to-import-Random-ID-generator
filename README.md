### **General info**
- Random ID generator module that creates by default 10-digits ID (mixed letters and numbers).
- One can change amount of digits by giving the number in: 
```javascript
randomID();
```
for example 
```javascript
randomID(25);
```

### Installation
- With yarn: 
```javascript
yarn add @magdalenaromanowska/randomid-generator
```
- With npm: 
```javascript
npm i @magdalenaromanowska/randomid-generator
```

### Usage
Import in file: 
```javascript
const randomID = require('@magdalenaromanowska/randomid-generator');
```
And then for example:
```javascript
console.log(randomID());
```
it will give 10-digits ID.
```javascript
console.log(randomID(2));
```
it will give 2-digits ID.
```javascript
console.log(randomID(35));
```
it will give 35-digits ID.

### Examples of 10-digits ID:
- zmHsXOmtqN,
- ImfrtZ98Se,
- ysNRKjjgdS.
