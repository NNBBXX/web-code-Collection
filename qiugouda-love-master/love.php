<?php
if(isset($_GET['add']) && isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'){
	$textHref = trim(strip_tags($_POST["textHref"]));
	$textHref = str_replace("'","",$textHref);
	$textHref = str_replace('"',"",$textHref);
	
	$textMusic = trim(strip_tags($_POST["textMusic"]));
	$textMusic = str_replace("'","",$textMusic);
	$textMusic = str_replace('"',"",$textMusic);
	
	$textArr = $_POST["textArr"];
	for($i=1;$i<79;$i++){
		$textShow[$i] = trim(strip_tags($textArr[$i]));
		$textShow[$i] = str_replace("'","",$textShow[$i]);
		$textShow[$i] = str_replace('"',"",$textShow[$i]);
	}
	
	if(preg_match('/^[\w\-]{3,30}$/',$textHref) == 0){
		$return = array ('status'=>0,'msg'=>'←格式不正确');
	}else{		
		$fp = fopen(dirname(__FILE__) . "/loveTpl.html","r"); // 模版文件
		$str = fread($fp,filesize(dirname(__FILE__) . "/loveTpl.html"));
		for($o=1;$o<79;$o++){
			$str = str_replace("{text_$o}",$textShow[$o],$str);
		}
		$str = str_replace("{work_time}",date("Y-m-d H:i:s",time()),$str);
		$str = str_replace("{music_src}",$textMusic,$str);
		fclose($fp);
		
		if(file_exists(dirname(__FILE__) . "/2014/$textHref.html")){
			$return = array ('status'=>0,'msg'=>'←这个链接已存在');
			$path_status = "失败：存在";
		}else{
			$path = dirname(__FILE__) . "/2014/$textHref.html"; // 保存为
			$handle = fopen($path,"w");
			if($handle){
				$return = array ('status'=>1,'url'=>'http://'.$_SERVER['HTTP_HOST'].'/love/2014/'.$textHref.'.html');
				$path_status = "成功：生成";
			}else{
				$return = array ('status'=>0,'msg'=>'←系统错误暂无法处理');
				$path_status = "失败：无生";
			}
			fwrite($handle,$str);
			fclose($handle);
		}
		
		$note = dirname(__FILE__) . "loveNote.txt"; // 记录操作
		$note_str = "时间：".date("Y-m-d H:i:s",time())." $path_status 用户：$textShow[75] to $textShow[76] $textHref \r\n";
		$handle2 = fopen($note,"a");
		fwrite($handle2,$note_str);
		fclose($handle2);
	}
	
	header('Content-type:text/json');
	echo json_encode($return);
}else{
	header('HTTP/1.1 301 Moved Permanently');
    header('Location:/');
}
?>