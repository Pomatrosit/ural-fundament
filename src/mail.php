<?php
$d=file_get_contents('php://input');
$data= json_decode($d);

$message = "Телефон: $data->phone \r\n".
  	   "Имя: $data->name \r\n" .
           "Тип постройки: $data->type \r\n" . 
           "Материал: $data->material \r\n" . 
           "Ширина: $data->width м  \r\n" . 
           "Длина: $data->length м \r\n" ; 

mail('timbersaw442211@gmail.com', 'Урал-Фундамент Заявка', $message);
