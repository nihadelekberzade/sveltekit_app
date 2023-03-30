import { getProducts, setProducts } from '../../store/products';

export const load = async () => {
	const res = await getProducts();
	setProducts(res);

	// const pb = new PocketBase('http://127.0.0.1:8090');


	// await pb.admins.authWithPassword('nihad@gmail.com', 'W7u3sbNsVMCrngM');


	// const collection = await pb.collection('users').getFullList();
};
