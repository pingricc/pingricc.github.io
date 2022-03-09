function sendMail() {
    var tempParams = {
        from_name: document.getElementById("name").value,
        email_from: document.getElementById("email").value,
        to_name: "Riccardo",
        message: document.getElementById("comments").value
    };
    emailjs.send("service_gsolzit", "template_yc417rt", tempParams)
        .then(function(res) {
            console.log("success", res.status);
            alert("Thank you for your email, I will contact you as soon as possible! \r\n - Riccardo :)")
        })
}