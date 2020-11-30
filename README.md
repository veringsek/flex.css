Flex.css is a pure CSS file with which a bundle of flex settings can be applied to HTML elements simply by assigning a shorthand class name.
## Usage
Import `flex.css`.
```html
<link rel="stylesheet" href="flex.css">
```
Add specific class names to those elements you want to apply flex settings to.
```html
<div class="flx-cfc">
    <span>Title</span>
    <span class="flx">There's some content here...</span>
    <input type="button" value="OK">
</div>
```
## Doc
Every class name in `flex.css` is composed by a series of letters in the form of ***`I`***`flx-`***`DJAW`***, with each letter representing its corresponding flex settings. 

||CSS rule
|---|---
|***`I`***|[display](###display)
|***`D`***|[flex-direction](###flex-direction)
|***`J`***|[justify-content](###justify-content)
|***`A`***|[align-items](###align-items)
|***`W`***|[wrap](###wrap)
### display

|display:|letter|example
|---|---|---
|flex|*empty*|**flex**-cfc
|inline-flex|`i`|**iflex**-cfc
### flex-direction

|flex-direction:|letter|example|description
|---|---|---|---
|row|`r`|flex-**r**fc|right
|column|`d`|flex-**d**fc|down
|row-reverse|`l`|flex-**l**fc|left
|column-reverse|`u`|flex-**u**fc|up
### justify-content
`f` for stretch (**f**ull).

|justify-content:|letter|example
|---|---|---
|start|`s`|flex-c**s**c
|center|`c`|flex-c**c**c
|end|`e`|flex-c**e**c
|stretch|`f`|flex-c**f**c
|space-between|`b`|flex-c**b**c
|space-around|`a`|flex-c**a**c
### align-items

|align-items:|letter|example
|---|---|---
|start|`s`|flex-cf**s**
|center|`c`|flex-cf**c**
|end|`e`|flex-cf**e**
|stretch|`f`|flex-cf**f**
|baseline|`b`|flex-cf**b**
### wrap

|wrap:|letter|example
|---|---|---
|nowrap|*empty*|flex-cfc
|wrap|`w`|flex-cfc**w**
|wrap-reverse|`r`|flex-cfc**r**