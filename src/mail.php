<?php
$d=file_get_contents('php://input');
$data= json_decode($d);

$message = "�������: $data->phone \r\n".
  	   "���: $data->name \r\n" .
           "��� ���������: $data->type \r\n" . 
           "��������: $data->material \r\n" . 
           "������: $data->width �  \r\n" . 
           "�����: $data->length � \r\n" ; 

mail('timbersaw442211@gmail.com', '����-��������� ������', $message);
