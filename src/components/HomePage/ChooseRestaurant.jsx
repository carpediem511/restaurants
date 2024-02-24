import { Link } from "react-router-dom"

const ChooseRestaurant = ({ restaurants }) => {
	return (
		<>
			<section
				id="chooseRestaurant"
				className="mt-2 mx-auto px-4 max-w-screen-xl md:px-8"
			>
				<div className="text-center">
					<h1 className="text-3xl text-gray-800 font-semibold">
						Выберите ресторан
					</h1>
				</div>
				<div className="my-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{restaurants.map((restaurant) => (
						<article
							className="max-w-md flex flex-col mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
							key={restaurant.id}
						>
							<img
								src={restaurant.image}
								loading="lazy"
								alt="фотография ресторана"
								className="w-full h-48 object-cover object-center rounded-t-md"
							/>

							<div className="pt-3 ml-4 mr-2 mb-3 grow">
								<h3 className="text-xl text-teal-900">{restaurant.name}</h3>

								<h4 className="text-lg text-gray-900">
									<span className="text-teal-900">Кухня: </span> {restaurant.cuisine}
								</h4>

								<p className="text-gray-400 text-sm mt-1">{restaurant.description}</p>
							</div>
							<Link to={`/restaurant/${restaurant.slug}`} className="mx-auto">
								<button className="px-5 py-3 w-48 mb-6  text-white duration-150 bg-teal-600 rounded-2xl hover:bg-teal-500 active:bg-teal-700">
									Перейти на страницу
								</button>
							</Link>
						</article>
					))}
				</div>
				<div className="border-b border-gray-900/10 pb-12"></div>
			</section>
		</>
	)
}

export default ChooseRestaurant