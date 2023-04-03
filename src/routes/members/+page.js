export const load = async ({ fetch }) => {
	let members
	await fetch('/src/members.json')
		.then((response) => response.json())
		.then((json) => {
			members = json.members
		})
}
