//Put
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
//👉 Put Your Session Id 🐣 👈කියන එක කපලා අයින් කරලා ඔයාගේ Session id එක දාන්න.
SESSION_ID: process.env.SESSION_ID || "LAKA-MD=M54C0RzI#vu23acCuRfZ4ZMzCeOTFDLjf5Vn4bn0q1BqYCEoR_4w",
//👉 Put Your Mongode Url 🖇️ 👈කියන එක කපලා අයින් කරලා ඔයාගේ Mongode Url එක දාන්න.
MONGODB: process.env.MONGODB || "mongodb://mongo:GdCfQflUXajCbEhqTEFNBOJIOACcuBSl@junction.proxy.rlwy.net:23221",
PREFIX: process.env.PREFIX || '.' ,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '919387196256' : process.env.OWNER_NUMBER,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO
};
