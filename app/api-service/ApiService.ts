import type { CategoryPageData } from "./TypesService";

const URL_BASE = "https://gymbeam.sk/rest/V1/gb";
const OPTIONS = {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
	},
};

function getProductsUrl(): string {
	return `${URL_BASE}/catalog/products?category_ids[]=2416`;
}

export async function getProductsData(searchParams?: {
	[key: string]: string;
}): Promise<CategoryPageData> {
	let url = getProductsUrl();

	if (searchParams) {
		Object.entries(searchParams).forEach(([filterCode, filterId]) => {
			url = `${url}&${filterCode}=${filterId}`;
		});
	}

	const response = await fetch(url, OPTIONS).catch((err: Error) => {
		throw err;
	});
	return (await response.json()) as Promise<CategoryPageData>;
}
