// Thanakorn Pasangthien 6088109
//   Dujnapa Tanundet 6088105
//   Arada Puengmongkolchaikit 6088133

//call greeting sound as the first thing when the site is reload
window.reload = greeting();
function greeting() {
  return responsiveVoice.speak("Academic Conference Search Engine");
}

//set the information show first
function activateData() {
  $("#data_btn").addClass("button-clicked");
  $("#data").addClass("init");
}

//the action that will happen after user click submit button
$("#submit").on("click", function() {
  //response voice after click the button
  responsiveVoice.speak("Here is your result");
  responsiveVoice.speak(
    "you can choose to see data about the conference,videos and tweets"
  );
  responsiveVoice.speak("Here is the data about the conference");

  let keyword = $("#searchinput").val();

  //ajax to call twitter_api.php
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("twitter-search").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "twitter_api.php?key=" + keyword, true);
  xmlhttp.send();

  const xmlAnalysis = new XMLHttpRequest();
  //ajax to call analysis.php
  xmlAnalysis.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var mySentiment = JSON.parse(this.responseText);

      //draw analysis chart
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn("string", "Setiment");
        data.addColumn("number", "Value");

        data.addRows([
          ["positive", mySentiment.pos],
          ["negative", mySentiment.neg],
          ["neutral", mySentiment.neu]
        ]);
        var options = { title: "Twitter Analysis", width: 500, height: 350 };
        var chart = new google.visualization.PieChart(
          document.getElementById("chart_div")
        );
        chart.draw(data, options);
      }
    }
  };
  xmlAnalysis.open("GET", "analysis.php", true);
  xmlAnalysis.send();
});

//effect for menu button
$("#twitter_btn").click(function() {
  responsiveVoice.speak("Here is the tweet about the conference");
  $(this).addClass("button-clicked");
  $("#youtube_btn").removeClass("button-clicked");
  $("#data_btn").removeClass("button-clicked");
});
$("#youtube_btn").click(function() {
  responsiveVoice.speak("Here is the video about the conference");
  $(this).addClass("button-clicked");
  $("#twitter_btn").removeClass("button-clicked");
  $("#data_btn").removeClass("button-clicked");
});
$("#data_btn").click(function() {
  responsiveVoice.speak("Here is the data about the conference");
  $(this).addClass("button-clicked");
  $("#youtube_btn").removeClass("button-clicked");
  $("#twitter_btn").removeClass("button-clicked");
});

//swap section to information section
function swapData() {
  var data = document.getElementById("data");
  var youtube = document.getElementById("youtube");
  var twitter = document.getElementById("twitter");
  $("#data").removeClass("init");
  $("#data").removeClass("hide");
  if (data.style.display === "none") {
    data.style.display = "block";
  }

  if ((youtube.style.display = "block")) {
    youtube.style.display = "none";
  }

  if ((twitter.style.display = "block")) {
    twitter.style.display = "none";
  }
}
//swap section to video section
function swapVideo() {
  var data = document.getElementById("data");
  var youtube = document.getElementById("youtube");
  var twitter = document.getElementById("twitter");
  $("#data").removeClass("init");
  $("#data").addClass("hide");
  if (youtube.style.display === "none") {
    youtube.style.display = "block";
  }
  if (data.style.display === "block") {
    data.style.display = "none";
  }
  if (twitter.style.display == "block") {
    twitter.style.display = "none";
  }
}
//swap section to twitter section
function swapTwitter() {
  var data = document.getElementById("data");
  var youtube = document.getElementById("youtube");
  var twitter = document.getElementById("twitter");
  $("#data").removeClass("init");
  $("#data").addClass("hide");
  if (twitter.style.display === "none") {
    twitter.style.display = "block";
  }
  if (data.style.display === "block") {
    data.style.display = "none";
  }
  if (youtube.style.display == "block") {
    youtube.style.display = "none";
  }
}
// show the menu bar
function showMenu() {
  var data_btn = document.getElementById("data_btn");
  var youtube_btn = document.getElementById("youtube_btn");
  var twitter_btn = document.getElementById("twitter_btn");
  var increase_btn = document.getElementById("increase");
  var decrease_btn = document.getElementById("decrease");
  var reset_btn = document.getElementById("reset");
  if (data_btn.style.display === "none") {
    data_btn.style.display = "inline";
    youtube_btn.style.display = "inline";
    twitter_btn.style.display = "inline";
    increase_btn.style.display = "inline";
    decrease_btn.style.display = "inline";
    reset_btn.style.display = "inline";
  }
}

//create the font-size adjustment function
$("#increase").click(function() {
  modifyFontSize("increase");
});

$("#decrease").click(function() {
  modifyFontSize("decrease");
});
$("#reset").click(function() {
  modifyFontSize("reset");
});

function modifyFontSize(flag) {
  var divElement = $("div");
  console.log(divElement);
  var currentFontSize = parseInt(divElement.css("font-size"));
  if (flag == "increase") {
    currentFontSize += 3;
  } else if (flag == "decrease") {
    currentFontSize -= 3;
  } else {
    currentFontSize = 16;
  }
  divElement.css("font-size", currentFontSize);
}
