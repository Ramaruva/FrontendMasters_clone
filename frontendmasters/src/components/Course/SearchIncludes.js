export const Searching = (item, target) => {
	let itemtitle = item.title;
	let desc = item.about.split(" ");
	if (itemtitle.includes(target) || desc.includes(target)) {
		console.log(itemtitle);
		return true;
	}
	return false;
};
