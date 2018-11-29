<?php
    //Include lib
    require "twitteroauth/autoload.php";
    use Abraham\TwitterOAuth\TwitterOAuth; 
    include __DIR__ . "/vendor/autoload.php";       
    Use Sentiment\Analyzer;   

function produceAnalysis($tweets){
    //Initialize array for sentiment
    $sentimentcount = array("neg"=>0,"pos"=>0,"neu"=>0);
    //Initialize Analyzer
    $analyzer = new Analyzer(); 
    //loop thorugh each tweets and evaluate whether it's positive,negative or neutral
    foreach($tweets->statuses as $key => $value){
     
        //use getSentiment method to evaluate the tweets
        $sentiment = $analyzer->getSentiment($value->text);

        if($sentiment['compound'] > 0){
            $sentimentcount["pos"]++;
        }else if($sentiment['compound'] < 0){
            $sentimentcount["neg"]++;
        }else{
            $sentimentcount['neu']++;
        }
        
    }
    //convert the final array into json format
    $jsonsentiment = json_encode($sentimentcount);
    //return the json format
    return $jsonsentiment;
}

    if(isset($_GET['key'])){
        
        //token
          define("CONSUMER_KEY","kqgX6CivEWfJre7dPFtxHkWhr");
          define("CONSUMER_SECRET","ou8lGMShiEdyGSkSTgjeFRWNX2JbSrzRONShmDjRx6pHgLy9vW");
          define("ACCESS_TOKEN","1066363490539995136-v8yXaLFNTERLCnNTIBOc7Wd2eM2C3q");
          define("ACCESS_TOKEN_SECRET","JYqqzF2hWiWJPxs5M0Rx8UbBoDiHofp0G0nhXtbSeBMpS");
          $query = array(
            "q" => $_GET['key'],
            "count" => 20,
            "result_type"=>"recent",
          );
          function search(array $query){
              $connection = new TwitterOAuth(CONSUMER_KEY,CONSUMER_SECRET,ACCESS_TOKEN,ACCESS_TOKEN_SECRET);
              return $connection->get('search/tweets',$query);
          }
          
          //use the search result to produceAnalysis function
          $result = search($query);
          echo produceAnalysis($result);
    }

    
?>