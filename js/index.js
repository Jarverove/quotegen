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
	  }, {
	    quote: "\"You miss 100% of the shots you don’t take\"",
	    author: "Wayne Gretzky",
	  }, {
	    quote: "\"Build your own dreams, or someone else will hire you to build theirs\"",
	    author: "Farrah Gray",
	  }, {
	    quote: "\"Fall seven times and stand up eight\"",
	    author: "Japanese Proverb",
	  }, {
	    quote: "\"Be soft. Do not let the world make you hard. Do not let pain make you hate. Do not let the bitterness steal your sweetness. Take pride that even though the rest of the world may disagree, you still believe it to be a beautiful place\"",
	    author: "Kurt Vonnegut",
	  }];

	  $(".quote-button").click(function() {

	    $('.quote-text,.quote-author').fadeOut(700, function() {

	      var i = Math.floor(Math.random() * quotelist.length);

	      $(".quote-text").html(quotelist[i].quote).fadeIn(1500);
	      $(".quote-author").html(quotelist[i].author).fadeIn(1500);
	    });  
	  });

	});
