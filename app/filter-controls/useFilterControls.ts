import { useRouter } from "next/navigation";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import {
	getFilterUrlSearchParams,
	getInitialFilterSearchParams,
	getUpdatedFilterState,
} from "@app/filter-controls/FilterControlsService";

interface HookResult {
	isExpanded: boolean;
	filterState: Record<string, string>;
	handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
	handleClick: () => void;
	handleChange: (filterCode: string) => (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const useFilterControls = (): HookResult => {
	const router = useRouter();

	const [isExpanded, setIsExpanded] = useState(false);
	const [filterState, setFilterState] = useState<Record<string, string>>(
		getInitialFilterSearchParams()
	);

	const handleClick = () => {
		setIsExpanded((prevState) => !prevState);
	};

	const handleChange = (filterCode: string) => (event: ChangeEvent<HTMLSelectElement>) => {
		const { value: filterId } = event.target;

		setFilterState(
			getUpdatedFilterState({
				filterState: structuredClone(filterState),
				filterId,
				filterCode,
			})
		);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		router.push(`/?${getFilterUrlSearchParams(filterState)}`);
		setIsExpanded(false);
	};

	return {
		isExpanded,
		filterState,
		handleSubmit,
		handleClick,
		handleChange,
	};
};
