# [CancelledToronto.ca](https://cancelledtoronto.ca/)

## Introduction
Cancelled Toronto is an informative website about the cancelled transit plans of Toronto researched for and written by [Danny Xue](https://www.linkedin.com/in/danny-xue/) and built by [Farhan Mohammed](https://www.linkedin.com/in/danny-xue/)

## Documented Components
[WebColumn](components/templates/WebColumn.md)
[WebsiteWrapper](components/WebsiteWrapper.md)
## Software 
This website is built using the [Next.js](https://nextjs.org/) framework, hosted on [Ziet Now](https://zeit.co/). I found Next.js to be the perfect library for this type application as I needed a static website that has multiple static routes. 

This was my first time using the React framework outside of `create-react-app`. Since that framework was built for dynamic routing, implementing static routing required a lot of work arounds, and even after that it required me to import each page into `App.js` and specify a route for it. `Next.js` made it much easier, as any directories inside the pages folder automatically specify themselves as routes.

## Special things about this website
1. Created a reuseable modular component for the layout of the website content. Each WebColumn component can be configured to be one or two columns, and each column can have different types of items on it such as images, quotes, text, special designs, etc. All you do is pass an array with the information and it renders it for you! More documentation available at [`components/templates/WebColumn.js`](./components/templates/Webcolumn.js)
2. Created a wrapper component where the contents of the website are wrapped around with the header, sidebar, and the footer. This made it easier to create the shape of the website as an edit on this compoenent will create a change on any and every route. More documentation available at [`components/WebsiteWrapper.js`](./components/WebsiteWrapper.js)


### Front page
<img src="https://i.imgur.com/WGm1Y1B.png"/>

### Example of WebColumn Component
<img src="https://imgur.com/FjF25b2.png"/>

### Mobile View
<img src="https://imgur.com/5zC5c0J.png"/>

### Made a Hamburger Side Menu from scratch
<img src="https://cdn.discordapp.com/attachments/651230544239132756/695081875668074627/ezgif-4-22db6083f156.gif" width="50%">

### Setup
> How to run the application on your own computer
```
$ npm i
$ npm run dev
```

Please note that most if not all images in this reposistory are licensed, and you are not allowed use them without permission from the original owner of the image. 
