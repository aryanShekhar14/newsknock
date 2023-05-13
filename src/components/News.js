import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalArticles, settotalArticles] = useState(0)
    function capital(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    async function updateNews() {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d7d5996fb7fc4bc684ca5d833c57186b&pageSize=${props.pageSize}`;
        setloading(true);
        let data = await fetch(url);
        props.setProgress(40);
        let parseData = await data.json();
        props.setProgress(70);
        setloading(false);
        setarticles(parseData.articles);
        settotalArticles(parseData.totalResults);
        document.title = `${capital(props.category)} - NewsKnock`;
        // this.updateNews();
        props.setProgress(100);
    }
    useEffect(() => {
        updateNews();
        /* eslint-disable-next-line */
    }, [])

    // async componentDidMount() {//runs after render
    //     props.setProgress(10);
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d7d5996fb7fc4bc684ca5d833c57186b&pageSize=${props.pageSize}`;
    //     setloading(true);
    //     let data = await fetch(url);
    //     props.setProgress(40);
    //     let parseData = await data.json();
    //     props.setProgress(70);
    //     setloading(false);
    //     setarticles(parseData.articles);
    //     settotalArticles(parseData.totalArticles);
    //     document.title = `${capital(props.category)} - NewsKnock`;
    //     // this.updateNews();
    //     props.setProgress(100);
    // }
    // handlePrevious = async () => {
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4f8b4a46ec444849a31df1ab91714850&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    //     // this.setState({ loading: true });
    //     // let data = await fetch(url);
    //     // let parseData = await data.json();
    //     // this.setState({ loading: false });
    //     // this.setState(
    //     //     {
    //     //         page: this.state.page - 1,
    //     //         articles: parseData.articles
    //     //     }
    //     // )
    //     this.setState({
    //         page: this.state.page - 1
    //     },
    //         () => { this.updateNews() }
    //     )
    //     // this.updateNews();
    // }
    // handleNext = async () => {
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4f8b4a46ec444849a31df1ab91714850&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
    //     // this.setState({ loading: true });
    //     // let data = await fetch(url);
    //     // let parseData = await data.json();
    //     // this.setState({ loading: false });
    //     // this.setState(
    //     //     {
    //     //         page: this.state.page + 1,
    //     //         articles: parseData.articles
    //     //     }
    //     // )
    //     this.setState({
    //         page: this.state.page + 1
    //     },
    //         () => { this.updateNews() }
    //     )
    //     // this.updateNews();
    // }
    async function fetchMoreData() {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d7d5996fb7fc4bc684ca5d833c57186b&page=${page + 1}&pageSize=${props.pageSize}`;
        setpage(page + 1)
        let data = await fetch(url);
        let parseData = await data.json();

        setarticles(articles.concat(parseData.articles));
        settotalArticles(parseData.totalResults);

    };

    return (
        <>
            <div className="container">
                <h2 className='text-center' style={{ marginBottom: "20px", marginTop: "77px" }}>News<strong style={{ color: "#c72434" }}>Knock</strong> - Top Headlines from {capital(props.category)}</h2>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalArticles}
                    loader={<Spinner />}
                >

                    <div className="container">
                        <div className='row'>
                            {articles.map((element) => {
                                return <div className='col-md-4' style={{ display: "flex", justifyContent: "center" }} key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) + "..." : ""} description={element.description ? element.description.slice(0, 88) + "..." : ""} imageurl={element.urlToImage}
                                        newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="d-flex justify-content-between">
                    <button disabled={this.state.page === 1 ? true : false} type="button" className="btn btn-dark mx-2" onClick={this.handlePrevious} style={{ backgroundColor: "#842029" }}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / props.pageSize) ? true : false} type="button" className="btn btn-dark" onClick={this.handleNext} style={{ backgroundColor: "#842029" }}>Next &#8594;</button>
                </div> */}
            </div>
        </>
    )

}
News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News