const WEB_TO_CASE_URL =
  "https://elitegroupholding--uat.sandbox.my.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&orgId=00DFV00000144HN";
const ORG_ID = "00DFV00000144HN";
const RECORD_TYPE_ID = "012FV000000EKwZ";

function buildFormBody(data) {
  const params = new URLSearchParams();
  params.set("orgid", ORG_ID);
  params.set("recordType", RECORD_TYPE_ID);
  params.set("retURL", data.retURL || "https://elitegroupholding.com/feedback");
  params.set("name", data.name || "");
  params.set("email", data.email || "");
  params.set("phone", data.phone || "");
  params.set("subject", data.subject || "");
  params.set("description", data.description || "");
  params.set("reason", data.reason || "");
  if (data.vin) params.set("00NFV000001yOOn", data.vin);
  return params.toString();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const {
      name,
      email,
      phone,
      subject,
      description,
      reason,
      vin,
      retURL,
    } = req.body;

    const payload = {
      name,
      email,
      phone: phone || "",
      subject,
      description,
      reason: reason || "",
      vin: vin || "",
      retURL,
    };

    const body = buildFormBody(payload);

    const sfResponse = await fetch(WEB_TO_CASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });

    if (!sfResponse.ok) {
      console.error("Salesforce WebToCase error:", sfResponse.status, await sfResponse.text());
      return res.status(500).json({
        success: false,
        error: "Failed to submit feedback",
      });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Feedback API error:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Failed to save feedback",
    });
  }
}
