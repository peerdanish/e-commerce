const Mailjet = require('node-mailjet');

const mailjet = new Mailjet({
	apiKey: 'f7ae3e2f504040efa3873f0b7d253f46',
	apiSecret: '09487139136b2ef65d0129f963a11e1b',
});

module.exports.sendMail = async function (email, subject, body) {
	return await mailjet.post('send', { version: 'v3.1' }).request({
		Messages: [
			{
				From: {
					Email: 'peerdanish96@gmail.com',
					Name: 'Danish nazir',
				},
				To: email,
				Subject: subject,
				HTMLPart: body,
			},
		],
	});
};
