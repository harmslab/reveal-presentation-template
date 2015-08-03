# reveal-presentation-template
html and basic directory structure template for (relatively) easily creating reveal.js slideshows with all dependencies locally so you do not need an internet connection while presenting.

##Basic installation:
1. Clone the reveal-presentation-template repository
```
git clone https://github.com/harmslab/reveal-presentation-template
```
2. Grab reveal as submodule:
```
cd reveal-presentation-template
git submodule init
git submodule update
```
3. If you want to run on local server, follow Reveal's instructions for node and grunt [here](https://github.com/hakimel/reveal.js/) 
4. If you want mathjax locally, download the latest release (https://github.com/mathjax/MathJax/archive/master.zip) and unzip it into the reveal.js base directory.  This should create a directory called `MathJax-master`.

##To edit: 
 * Create slides in index.html
 * Add contents (images, videos, js, etc.) to the presentation-data directory

##To run:
Type `grunt serve` in the reveal.js/ directory.

##Notes:
The `node_modules` and `MathJax-master` directories are quite large.  I have them stored in a different location and then symlink them into each presentation. 
