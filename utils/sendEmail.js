import emailjs from '@emailjs/browser';
const sendMailToBekir = (whichModalUsed) => {
    const templateParams = {
        message: `Somebody has used Modal-${whichModalUsed} in popup-generator app ✌️`
    };
    emailjs.send("service_vaetr7p", "template_hib7ndo", templateParams, "_k__XQ1HNGaIDGbRU")
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
           console.log('FAILED...', err);
        });
}

export default sendMailToBekir;
