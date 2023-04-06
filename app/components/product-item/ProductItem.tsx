import type { ReactNode } from "react";

interface ProductItem {
	name: string;
	formattedAmount: string;
	rating: number;
}

interface Props {
	productItem: ProductItem;
	imageThumbnail?: ReactNode;
}
export const ProductItem = ({ productItem, imageThumbnail }: Props) => {
	return (
		<div>
			<button
				className="w-2/3 overflow-clip p-6 hover:scale-105 hover:rounded-2xl hover:shadow-2xl hover:transition-transform hover:duration-300"
				type="button"
			>
				{imageThumbnail && imageThumbnail}
				<div className="mx-auto w-full">
					<div className="min-h-8 my-3">
						<p className="text-left text-lg leading-6">{productItem.name}</p>
					</div>
					<div className="text-md mb-1 text-right">{`Rating: ${productItem.rating}%`}</div>
					<div className="text-right text-2xl font-bold">
						{productItem.formattedAmount}
					</div>
				</div>
			</button>
		</div>
	);
};
