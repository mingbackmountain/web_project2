<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
      integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
      crossorigin="anonymous"
    />
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300" rel="stylesheet">
    <link rel="stylesheet" href="style.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    <title>Search</title>
  </head>
  <body>
    <div class="container">
      <div class="rowtitle">
        <img src="logo.png" height="150px" width="150px" style="margin-top:20px;">
        <h1>Academic Conference Search Engine</h1>
        <input
          type="text"
          id="searchinput"
          name="searchinput"
          placeholder="Search your conference here"
        />
        <button type="submit" id="submit" onclick="showMenu()">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div class="rowmenu btn-toolbar">
        <a href="#data" class="menu_btn" id="data_btn" onclick="swapData()" style="display:none"
          >Data</a
        >
        <a
          href="#youtube"
          class="menu_btn"
          id="youtube_btn"
          onclick="swapVideo()"
          style="display:none;"
          >Video</a
        >
        <a
          href="#twitter"
          class="menu_btn"
          id="twitter_btn"
          onclick="swapTwitter()"
          style="display:none"
          >Twitter</a
        >
      </div>

      <section id="data" style="display:none;">
       <div class="row" id="custom-search">
       </div>
      </section>

      <section id="youtube" style="display:none;">
          <div class="row" id="youtube-search">
          </div>
      </section>

      <section id="twitter" style="display:none;">
        <div class="row" id="twitter-search">
        </div>
      </section>
    </div>
    <script type="text/javascript" src="youtube_api.js"></script>
    <script type="text/javascript" src="custom_search_api.js"></script> 
    <script type="text/javascript"> -->
      $("#submit").on("click",function(){
          let keyword = $("#searchinput").val();
          const xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                  document.getElementById("twitter-search").innerHTML = this.responseText;
              }
          };
          xmlhttp.open("GET", "test.php?key=" + keyword, true);
          xmlhttp.send();
        }
      );
      $("#twitter_btn").click(function() {
          $(this).addClass('button-clicked');
          $("#youtube_btn").removeClass('button-clicked');
          $("#data_btn").removeClass('button-clicked');
      });
      $("#youtube_btn").click(function() {
          $(this).addClass('button-clicked');
          $("#twitter_btn").removeClass('button-clicked');
          $("#data_btn").removeClass('button-clicked');
      });
      $("#data_btn").click(function() {
          $(this).addClass('button-clicked');
          $("#youtube_btn").removeClass('button-clicked');
          $("#twitter_btn").removeClass('button-clicked');
      });
      function swapData() {
        var data = document.getElementById("data");
        var youtube = document.getElementById("youtube");
        var twitter = document.getElementById("twitter");

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
        if (data_btn.style.display === "none") {
          data_btn.style.display = "inline";
          youtube_btn.style.display = "inline";
          twitter_btn.style.display = "inline";
        }
      }
    </script>
  </body>
</html>
