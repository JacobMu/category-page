import Layout from "@/app/layout";
import { getProductsData } from "@app/api-service/ApiService";
import { CategoryPage } from "@app/CategoryPage";

const Page = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
	const data = await getProductsData(searchParams).catch((err) => {
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
