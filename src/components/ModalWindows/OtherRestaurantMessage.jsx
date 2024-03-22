import { Dialog } from '@headlessui/react';

const OtherRestaurantMessage = ({ showConfirmation, cancelAddToCart, confirmAddToCart }) => {
	return (
		<>
			<Dialog open={showConfirmation} onClose={cancelAddToCart}>
				<Dialog.Panel className="w-full fixed inset-0 h-max m-auto max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
					<Dialog.Title
						as="h3"
						className="text-2xl font-medium leading-6 text-red-900"
					>
						Подтвердите действие
					</Dialog.Title>
					<div className="mt-2">
						<p className="text-lg text-red-500">
							Вы пытаетесь добавить товар из другого ресторана! Текущие блюда в корзине будут удалены! Хотите продолжить?
						</p>
					</div>

					<div className="bg-white rounded-lg overflow-hidden max-w-md p-6">
						<div className="mt-4 flex justify-center">
							<button
								onClick={confirmAddToCart}
								className="inline-flex justify-center rounded-md border border-transparent bg-teal-100 px-4 py-2 text-lg font-medium text-teal-900 hover:bg-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
							>
								Да
							</button>
							<button
								onClick={cancelAddToCart}
								className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-lg font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ml-4"
							>
								Нет
							</button>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>

		</>
	)
}

export default OtherRestaurantMessage