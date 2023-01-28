import { APIGatewayProxyHandler } from "aws-lambda";
import nodemailer, { createTransport } from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";
import { environments } from "../../environments";

export const SendEmail: APIGatewayProxyHandler = async (event) => {
  const { phone, message, email, fullName } = JSON.parse(event.body!);

  const transporter = createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: environments.NODEMAILER.USER,
      pass: environments.NODEMAILER.PASSWORD,
    },
  });

  const mailOptions: MailOptions = {
    from: environments.NODEMAILER.USER,
    to: environments.NODEMAILER.USER,
    subject: "Job Offer",
    html: `
    from: ${email} <br>
    subject: Job Offer <br> 
    fullName: ${fullName} <br> 
    phone: ${phone} <br> 
    message: ${message} <br>
    `,
  };

  await transporter.sendMail(mailOptions);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "Email sended successfully",
      status: 1,
    }),
  };
};
