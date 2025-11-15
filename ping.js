import fetch from 'node-fetch';

async function ping() {
  try {
    const url = process.env.PING_URL;
     if (!url) throw new Error("PING_URL not set");

    const res = await fetch(url, { method: "GET" });
    console.log("Status:", res.status);

    if (!res.ok) {
      throw new Error(`Request failed with ${res.status}`);
    }
  } catch (error) {
    console.log('Error pinging server:', error);
    process.exit(1)
  }
}

ping();