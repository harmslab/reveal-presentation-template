# Harms Lab reveal.js Template

Template files for creating [reveal.js](https://github.com/hakimel/reveal.js/)
presentations.

### Contains

+ A minimal, slightly tweaked reveal.js html file (template.html).  
+ A clean, open source font (Lato)
+ A slide template (template.svg) that can be used with [slidemachine](https://github.com/harmsm/slidemachine))
  to generate slides from layers.

### Setup 

1. Install node, if you haven't already

Download latest stable release [here](https://nodejs.org/en/)

2. Clone reveal.js and install packages

```
git clone https://github.com/hakimel/reveal.js.git
cd reveal.js
npm install
```

3. Clone this presentation template

```
git clone https://github.com/harmslab/reveal-presentation-template
cd reveal-presentation-template
cp -r template.html fonts ../
```
4. (optional). Install mathjax

This is helpful if you are giving talk where you may not have access to the
Internet. 

```
# execute this in the reveal.js directory
git clone https://github.com/mathjax/MathJax.git MathJax
```

Edit `template.html` so it points to the local MathJax..

```
mathjax: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js'
//mathjax: 'MathJax/MathJax.js',
```

5. Run the presentation

```
# execute this in the reveal.js directory
npm start
```
