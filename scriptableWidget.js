// Variables at the top of the file. Do not edit.
// icon-color: orange; icon-glyph: quote-right;
const user = "Nishant";
const fetchUrl = "https://www.nishantjha.org/api/stats";

const data = await fetchData(fetchUrl);
const widget = createWidget(data);
Script.setWidget(widget);
Script.complete();

async function fetchData(url) {
  const request = new Request(url);
  const res = await request.loadJSON();
  return res;
}

function createWidget(data) {
  const w = new ListWidget();
  const bgColor = new LinearGradient();
  bgColor.colors = [new Color("#29323c"), new Color("#1c1c1c")];
  bgColor.locations = [0.0, 1.0];
  w.backgroundGradient = bgColor;
  w.setPadding(12, 15, 15, 12);
  w.spacing = 6;

  const vercelStatus = data.vercel.status;
  const vercelDisplayName = data.vercel.displayName;
  const statusColor = vercelStatus === "READY" ? "#6ef2ae" : "#ff9468";

  const lines = [`[] ${user} ~$ now`, `[🗓] ${new DateFormatter().string(new Date())}`, `[🔋] ${renderBattery()}`];

  lines.forEach(line => {
    const txt = w.addText(line);
    txt.textColor = Color.white();
    txt.font = new Font("Menlo", 11);
  });

  const vercelLine = w.addText(`[📟] ${vercelDisplayName}: ${vercelStatus}`);
  vercelLine.textColor = new Color(statusColor);
  vercelLine.font = new Font("Menlo", 11);

  return w;
}

function renderBattery() {
  const level = Device.batteryLevel();
  const juice = "#".repeat(Math.floor(level * 8));
  const used = ".".repeat(8 - juice.length);
  return `[${juice}${used}] ${Math.round(level * 100)}%`;
}
