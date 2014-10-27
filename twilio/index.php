<?php
 $code = rand(1000, 9999);
/*require "Services/Twilio.php";
 
// set your AccountSid and AuthToken from www.twilio.com/user/account
$AccountSid = "ACf41156763a2f01ad9b005da6793ce31b";
$AuthToken = "bb45bc11b6710410dd6da2da277f473d";
 
$client = new Services_Twilio($AccountSid, $AuthToken);
 
$message = $client->account->messages->create(array(
    "From" => "+13238922279",
    "To" => "+380636396365",
    "Body" => "Test message!",
));*/
 
// Display a confirmation message on the screen
//echo "Sent message {$message->sid}";
echo md5('1234');