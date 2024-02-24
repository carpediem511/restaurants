import AboutUs from "./AboutUs"
import HeroSection from "./HeroSection"
import ChooseRestaurant from './ChooseRestaurant'
import Reviews from './Reviews'
import BanquetForm from './BanquetForm'

const HomePage = ({ restaurants }) => {
	return (
		<>
			<HeroSection />
			<AboutUs />
			<ChooseRestaurant restaurants={restaurants} />
			<Reviews />
			<BanquetForm />
		</>
	)
}

export default HomePage