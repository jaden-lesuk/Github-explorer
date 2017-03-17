exports.getRepos = function () {
	$.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function (response) {
		console.log(response);
	}).fail(function (error) {
		console.log(error.responseJSON.message);
	});
};
676e d52ad189ed6370ec049a10c8f41ebb97d8dc
