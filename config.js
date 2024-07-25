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
global.devs = "234906628353";
global.sudo = process.env.SUDO || "27736267768";
global.owner = process.env.OWNER_NUMBER || "27735940102";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUwxWEtaZjJ0YkpDMStqYVpad3ltNFNLczMvN3hSM2lQdzE0TU13QVcyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGoyVmRqMVhqclkyK0F6bk05bTU2QXdKTWRwMEJiQXY5Y1ZjVzl4dDJnST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSzV5S1FWNEwxaGJEc0NjV0gwczNqWDVQaDdSNDFvU1hOYmRTajBYckZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFamNsK2xmb1hqSVFvRTlsL1RrczRSbkpHZXVuQ25KTGdxTGwvWVNIZWtrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlQaG9XQ2swU0VDRlE2eHM5Yk94cnhaY1hWVUNOcDgrMTZ4VkNrU2xNa2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBNRlZwWGQwRUNYNThjc2tHaHR1QkNZMit4bUVsRm1KU1Nnb3dnelYzaUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUwyOU1ybFJTVWlFWE1IOHR5WUpPaXFCcFptNkdhdGV6Wm9pd3JMVFJrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWJqcHA5bWR5WVF5MWpPS1gvN1E4a2RWY2k1NkYwcTZadUdiQWM3MGJHWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhEdzk3ZVhFeVQrWXh5d3B1WFJDNFdKeGtGV2RVKzM0WmQ4WktXWEJZUzk0NkpXTStZdGNRUXNNak9BWVpnRHNJN2theVhTVTBjNmVCQTlWd3Yrd0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTMsImFkdlNlY3JldEtleSI6IjZ6c0VIZGJYUTd5aFNwUlhsWEJIc2tJMnowVWxzbFZ1aGM1MWxzdXhNaUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlhlY0tTY0tNUWRtamdlTlV1S0gzNHciLCJwaG9uZUlkIjoiNGFjM2E1ZGQtODc2OS00ZWRhLWI0ZjAtOTI1ZGUzYjZhZWY3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikdia2crTDNYZWdjYlJnYUhCWUJSU0dCWjBsTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDM283VFZiRTJSamtBNGhQNkNhVDRib1FyR3c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSlpMNDRLRzMiLCJtZSI6eyJpZCI6IjI3NzM1OTQwMTAyOjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiT2luayBvaW5rIGJpaCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFMwMGZBREVMbi9pclVHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibXpnczdtNHgvTEhldFBGcFZ0V2w1TXdQU0YyUmdFWFJMck9DdFVweFBpYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQXIrTUd6aEtUUDhMQ09uR0NLTkdMMU9UaEU1MTJSbUt5OUdNaUFoS2tPaDFueXlOaGEzaDE5NEpRQ0EyT2tIb2tyUU84WHArZDhZYVNrL2JwV1pSREE9PSIsImRldmljZVNpZ25hdHVyZSI6IjFmR0ZBQjFVWUNlek1lZDdCSTNaQVVZVEFjbWI3ZHBDV1hrRTBvTHZsUjcwZ2NJV0lSbWk2Y0hBUWZxYnpGM0NhbmJGNXdWd3d2QzZtdHM0ajJGNkNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc3MzU5NDAxMDI6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaczRMTzV1TWZ5eDNyVHhhVmJWcGVUTUQwaGRrWUJGMFM2emdyVktjVDRuIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxOTQxOTU5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpIcSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "Tsepo",
  packname: process.env.PACK_NAME || "Slade is being weird again",
  botname: process.env.BOT_NAME || "★Slade★",
  ownername: process.env.OWNER_NAME || "Tsepo Mohlomi",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
