import { HeartIcon, ChatBubbleLeftIcon, BellAlertIcon, AtSymbolIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState, Fragment } from 'react';
import { Dialog, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from 'react-router-dom';

const items = [
	{ name: "Наши ценности", href: "#values", icon: HeartIcon },
	{ name: "О нас говорят", href: "#reviews", icon: ChatBubbleLeftIcon },
	{ name: "Заказать банкет", href: "#orderBanquet", icon: BellAlertIcon },
	{ name: "Сделать заказ", href: "#order", icon: BellAlertIcon },
	{ name: "Контакты", href: "#contacts", icon: AtSymbolIcon },
];

const Header = () => {

	const [mobileMenu, setMobileMenu] = useState(false)

	return (
		<>
			<header className="brightness-100 fixed w-full backdrop-blur z-10">
				<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 sm:flex-col sm:p-t-6" aria-label="Global">
					<div className="flex lg:flex-1 sm:mx-auto">
						<div className="-m-1.5 p-1.5">
							<span className="sr-only">Платформа "Островок счастья"</span>
							<img className="w-20 h-20" src="/images/icon-logo.png" alt="логотип платформы" />
						</div>
					</div>
					<h2 className="grow text-2xl mb-6 text-teal-500 font-['Neucha'] hidden lg:block">Островок счастья</h2>
					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenu(true)}
						>
							<Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
						</button>

					</div>

					<Popover.Group className="hidden lg:flex lg:gap-x-12">
						<Popover className="relative">
							<Popover.Button className="flex outline-none items-center gap-x-1 text-xl font-semibold leading-6 text-teal-500 hover:text-teal-600">
								О нас
								<ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
							</Popover.Button>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
									<div className="p-4">
										{items.map((item) => (
											<div
												key={item.name}
												className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
											>
												<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
													<item.icon className="h-6 w-6 text-gray-600 group-hover:text-teal-600" aria-hidden="true" />
												</div>
												<div className="flex-auto">
													<a href={item.href} className="block font-semibold text-gray-900 text-lg">
														{item.name}
														<span className="absolute inset-0" />
													</a>
												</div>
											</div>
										))}
									</div>
								</Popover.Panel>
							</Transition>
						</Popover>

						<Link to="/cart" className="text-xl font-semibold leading-6 text-teal-500 hover:text-teal-600">
							Корзина
						</Link>

						<Link to="/" className="text-xl font-semibold leading-6 text-teal-500 hover:text-teal-600">
							На главную
						</Link>
					</Popover.Group>
				</nav>
				<Dialog as="div" className="lg:hidden" open={mobileMenu} onClose={setMobileMenu}>
					<div className="fixed inset-0 z-10" />
					<Dialog.Panel className="fixed top-0 inset-x-0 z-10 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 opacity-80">
						<div className="flex items-center justify-between">
							<div className="-m-1.5 p-1.5">
								<span className="sr-only">"Островок счастья"</span>
							</div>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenu(false)}
							>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									<a
										href="/"
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										На главную
									</a>

									<a
										href="/cart"
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										Корзина
									</a>
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</header>
		</>
	)
}

export default Header