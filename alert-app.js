const { App } = require("@slack/bolt");
require("dotenv").config();
const { buildAlertBlocks } = require("./blocks/alertBlocks");
const { getTodayOnCallUserId } = require("./on-call");

const userId = "U08M1DWPWJW";
// const userId = getTodayOnCallUserId();
const channelId = "C08LWMFUKCM";

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  port: process.env.PORT || 3000,
});

app.command("/alert", async ({ client, command, ack }) => {
  await ack();

  const [system, severity, ...descParts] = command.text
    .split(",")
    .map((s) => s.trim());
  const description = descParts.join(", ");

  const blocks = buildAlertBlocks({ system, severity, description, userId });

  await client.chat.postMessage({
    channel: channelId,
    text: `🚨 [${severity}] ${system} Alert 발생`,
    blocks,
  });
});

app.action("resolve_alert", async ({ ack, body, client }) => {
  await ack();

  const userId = body.user.id;
  const blocksWithoutActions = body.message.blocks.filter(
    (block) => block.type !== "actions"
  );

  blocksWithoutActions.push({
    type: "context",
    elements: [
      {
        type: "mrkdwn",
        text: `✅ *조치 완료됨* - 처리자: <@${userId}>`,
      },
    ],
  });

  await client.chat.update({
    channel: body.channel.id,
    ts: body.message.ts,
    blocks: blocksWithoutActions,
    text: "✅ 조치 완료됨",
  });
});

(async () => {
  await app.start();
  app.logger.info("⚡️ Bolt app is running!");
})();
