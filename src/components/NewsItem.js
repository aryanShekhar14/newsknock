import React from 'react'

const NewsItem = (props) => {


    let { title, description, imageurl, newsurl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card" style={{ width: "18rem" }}>
                <div style={{ display: "flex", justifyContent: "right", position: "absolute", right: "0" }}>
                    <span className="badge rounded-pill" style={{ backgroundColor: "#c72434" }}>{source}</span>
                </div>
                <img src={imageurl ? imageurl : "https://cbc.iclei.org/wp-content/uploads/2016/10/news2.jpg"} className="card-img-top" alt="..." />
                {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span> */}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>

                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted"><strong>By</strong> {author ? author : "Unknown"} <br /><strong>On</strong> {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark" style={{ backgroundColor: "#c72434" }}>Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem