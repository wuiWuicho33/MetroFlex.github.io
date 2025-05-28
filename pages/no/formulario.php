<?php
// Inicializar variables de estado
$mensajeEnviado = false;
$mensajeError = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitizar campos
    $name = strip_tags(trim($_POST["name"] ?? ""));
    $phone = strip_tags(trim($_POST["phone"] ?? ""));
    $email = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"] ?? ""));
    $message = strip_tags(trim($_POST["message"] ?? ""));

    // Validar campos obligatorios
    if ($name && $phone && filter_var($email, FILTER_VALIDATE_EMAIL) && $subject && $message) {
        $to = "ventas.herramientas1@yeiflex.com.mx";  // Cambia este correo al tuyo real
        $email_subject = "Nuevo mensaje de contacto: $subject";

        $email_body = "Has recibido un nuevo mensaje desde el sitio web:\n\n";
        $email_body .= "Nombre: $name\n";
        $email_body .= "Teléfono: $phone\n";
        $email_body .= "Correo: $email\n";
        $email_body .= "Asunto: $subject\n";
        $email_body .= "Mensaje:\n$message\n";

        $headers = "From: noreply@yeiflex.com.mx\r\n";
        $headers .= "Reply-To: $email\r\n";

        // Intentar enviar el correo
        if (mail($to, $email_subject, $email_body, $headers)) {
            $mensajeEnviado = true;
        } else {
            $mensajeError = true;
        }
    } else {
        $mensajeError = true;
    }

    // Redirigir con mensaje de estado
    if ($mensajeEnviado) {
        header("Location: contact.html?status=success");
        exit;
    } elseif ($mensajeError) {
        header("Location: contact.html?status=error");
        exit;
    }
}
?>
