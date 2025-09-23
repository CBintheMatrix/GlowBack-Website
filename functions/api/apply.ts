export const onRequestPost: PagesFunction = async (ctx) => {
  const { RESEND_API_KEY, ADMIN_EMAIL, TURNSTILE_SECRET_KEY } = ctx.env as any;

  const form = await ctx.request.formData();
  const name = String(form.get("name") || "").trim();
  const email = String(form.get("email") || "").trim();
  const hotelName = String(form.get("hotelName") || "").trim();
  const city = String(form.get("city") || "").trim();
  const notes = String(form.get("notes") || "").trim();
  const token = String(form.get("cf-turnstile-response") || "");

  if (!name || !email || !hotelName) {
    return json({ ok: false, error: "Missing required fields" }, 400);
  }

  // 1) Verify Turnstile
  const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret: TURNSTILE_SECRET_KEY, response: token })
  });
  const verify = await verifyRes.json();
  if (!verify.success) return json({ ok: false, error: "Captcha failed" }, 400);

  // 2) Email via Resend
  const payload = {
    from: "Glowback <noreply@glowback.io>",
    to: [ADMIN_EMAIL],
    subject: "New Glowback Pilot Application",
    html: `
      <h2>New Pilot Application</h2>
      <p><b>Name:</b> ${escapeHtml(name)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Hotel:</b> ${escapeHtml(hotelName)}</p>
      <p><b>City:</b> ${escapeHtml(city || "-")}</p>
      <p><b>Notes:</b><br>${escapeHtml(notes || "-").replace(/\n/g,"<br/>")}</p>
    `
  };

  const emailRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Authorization": `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!emailRes.ok) {
    const t = await emailRes.text();
    return json({ ok: false, error: `Email failed: ${t}` }, 500);
  }

  return json({ ok: true, message: "Application received" }, 200);
};

function json(obj: any, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json" } });
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c]!));
}
