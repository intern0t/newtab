import React from "react";
const config = require('../config.js');

class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newsAPIKey: config.newsAPIKey,
			newsAPIEndpoint: `https://newsapi.org/v2/top-headlines?country=us&apiKey=`,
			news: ""
		};
	}

	componentDidMount() {
		fetch(`${this.state.newsAPIEndpoint}${this.state.newsAPIKey}`)
			.then(res => res.json())
			.then(value =>
				this.setState({
					news: value
				})
			);
	}

	render() {
		return (
			<div className="news-container">
				{this.state.news &&
					this.state.news.articles &&
					this.state.news.articles.map(news => {
						return (
							<div className="news"
                            key={`news-at-${news.publishedAt}`}>
								{news.source.name ? (
									<span className="news-source">
										{news.source.name}
									</span>
								) : (
									""
								)}

								<a href={news.url} title={news.description} target="_blank">
									{news.title}
								</a>
							</div>
						);
					})}
			</div>
		);
	}
}

export default News;
