import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

import Person from './Person';
// const url = 'https://swapi.co/api/people/?format=json';


const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.
	const [people, setPeople] = useState([])
	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.
	useEffect(() => {
		axios.get(`https://swapi.co/api/people`)
		.then(response => {
			console.log(response);
			setPeople(response.data.results);
		})
		.catch(error => console.error(error))
		return () => {
			console.log('cleanup')
		};
	}, [])
	return (
		<div className="App">
			<h1 className="Header">React Wars</h1>
      <table>
      <tr>
    <th>Name</th>
    <th>Height</th>
    <th>Hair Color</th>
    <th>Skin Color</th>
    <th>Birth Year</th>
    <th>Gender</th>
  </tr>
      </table>

			{
				people ? people.map(person => <Person data={person} key={person.url} />) : null
			}
		</div>
	);
}

export default App;
