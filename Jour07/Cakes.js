// 06 - Cakes

const cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

const chocolateCakes = cakes.filter(function(cake) {
    if (cake.flavor === "chocolate") {
        return cake;
    }
})
.map(function(chocolate) {
    return {
        name: chocolate.name,
        flavor: chocolate.flavor,
        status: "sold out !"
    }
})

console.log(chocolateCakes);