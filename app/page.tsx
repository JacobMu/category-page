import Layout from "@/app/layout";
import { getProductsData } from "@app/api-service/ApiService";
import { CategoryPage } from "@app/CategoryPage";

const Page = async () => {
	const data = await getProductsData().catch((err) => {
		console.error(err);
	});

	if (!data) {
		return (
			<Layout>
				<div>Something went wrong</div>
			</Layout>
		);
	}

	return (
		<Layout>
			<CategoryPage productsData={data} />
		</Layout>
	);
};

export default Page;
