// Thanakorn Pasangthien 6088109
//   Dujnapa Tanundet 6088105
//   Arada Puengmongkolchaikit 6088133

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

$("#submit").on("click", function() {
  responsiveVoice.speak("Here is your result");
  responsiveVoice.speak(
    "you can choose to see data about the conference,videos and tweets"
  );
  responsiveVoice.speak("Here is the data about the conference");

  let keyword = $("#searchinput").val();
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("twitter-search").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "twitter_api.php?key=" + keyword, true);
  xmlhttp.send();
});

window.reload = greeting();
function greeting() {
  return responsiveVoice.speak("Academic Conference Search Engine");
}

function activateData() {
  $("#data_btn").addClass("button-clicked");
  $("#data").addClass("init");
}
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
