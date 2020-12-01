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
### Flex Parent
Every class name in `flex.css` is composed by a series of letters in the form of ***`I`***`flx-`***`DJAW`***, with each letter representing its corresponding flex settings. 

||CSS rule
|---|---
|***`I`***|[display](###-display)
|***`D`***|[flex-direction](###-flex-direction)
|***`J`***|[justify-content](###-justify-content)
|***`A`***|[align-items](###-align-items)
|***`W`***|[wrap](###-wrap)
#### display

|display:|letter|example
|---|---|---
|flex|*empty*|**flx**-cfc
|inline-flex|`i`|**iflx**-cfc
#### flex-direction

|flex-direction:|letter|example|description
|---|---|---|---
|row|`r`|flx-**r**fc|right
|column|`d`|flx-**d**fc|down
|row-reverse|`l`|flx-**l**fc|left
|column-reverse|`u`|flx-**u**fc|up
#### justify-content
`f` for stretch (**f**ull).

|justify-content:|letter|example
|---|---|---
|start|`s`|flx-c**s**c
|center|`c`|flx-c**c**c
|end|`e`|flx-c**e**c
|stretch|`f`|flx-c**f**c
|space-between|`b`|flx-c**b**c
|space-around|`a`|flx-c**a**c
#### align-items

|align-items:|letter|example
|---|---|---
|start|`s`|flx-cf**s**
|center|`c`|flx-cf**c**
|end|`e`|flx-cf**e**
|stretch|`f`|flx-cf**f**
|baseline|`b`|flx-cf**b**
#### wrap

|wrap:|letter|example
|---|---|---
|nowrap|*empty*|flx-cfc
|wrap|`w`|flx-cfc**w**
|wrap-reverse|`r`|flx-cfc**r**
### Flex Child
Class names for flex children are composed by `flx-`***`G`***-***`K`***, where ***`G`*** represents flex-grow and ***`K`*** represents flex-shrink.
|flex-grow|flex-shrink|class
|---|---|---
|1|1|flx-**1**-**1**
|1|2|flx-**1**-**2**
|2|1|flx-**2**-**1**
|2|2|flx-**2**-**2**
### Special
|class|equivalent
|---|---
|`flx`|`flx-1-1`
|`flx-`*`n`*|`flx-`*`n`*`-`*`n`*

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020, veringsek
