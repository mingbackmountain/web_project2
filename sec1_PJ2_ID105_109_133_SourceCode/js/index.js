const searchBtn = $("#searchinput");
const submitBtn = $("#submit");
const dataBtn = $("#data_btn");
const videoBtn = $("#youtube_btn");
const twitterBtn = $("#twitter_btn");
const increaseBtn = $("#increase");
const decreaseBtn = $("#decrease");
const resetBtn = $("#reset");
const dataTab = $("#data");
const youtubeTab = $("#youtube");
const twitterTab = $("#twitter");
const loader = $(".loader");
const rowmenu = $("#rowmenu");
const tabs = [
  { content: dataTab, button: dataBtn },
  { content: youtubeTab, button: videoBtn },
  { content: twitterTab, button: twitterBtn }
];
let currentTab = tabs[0];

$(document).ready(onDocumentReady);

function greeting() {
  return responsiveVoice.speak("Academic Conference Search Engine");
}

function activateData() {
  dataBtn.addClass("button-clicked");
  dataTab.addClass("init");
}

function swapTab(tab) {
  currentTab = tab;

  tabs.forEach((tab) => {
    if (tab === currentTab) {
      tab.content.css("display", "block");
      tab.button.addClass("button-clicked");
    } else {
      tab.content.css("display", "none");
      tab.button.removeClass("button-clicked");
    }
  });
}

increaseBtn.click(onClickIncreaseButton);
decreaseBtn.click(onClickDecreaseButton);
resetBtn.click(onClickResetButton);

function showMenu() {
  if (rowmenu.css("display") === "none") {
    rowmenu.css("display", "block");
  }
}

function modifyFontSize(flag) {
  const divElement = $("div");
  const currentFontSize = parseInt(divElement.css("font-size"));
  const command = { increase: 3, decrease: -3 };
  const newFontSize = command[flag] ? currentFontSize + command[flag] : 16;

  divElement.css("font-size", newFontSize);
}

function onTwitterReadyStateChange() {
  document.getElementById("twitter-search").innerHTML = this.responseText;
}

function onAnalysisReadyStateChange() {
  const mySentiment = JSON.parse(this.responseText);

  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart(mySentiment));
}

function drawChart(mySentiment) {
  return function() {
    const data = new google.visualization.DataTable();
    data.addColumn("string", "Setiment");
    data.addColumn("number", "Value");
    data.addRows([
      ["positive", mySentiment.pos],
      ["negative", mySentiment.neg],
      ["neutral", mySentiment.neu]
    ]);
    const options = {
      title: "Twitter Analysis",
      width: 500,
      height: 350
    };
    const chart = new google.visualization.PieChart(
      document.getElementById("chart_div")
    );
    chart.draw(data, options);
  };
}

function requestXML(method, path, onReady) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      onReady();
    }
  };
  xmlhttp.open(method, path, true);
  xmlhttp.send();
}

function onClickSubmit() {
  responsiveVoice.speak("Here is your result");
  responsiveVoice.speak(
    "you can choose to see data about the conference,videos and tweets"
  );
  responsiveVoice.speak("Here is the data about the conference");

  const keyword = searchBtn.val();

  requestXML(
    "GET",
    "twitter_api.php?key=" + keyword,
    onTwitterReadyStateChange
  );
  requestXML("GET", "analysis.php", onAnalysisReadyStateChange);
}

function makeHighlighBtn(btn) {
  currentBtn = btn;

  highlighBtns.forEach((btn) => {
    if (btn === currentBtn) {
      btn.addClass("button-clicked");
    } else {
      btn.removeClass("button-clicked");
    }
  });
}

const dataTabOption = tabs[0];
const youtubeTabOption = tabs[1];
const twitterTabOption = tabs[2];

function onClickTwitterButton() {
  responsiveVoice.speak("Here is the tweet about the conference");
  swapTab(twitterTabOption);
}

function onClickYoutubeButton() {
  responsiveVoice.speak("Here is the video about the conference");
  swapTab(youtubeTabOption);
}

function onClickDataButton() {
  responsiveVoice.speak("Here is the data about the conference");
  swapTab(dataTabOption);
}

function onDocumentReady() {
  loader.hide();
  //call greeting sound as the first thing when the site is reload
  window.reload = greeting();
  //the action that will happen after user click submit button
  submitBtn.on("click", onClickSubmit);
  //effect for menu button
  twitterBtn.click(onClickTwitterButton);
  videoBtn.click(onClickYoutubeButton);
  dataBtn.click(onClickDataButton);
}

function onClickIncreaseButton() {
  modifyFontSize("increase");
}

function onClickDecreaseButton() {
  modifyFontSize("decrease");
}

function onClickResetButton() {
  modifyFontSize("reset");
}
