import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import Swal from "sweetalert2"

const OrderForm = ({ closeUserForm, cartItems, clearCart, restaurantID }) => {

	const [customerName, setCustomerName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [description, setDescription] = useState('')
	const [isOpen] = useState(true)

	const handleSubmitForm = (event) => {
		event.preventDefault()

		if (customerName === '' || phone === '' || email === '') {
			Swal.fire({
				position: 'center',
				icon: 'error',
				title: 'Заполните обязательные поля!',
				showConfirmButton: true,
			})
			return
		}

		const requestBody = {
			customerName,
			phone,
			email,
			description,
			restaurantID,

			cartItems: cartItems.map((cartItem) => ({
				itemId: cartItem.itemId,
				quantity: cartItem.quantity,
				price: cartItem.price
			}))
		}

		fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/order`, {
			method: 'POST',
			body: JSON.stringify(requestBody)
		})

			.then(response => {
				if (response.ok) {
					closeUserForm()
					clearCart()
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: 'Спасибо за обращение! Наш менеджер свяжется с Вами в течение 10 минут!',
						showConfirmButton: false,
						timer: 3000
					})
				} else {
					Swal.fire({
						position: 'center',
						icon: 'error',
						title: 'Упс... Что-то пошло не так! Попробуйте отправить заказ позднее!',
						showConfirmButton: false,
						timer: 3000
					})
				}
			})
	}

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeUserForm}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/35" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="my-5 text-3xl font-medium text-teal-900"
									>
										Для оформления заказа заполните все поля
									</Dialog.Title>

									<form onSubmit={handleSubmitForm} className="flex flex-col gap-5 justify-between">
										<input
											className="p-2 h-10 w-full border border-teal-300 rounded-xl outline-none focus:border-teal-500"
											placeholder="Введите Ваше имя"
											name="customerName"
											type="text"
											value={customerName}
											onChange={(event) => setCustomerName(event.target.value)}
										/>

										<input
											className="p-2 h-10 w-full border border-teal-300 rounded-lg focus:outline-none focus:border-teal-500"
											placeholder="Введите номер телефона"
											name="phone"
											type="tel"
											value={phone}
											onChange={(event) => setPhone(event.target.value)}
										/>


										<input
											className="p-2 h-10 w-full border border-teal-300 rounded-xl outline-none focus:border-teal-500"
											placeholder="Введите e-mail"
											name="email"
											type="text"
											value={email}
											onChange={(event) => setEmail(event.target.value)}
										/>

										<textarea
											className="p-2 h-20 w-full border border-teal-300 rounded-lg focus:outline-none focus:border-teal-500"
											placeholder="Введите комментарий..."
											name="description"
											value={description}
											onChange={(event) => setDescription(event.target.value)}
										/>

										<div className="mt-4 flex justify-start items-center gap-2">
											<button
												type="submit"
												className="inline-flex justify-center rounded-md border border-transparent bg-teal-100 px-4 py-2 text-sm md:text-xl font-medium text-teal-900 hover:bg-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
											>
												Отправить заявку
											</button>

											<button
												type="button"
												className="inline-flex justify-center rounded-md border border-transparent bg-teal-100 px-4 py-2 text-sm md:text-xl font-medium text-teal-900 hover:bg-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
												onClick={closeUserForm}
											>
												Отмена
											</button>
										</div>
									</form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

export default OrderForm