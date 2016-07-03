---
title: Attribute selectors
category: selectors
---

```css
/*
<div value>Example</div>
<div value="foo">Example</div>
<div value="foo baz">Example</div>
*/

[value] { … }        /* Attribute exists */
[value="foo"] { … }  /* Exact value */
[value*="foo"] { … } /* Contains anywhere */
[value~="foo"] { … } /* Space-separated contains */
[value^="foo"] { … } /* Starts with */
[value=|"foo"] { … } /* Dash-separated contains */
[value$="foo"] { … } /* Ends with */
/* Adding an i (or I) before the closing bracket causes the value to be compared case-insensitively. */
```
