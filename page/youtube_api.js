function displayYoutube(title, thumbnail, video_url) {
  return `
    <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                  <div class="row" style="margin-left:20px">
                      <h2>${title}</h2>
                  </div>
                  <div class="row" style="margin-left:20px">
                     <img src="${
                       thumbnail.high.url
                     }" width="150px" height="150px">
                  </div>
                  <div class="row" style="margin-left:20px">
                    <p><a href="http://www.youtube.com/embed/${video_url}">www.youtube.com/embed/${video_url}</a></p>
                  </div>
            </div>
    </div>
  `;
}

const apikey = "AIzaSyBe4Hlu1O-J317pdBXWeZh9Cv2AMMrtEyI";

$("#submit").on("click", function() {
  let keyword = $("#searchinput").val();
  console.log(keyword);
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
