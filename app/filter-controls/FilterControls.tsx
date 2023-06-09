"use client";

import type { FilterItem } from "@app/api-service/TypesService";
import type { ChangeEvent, FormEvent } from "react";
import { Selection } from "@app/components/filtering/Selection";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
	getFilterUrlSearchParams,
	getInitialFilterSearchParams,
	getUpdatedFilterState,
} from "@app/filter-controls/FilterControlsService";
import { useFilterControls } from "@app/filter-controls/useFilterControls";

interface Props {
	filters: FilterItem[];
}

export const FilterControls = ({ filters }: Props) => {
	const { handleSubmit, handleClick, handleChange, isExpanded, filterState } =
		useFilterControls();
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
								selectedValue={filterState?.[code]}
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
