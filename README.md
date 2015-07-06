# CSS awesomeness?

CSS tidbits I’ve found useful over the years.

## Root and body

Full page `body` and `html`:

```css
html,
body { overflow-x: hidden; }
html {
	height: 100%;
	overflow-y: scroll;
	position: relative;
}
body { min-height: 100%; }
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
