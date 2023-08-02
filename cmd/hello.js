//helloコマンドの内容
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('あいさつに反応してbotが返事します'),
    execute: async function(interaction) {
        await interaction.reply('HELLO!');
    },
};