export function useJsonToGui(jsonContent) {
	const init = JSON.parse(jsonContent);

	function getType(obj) {
		let type = typeof obj;
		if (type === "object" && obj.length) {
			return "array";
		}
		return type;
	}

	function decomposeObject({ obj, parent = "" }) {
		const r = [];
		const entries = Object.entries(obj);
		for (let entry of entries) {
			const name = entry[0].match(/^\d+$/) ? "" : entry[0];
			const id = (parent !== "" ? `${parent}.` : "") + entry[0];
			const type = getType(entry[1]);
			const hasChildren = type === "object" || type === "array" ? true : false;
			let content;

			let children;
			if (hasChildren) {
				children = decomposeObject({ obj: entry[1], parent: id });
			}
			if (type === "string") {
				content = entry[1];
			}

			r.push({ id, name, parent, type, children, content });
		}
		return r;
	}

	const out = decomposeObject({ obj: init, parent: "" });

	return out;
}

export function useGuiToJson(guiContent) {}
