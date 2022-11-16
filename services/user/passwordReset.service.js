const UserModel = require('../../database/models/user');
const mail = require('../../utils/sendMail');

module.exports = async function (user) {
	// const updatedUser = await UserModel.findOne(user);
	const result = await mail.sendMail(
		[
			{
				Email: user.email,
				Name: user.username,
			},
		],
		'Click on below link to verify account ',
		`<h1>verify yourself</h1>
      <a href="https://e-commerce-4-3p34g89v2el9ydp2vn.codequotient.in/forgotPassLink/${user.id}">Click here</a>
    `
	);

	return;
};
