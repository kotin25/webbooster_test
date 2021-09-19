<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$product = $_POST['product'];

$to = "kotin25@ya.ru";
$subject ='Отправлена заявка с сайта ';
$message = "Заявка была отправлена пользоваталем $name с имейлом $email , телейфон $phone товар: $product";
$headers = "From: $name <$email>" . "\r\n";

if (mail($to,$subject,$message,$headers)) {
	echo 'Ваше сообщение успешно отправлено!';
} else {
	echo 'Возникла ошибка при работе функции mail на сервере!';
}