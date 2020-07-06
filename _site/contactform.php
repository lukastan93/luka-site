<?php
    if (isset($_POST['submit'])){
        $name=$_POST['name'];
        $mailFrom=$_POST['email'];
        $message=$_POST['message'];
        $subject = "Contact form submission."

        $mailTo = "lukastan93@gmail.com";
        $headers = "From: ".$mailFrom;
        $txt = "Contact form submission from ".$name.".\n\n".$message;

        mail($mailTo, $subject, $txt, $headers);
        header("Location: index.php?mailsend");
    }
?>