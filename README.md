# CSS FTW!

CSS tidbits I’ve found useful over the years.

## Headings

Don’t display the title if none given (semantically “untitled”, h/t [camen design](http://camendesign.com/)):

```css
h1:empty { display: none; }
```

## Utility

Better box model:

```css
*,
*::before,
*::after {
	-webkit-box-sizing: border-box;
	   -moz-box-sizing: border-box;
	        box-sizing: border-box;
}
```

Clearing floats:

```css
.clear::after {
	content: "";
	display: table;
	clear: both;
}
```

## Layout

Something on left, something on right, fluid:

```css
/*
<div class="bunch">
	<(any element)>
	<(any element)>
</div>
*/

.bunch::after {
	content: "";
	display: table;
	clear: both;
}
.bunch > :first-child {
	margin-right: 10px;
	float: left;
	display: inline;
}
.bunch > :last-child { overflow: auto; }
.bunch > :last-child > :first-child { margin-top: 0; }
.bunch > :last-child > :last-child { margin-bottom: 0; }
```
