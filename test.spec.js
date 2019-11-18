require('dotenv').config();

const token = process.env.SLACK_TOKEN;
const tchannel = process.env.TESTING_CHANNEL;
const { RTMClient, LogLevel} = require('@slack/rtm-api');

const rtm = new RTMClient(token, {});


(async () => {
                await rtm.start()
                    .catch(console.error);
                    })();


const
