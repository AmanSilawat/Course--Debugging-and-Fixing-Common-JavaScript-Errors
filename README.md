# Course--Debugging-and-Fixing-Common-JavaScript-Errors

## Debugging JavaScript
### Common JavaScript Quirks

Question: '😊'.length
Asnwer: A2

Description: String.prototype.length returns the number of bytes rather than the number of characters. Unicode characters, like emoji, require two bytes.

---

Question: 0.1 + 0.2
Asnwer: 0.3000000000004

Description: javaScript's floating point operations have issue with overflow rounding precision.

---

Question: new Date(2016, 5, 31)
Asnwer: 2016 July 1

Description: Months are zero based in Date. This specifies june 31, which overflows to july 1.


---

Question: new Array(0, 1, Array(2))
Asnwer: [0, 1, [undefined, undefined]]

Description: Instantiating an Array with multiple arguments creates an Array from those values. However a single argument only specifies the length.


---

Question: [10, 5, 1].sort()
Asnwer: [1, 10, 5]

Description: Array.prototype.sort's default comparator assumes String operations. All values are coerced and compared as Strings.


---


blackBox Script
Errors will never be seen in the console.
chrome -> in source -> open a script file -> right click -> click on "Blackbox script"