# CSS Tidbits

CSS tidbits I’ve found useful over the years.

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
