export function getColorScale(percent: number): string {
	if (percent === 0) {
		return "#fde725";
	} else if (percent <= 0.75) {
		return "#addc30";
	} else if (percent <= 1.5) {
		return "#5ec962";
	} else if (percent <= 3) {
		return "#28ae80";
	} else if (percent <= 6) {
		return "#21918c";
	} else if (percent <= 12) {
		return "#2c728e";
	} else if (percent <= 25) {
		return "#3b528b";
	} else if (percent <= 50) {
		return "#472d7b";
	} else if (percent <= 100) {
		return "#440154";
	} else {
		return "#000000";
	}
}
