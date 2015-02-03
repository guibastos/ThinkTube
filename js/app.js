$(document).ready(function() {

$(function(){
  $("#search-term").submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    type: 'video',
    key: 'AIzaSyC0vVmXFKVfYWdhc_Hbv-1gcln-J2tZwnQ',
    q: searchTerm
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data.items);
    });
};

// function getRequest(searchTerm){
//   $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ searchTerm +'&type=video&key=AIzaSyC0vVmXFKVfYWdhc_Hbv-1gcln-J2tZwnQ', function(data){
//     showResults(data.items);
//     });
// };

function showResults(results){
  var html = "";
  $.each(results, function(index,value) {
      html += '<p><a href="https://www.youtube.com/watch?v=' + value.id.videoId + '"><img src="'+value.snippet.thumbnails.medium.url+'"></img></a></p>';
      //html += '<img src="'+value.snippet.thumbnails.medium.url+'"></img></p>';
      console.log(value.snippet.thumbnails.medium.url+" "+value.id.videoId);
      });
  $("#search-results").html(html);

};

});


//video

//https://www.youtube.com/watch?v=

//embed
//<iframe width="560" height="315" src="https://www.youtube.com/embed/73sbW7gjBeo" frameborder="0" allowfullscreen></iframe>


// $(function(){
//   $("#search-term").submit(function(event){
//   	event.preventDefault();
//   	var searchTerm = $("#query").val();
//     getRequest(searchTerm);
// 	});
// });

// function getRequest(searchTerm) {
//     var params = {
//     	part: 'snippet',
//     	key: 'AIzaSyC0vVmXFKVfYWdhc_Hbv-1gcln-J2tZwnQ',
//       q: searchTerm
//     };
//     url = 'https://www.googleapis.com/youtube/v3/search';

//     $.getJSON(url, params, function(data){
//    		// showResults(data.Search);
//       console.log(data.Search)
//   	});
// };

// function showResults(results) {
// 	var html = "";
// 	$.each(results, function(index,value){
// 		html += '<img src='+item.snippet[index].thumbnails.medium.url+'></img>';
//       	console.log(item.snipped.thumbnails.medium.url);
//       });
// 	$("#search-results").html(html);
// 	};


//https://www.googleapis.com/youtube/v3/search?part=snippet&q=Iron+Maiden&type=video&key={AIzaSyC0vVmXFKVfYWdhc_Hbv-1gcln-J2tZwnQ}


// GET {base_URL}/search?part=snippet
//                      &q=YouTube+Data+API
//                      &type=video
//                      &videoCaption=closedCaption
//                      &key={YOUR_API_KEY}

// $(function(){
//   $("#search-term").submit(function(event){
//   	event.preventDefault();
//   	var searchTerm = $("#query").val();
//     console.log(searchTerm);
//     $.getJSON('http://www.omdbapi.com/?s='+searchTerm+'&r=json', function(data){
//    		showResults(data.Search);
//    		console.log(data.Search);	
//   	});
// 	});

// });

// function showResults(results) {
// 	var html = "";
// 	$.each(results, function(index,value){
// 		html += '<p>' + value.Title + '</p>';
//       	console.log(value.Title);
//       });
// 	$("#search-results").html(html);
// 	};

// });
