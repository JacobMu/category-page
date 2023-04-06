"use client";

import type { CategoryPageData } from "@app/api-service/TypesService";
import { FilterControls } from "@app/FilterControls";
import { useEffect, useState } from "react";
import { ProductItems } from "@app/ProductItems";
import { getFilteredProductsData } from "@app/api-service/ApiService";

interface Props {
	productsData: CategoryPageData;
}
export const CategoryPage = ({ productsData }: Props) => {
	const [searchParam, setSearchParam] = useState<string | undefined>(undefined);
	const [filteredData, setFilteredData] = useState<CategoryPageData | undefined>(undefined);
	const productItems = filteredData?.items ?? productsData.items;

	useEffect(() => {
		if (searchParam) {
			getFilteredProductsData(searchParam).then(setFilteredData).catch(console.error);
		}
	}, [searchParam]);

	return (
		<>
			<FilterControls
				filters={productsData.filters}
				onSubmitFilter={(formData) => setSearchParam(formData)}
			/>
			<ProductItems items={productItems} />
		</>
	);
};
