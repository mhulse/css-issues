# CSS Bullets! 🔫

A copy and paste selection of useful CSS (and some SCSS) code snippets (a.k.a “bullets”); useful when quick, drop-in, solutions are needed.

## Colors

Useful colors for callouts and/or standard UI bits:

```scss
$chili: #ffbaba;
$duck: #feefb3;
$frog: #dff2bf;
$ice: #bde5f8;
```

Use SCSS `darken($chili, 40%)` (or similar) for darker variations of the above colors.

## Fonts

Basic font stacks:

```scss
$sans: Arial, sans-serif;
$serif: Cambria, Georgia, serif;
$mono: monospace, serif; //Consolas, Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
```

## Root and body

Full page `body` and `html`:

```css
html { height: 100%; }
body { min-height: 100%; }
```

Overflow and scroll (useful for mobile web apps):

```css
html,
body { overflow-x: hidden; }
html { overflow-y: scroll; }
```

## Links

```css
a,
a:visited {
	color: red;
	text-decoration: none;
}
a:visited:hover,
a:focus,
a:focus:hover,
a:hover,
a:active {
	color: blue;
	text-decoration: underline;
}
```

## Headings

Don’t display the title if none given (semantically “untitled”, h/t [camen design](http://camendesign.com/)):

```css
h1:empty { display: none; }
```

## Typography

Multi-line padded text:

```css
/*
<span><span>Some text</span></span>
*/

span {
	padding: 10px;
	display: inline; /* If not already. */
	background: rgba(255, 255, 255, .9);
	-webkit-box-decoration-break: clone;
	   -moz-box-decoration-break: clone;
	    -ms-box-decoration-break: clone;
	     -o-box-decoration-break: clone;
	        box-decoration-break: clone;
}
span > span { position: relative; } /* Prevents background overlap on wrapped lines. */
```

## Utility

Better box model:

```css
*,
*::before,
*::after {
	-webkit-box-sizing: border-box;
	   -moz-box-sizing: border-box;
	    -ms-box-sizing: border-box;
	     -o-box-sizing: border-box;
	        box-sizing: border-box;
}
```

SCSS version:

```scss
* {
	
	&,
	&::before,
	&::after {
		    -webkit-box-sizing: border-box;
		       -moz-box-sizing: border-box;
		        -ms-box-sizing: border-box;
		         -o-box-sizing: border-box;
		            box-sizing: border-box;
	}
	
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

Older version:

```scss
.fix {
	
	*zoom: 1;
	
	&:before,
	&:after {
		content: " ";
		display: table;
	}
	
	&:after { clear: both; }
	
}
```

Remove completely, non-SEO or accessible-friendly:

```css
.gone {
	display: none !important;
	visibility: hidden;
}
```

Hide, but retain SEO and accessible friendliness:

```css
.off {
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
}
```

Hid visually, but retain space:

```css
.ghost { visibility: hidden; }
```

Remove link outline:

```scss
.nix {
	
	&,
	&:focus,
	&:hover,
	&:active {
		color: rgba(#000, 0);
		text-decoration: none;
		outline: 0;
		border: 0;
	}
	
}
```

Fix margin collapse:

```scss
.force {
	margin: {
		top: -1px;
		bottom: -1px;
	}
	padding: 1px 0;
}
```

Don’t allow words to break out of containers:

```scss
.nono {
	word-wrap: break-word;
	overflow-wrap: break-word;
	// -ms-word-break: break-all;
	// 	word-break: break-all;
	// 	word-break: break-word;
}
```

Disable responsive images:

```css
.none { max-width: none; }
```

Simple solution for responsive thingys (like `<table>`s):

```scss
// @see http://www.maxdesign.com.au/2013/03/22/simple-responsive-table/
// @see http://creativeandcode.com/simple-solution-for-responsive-tables/
// @see http://stackoverflow.com/a/10122689/922323

/*
<div class="scroll"><img ...></div>
<div class="scroll"><table></table></div>
*/

.scroll {
	
	width: 100%;
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;
	
	img:first-of-type {
		max-width: none;
		//display: block;
	}
	
	> *,
	img:first-of-type {
		margin-top: 0;
		margin-bottom: 0;
		-webkit-transform: translateZ(0);
	}
	
}
```

## Media

Responsive media elements that retain aspect ratio:

```scss
/*
<div class="mm">
	<video ...></video>
</div>

<div class="mm tv"><iframe ...></iframe></div>
*/

.mm {
	
	height: 0;
	padding-bottom: 56.25%; // 16:9 = (9 / 16 = .5625) x 100
	position: relative;
	overflow: hidden;
	
	iframe,
	object,
	embed,
	video {
		border: 0;
		width: 100% !important;
		height: 100% !important;
		max-width: none;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	&.theatre { padding-bottom: 59.171597633136%; } // 1.69:1 = (1 / 1.69 = .59171597633136) x 100
	
	&.slide { padding-bottom: 66.666666666667%; } // 3:2 = (2 / 3 = .66666666666667) x 100
	
	&.tv { padding-bottom: 75%; } // 4:3 = (3 / 4 = .75) x 100
	
}
```

## Logos and flags

SEO-freindly logo image:

```css
/*
<h6 class="logo"><a href="#">Company Name</a></h6>
*/

.logo {
	line-height: 1;
	text-indent: -999em;
	white-space: nowrap;
	width: 238px;
	height: 46px;
	margin: 0;
	padding: 0;
	overflow: hidden;
	-webkit-touch-callout: none;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	-webkit-tap-highlight-color: transparent;
}
.logo a {
	width: 100%;
	height: 100%;
	background-image: url(../images/logo@2x.png);
	background-repeat: no-repeat;
	background-size: cover;
	display: block;
}
.logo a:active,
.logo a:focus { outline: none; }
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

Centering absolutely:

```css
/* Horizontal centering: */
.logo {
	position: absolute;
	left: 50%;
	-webkit-transform: translateX(-50%);
	   -moz-transform: translateX(-50%);
	    -ms-transform: translateX(-50%);
	     -o-transform: translateX(-50%);
	        transform: translateX(-50%);
}

/* Vertical centerting: */
.logo {
	position: absolute;
	top: 50%;
	-webkit-transform: translateY(-50%);
	   -moz-transform: translateY(-50%);
	    -ms-transform: translateY(-50%);
	     -o-transform: translateY(-50%);
	        transform: translateY(-50%);
}

/* Both vertical and horizontal centering: */
.logo {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	   -moz-transform: translate(-50%, -50%);
	    -ms-transform: translate(-50%, -50%);
	     -o-transform: translate(-50%, -50%);
	        transform: translate(-50%, -50%);
}
```

Source order, primary column/content first (h/t [pmob](http://www.pmob.co.uk/temp/2colum_sourceorder_r.htm)):

```css
/*
<div class="group">
	<div><p>Primary content</p></div>
	<div><p>Secondary content</p></div>
</div>

<div class="group group-right">
	<div><p>Primary content</p></div>
	<div><p>Secondary content</p></div>
</div>
*/

.group::after {
	content: "";
	display: table;
	clear: both;
}
.group { margin: 0 0 0 280px; }
.group > div:first-child {
	border: 1px solid red;
	width: 100%;
	float: right;
}
.group > div:last-child {
	border: 1px solid red;
	width: 280px;
	margin: 0 0 0 -280px;
	float: left;
}
.group.group-right { margin: 0 280px 0 0; }
.group.group-right > div:first-child { float: left; }
.group.group-right > div:last-child {
	margin: 0 -280px 0 0;
	float: right;
}
```

Text on left, middle and right, same line:

```css
/*
<div class="split">
	<div>left</div>
	<div>middle</div>
	<div>right</div>
</div>
*/

.split::after {
	content: "";
	display: table;
	clear: both;
}
.split {
	position: relative;
	border: 1px solid red;
}
	.split > div {
		text-align: center;
		width: 100%;
		position: absolute;
		z-index: 1;
	}
	.split > div:first-child,
	.split > div:last-child {
		width: auto;
		position: relative;
		z-index: 2;
	}
	.split > div:first-child {
		text-align: left;
		float: left;
	}
	.split > div:last-child {
		text-align: right;
		float: right;
	}
```
