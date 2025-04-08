function buildAlertBlocks({ system, severity, description, userId }) {
  return [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: `🚨 [${severity}] ${system} Alert 발생`,
        emoji: true,
      },
    },
    {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text: `*시스템:*\n${system}`,
        },
        {
          type: "mrkdwn",
          text: `*심각도:*\n${severity}`,
        },
        {
          type: "mrkdwn",
          text: `*설명:*\n${description}`,
        },
        {
          type: "mrkdwn",
          text: `*시간:*\n${new Date().toLocaleString()}`,
        },
      ],
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `📣 호출 대상: <@${userId}>, <@${userId}>, <@${userId}>`,
      },
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "🟢 조치 완료",
          },
          style: "primary",
          action_id: "resolve_alert",
        },
      ],
    },
  ];
}

module.exports = { buildAlertBlocks };
