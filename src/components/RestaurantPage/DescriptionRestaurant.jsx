import { AtSymbolIcon } from "@heroicons/react/24/outline";
import {
	ClockIcon,
	MapPinIcon,
	NoSymbolIcon,
	PhoneIcon,
} from "@heroicons/react/24/solid";
import format from "date-fns/format";
import enUS from "date-fns/locale/en-US";
import { FlapperSpinner } from "react-spinners-kit";
import './styles.css'

const DescriptionRestaurant = ({ restaurant, loading }) => {

	return (
		<>
			{loading ? (
				<div className="flex justify-center items-center h-screen">
					<FlapperSpinner size={50} color="#00CED1" />
				</div>
			) : (
				<section className="flex">
					<div className="background-main2 w-full">
						<div className="bg-gray-950/50">
							<div className="flex pt-28">
								<div className="w-max mx-auto px-10 my-72 bg-slate-100/80 rounded-xl sm:px-4 sm:my-32 md:px-8 lg:px-12">
									<p className="text-teal-600 mt-10 text-3xl font-bold sm:text-4xl">
										{restaurant.name}
									</p>
									<div className="flex mt-10">
										<MapPinIcon className="h-6 w-6 mr-1 text-teal-600" />
										<p className="text-xl text-teal-600 font-semibold">
											Наш адрес: <span className="text-gray-600">{restaurant.address}</span>
										</p>
									</div>

									<div className="flex mt-6">
										<PhoneIcon className="h-6 w-6 mr-1 text-teal-600" />
										<p className="text-xl text-teal-600 font-semibold">
											Телефон:{" "}
											<span className="text-gray-600">{restaurant.phone}</span>
										</p>
									</div>

									<div className="flex mt-6">
										<ClockIcon className="h-6 w-6 mr-1 text-teal-600" />
										<p className="text-xl text-teal-600 font-semibold">
											Время открытия:
											{restaurant.openAt && (
												<span className="text-gray-600 ml-1">
													{format(new Date(restaurant.openAt), "p", {
														locale: enUS,
													})}
												</span>
											)}
										</p>
									</div>

									<div className="flex mt-6">
										<NoSymbolIcon className="h-6 w-6 mr-1 text-teal-600" />
										<p className="text-xl mr-1 text-teal-600 font-semibold">
											Время закрытия:
											{restaurant.closeAt && (
												<span className="text-gray-600 ml-1">
													{format(new Date(restaurant.closeAt), "p", {
														locale: enUS,
													})}
												</span>
											)}
										</p>
									</div>

									<div className="flex mt-6 mb-10">
										<AtSymbolIcon className="h-6 w-6 mr-1 text-teal-600" />
										<p className="text-xl text-teal-600 font-semibold">
											Электронная почта:
											<span className="text-gray-600"> {restaurant.email}</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			)
			}
		</>
	)
}
export default DescriptionRestaurant