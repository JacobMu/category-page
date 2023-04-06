export function getInitialFilterSearchParams(): Record<string, string> {
	const filterParam = new URL(window.location.href).searchParams.get("filters");
	if (filterParam) {
		return JSON.parse(filterParam);
	}

	return {};
}

export function getFilterUrlSearchParams(filter: Record<string, string>): URLSearchParams {
	const filterSearchParams = new URLSearchParams();
	Object.entries(filter).forEach(([filterCode, filterId]) => {
		filterSearchParams.append(`${filterCode}[]`, filterId);
	});

	return filterSearchParams;
}

export function getUpdatedFilterState({
	filterId,
	filterCode,
	filterState,
}: {
	filterId: string;
	filterCode: string;
	filterState: Record<string, string>;
}): Record<string, string> {
	if (filterId === "---") {
		delete filterState[filterCode];
		return filterState;
	}

	filterState[filterCode] = filterId;
	return filterState;
}
