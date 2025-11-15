import fetch from "node-fetch";

async function ping() {
  try {
    const url = process.env.PING_URL;
    const key = process.env.SUPABASE_ANON_KEY;

    if (!url || !key) throw new Error("Missing env variables");

    const res = await fetch(url, {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
      },
    });

    console.log("Pinged Supabase table successfully. Status:", res.status);
    if (!res.ok) throw new Error("Ping failed");
  } catch (err) {
    console.error("Ping error:", err);
    process.exit(1); // fail workflow if error
  }
}

ping();
