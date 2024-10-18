//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "2347040463391";
global.owner = process.env.OWNER_NUMBER || "2347040463391";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUFadHlScWJJMldBdXJtcnc0MkhPY2NnMmlIK0Iya3hodmgwMHVuZ2cyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDZHa25ROEZ3eVVCZ2R6c0NrcklQeWROMEZFbzV5cVJpMUdKVmJjUUp6VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5UFgvcFpXSDRXbzVkYjdpS1UreUEyV2JrNmFyUGplQ0IxTDdWaFdzYzJrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrZzFya2IzQVFRdEdFN0JsRHZWRkpVWXAzTndFTTlLcTBSZ3p4U1E3NzJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNMa3RwVDlhRFJJclJHa1hCMlkwMWZZSXdaUWgvRTRleFBSVnNqeW83RlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJEVmlUbXErL3JEV2VpcHpYL28vMFF6SVVXbzI5RFNkSFBTSlpuRlRVV1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0ZsMHgvbnN1enZPQUJaVVJyeE15dExSZTlLODRGd3kyd3NPaXgxSjcybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmpLNFlzZHJieVpUZDArNWJ0ZkdnSHZ0UkpDNVMvWkJUUnlGbWR5dHFucz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdEZGVHa1ZVOFBsenJhem1mVVV2TVl5bWxhTDZlOWtJQXV3YW1SY0NjamNxK1Z6VGk5Kys1UktQQmNtNUpPelpydnlJMUplZXdLTURPTjBaQnFRbENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzUsImFkdlNlY3JldEtleSI6IllRdnh1VGhWc1pYRlppMzdPaHlEODYxZHBacTg2ZFJLOC9JQUgySWRzSFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InZqUkUxdFJ6VHdtNUpvbjdnVmliMGciLCJwaG9uZUlkIjoiNzJiMzA4ZTAtOTE1MS00ZTFiLTk4MTYtMzc3M2ZhZWFmYThiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkYwdmxtK0lSV1ZDSS9TcFJ1ZEFQYndsa2sxTT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkZ6MWpWdnJUNDVYTmhLeVdXeG9UMGVpUmV3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVQxcWNvQkVON1J5cmdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiN2FoTGtJcG9yTlIwTVdQeXVlUHFCSk1JMVk4NUFuNWNrS1QzQTByYUMwVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiazl5RmNmb2FacXBHK0pGcDdPYTR1UVJpcCtIeXQ0OHVyN21WdS80TVJjL3FYTnh2Y0hJdXVWeTMzUkVFdzN2UGNtQUkzbnVHcEIzaWQxWWgxRWFqQUE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik8rVXRNc1JLNWJsSFZWNmpCSXptYkEwU0tXU2FQaFNJTWk5TCtENUxzZklwTlEwZ1Fya2R6TjBwTHhzcVYxcXFRb1VaUjBDck9oTkNPbVc3T2xHL0R3PT0ifSwibWUiOnsiaWQiOiIyMzQ5MDYxMjg1Nzk2OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQmVhc3QgU2hvcCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDYxMjg1Nzk2OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZTJvUzVDS2FLelVkREZqOHJuajZnU1RDTldQT1FKK1hKQ2s5d05LMmd0RiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTI3NjEzOX0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "TYG ×͜× GHOST?¿YT𓃵",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
