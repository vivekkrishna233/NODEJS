const nodemailer = require("nodemailer");
const sendMail = async(req,res)=>{
    let testAccount = await nodemailer.createTestAccount ( );

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'quinten19@ethereal.email',
            pass: 'wUDUvnZjgwQjwnk8Jj'
        }
    });

    const info = await transporter.sendMail({
        from: '"vivek krishna 👻" <vivekkrishna233@gmail.com>', // sender address
        to: "vivekkrishna0504@gmail.com, vivekkrishna1978@gmail.com", // list of receivers
        subject: "welcome vivek", // Subject line
        text: "are you ready to learn node js just cotact me", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.json(info);
}

module.exports = sendMail;