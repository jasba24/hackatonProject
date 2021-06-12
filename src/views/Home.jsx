import "../assets/css/home.css"
import Hero from "../components/Hero"
import LoginSection from "../components/LoginSection"

function Home() {
	return (
		<div className="columns home-container">
			<Hero></Hero>
			<LoginSection></LoginSection>
		</div>
	)
}

export default Home
