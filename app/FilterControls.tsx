"use client";

import type { FilterItem } from "@app/api-service/TypesService";
import type { ChangeEvent, FormEvent } from "react";
import { Selection } from "@app/components/filtering/Selection";
import { useState } from "react";

interface Props {
	filters: FilterItem[];
	onSubmitFilter: (formSearchParam: string) => void;
}

export const FilterControls = ({ filters, onSubmitFilter }: Props) => {
	const filterParam = new URL(window.location.href).searchParams.get("filters") ?? "{}";
	const [isExpanded, setIsExpanded] = useState(false);
	const [filter, setFilter] = useState<Record<string, string>>(JSON.parse(filterParam));

	const handleClick = () => {
		setIsExpanded((prevState) => !prevState);
	};

	const handleChange = (filterCode: string) => (event: ChangeEvent<HTMLSelectElement>) => {
		const { value: filterId } = event.target;
		const filterState = structuredClone(filter);

		if (filterId === "---") {
			delete filterState[filterCode];
			setFilter(filterState);
			return;
		}

		filterState[filterCode] = filterId;
		setFilter(filterState);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const url = new URL(window.location.href);
		url.searchParams.set("filters", JSON.stringify(filter));
		window.location.assign(url);

		const filterSearchParams = new URLSearchParams();
		Object.entries(filter).forEach(([filterCode, filterId]) => {
			filterSearchParams.append(`${filterCode}[]`, filterId);
		});
		onSubmitFilter(filterSearchParams.toString());
	};

	return (
		<div className="absolute top-0 z-30 w-full bg-white p-6">
			<button
				type="button"
				className="w-20 rounded-lg px-3 outline hover:bg-black hover:text-white hover:outline hover:transition-all"
				onClick={handleClick}
			>
				{isExpanded ? "Close" : "Expand"}
			</button>
			{isExpanded && (
				<form className="mt-2" onSubmit={handleSubmit}>
					Filters:
					<div className="grid grid-cols-1 gap-2 px-8 pb-8 md:grid-cols-2 lg:grid-cols-3">
						{filters.map(({ name, code, options }, index) => (
							<Selection
								selectedValue={filter[code]}
								onChange={handleChange(code)}
								key={index}
								selectionName={name}
								selectionOptions={options?.map(({ value, name }) => ({
									valueName: name,
									valueId: value,
								}))}
							/>
						))}
					</div>
					<div className="flex justify-center">
						<button
							type="submit"
							className="mx-auto w-1/2 rounded-2xl outline hover:bg-black hover:text-white"
						>
							Search
						</button>
					</div>
				</form>
			)}
		</div>
	);
};
