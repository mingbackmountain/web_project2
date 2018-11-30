<?php
    //Include lib
    require "twitteroauth/autoload.php";
    use Abraham\TwitterOAuth\TwitterOAuth; 
    include __DIR__ . "/vendor/autoload.php";       
    use Sentiment\Analyzer;   


session_start();

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
   if(isset($_SESSION['tweets'])){
        //return JSON to index.html
        echo produceAnalysis($_SESSION['tweets']);
   } 
?>