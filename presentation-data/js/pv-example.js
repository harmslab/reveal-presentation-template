// override the default options with something less restrictive.
var options = {
    width: 600,
    height: 600,
    antialias: true,
    quality : 'medium'
};
// insert the viewer under the Dom element with id 'gl'.
var viewer = pv.Viewer(document.getElementById('viewer'), options);

function loadMethylTransferase() {
  // asynchronously load the PDB file for the dengue methyl transferase
  // from the server and display it in the viewer.
  pv.io.fetchPdb('presentation-data/pdb/1r6a.pdb', function(structure) {
      // display the protein as cartoon, coloring the secondary structure
      // elements in a rainbow gradient.
      viewer.cartoon('protein', structure, { color: pv.color.bySS() });
      // there are two ligands in the structure, the co-factor S-adenosyl
      // homocysteine and the inhibitor ribavirin-5' triphosphate. They have
      // the three-letter codes SAH and RVP, respectively. Let's display them
      // with balls and sticks.
      //#var ligands = structure.select({ rnames : ['SAH', 'RVP'] });
      //viewer.ballsAndSticks('ligands', ligands);
      viewer.centerOn(structure);
  });
}

// load the methyl transferase once the DOM has finished loading. That's
// the earliest point the WebGL context is available.
document.addEventListener('DOMContentLoaded', loadMethylTransferase);
