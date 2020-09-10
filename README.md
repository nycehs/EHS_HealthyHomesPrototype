# Healthy Homes Interactive Prototype

This repository is the start of a project to create a teaching tool for Healthy Homes!
Here is the demo page: https://nycehs.github.io/EHS_HealthyHomesPrototype/.

Right now, the prototype is blocked on DOHMH network and by our proxy, so can only view on your phone or non-work computer, though the repository and all the files are available.

To do list:

- write a click handler to respond to clicks on svg elements like the puddle underneath the sink
  - handler should be set on all SVG elements with the 'problem' class, and should return the element ID
  - we can use the element id to activate a modal with an id 'elementID_modal' or something
  - stick with the Bootstrap 4 / CF modal format to keep modals accessible
- write sample modals into html so that we can edit in place
- general accessibility work needed
  - add tabindex to problem elements in svg to allow keyboard control
  - consider grouping svg elements to add behavior to group? for instance puddle under the sink and drainpipe could be grouped?
  - test with screenreader
