const DomNodeCollection = require('./dom_node_collection');

Window.prototype.$l = function(arg) { // .nested-div, #name
  // debugger

  if (typeof(arg) === "string") {
    const elementList = document.querySelectorAll(arg);
    const dnc =  new DomNodeCollection(Array.from(elementList));
    // console.log(elementsList);

    return dnc;
  } else if (arg instanceof HTMLElement){
    const dnc = new DomNodeCollection([arg]);
    return dnc;
  }
  
}

