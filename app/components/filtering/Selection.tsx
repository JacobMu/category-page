"use client";

import type { ChangeEvent } from "react";

interface SelectOption {
	valueId: string;
	valueName: string;
}

interface Props {
	selectedValue?: string;
	selectionName: string;
	selectionOptions: SelectOption[];
	onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const DEFAULT_VALUE = "---";

export const Selection = ({
	selectionOptions,
	selectionName,
	onChange,
	selectedValue = DEFAULT_VALUE,
}: Props) => {
	if (!selectionOptions) {
		return null;
	}
	return (
		<label className="flex w-3/4 flex-col">
			{selectionName}:
			<select name={selectionName} defaultValue={selectedValue} onChange={onChange}>
				<option value={undefined} className="px-2">
					{DEFAULT_VALUE}
				</option>
				{selectionOptions?.map(({ valueId, valueName }) => (
					<option key={valueId} value={valueId}>
						{valueName}
					</option>
				))}
			</select>
		</label>
	);
};
