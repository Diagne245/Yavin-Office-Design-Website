# Yavin Website
Demo: &ensp;**https://celebrated-pixie-7f86c1.netlify.app/**  

Bootstrap website for a company that creates and customizes `Office Spaces`.
It is from the [Bootstrap 5 From Scratch ](https://www.udemy.com/course/bootstrap-from-scratch/?kw=bootstrap&src=sac&couponCode=LETSLEARNNOW) `Traversy Media` Udemy Course.  
 It could be used for just about any kind of business. It has a very `Light Business Theme` with a clean design.

<img src="./src/assets/images/others/screen.png" />

## Features

- Clean design with background images/patterns
- Responsive design
- Custom JavaScript for the stat counter
- Nav scroll effect
- Project area using [`Lightbox UI Library`](https://lokeshdhakar.com/projects/lightbox2/)
- Testimonial slider/carousel
- Contact form
- Inner article page for each project
- Font awesome icons

## Usage

This website is built using [Webpack](https://webpack.js.org/) with [Bootstrap](https://getbootstrap.com/) and [Sass](https://sass-lang.com/). It uses [Font Awesome](https://fontawesome.com/) for icons.

In order to customize this website, you need to install [Node.js](https://nodejs.org/en/). Then, clone this repository and run:

```bash
npm install
```

This will install Webpack, Bootstrap, Sass and Font Awesome. To build your CSS files run:

```bash
npm run build
```

Build files will go into the `dist/` folder.

To watch your files for changes, run:

```bash
npm run dev
```

You can add Bootstrap variables to the `bootstrap.scss` file. You can look at the file `node_modules/bootstrap/dist/scss/_variables.scss` for a list of all the variables. Do NOT edit the `variables.scss` file directly, as it will be overwritten when you update Bootstrap.

To add your own custom styles, use the `styles.scss` file.
