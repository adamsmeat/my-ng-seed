(function() {
  define(['modernizr', 'jquery', 'my/bootstrap', 'text!tpl/navbar.html'], function(modernizr, $, myBootstrap, navbar) {
    'use strict';    return $('body').prepend($(navbar).hide().fadeIn('slow'));
  });

}).call(this);
