	$(document).ready(function() {

	  var quotelist = [{
	    quote: "\"It doesn't make sense to hire smart people and then tell them what to do; we hire smart people so they can tell us what to do\"",
	    author: "Steve Jobs",
	  },{
	    quote: "\"There are no shortcuts to any place worth going\"",
	    author: "Helen Keller",
	  }, {
	    quote: "\"The mind is everything. What you think you become\"",
	    author: "Buddha",
	  }, {
	    quote: "\"Success is one percent inspiration, ninety-nine percent perspiration\"",
	    author: "Thomas Edison",
	  }];

	  $(".quote-button").click(function() {

	    $('.quote-text,.quote-author').fadeOut(700, function() {

	      var i = Math.floor(Math.random() * quotelist.length);

	      $(".quote-text").html(quotelist[i].quote).fadeIn(1500);
	      $(".quote-author").html(quotelist[i].author).fadeIn(1500);
	    });  
	  });

	});