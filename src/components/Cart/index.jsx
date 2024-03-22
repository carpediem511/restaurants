import { TrashIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OrderForm from "./OrderForm";

const CartBody = () => {

	const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || [])
	const [userForm, setUserForm] = useState(false);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cartItems));
	}, [cartItems]);

	const totalSum = () => {
		return cartItems.reduce((sum, cartItem) => sum + parseFloat(cartItem.price) * cartItem.quantity, 0);
	};

	const deleteDishFromCart = (id) => {
		const filteredOrder = cartItems.filter(cartItem => cartItem.id !== id);
		setCartItems(filteredOrder);
	};

	const clearCart = () => {
		setCartItems([]);
	};

	const openUserForm = () => {
		setUserForm(true);
	};

	const closeUserForm = () => {
		setUserForm(false);
	};

	return (
		<>
			{cartItems.length === 0 ? (
				<div className="pt-60 text-3xl m-auto font-bold text-center max-w-screen-lg">
					<p className="text-red-600">Ваша корзина пуста.</p>
					<p>
						<Link to='/'>
							<p className="my-7 text-teal-200 hover:text-teal-400 transition-all duration-3000">
								Перейдите для заказа
							</p>
						</Link>
					</p>
				</div>
			) : (
				<div className="shadow-sm overflow-x-auto mx-auto max-w-screen-lg ">
					<div className="items-start justify-between mt-60 md:flex">
						<div className="max-w-lg mt-10">
							<h3 className="text-gray-800 text-xl font-bold sm:text-2xl pb-10">
								Ваша корзина
							</h3>
						</div>
					</div>
					<table className="w-full table-auto text-sm text-left ">

						<thead className="bg-gray-50 text-gray-600 font-medium border-b">
							<tr>
								<th className="py-3 px-6 ">Наименование блюда</th>
								<th className="py-3 px-6">Количество</th>
								<th className="py-3 px-6">Цена за блюдо</th>
								<th className="py-3 px-6">Итоговая стоимость</th>
								<th className="py-3 px-6"> </th>
							</tr>
						</thead>
						<tbody>
							{cartItems.map((itemInCart) => (
								<tr key={itemInCart.id} >
									<td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
										<img
											src={itemInCart.image}
											className="w-10 h-10 rounded-full object-cover"
											alt=""
										/>
										<>
											<span className="block px-6 text-gray-700 text-sm font-medium">
												{itemInCart.name}
											</span>
										</>
									</td>

									<td className="px-6 py-4 whitespace-nowrap">{itemInCart.quantity}</td>
									<td className="px-6 py-4 whitespace-nowrap">{itemInCart.price}</td>
									<td className="px-6 py-4 whitespace-nowrap">{(itemInCart.quantity * itemInCart.price).toFixed(2)}</td>

									<td className="w-1/6 text-right px-6 whitespace-nowrap">
										<button
											className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
											onClick={() => deleteDishFromCart(itemInCart.id)}
										>
											<TrashIcon />
										</button>
									</td>
								</tr>
							))}
							<tr>
								<td className="pt-10 text-lg font-semibold">Стоимость заказа:</td>
								<td className="pt-10 text-lg font-semibold">{totalSum().toFixed(2)} Lira</td>
							</tr>
							<tr>
								<td colSpan="5">
									<div className="flex justify-between my-20 ">
										<button
											onClick={() => openUserForm()}
											className="mt-6 bg-red-600 text-white p-2 rounded-lg hover:bg-red-800"
											id="restaurantId"
										>
											Оформить заказ
										</button>

										<button
											onClick={() => clearCart()}
											className="mt-6 bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-800"
										>
											Очистить корзину
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}
			{userForm && <OrderForm closeUserForm={closeUserForm} cartItems={cartItems} clearCart={clearCart} restaurantID={cartItems.length > 0 ? cartItems[0].restaurantID : null} />}
		</>
	)
}

export default CartBody;
