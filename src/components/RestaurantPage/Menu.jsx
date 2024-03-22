import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FlapperSpinner } from "react-spinners-kit";
import Count from '../Count'
import { PlusIcon } from "@heroicons/react/24/solid";
import OtherRestaurantMessage from "../ModalWindows/OtherRestaurantMessage";


const Menu = ({ restaurant, loading, setLoading }) => {

	const { slug } = useParams();
	const [dishes, setDishes] = useState([]);
	const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || [])  // массив блюд, добавленных в корзину
	const [showConfirmation, setShowConfirmation] = useState(false);
	const [newCartItem, setNewCartItem] = useState(null);

	useEffect(() => {
		fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`)
			.then((response) => response.json())
			.then((result) => { setDishes(result) })
	}, [slug]);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cartItems));
	}, [cartItems]);

	const addToCart = (id, name, description, image, price) => {
		const newItem = {
			id: id,
			name: name,
			description: description,
			image: image,
			price: price,
			quantity: 1,
			restaurant: restaurant.name
		}

		// Проверяем, есть ли уже товары в корзине
		if (cartItems.length === 0) {
			setCartItems([newItem]); // Если корзина пуста, просто добавляем новый элемент
		} else {
			// Проверяем, есть ли в корзине товары из других ресторанов
			const differentRes = cartItems.map((item) => item.restaurant);
			if (differentRes.includes(newItem.restaurant)) {
				// Если товары из текущего ресторана уже есть в корзине, добавляем новый элемент
				setCartItems([...cartItems, newItem]);
			} else {
				// Если в корзине есть товары из других ресторанов, показываем уведомление
				setShowConfirmation(true);
				setNewCartItem(newItem);
			}
		}
	}

	const confirmAddToCart = () => {
		setShowConfirmation(false);
		setCartItems([newCartItem]); // Очищаем корзину и добавляем новый элемент
	};

	const cancelAddToCart = () => {
		setShowConfirmation(false);
		// Пользователь отменил добавление нового элемента, поэтому не нужно ничего делать
	};

	return (
		<>
			{showConfirmation && <OtherRestaurantMessage showConfirmation={showConfirmation} cancelAddToCart={cancelAddToCart} confirmAddToCart={confirmAddToCart} />}
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"></div>
				{loading ? (
					<div className="flex justify-center items-center h-screen">
						<FlapperSpinner size={50} color="#4F46E5" />
					</div>
				) : (
					<div className="grid max-w-md mx-auto gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 md:grid-cols-2 md:max-w-2xl xl:max-w-screen-lg sm:mx-auto">
						{dishes.map((dish) => (
							<div
								key={dish.id}
								className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow"
							>
								<div className="relative w-full h-48">
									<img
										src={dish.image}
										className="object-cover w-full h-full rounded-t"
										alt=""
									/>
								</div>
								<div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
									<div className="grid auto-cols-auto flex-grow">
										<div className="flex flex-col">
											<div className="text-2xl font-semibold">{dish.name}</div>
											<div className="text-sm text-gray-900 flex-grow">
												{dish.description}
											</div>
											<div className="mt-1 mb-4 mr-1 text-lg font-bold sm:text-5xl">
												{dish.price} Lira
											</div>
										</div>
									</div>

									{cartItems.map((c) => c.id).includes(dish.id) && (
										<Count
											dishID={dish.id}
											cartItems={cartItems}
											setCartItems={setCartItems}
										/>
									)}

									{!cartItems.map((c) => c.id).includes(dish.id) && (
										<button
											onClick={() =>
												addToCart(
													dish.id,
													dish.name,
													dish.image,
													dish.description,
													dish.price
												)
											}
											className="border flex py-2 rounded-xl justify-center w-full"
										>
											<PlusIcon className="w-6" />
											<p>Добавить в корзину</p>
										</button>
									)}
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	)
}

export default Menu