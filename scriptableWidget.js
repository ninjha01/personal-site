// Variables at the top of the file. Do not edit.
// icon-color: orange; icon-glyph: quote-right;
const fetchUrl = "https://www.nishantjha.org/api/stats";

const data = await fetchData(fetchUrl);
const widget = createWidget(data);
Script.setWidget(widget);
Script.complete();

function createWidget(data) {
  const w = new ListWidget();
  const bgColor = new LinearGradient();
  bgColor.colors = [new Color("#29323c"), new Color("#1c1c1c")];
  bgColor.locations = [0.0, 1.0];
  w.backgroundGradient = bgColor;
  w.setPadding(12, 15, 15, 12);
  w.spacing = 6;

  addDateLine(w);
  addBatteryLine(w);
  addVercelLine(w, data);
  addGithubLine(w, data);

  return w;
}

async function fetchData(url) {
  const request = new Request(url);
  const res = await request.loadJSON();
  return res;
}

function addDateLine(w) {
  const dateFormatter = new DateFormatter();
  const today = new Date();
  const line = `[🗓] ${dateFormatter.string(today)}`;
  const txt = w.addText(line);
  txt.textColor = Color.white();
  txt.font = new Font("Menlo", 11);
}

function createWidget(data) {
  const w = new ListWidget();
  const bgColor = new LinearGradient();
  bgColor.colors = [new Color("#29323c"), new Color("#1c1c1c")];
  bgColor.locations = [0.0, 1.0];
  w.backgroundGradient = bgColor;
  w.setPadding(12, 15, 15, 12);
  w.spacing = 6;

  addDateLine(w);
  addBatteryLine(w);
  addVercelLine(w, data);
  addGithubLine(w, data);

  return w;
}

function addBatteryLine(w) {
  const level = Device.batteryLevel();
  const juice = "#".repeat(Math.floor(level * 8));
  const used = ".".repeat(8 - juice.length);
  const line = `[🔋] [${juice}${used}] ${Math.round(level * 100)}%`;
  const txt = w.addText(line);
  txt.textColor = Color.white();
  txt.font = new Font("Menlo", 11);
}

function addVercelLine(w, data) {
  const vercelStatus = data.vercel.status;
  const vercelDisplayName = data.vercel.displayName;
  const vercelColor = vercelStatus === "READY" ? "#6ef2ae" : "#ff9468";
  const line = `[📟] ${vercelDisplayName}: ${vercelStatus}`;
  const txt = w.addText(line);
  txt.textColor = new Color(vercelColor);
  txt.font = new Font("Menlo", 11);
}

function addGithubLine(w, data) {
  const githubCommitChart = data.github.commitChart;
  const commitColor = calculateCommitColor(githubCommitChart);
  const line = `[📈] Github: [${githubCommitChart}]`;
  const txt = w.addText(line);
  txt.textColor = new Color(commitColor);
  txt.font = new Font("Menlo", 11);
}

function calculateCommitColor(commitChart) {
  const weightings = { ".": 0, "-": 1, "#": 5 };
  const total = commitChart.split("").reduce((acc, char) => acc + weightings[char], 0);
  const avg = total / commitChart.length;

  if (avg < 2) return "#ff9468";
  if (avg < 4) return "#f5dd4b";
  return "#6ef2ae";
}
