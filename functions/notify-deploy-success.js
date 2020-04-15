const fetch = require('node-fetch');

exports.handler = async () => {
  try {
    await fetch(process.env.SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        text: `Byla úspěšně nasazena nová verze webu :heavy_check_mark:\n${process.env.URL} :rocket:`,
        username: 'CI/CD',
        icon_emoji: ':sheep:',
      }),
    });
    return {
      statusCode: 200,
      body: 'Notification sent to Slack',
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: `Oops, something went wrong: ${e.toString()}`,
    };
  }
};
