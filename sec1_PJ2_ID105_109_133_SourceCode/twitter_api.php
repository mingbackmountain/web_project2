<?php
    // Thanakorn Pasangthien 6088109
    // Dujnapa Tanundet 6088105
    // Arada Puengmongkolchaikit 6088133
    
    session_start();
    //include library
    require "twitteroauth/autoload.php";
    use Abraham\TwitterOAuth\TwitterOAuth; 

    //render the result from Twitter API in the form of HTML
    function render($result){
        foreach($result->statuses as $key => $value){
            echo "
            <div class=\"col-md-12 col-sm-12 col-xs-12\">
                <div class=\"card\">
                    <div class=\"row\">
                    <div class=\"col-1\" style=\"text-align: center;\">
                        <img src=\"{$value->user->profile_image_url}\" style=\"margin-top:20px;\" alt=\"Avatar\" width=\"48px\" height=\"48px\" class=\"rounded-circle\">
                    </div>
                <div class=\"col-11\">
                    <h4><b>{$value->user->name}</b></h4> 
                    <p style=\"margin-top:5px;\">{$value->text}</p> 
                    <p style=\"margin-top:5px;\">{$value->created_at}</p> 
                </div>
                     </div>
                </div>
            </div>
            ";
        }
    }

    //Check if there is a keyword that has been sent form index.html
    if(isset($_GET['key'])){
        //token
          define("CONSUMER_KEY","kqgX6CivEWfJre7dPFtxHkWhr");
          define("CONSUMER_SECRET","ou8lGMShiEdyGSkSTgjeFRWNX2JbSrzRONShmDjRx6pHgLy9vW");
          define("ACCESS_TOKEN","1066363490539995136-v8yXaLFNTERLCnNTIBOc7Wd2eM2C3q");
          define("ACCESS_TOKEN_SECRET","JYqqzF2hWiWJPxs5M0Rx8UbBoDiHofp0G0nhXtbSeBMpS");
          //query
          $query = array(
            "q" => $_GET['key'],
            "count" => 20,
            "result_type"=>"recent",
          );
          //function that bring query and sent it to search in Twitter API
          function search(array $query){
              $connection = new TwitterOAuth(CONSUMER_KEY,CONSUMER_SECRET,ACCESS_TOKEN,ACCESS_TOKEN_SECRET);
              return $connection->get('search/tweets',$query);
          }
          //Bring the result to the render method
          $result = search($query);
          $_SESSION['tweets'] = $result;
          render($result);
    }
?>