

export function getImageLink(wpFeature, id) {

	let result = wpFeature.find(o => o.id == id);

	return result.source_url;
	

}