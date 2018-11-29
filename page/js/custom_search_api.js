// Thanakorn Pasangthien 6088109
//   Dujnapa Tanundet 6088105
//   Arada Puengmongkolchaikit 6088133

//API key
const APIkey = "AIzaSyBwdnMGnnef_olJQKcXr396eSmkCLGtrJs";

//cx id for the search engine
const cx = "000890759267133354411:-rqxnzcdshs";

//the function is use to extract the data that we want to use form the response data
function mapData(data) {
  return data.map(function(value) {
    return {
      title: value.title,
      description: value.snippet,
      link: value.link
    };
  });
}

//use to render the search result to index.html
function displaySearch(title, description, link) {
  return `
  <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="card">
        <div>
          <h4 style="margin-left:20px margin-top:10px;"><a href="${link}"><b>${title}</b></a></h4> 
          <p style="margin-left:20px">${description}</p> 
        </div>
      </div>
  </div>
  `;
}

//request to Google Custom Search API
function request(value) {
  const URL = ` https://www.googleapis.com/customsearch/v1?key=${APIkey}&cx=${cx}&q=${value}`;
  $.get(URL, function(data, status) {
    const listOfData = mapData(data.items); //map the data that we want to use
    listOfData.map(function(value) {
      $("#custom-search").append(
        displaySearch(value.title, value.description, value.link)
      );
    });
  });
}

//Detect when the submit button is clicked then fired the request
$("#submit").on("click", function() {
  let keyword = $("#searchinput").val();
  request(keyword);
});
