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

## Viewer Apps in presentation

To add one of our Viewer apps to a presentation, do the following:

1. Add Viewer app as submodule inside of `presentation-data`:
    
    ```
    git submodule add <viewer-app>
    cd <viewer-folder>
    git submodule init
    git submodule update --init --recursive
    ```
2. Add Requirejs cofigurations to `presentation-data/js`, i.e. create a file named `viewer-config.js` with:
    
    ```javascript
    requirejs.config({
        baseUrl: 'presentation-data/<viewer-folder>',
        paths: {
            backbone: 'lib/backbone/backbone-min',
            bootstrap: 'lib/bootstrap/js/bootstrap.min',
            d3: 'lib/d3/d3.min',
            jquery: 'lib/jquery/jquery.min',
            jqueryui: 'lib/jquery-ui/jquery-ui.min',
            underscore: 'lib/underscore/underscore-min',
            text: 'lib/require/text'
        }
    })
    // Enter application through main.js
    requirejs(['js/main']);
    ```

3. Add necessary dependencies to index.html, i.e.:

    ```javascript
	dependencies: [
	    ...        
        { src: 'presentation-data/<viewer>/lib/require/require.js'},
        { src: 'presentation-data/js/<viewer-config.js>'}    
	]
    ```
4. Add entry-point element to slide.