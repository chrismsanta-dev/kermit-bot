const { SlashCommandBuilder, Attachment } = require("discord.js");
const path = require("node:path");
const fs = require("node:fs");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pkm")
    .setDescription("Returns a random Kermit meme!"),
  async execute(interaction) {
    const imagesFolder = path.join(__dirname, "../images");
    const imageFiles = fs
      .readdirSync(imagesFolder)
      .filter((file) => file.endsWith(".jpg"));
    const selectedImage =
      imageFiles[Math.floor(Math.random() * imageFiles.length)];

    await interaction.reply({ files: [imagesFolder + "/" + selectedImage] });
  },
};
