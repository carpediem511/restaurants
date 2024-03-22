import DescriptionRestaurant from "./DescriptionRestaurant"
import { Link } from "react-router-dom"
import Menu from "./Menu"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RestaurantPage = ({ loading, setLoading }) => {

	const [restaurant, setRestaurant] = useState({})
	const { slug } = useParams();

	useEffect(() => {
		fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}`)
			.then((response) => response.json())
			.then(
				(result) => {
					setRestaurant(result);
				},
			);
	}, [slug]);

	return (
		<>
			<DescriptionRestaurant restaurant={restaurant} loading={loading} setLoading={setLoading} />
			<div className="max-w-md mx-auto lg:max-w-5xl">
				<p className="text-4xl text-gray-800 font-semibold text-center my-10 sm:mt-28">
					Выбрать блюда:
				</p>

				<Link
					to="/cart"
					className="p-3 float-right mt-10 rounded-xl text-lg text-white bg-red-600 hover:bg-red-800 sm:mt-3"
				>
					Перейти в корзину
				</Link>
			</div>
			<Menu restaurant={restaurant} loading={loading} setLoading={setLoading} />
		</>
	)
}

export default RestaurantPage