<?php

    function isPost () {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            return true;
        }
        
        return false;
    }
    
    
    function sendPost ($url=null, $a=null) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://142.4.217.86/' . $url);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, 1); 
        if (isset($_POST['session'])){
            curl_setopt($ch, CURLOPT_COOKIE, 'PHPSESSID='.$_POST['session']);
            unset($a['session']);
        }
        $data = json_encode($a);
        if (isset($_GET['nopack'])){
            $a['data'] = $data;
            curl_setopt($ch, CURLOPT_POSTFIELDS, $a);
        }else{
            curl_setopt($ch, CURLOPT_POSTFIELDS, array("data"=> $data) );
        }
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        $output = curl_exec($ch);
        curl_close($ch);

        echo $output;
    }
    
    function sendGet ($url=null) {
       $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://142.4.217.86/' . $url);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, 0); 
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        if (isset($_GET['session'])){
            curl_setopt($ch, CURLOPT_COOKIE, 'PHPSESSID='.$_GET['session']);
        }
        $output = curl_exec($ch);
        curl_close($ch);

        echo $output;
    }
    
    function startApp () {
        if (isPost ()) {
            $url = $_POST['url'];
            unset ($_POST['url']);
            $data = $_POST;
            sendPost($url, $data);
            return;
        }
        
        $url = $_GET['url'];
        sendGet ($url);
        return;
    }
    
    startApp();
