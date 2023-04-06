import type { CategoryPageData } from "./TypesService";

const URL_BASE = "https://gymbeam.sk/rest/V1/gb";
const OPTIONS = {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
	},
};

export async function getProductsData(): Promise<CategoryPageData> {
	const response = await fetch(`${URL_BASE}/catalog/products?category_ids[]=2416`, OPTIONS).catch(
		(err: Error) => {
			throw err;
		}
	);
	return (await response.json()) as Promise<CategoryPageData>;
}

export async function getFilteredProductsData(searchParam: string): Promise<CategoryPageData> {
	const response = await fetch(
		`${URL_BASE}/catalog/products?category_ids[]=2416&${searchParam}`,
		OPTIONS
	).catch((err: Error) => {
		throw err;
	});
	return (await response.json()) as Promise<CategoryPageData>;
}
