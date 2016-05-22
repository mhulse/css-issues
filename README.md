# CSS Bullets! 🔫

A copy and paste selection of handy CSS code snippets. Useful for when quick, drop-in, solutions are needed.

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

Disable responsive images:

```css
.none { max-width: none; }
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

… for a responsive version of the above, change the `overflow` on `:last-child` to `visible` and add a media query (at desired breakpoint) to handle the “columnization” of the elements:

```css
.bunch > :last-child { overflow: visible; }
@media all and (min-width: 768px) {
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

### Aliased images

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
    font-size: 1.8rem;
    line-height: 2rem;
    border: none transparent;
    box-shadow: none;
    border-radius: .3rem;
    padding: 1rem 2rem;
    -webkit-tap-highlight-color: transparent;
}
.button::-moz-focus-inner {
    padding: 0;
    border: 0;
}
.button,
.button:visited {
    color: #fff;
    background-color: #0f0077;
}
.button:visited:hover,
.button:focus,
.button:focus:hover,
.button:hover,
.button:active {
    text-decoration: none;
    color: #fff;
    box-shadow: none;
    background: #d68100;
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
    box-shadow: 0 0 0 .2rem rgba(0, 0, 0, .15) inset,
                0 0 1rem rgba(0, 0, 0, 0.25) inset;
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

