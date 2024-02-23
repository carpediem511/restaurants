const AboutUs = () => {
	return (
		<>
			<div id="values" className="flex px-8 max-w-screen-xl mx-auto flex-col md:flex-row p-20 ">
				<div className="w-full md:w-1/2 text-2xl">
					<p className="pb-2">
						<span className="text-teal-500 font-['Neucha']">
							"Островок счастья" - это ведущая платформа,{" "}
						</span>{" "}
						объединяющая лучшие рестораны города в одном месте. Здесь вы можете
						найти широкий выбор заведений, предлагающих различные кухни - от
						классических европейских блюд до экзотических восточных кулинарных
						традиций.
					</p>

					<p className="pb-2">
						Платформа предоставляет пользователям удобный и быстрый способ
						заказа еды онлайн. Вы можете легко выбрать ресторан, меню и оплатить
						заказ через нашу платформу. Кроме того, "Островок счастья"
						предоставляет удобный сервис доставки еды прямо к вашей двери.
					</p>

					<p className="text-teal-500 font-['Neucha']">
						Мы гордимся тем, что "Островок счастья" представляет собой идеальное
						место для любителей кулинарии, желающих насладиться изысканными
						блюдами и находиться в кругу близких и друзей.
					</p>
				</div>

				<div className="w-full md:w-1/2 ml-0 md:ml-12 mt-8 md:mt-0">
					<img
						src="/images/about-us.jpeg"
						alt="Наш логотип"
						className="rounded-2xl mx-auto md:mx-0"
					/>
				</div>
			</div>
			<div className="border-b border-gray-900/10 pb-12"></div>
		</>
	)
}

export default AboutUs