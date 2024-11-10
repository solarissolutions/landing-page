import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, position, company, email, phone, preferredTime, message } =
    await req.json();

  // Configure o transporte de email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "solarishackathon@gmail.com",
      pass: "SolarisHackathonUsp",
    },
  });

  try {
    // Enviar o email
    await transporter.sendMail({
      from: "solarishackathon@gmail.com", // email remetente
      to: "solarishackathon@gmail.com", // email destinatário
      subject: "Novo Contato do Formulário",
      text: `
        Nome: ${name}
        Cargo: ${position}
        Empresa: ${company}
        Email: ${email}
        Telefone: ${phone}
        Horário Preferido: ${preferredTime}
        Mensagem: ${message || "Não foi fornecida uma mensagem adicional"}
      `,
    });

    return new Response(
      JSON.stringify({ message: "Email enviado com sucesso" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return new Response(JSON.stringify({ message: "Erro ao enviar email" }), {
      status: 500,
    });
  }
}
