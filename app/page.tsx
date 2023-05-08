import Layout from "@/app/layout";
import { getProductsData } from "@app/api-service/ApiService";
import { CategoryPage } from "@app/CategoryPage";

const Page = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
	const data = await getProductsData(searchParams);

	if (!data) {
		return (
			<Layout>
				<div>Sorry, something went wrong. Please, try to refresh</div>
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
