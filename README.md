# CSS Bullets! 🔫

A copy and paste selection of handy CSS code snippets. Useful for when quick, drop-in, solutions are needed.

## [Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

```css
[value] { … }        /* Attribute exists */
[value="foo"] { … }  /* Exact value */
[value*="foo"] { … } /* Contains anywhere */
[value~="foo"] { … } /* Space-separated contains */
[value^="foo"] { … } /* Starts with */
[value=|"foo"] { … } /* Dash-separated contains */
[value$="foo"] { … } /* Ends with */
/* Adding an i (or I) before the closing bracket causes the value to be compared case-insensitively. */
```

## Semantic/contextual colors

### Bootstrap 3

Name | Example | Base | Background | Border
:-:  | :-:     | :-:  | :-:        | :-:
Alert Success | ![](https://cdn.rawgit.com/mhulse/css-bullets/master/colors/bootstrap-3-alert-success.svg) | `#3c763d` | `#dff0d8` | `#d6e9c6`
Alert Info | ![](https://cdn.rawgit.com/mhulse/css-bullets/master/colors/bootstrap-3-alert-info.svg) | `#31708f` | `#d9edf7` | `#bce8f1`
Alert Warning | ![](https://cdn.rawgit.com/mhulse/css-bullets/master/colors/bootstrap-3-alert-warning.svg) | `#8a6d3b` | `#fcf8e3` | `#faebcc`
Alert Danger | ![](https://cdn.rawgit.com/mhulse/css-bullets/master/colors/bootstrap-3-alert-danger.svg) | `#a94442` | `#f2dede` | `#ebccd1`

## Font stacks

* **Sans-serif:** `Arial, sans-serif`
* **Serif:** `Cambria, Georgia, serif`
* **Monospace:** `monospace, serif`, `Consolas, Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif`

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
	 -khtml-box-sizing: border-box;
	   -moz-box-sizing: border-box;
	    -ms-box-sizing: border-box;
	     -o-box-sizing: border-box;
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

Older version:

```css
.fix { *zoom: 1; }
.fix::before,
.fix::after {
	content: " ";
	display: table;
}
.fix::after { clear: both; }
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

```css
.nix,
.nix:focus,
.nix:hover,
.nix:active {
	color: rgba(0, 0, 0, 0);
	text-decoration: none;
	outline: 0;
	border: 0;
}
```

Fix margin collapse:

```css
.force {
	margin-top: -1px;
	margin-bottom: -1px;
	padding: 1px 0;
}
```

Don’t allow words to break out of containers:

```css
.nono {
	word-wrap: break-word;
	overflow-wrap: break-word;
	/*
	-ms-word-break: break-all;
	    word-break: break-all;
	    word-break: break-word;
	*/
}
```

Simple solution for responsive thingys (like `<table>`s):

```css
/*
@see http://www.maxdesign.com.au/2013/03/22/simple-responsive-table/
@see http://creativeandcode.com/simple-solution-for-responsive-tables/
@see http://stackoverflow.com/a/10122689/922323
*/

/*
<div class="scroll"><img ...></div>
<div class="scroll"><table></table></div>
*/

.scroll {
	width: 100%;
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;
}
.scroll img:first-of-type {
	max-width: none;
	/*display: block;*/
}
.scroll > *,
.scroll img:first-of-type {
	margin-top: 0;
	margin-bottom: 0;
	-webkit-transform: translateZ(0);
}
```

## Media

Responsive media elements that retain aspect ratio:

```css
/*
<div class="mm">
	<video ...></video>
</div>

<div class="mm tv"><iframe ...></iframe></div>
*/

.mm {
	height: 0;
	padding-bottom: 56.25%; /* 16:9 = (9 / 16 = .5625) x 100 */
	position: relative;
	overflow: hidden;
}
.mm iframe,
.mm object,
.mm embed,
.mm video {
	border: 0;
	width: 100% !important;
	height: 100% !important;
	max-width: none;
	position: absolute;
	top: 0;
	left: 0;
}
.mm.theatre { padding-bottom: 59.171597633136%; } /* 1.69:1 = (1 / 1.69 = .59171597633136) x 100 */
.mm.slide { padding-bottom: 66.666666666667%; } /* 3:2 = (2 / 3 = .66666666666667) x 100 */
.mm.tv { padding-bottom: 75%; } /* 4:3 = (3 / 4 = .75) x 100 */
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

## Quotes

Using [FontAwesome](http://fontawesome.io/):

```css
blockquote::before,
blockquote::after {
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    font-size: 6rem;
    color: rgba(0, 0, 0, .1);
    line-height: 1;
    position: absolute;
}
blockquote::before {
    top: -2.5rem; /*  Half `blockquote` vertical margin. */
    left: -4rem; /* Same as the `blockquote` horizontal margin. */
    content: "\f10d";
}
blockquote::after { content: "\f10e"; }
```

## Layout

Simple two-column float, fixed left sidebar:

```css
/*
Simple two-column:
<div class="box">
	<(any element)>
	<(any element)>
</div>
*/

.box > :first-child { display: none; }
@media (min-width: 737px) {
	.box::after {
		content: "";
		display: table;
		clear: both;
	}
	.box > :first-child {
		width: 300px;
		float: left;
		display: inline;
	}
	.box > :last-child { margin-left: 340px; }
}
```

Something on left, something on right, fluid:

```css
/*
Best for photos with captions to right or left:
<div class="bunch bunch-[right|left]">
	<(any element)>
	<(any element)>
</div>
*/

.bunch { margin: 20px 0; }
.bunch::after {
	content: "";
	display: table;
	clear: both;
}
.bunch.bunch-left > :first-child {
	margin: 0 20px 0 0;
	float: left;
	display: inline;
}
.bunch.bunch-right > :first-child {
	margin: 0 0 0 20px;
	float: right;
	display: inline;
}
@media (min-width: 737px) {
	.bunch.bunch-left > :first-child { margin-right: 40px; }
	.bunch.bunch-right > :first-child { margin-left: 40px; }
}
.bunch > :last-child {
	margin: 0;
	overflow: auto;
}
.bunch > * > :first-child { margin-top: 0; }
.bunch > * > :last-child { margin-bottom: 0; }
```

… for a responsive version of the above, change the `overflow` on `:last-child` to `visible` and add a media query (at desired breakpoint) to handle the “columnization” of the elements:

```css
.bunch > :last-child { overflow: visible; }
@media (min-width: 768px) {
	.bunch > :last-child { overflow: auto; }
}
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
.split { position: relative; }
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

Calc columns:

```css
/*
<div elements="left">
	<div>Will  be sidebar to left</div>
	<div>...</div>
</div>
<div elements="right">
	<div>Will  be sidebar to right</div>
	<div>...</div>
</div>
*/

[elements]::after {
	content: "";
	display: table;
	clear: both;
}
[elements] > * {
	width: 27rem;
	float: left;
}
[elements="left"] > :first-child { margin-right: 1rem; }
[elements="left"] > :last-child { width: calc(100% - 28rem); }
[elements="right"] > :first-child { width: calc(100% - 28rem); }
[elements="right"] > :last-child { margin-left: 1rem; }
```

### Horizontal rules:

```css
hr,
.hr {
	border: 0;
	border-top: 1px solid #999;
	height: 0;
	margin: 15px 0 20px;
	padding: 0;
	-webkit-box-sizing: content-box;
	   -moz-box-sizing: content-box;
	    -ms-box-sizing: content-box;
	     -o-box-sizing: content-box;
	        box-sizing: content-box;
}
```

### Printing

Exact color printing:

```css
/* http://stackoverflow.com/a/15253634/922323 */
*,
*:before,
*:after { -webkit-print-color-adjust: exact; }
```

Grayscale:

```css
[container="print"] * {
    -webkit-filter: grayscale(100%);
       -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
         -o-filter: grayscale(100%);
            filter: grayscale(100%);
}
```

### Buttons

```css
/**
 * Simple button class.
 *
 * I wasn't able to normalize line-height of `<input type="buton">` in Firefox.
 * Conclusion: Don't use `<input>` for buttons.
 *
 * <button class="button">Next</button>
 * <a class="button" href="#">Previous</a>
 * <button class="button button-cancel">Cancel</button>
 *
 * @see https://github.com/yui/pure
 */

.button {
	font-weight: normal;
	text-align: center;
	line-height: normal;
	vertical-align: baseline;
	display: block;
	zoom: 1;
	cursor: pointer;
	letter-spacing: .08em;
	-webkit-user-drag: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	mix-blend-mode: multiply;
	font-size: 14px;
	line-height: 1;
	border: none transparent;
	box-shadow: none;
	border-radius: 3px;
	padding: 10px 20px;
	-webkit-tap-highlight-color: transparent;
}
.button::-moz-focus-inner {
	padding: 0;
	border: 0;
}
.button,
.button:visited {
	color: #fff;
	background-color: #138d9c;
}
.button:visited:hover,
.button:focus,
.button:focus:hover,
.button:hover,
.button:active {
	text-decoration: none;
	color: #fff;
	box-shadow: none;
	background: #138d9c;
}
.button:hover,
.button:focus {
	background-image: linear-gradient(
	    transparent,
	    rgba(0, 0, 0, .05) 40%,
	    rgba(0, 0, 0, .1)
	);
}
.button:focus { outline: 0; }
.button:active {
	box-shadow: 0 0 0 .2em rgba(0, 0, 0, .15) inset,
	            0 0 1em rgba(0, 0, 0, 0.25) inset;
}
.button[disabled],
.button.button-disabled,
.button.button-disabled:visited,
.button.button-disabled:visited:hover,
.button.button-disabled:focus,
.button.button-disabled:focus:hover,
.button.button-disabled:hover,
.button.button-disabled:active {
	border: none;
	background-image: none;
	filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
	filter: alpha(opacity=40);
	-khtml-opacity: .40;
	  -moz-opacity: .40;
	   -ms-opacity: .40;
	    -o-opacity: .40;
	       opacity: .40;
	cursor: not-allowed;
	box-shadow: none;
}
.button.button-hidden { display: none; }

.button.button-cancel,
.button.button-cancel:visited { background-color: #ec7263; }
.button.button-cancel:visited:hover,
.button.button-cancel:focus,
.button.button-cancel:focus:hover,
.button.button-cancel:hover,
.button.button-cancel:active { background: #ec7263; }
```

### iOS callout on click

Disable completely:

```css
* {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-touch-callout: none;
}
```

But probably best to do it on an as-needed basis.

### Font icons

Using FontAwesome:

```css
a::before {
	font-family: FontAwesome;
	line-height: 0;
	position: relative;
	font-style: normal;
	font-weight: normal;
	text-decoration: inherit;
	/*display: inline-block;*/
	content: "\f177\00a0";
}
```

Using custom attribute:

```css
/* http://css-tricks.com/examples/IconFont/ */
[data-icon]:before {
	font-family: FontAwesome;
	font-size: inherit;
	font-style: normal;
	font-weight: normal;
	content: attr(data-icon);
	speak: none;
}
```

### Multi-line padded text

```css
/* <span><span>Some text</span></span> */
.padded {
	color: #000;
	padding: 10px;
	display: inline; /* If not already. */
	background: rgba(255, 255, 255, .9);
	box-decoration-break: clone;
}
.padded > span { position: relative; } /* Prevents background overlap on wrapped lines. */
```

### Selection

```css
::-moz-selection {
    background: rgb(49, 112, 143, .55);
    text-shadow: none;
}

::selection {
    background: rgb(49, 112, 143, .55);
    text-shadow: none;
}
```

### Hero stuff

Gradient overlay:

```css
/*
<div class="hero">
	<div>
		<div>
			<h3>…</h3>
			<p>…</p>
		</div>
	</div>
	<img src="http://www.placehold.it/1000x500">
</div>
*/

.hero {
	margin: 20px 0;
	overflow: hidden;
	position: relative;
}
.hero > div {
	background: linear-gradient(
		to top,
		rgba(19, 141, 156, 1) 0,
		rgba(19, 141, 156, 0.5) 30%,
		rgba(19, 141, 156, 0) 75%
	);
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 2;
}
/* Example: */
.hero > div > div {
	padding: 20px;
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
}
.hero > div > div * { color: #fff; }
.hero > div > div > :first-child { margin-top: 0; }
.hero > div > div > :last-child { margin-bottom: 0; }
.hero a,
.hero a:visited {
	color: #09474C;
	text-decoration: none;
}
.hero a:visited:hover,
.hero a:focus,
.hero a:focus:hover,
.hero a:hover,
.hero a:active {
	color: #031D1C;
	text-decoration: none;
}
```

Nice shadow for use with hero image text (h/t @patflannery):

```css
.head { text-shadow: 0 0 0.1em #000, 0 0 0.025em #000, 0 0 0.025em #000; }
```

### Images

Responsive images:

```css
img {
	border: 0;
	max-width: 100%;
	height: auto;
	vertical-align: top;
}
```

Disable responsive images:

```css
.none { max-width: none; }
```

Utilities:

```css
a img {
	border: 0;
	outline: 0;
}
.imgc {
	margin: 0 auto;
	display: block;
}
.imgr {
	float: right;
	margin-left: 10px;
}
.imgl {
	float: left;
	margin-right: 10px;
}
.imgr,
.imgl { margin-bottom: 10px; }
@media screen and (max-width: 48em) {
	.imgr,
	.imgl {
		float: none;
		display: block;
		margin: 0 auto;
	}
}
```

Images inline with copy (width of container based on image’s inherent width):

```css

/*
<figure class="fig">
	<img src="http://www.placehold.it/150x150">
	<figcaption class="figcap">
		<p>This is the caption.</p>
	</figcaption>
</figure>
 */

.fig {
	margin: 0 auto;
	display: table;
}
.fig img {
	display: block;
	width: 100%;
}
.fig .figcap {
	display: table-caption;
	caption-side: bottom;
}
```

Same as above, but using hard-coded width (allows for image to be as big as desired, which can be good for retina displays):

```
/*
<figure class="media">
	<img src="foo.jpg">
	<figcaption>
		<p>This is the caption.</p>
	</figcaption>
</figure>
*/

.media { width: 150px; }
.media img {
	max-width: 100%;
	display: block;
	margin: 0 auto;
}
.media-right {
	margin: 0 0 20px 20px;
	float: right;
	display: inline;
}
.media-left {
	margin: 0 20px 20px 0;
	float: left;
	display: inline;
}
```

Aliased images:

```css
[pixelated] {
    image-rendering:optimizeSpeed;             /* Legal fallback */
    image-rendering:-moz-crisp-edges;          /* Firefox        */
    image-rendering:-o-crisp-edges;            /* Opera          */
    image-rendering:-webkit-optimize-contrast; /* Safari         */
    image-rendering:optimize-contrast;         /* CSS3 Proposed  */
    image-rendering:crisp-edges;               /* CSS4 Proposed  */
    image-rendering:pixelated;                 /* CSS4 Proposed  */
    -ms-interpolation-mode:nearest-neighbor;   /* IE8+           */
}
```

### Search box

![](https://cloud.githubusercontent.com/assets/218624/13653138/c0f8ad6c-e604-11e5-9eca-06d2978cf320.png)

```css
/*
<form role="search" method="get" action="http://www.google.com/search">
	<input type="hidden" name="sitesearch" value="washington.edu">
	<div class="input-group">
		<label>
			<span class="off">Search:</span>
			<input type="search" name="q" placeholder="Search …" autocomplete="off">
		</label>
		<button type="submit"><i class="fa fa-search"></i></button>
	</div>
</form>
*/

.input-group {
	position: relative;
	background: #fff;
	border-radius: .5rem;
}
.input-group input,
.input-group button {
	font-size: 1.6rem;
	line-height: 2em;
	height: 2em;
	-webkit-appearance: none;
	   -moz-appearance: none;
	        appearance: none;
	-webkit-background-clip: padding;
	   -moz-background-clip: padding;
	        background-clip: padding-box;
	display: block;
	background: transparent;
	padding: 0;
	border-radius: 0;
	box-shadow: none;
	border: 0 none;
}
.input-group input:focus,
.input-group input:active { outline: 0; }
.input-group input::-webkit-search-decoration,
.input-group input::-webkit-search-cancel-button,
.input-group input::-webkit-search-results-button,
.input-group input::-webkit-search-results-decoration { display: none; }
.input-group input { margin: 0 2.5em 0 .5em; }
.input-group button {
	white-space: nowrap;
	position: absolute;
	width: 2.5em;
	top: 50%;
	-webkit-transform: translateY(-50%);
	   -moz-transform: translateY(-50%);
	    -ms-transform: translateY(-50%);
	     -o-transform: translateY(-50%);
	        transform: translateY(-50%);
	right: 0;
}
```