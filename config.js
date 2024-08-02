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
global.devs = "27736267768";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05vMXVUYWU2MUpQZzZNQU9iOE9pR2JWM3Q0S0JpMEREemlGNDJ1Sm0yUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDFlRW5BSlliai9Ka2dYRFBwckJyUnFhczZ5ZkY5NURBV0dZT2V0dHdoST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5REt0Um1pVFk3bFBKYkluK281OEZsZUdTSExEbTJVNTFDVFNtcVVzaDNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKL1R3cWNSRGRGNWxsNXdCUUdrTmo1d051b1Bua2VCd2V4MUVWL1dWS0VnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktQNTNLeXJxSFR4SFNzVEMrekwxMTBGS2YvMEhnd29UN3BkSFcvamVqSEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndrdWNYQUJMblBUTndMRjlzcWJJbDNla1ZJUEZQZWZtTnIyWC9XOVB4eUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU1GSk5nZ2NuNm1aT2pLd2NqamtjZEdUS2FnOU9Tai80aHgwRUN3YlJVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZS9Ta3JHdnNmWnFxSmgrSzltNmxwbHZORUIrOFIySTBTN3UyVkozd25Hdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImR5UEQvM2lqVlFNZG4yZTI1MFRUWDFUQnhVbEdNRWs3L2tFajJ6QXVydDBYMEdUaXJpTHBXRGVLRkR3RzFhQnZLT3Z4Umo5ZE95L212Y1ZxMEZ1V0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk2LCJhZHZTZWNyZXRLZXkiOiJtTnkvTUFEQlRablBlMExsVzBzcDZDUjdabzF5bGUrTEhtQUFSRUlUb1F3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NzM2MjY3NzY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlGNzFCQjA3QUQ1NjQ1RDk2Q0I5RUYwRENGMkUxMkEzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI2MjA3ODB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NzM2MjY3NzY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQxMTBEM0YxNDBGNjA2RENFMkRDRUMzMUI1NzE3Rjc4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI2MjA3ODF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlM2VjZTRWg5VHJ1REM1LUF6czk4QWciLCJwaG9uZUlkIjoiYThhNzhmZjktNGQyMy00M2UwLThiYzAtZDM0NjI5NjBmNTJjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InEwVVQwVmJzbzVKQlZrMTR2S1duQ2wvZjAvbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQmNUUkJQdGo4SGEyNzZvNjI1UTdJYlNvZE09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ1EzODlQRzQiLCJtZSI6eyJpZCI6IjI3NzM2MjY3NzY4Ojg5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ002Z2lZTUVFTnkydExVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InhqN3Rmb09NWk4rL0JwelNKd1RRbXN1UTNScmRLcG4zZVZ5TFYxQXVNMDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZXRms3NlZwRmVwRmVUdm04TmVPVWdFWGFKTXVMZVBnajE1TG9iaGRrTGF5WEpKVFQ2R0VDLzZ6SVprcGpiZi9TUW5VejQvcHExMUU1V1lldmhBc0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBWjF6bllGYVBEK3NRZkFZNlU0LzhTOUxHczcrUHErVFdQWCt4TjY5azVCbGFuVndFcnlveXZ2QkpCdjRwdjdoZEFwV2k5NnJ1SEp6QlJjb1VZRXlCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NzM2MjY3NzY4Ojg5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNZKzdYNkRqR1RmdndhYzBpY0UwSnJMa04wYTNTcVo5M2xjaTFkUUxqTk8ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI2MjA3Nzd9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Powered by Slade™`",
  author: process.env.PACK_AUTHER || "Tsepo",
  packname: process.env.PACK_NAME || "Slade is being weird again",
  botname: process.env.BOT_NAME || "★Slade★",
  ownername: process.env.OWNER_NAME || "Tsepo Mohlomi",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
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
