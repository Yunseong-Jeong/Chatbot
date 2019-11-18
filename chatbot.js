require('dotenv').config();

const { RTMClient } = require('@slack/rtm-api');

const token = process.env.SLACK_TOKEN;

const rtm = new RTMClient(token);
rtm.start();

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (text === '안녕') {
    rtm.sendMessage('헬로', channel);
  } else {
    rtm.sendMessage('응?', channel);
  }
});
