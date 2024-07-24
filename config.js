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
global.sudo = process.env.SUDO || "27735940102";
global.owner = process.env.OWNER_NUMBER || "27736267768";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV041NEsweitLY3k5b3llazNJSXVTMk1Cdlh0UWM3QUV0Q1RwSHIrcUZITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWC9PcmdZYVExdWJtQ1AvZndpUkhyclFvQ3VTS2V2Z1d2ZFY5M3FUczltVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnR1FqcHJqYlM5UDAwbHNJYUh3bnpLWmJlZTVzbGV4RDQrZ2lEd0VJV2tJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGUnVSallxMFl3aUZMMDNQME9rT0Zqd3NnZTBld3Y5ZlJCTXRyaVJNNTBVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFPVXJDNEVQd211Tk5ZWGgzN2xaUmd5SnhzNThucGtOaTh0N2kzU1I2V289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVTUzFsbncxWlhMdE9LaEZIMWtqaTZkOXI3b3ZKR3cySjZYb0Y1aDdFeVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUVLWVRwbmlOUHNhWmNiTGtXaXlBbFJ0QjNCQzZjR0o1QXlHekdzUzZtTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkgwekVFUXZsUy9zSVlCQUl1b3B5WGkvcVpLYlp6OUQvai90VDJvVEFHUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRFUE8vNjNiSnZwekZveHpPckhVVGJPMXJXSk9wY3JrRVlvUGNBaW5oeVF6c292QTB3VWJpSUNQcEwwQUFGTElVZFdERHdqd01TenZvREhzb1lHSGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiJGbk9USThqN3MvNXAybnBlTjlYWHpyQWpqbjdoa0hCTWNaVDVvWVNvRGpZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlZkFoQnFMNVNIbXhNOElQMjdmcWdBIiwicGhvbmVJZCI6IjI2OTgyMTYyLTgxMjMtNDcwNi1iOTdmLWNiNjhiMzExNTk0ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2dG9pbGN4ZnVxYThOM2Y2MmI1RlBGY2pQRGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXlvdkt1Z1dzZUxaZzVBTm5OWE1ucXBIUURvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik40UjhKSjhGIiwibWUiOnsiaWQiOiIyNzczNjI2Nzc2ODo3OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLigJRUc2Vwb+KAlCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGlnNWg4UXJjNkZ0UVlZQkNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUXlGWG9mbTI0Q0FUVUkrT1BqV05nUEw3S2FlTXFCejk4eVhVcG5hS3pRND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL0VXYnhEeGZRRmljTXA1b1AwVUYybTdRT1o5QVhtQVVGU1dKVlVZNXZxby96SGRCdEFtck5HZmlLSUJINUVkR0VONGJCZDVCRytqRElrWG40YWlOQkE9PSIsImRldmljZVNpZ25hdHVyZSI6InJHNFdDTy9icE1uWmsxZUFyVnk2cVNtUzhVQm4rV01jZVc5c0VuS0JrUDczQlVwdlpUVUFzMUdVeHBFZXkweEhyb28vWkFzNmpYTnluTXhEWFcxQ2pnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc3MzYyNjc3Njg6NzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVU1oVjZINXR1QWdFMUNQamo0MWpZRHkreW1uaktnYy9mTWwxS1oyaXMwTyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTg1Mzc1NH0="
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
