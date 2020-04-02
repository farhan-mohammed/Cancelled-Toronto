This is a reference for [Webcolumn.js](WebColumn.js)

This is one of the most crucial components of this whole application. It makes editing and displaying information a website 10 times easier as if I could teach someone who is not a programmer (for example, like Danny, the research and writer on this team). I would just have to teach them what an array is and what formatting they should be using.

# How to use this component to render a Section
```js
render(){
    <Webcolumn 
        left={[ ...blocks]}
        right={[...blocks]}
    />
}
```
Read below for the different types of blocks and the different ways to organize the block on the screen

# Lists of Blocks
> Let's say this is a component I am working with.
```json
[
    {
        "type": "para",
        "text": "This is your first paragraph"
    },
    {
        "type": "img",
        "src": "railwaytrack.png"
    },
    {
        "type": "para",
        "text": "This is your second paragraph"
    },
    {
        "type": "para",
        "text": "This is your third paragraph"
    }
]
```
Since the paragraph and the quote type are structured the same way, Danny wants to italicize the third paragraph, what he can do is just change the `"type": "para"` to `"type": "quote"` as simple as that.

If he wants to switch the image to be after the second paragraph, he can simple select that object and copy/paste it right after the second paragraph. There is no need to get involved with HTML tags or using the right CSS classes from this perspective.

I am going to use the term `blocks` to refer to the objects in the array passed through.

# Structure
## Columns
If you don't use any of these given props, pass in a `left` and `right` array of blocks using the types mentioned at the in [blocks](###blocks).

Pass in these props as `true` values to get that structure

| Prop 	| Definition 	| Example 	|
|-----------	|-----------------------	|----------	|
| `rightOnly` 	| You only have to pass in a `right`<br> array of blocks, and it renders an empty left column on larger screens and adjusts accordingly for smaller screens. 	| <img src="https://imgur.com/co29paq.png" width="475"/>	|
| `oneColumn` 	| Pass in a prop called `center`<br> which is an array of blocks, and it renders the blocks in a single column. Best used for wide maps. 	|   <img src="https://imgur.com/d3xoWzr.png" width="475"/> 	|

# Blocks
Each array passed through the arrays to be rendered is referred to as a block. Blocks have types that tell the program how they are rendered, if you change the type of the block make sure you change the corresponding properties as well.

## Text Family
Paragraph and Quote are designed to be used interchangebly, chasing a block from `para` to `quote` to make it italicized.
### Paragraph
<img src="https://imgur.com/boDJghm.png"  />

```js
{
    type: "para",
    text: "can be text" || ()=> { 
        const t = "or a function"; 
        return t;
    }
}
```
### Quote
<img src="https://imgur.com/jBfl6LR.png"  />

```js
{
    type: "para",
    text: "can be text" || () => { 
        const t = "or a function"; 
        return t;
    }
}
```
## Title Family
There are three types of title blocks that can be used
### content-title
This is a title block that can be used throught the website to give sections titles.
<img src="https://imgur.com/SZr3zQv.png"/>

```js
{
    type: "content-title",
    title: "can be text" || () => { 
        const t = "or a function"; 
        return t;
    }
}
```
### Main Title 

This is a title block that is used at the very top, usually the title of the whole page 

<img src="https://imgur.com/I43iwFP.png" width="300" />

```js
{
    type: "main-title",
    title: "can be text" || ()=> { 
        const t = "or a function"; 
        return t;
    }
}
```
### Main Subtitle
This is a subtitletitle block that is used at the very top, usually paired with main title

<img src="https://imgur.com/Khb9QH5.png" width="300" />

```js
{
    type:"main-subtitle",
    title: "can be text" || () => { 
        const t = "or a function"; 
        return t;
    }
}}
}
```
## Image family
Images in `Next.js` are stored in the public directory inside the images folder for organization. This way all images already start with `images/` so I optimized it by only having to mention the location of the image starting from inside the `public/images` folder.

### Basic Image
<img src="https://imgur.com/kpxCx5V.png" />

```js
{
    type: 'img',
    src: 'location/inthisfolder/thisspecificImage.png',
    //Optional
    adjust: {
        width: '2/3',
        hide: true
    }
}
```
Self explanatory, this ceates an image block.

You can add the following properties to adjust the images.
| Property | Value	| Definition 	| Example 	|
|----------- |-----------	|--------------------------------------	|-------------------------------	|
| `width` 	| '2/3' | The width of the image is 66% of the width of its parent	| <img src="https://imgur.com/pcJBo2r.png" width="475"/>  	|
| `hide` | true	| Places the images in the block, but only shows an outline of the image instead of the image. This is used to hide images that have not been licenses for publishing yet 	|  <img src="https://imgur.com/C2tMu13.png" width="475"/>	|


### Row of 3 images
This is a special block that creates a row of three images
<img src="https://imgur.com/7YyV6pU.png"/>

```js
{
    type: 'img3row',
    images: ['SOURCE1','SOURCE2','SOURCE3']
}
```

## Divide Column
This divides the block into two columns. The is usually passed in the `right` or `center` array and it takes in another left and right array of blocks and renders it. 

TLDR; divides the block into columns and renders the list of left and right blocks appropriately
```js
{
    type:'column2',
    left: [...blocks...]
    right: [...blocks...]
}
```

## General
I made a General block that made it easy to add special blocks if ever need to be
```js
{
    type: 'general',
    render: () => <div>"A function"</div>
}
```












