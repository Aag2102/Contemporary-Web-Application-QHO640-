<?php


//define("BASE_PATH","../../../../php/webinar/");
define("BASE_PATH","../php/");

include_once(BASE_PATH."comm.php");
include_once(BASE_PATH."t_dblink.php");
include_once(BASE_PATH."t_message.php");

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$db = new TDBLink(HOST,DATABASE,USER,PASSWORD);
$db->connect();

if(isset($_REQUEST['regcount'])
&& htmlspecialchars($_REQUEST['regcount'])>=MSG_LIMIT){
    http_response_code(401);
}
else{
    if(isset($_POST["firstName"])
    && isset($_POST["lastName"])
    && isset($_POST["userLogin"])
    && isset($_POST["emailAddr"])
    && isset($_POST["userPass"])){
        $msg = new TUserExt($db->saveUser());
        if($msg->saveUser(
            htmlspecialchars($_POST["userLogin"]),
            htmlspecialchars($_POST["emailAddr"]),
            htmlspecialchars($_POST["userPass"])
        )){
            if(isset($_REQUEST['regcount'])&&$_REQUEST['regcount']!=""){                                
                echo json_encode(["regcount"=>($_REQUEST['regcount']+1)]);
            }
            else{
                echo json_encode(["regcount"=>0]);
            }
            http_response_code(200);
            
        }
        else{
            http_response_code(401);
        }
    }
}

$db->disconnect();



?>