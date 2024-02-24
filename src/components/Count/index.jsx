import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";

const Count = ({ dishID, cartItems, setCartItems }) => {
	const increase = () => {
		setCartItems(prevCart => {
			return prevCart.map(item => {
				if (item.id === dishID) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return item;
			});
		});
	};

	const decrease = () => {
		setCartItems(prevCart => {
			return prevCart.map(item => {
				if (item.id === dishID && item.quantity > 1) {
					return { ...item, quantity: item.quantity - 1 };
				}
				return item;
			});
		});
	};

	const removeFromCart = () => {
		setCartItems(prevCart => prevCart.filter(item => item.id !== dishID));
	};

	return (
		<div className="flex w-full bg-slate-200 py-2 rounded-xl">
			<button onClick={decrease} className="w-1/4">
				<MinusIcon className="w-6 mx-auto" />
			</button>
			<span className="w-1/4 text-center">{cartItems.find(i => i.id === dishID).quantity}</span>
			<button onClick={increase} className="w-1/4">
				<PlusIcon className="w-6 mx-auto" />
			</button>
			<button onClick={removeFromCart} className="w-1/4">
				<TrashIcon className="w-6 mx-auto" />
			</button>
		</div>
	);
};

export default Count;