// 03 - Map Names

const longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

const shortNames = longNames.map(function (user) {
    return `${user.firstName} ${user.lastName}`;
});
console.log(shortNames);