// Thanakorn Pasangthien 6088109
//   Dujnapa Tanundet 6088105
//   Arada Puengmongkolchaikit 6088133

//API key
const apikey = "AIzaSyBe4Hlu1O-J317pdBXWeZh9Cv2AMMrtEyI";

//render the search result to index.html
function displayYoutube(title, thumbnail, video_url) {
  return `
  <div class="col-md-6 col-sm-6 col-xs-6">
    <div class="card-youtube">
      <div class="youtube-container">
        <div class="youtube-description-image">
            <img src="${thumbnail.high.url}" width="150px" height="150px">
          </div>
          <div class="youtube-description-text">
            <h5>
              <b>${title}</b>
            </h5>
            <p>
              <a href="http://www.youtube.com/embed/${video_url}">www.youtube.com/embed/${video_url}</a>
            </p> 
          </div>
      </div>
    </div>
  </div>
  `;
}

//fired the request after the submit button was clicked
$("#submit").on("click", function() {
  let keyword = $("#searchinput").val();
  const URL = `https://content.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${keyword}&key=${apikey}`;
  $.get(URL, function({ items }, status) {
    items.map(function(value) {
      $("#youtube-search").append(
        displayYoutube(
          value.snippet.title,
          value.snippet.thumbnails,
          value.id.videoId
        )
      );
    });
  });
});
