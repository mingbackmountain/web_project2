<?php
    //token
    $consumer_key = "kqgX6CivEWfJre7dPFtxHkWhr";
    $consumer_secret = "ou8lGMShiEdyGSkSTgjeFRWNX2JbSrzRONShmDjRx6pHgLy9vW";
    $access_token = "1066363490539995136-v8yXaLFNTERLCnNTIBOc7Wd2eM2C3q";
    $access_token_secret = "JYqqzF2hWiWJPxs5M0Rx8UbBoDiHofp0G0nhXtbSeBMpS";
    
    //include library
    require "twitteroauth/autoload.php";

    //Connect to API
    $connection = new TwitterOAuth($consumer_key,$consumer_secret, $oauth_token, $oauth_token_secret);
    $content = $connection->get("account/verify_credentials");

    //get tweets
    $statues = $connection->get("statuses/home_timeline",["count" => 25,"exclude_replies"=>false]);
    print_r($statues);
?>