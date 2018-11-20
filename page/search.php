<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    <title>Search</title>
</head>
<body>
    <div class="container">
        <a href="#data" onclick="swapData()">Data</a>
        <a href="#youtube" onclick="swapVideo()">Video</a>
        <a href="#twitter" onclick="swapTwitter()">Twitter</a>
        <section id="data" style="background-color:red; display:none;">
            <p>data</p>
        </section>

        <section id="youtube" style="background-color:green; display:none;">
            <p>video</p>
        </section>

        <section id="twitter" style="background-color:blue; display:none;">
            <?php
                
            ?>
            <p>twitter</p>
        </section>
    </div>
    <script type="text/javascript" src="youtube_api.js"></script>
    <script type="text/javascript" src="custom_search_api.js"></script>
    <script type="text/javascript">
        function swapData() {
            var data = document.getElementById("data");
            var youtube = document.getElementById("youtube");
            var twitter = document.getElementById("twitter");
            
            if (data.style.display === "none") {
                console.log(data.style.display);
                console.log("------------------");
                data.style.display = "block";
            }

            if(youtube.style.display = "block") {
                youtube.style.display = "none";
            }

            if(twitter.style.display = "block"){
                twitter.style.display = "none";
            }

        }
        function swapVideo(){
            var data = document.getElementById("data");
            var youtube = document.getElementById("youtube");
            var twitter = document.getElementById("twitter");
            
            if (youtube.style.display === "none") {
                youtube.style.display = "block";
            }
            if (data.style.display === "block") {
                data.style.display = "none";
            }
            if(twitter.style.display == "block") {
                twitter.style.display = "none";
            }
        }
        function swapTwitter(){
            var data = document.getElementById("data");
            var youtube = document.getElementById("youtube");
            var twitter = document.getElementById("twitter");
            
            if (twitter.style.display === "none") {
                twitter.style.display = "block";
            }
            if (data.style.display === "block") {
                data.style.display = "none";
            }
            if(youtube.style.display == "block") {
                youtube.style.display = "none";
            }
        }
    </script>
</body>
</html>