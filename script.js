$(function() {
	
	$.getJSON("http://www.freecodecamp.com/stories/hotStories", function(news){
		
		var length = news.length;
//		alert(length);
		
		for (var i = 0; i<length; i++) {
			var story = news[i],
					image = story["image"],
					link = story["link"];
			
			//number of comments for each article
			var numComments = story["comments"].length;
			
			//assign user profile pic if story has no featured image
			if (story["image"]===""){
//				alert('hi');
				image = story["author"]["picture"];
			}
			
			$("<div class='newsStory'></div>")
				.append("<a href='"+ link +"'><img class='profile_image' src='" + image + "'></a>")
				.append("<a href='"+ link +"'><h3 class='headline'>"+ story["headline"] +"</h3></a>")
				.append("<p class='comment'>Comments: "+ numComments +"</p>")
				.appendTo("#newsContainer");
			
		}// end for loop
		
						//initialization of a masonry object:

						var msnry = new Masonry("#newsContainer",{
							itemSelector: '.newsStory',
						}); 

						//thread that makes the magic happens:

						setInterval(function(){
							msnry.reloadItems();
							msnry.layout();
						},500);

	});//end getJSON and function
	
	
	
	//.masonry({columnWidth:'div.newsStory',itemSelector:'div.newsStory'})
	//plugin for vertical stacking of stories called masonry
//	$('#newsContainer').masonry({
//            itemSelector: '.newsStory',
//            columnWidth: '.newsStory'
//         }).imagesLoaded(function() {
//            $('#newsContainer').masonry('reload');
//        });
	
//	$('#newsContainer').imagesLoaded( function(){
//  	$('#newsContainer').masonry({
//			
//    	columnWidth: '.newsStory'
//  	});
//	});

	
//	var container = document.querySelector('#newsContainer');
//  var masonry = new Masonry(container, {
//    columnWidth: '.newsStory',
//    itemSelector: '.newsStory'
//  }).imagesLoaded(function() {
//           $('#newsContainer').masonry('reload');
//       });
	
});// end document.ready
//
//$( window ).load( function()
//	{
//			$( '#newsContainer' ).masonry( { itemSelector: '.newsStory' } ).imagesLoaded(function() {
//						 $('#newsContainer').masonry('reload');
//	});
//});