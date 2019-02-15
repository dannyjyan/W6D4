class DomNodeCollection {
  constructor(array){
    this.htmlElements = array;
  }

  html(string){
    if (string === undefined){
      return this.htmlElements[0];
    } else {
      this.htmlElements.forEach(function(el){
        el.innerHTML = string;
      });
    }
  }
  empty(){
    this.html("");
  }

  append(arg) {
    let toAppend = "";
    if (arg instanceof DomNodeCollection) {
      arg.htmlElements.forEach (function(el) {
        toAppend += el.outerHTML;
      });
    } else if (arg instanceof HTMLElement) {
      toAppend += arg.outerHTML;
    } else {
      toAppend += arg;
    }

    this.htmlElements.forEach(function(el) {
      el.innerHTML += toAppend;
    });
  }

  attr(attribute){
    return this.htmlElements[0].getAttribute(attribute);
  }
  addClass(className){
    this.htmlElements.forEach(function(el){
      el.classList.add(className);
    });
  }
  removeClass(className){
    this.htmlElements.forEach(function(el){
      el.classList.remove(className);
    });
  }

  children() {
    let result = [];
    this.htmlElements.forEach(function(el){
      result = result.concat(Array.from(el.children));
    });
    return new DomNodeCollection(result);
  }

  parent() {
    let result = [];
    this.htmlElements.forEach(function(el){
      result = result.concat([el.parentElement]);
    });
    return new DomNodeCollection(result);
  }

  find(selector) {
    let result = [];
    this.htmlElements.forEach(function(el){
      result = result.concat(Array.from(el.querySelectorAll(selector)));
    });
    return new DomNodeCollection(result);
  }
  remove(){
    this.htmlElements.forEach(function(el){
      el.outerHTML = "";
    });
  }

  on(event,fn ){
    this.htmlElements.forEach(function(el){
      el.addEventListener(event, fn);
    })
  }

  off(event, fn){
    this.htmlElements.forEach(function(el){
      el.removeEventListener(event, fn);
    })
  }

}
() => alert("clicked!");

module.exports = DomNodeCollection;