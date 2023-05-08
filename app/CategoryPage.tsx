"use client";

import type { CategoryPageData } from "@app/api-service/TypesService";
import { FilterControls } from "@app/filter-controls/FilterControls";
import { ProductItems } from "@app/ProductItems";

interface Props {
	productsData: CategoryPageData;
}
export const CategoryPage = ({ productsData }: Props) => {
	return (
		<>
			<FilterControls filters={productsData.filters} />
			<ProductItems items={productsData.items} />
		</>
	);
};
