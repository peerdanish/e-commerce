const mail = require('../../utils/sendMail');

module.exports = async function (user) {
	const result = await mail.sendMail(
		[
			{
				Email: user.email,
				Name: user.username,
			},
		],
		'Your password was updated ',
		`<h1>Password changed</h1>
      <p>Your password has been successfully updated</p>
    `
	);

	return;
};
