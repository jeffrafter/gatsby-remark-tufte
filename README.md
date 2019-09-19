# gatsby-remark-smartypants

Converts sidenotes and margin notes as well as figures to
output for use with [tufte-css](https://github.com/edwardtufte/tufte-css) using the markdown converters from [https://github.com/luhmann/tufte-markdown](https://github.com/luhmann/tufte-markdown).

## Install

`npm install --save gatsby-remark-tufte`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-tufte`]
    }
  }
];
```
