<?php
$mensajeEnviado = false;
$mensajeError = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $phone = $_POST["phone"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  $to = "cliente@ejemplo.com"; // Cambia esto por el correo real
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8";

  $body = "Nombre: $name\nTeléfono: $phone\nCorreo: $email\n\nMensaje:\n$message";

  if (mail($to, $subject, $body, $headers)) {
    $mensajeEnviado = true;
  } else {
    $mensajeError = true;
  }
}
?>
