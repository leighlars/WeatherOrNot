import React from 'react'
import './Results.scss'

interface ResultsProps {
	searchResults: Array<any>
}

const Results: React.FC<ResultsProps> = props => {

	const noResults = 'I\'m sorry, there are no results. Please try again!'

	const resultsList = props.searchResults.map(result => {
		return (
			<article className="results-container" key={result.latitude}>
				<h2 className="card-header">{result.name}</h2>
				<h3 className="card-label">{result.label}</h3>
				<p>Country: {result.country}</p>
				<p>Continent: {result.continent}</p>
				<p>Latitude: {result.latitude}</p>
				<p>Longitude: {result.longitude}</p>
			</article>
		)
	})

	return (
		<section className="results">
			<h1>Search Results:</h1>
			{props.searchResults.length === 0 && <h1>{noResults}</h1>}
			<div className="results-info-box">
				{resultsList}
			</div>
		</section>
	)
}

export default Results