# reveal-presentation-template
html and basic directory structure template for (relatively) easily creating reveal.js slideshows with all dependencies locally so you do not need an internet connection while presenting.

##Basic installation:
1. Clone the reveal-presentation-template repository
2. Clone reveal.js (https://github.com/hakimel/reveal.js/) and follow their instructions to configure node and grunt
3. Copy the contents of reveal-presentation-template/ into the reveal.js base directory.
4. If you want mathjax, download the latest release (https://github.com/mathjax/MathJax/archive/master.zip) and unzip it into the reveal.js base directory.  This should create a directory called `MathJax-master`.

##To edit: 
 * Create slides in index.html
 * Add contents (images, videos, js, etc.) to the presentation-data directory

##To run:
Type `grunt serve` in the reveal.js/ directory.

##Notes:
The `node_modules` and `MathJax-master` directories are quite large.  I have them stored in a different location and then symlink them into each presentation. 
