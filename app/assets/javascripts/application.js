// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .

$(document).ready(function() {

  // Chosen.js selects.  Note that this uses a forked version of Chosen to
  // allow for adding new entries to the select on the fly
  $('#project_stakeholder_ids').chosen({
    create_option: function(term){
      var chosen = this;
      $.post('add_stakeholder', {term: term}, function(data){
        console.log(data);
        chosen.append_option({
          value: 'value-' + data.term,
          text: data.term
        });
      },{dataType:'script'});
    }
  });

 $('#project_adversary_ids').chosen({
    create_option: function(term){
      var chosen = this;
      $.post('add_adversary', {term: term}, function(data){
        console.log(data);
        chosen.append_option({
          value: 'value-' + data.term,
          text: data.term
        });
      },{dataType:'script'});
    }
  });
});