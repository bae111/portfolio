/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

function classReg(className) {
  return new RegExp('(^|\\s)' + className + '(\\s|$)');
}
if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem && elem.classList ? elem.classList.contains( c ) : false;
  };
  addClass = function( elem, c ) {
    if ( elem && elem.classList ) {
      elem.classList.add( c );
    }
  };
  removeClass = function( elem, c ) {
    if ( elem && elem.classList ) {
      elem.classList.remove( c );
    }
  };
} else {
  hasClass = function( elem, c ) {
    return elem && elem.className ? classReg(c).test( elem.className ) : false;
  };
  addClass = function( elem, c ) {
    if ( elem && elem.className && !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    if ( elem && elem.className ) {
      elem.className = elem.className.replace( classReg( c ), ' ' ).trim();
    }
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );
