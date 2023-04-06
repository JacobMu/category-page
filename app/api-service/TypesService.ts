interface CategoryItem {
	id: number;
	name: string;
	price: number;
	formatted_price: string;
	rating_summary: number;
	thumbnail: string;
}

interface FilterOption {
	name: string;
	slug: string;
	value: string;
	count: number;
}

export interface FilterItem {
	name: string;
	code: string;
	global_name: string;
	display_mode: string;
	position: string;
	options: FilterOption[];
}

export interface CategoryPageData {
	items: CategoryItem[];
	filters: FilterItem[];
}
