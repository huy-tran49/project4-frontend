import './Home.css'
import TShirt from './apparel/TShirt'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<TShirt />
		</>
	)
}

export default Home
