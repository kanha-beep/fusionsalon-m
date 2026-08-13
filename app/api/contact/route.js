export async function POST(request) {
  const { name, phone, service, message } = await request.json();

  if (!name || !phone || !message) {
    return Response.json(
      {
        ok: false,
        message: "Name, phone, and message are required."
      },
      { status: 400 }
    );
  }

  const enquiry = {
    name,
    phone,
    service: service || "General enquiry",
    message,
    receivedAt: new Date().toISOString()
  };

  console.log("New salon enquiry:", enquiry);

  return Response.json(
    {
      ok: true,
      message: "Enquiry received successfully."
    },
    { status: 201 }
  );
}
