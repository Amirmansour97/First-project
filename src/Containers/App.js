import React ,{Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';


class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=>response.json())
			.then(users=>{this.setState({robots:users})});
		}		

	onSearchChange = (event) =>{
		this.setState({ searchfield: event.target.value})
		
	}
	render(){
		// just to clean the workspace and to look better with out using alot of this.state.
		const {robots,searchfield}= this.state;

		const filteredRobots=robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		if (robots.length === 0){
			return <h1>Loading</h1>
		}else{

			return (

			<div className ='tc'>
				<h1 className='f1'>RobosFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>

				<Scroll>
				
					<CardList robots = {filteredRobots}/>
				</Scroll>

			</div>
			);
		}
	}
	
}

export default App ;