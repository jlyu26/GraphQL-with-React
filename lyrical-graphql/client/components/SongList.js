import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
	renderSongs() {
		return this.props.data.songs.map(song => {
			return (
				<li key={song.id} className="collection-item">
					{song.title}
				</li>
			);
		})
	}

	render() {
		// console.log(this.props);
		// loading:true
		// The request is still pending, data not fetched yet
		if (this.props.data.loading) {
			return <div>Loading...</div>;
		}

		return (
			<ul className="collection">
				{this.renderSongs()}	
			</ul>
		);
	}
}

// this.props.data.songs
const query = gql`
	{
		songs {
			id
			title
		}
	}
`;

export default graphql(query)(SongList);