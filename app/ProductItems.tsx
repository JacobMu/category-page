import { ProductItem } from "@app/components/product-item/ProductItem";
import Image from "next/image";
import type { CategoryPageData } from "@app/api-service/TypesService";

interface Props {
	items: CategoryPageData["items"];
}

export const ProductItems = ({ items }: Props) => (
	<main className="mx-auto mt-20 w-2/3">
		<div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
			{items.map(({ name, rating_summary, formatted_price, thumbnail, id }) => (
				<ProductItem
					productItem={{
						rating: rating_summary,
						formattedAmount: formatted_price,
						name,
					}}
					imageThumbnail={
						<Image
							src={thumbnail}
							alt={name}
							width={300}
							height={300}
							loading="lazy"
							className="mx-auto mb-4 rounded-2xl shadow-xl"
						/>
					}
					key={id}
				/>
			))}
		</div>
	</main>
);
