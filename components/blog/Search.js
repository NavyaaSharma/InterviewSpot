import Link from 'next/link';
import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import { listSearch } from '../../actions/blog';
// import { tagSearch } from '../../actions/tag';

const Search = () => {
    const [values, setValues] = useState({
        search: undefined,
        results1: [],
        results2: [],
        searched: false,
        message1: '',
        message2: ''
    });

    const { search, results1, searched, message1, message2, results2 } = values;

    const searchSubmit = e => {
        e.preventDefault();

        listSearch({ search }).then(data => {
            setValues({ ...values, results1: data.tags, results2: data.blogs, searched: true, message1: `${data.tags.length} Companies found`, message2: `${data.blogs.length} Interview Experiences found` });
        });
    };

    const handleChange = e => {
        // console.log(e.target.value);
        setValues({ ...values, search: e.target.value, searched: false, results1: [], results2: [] });
    };

    const searchedBlogs = (results1, results2) => {
        return (
            <div className="jumbotron" style={{ paddingTop: 0, backgroundColor: 'ghostwhite' }}>
                {message1 && <p className="pt-4 text-muted font-italic">{message1}</p>}

                {results1.map((tag, i) => {
                    return (
                        <div key={i}>
                            <Link href={`/tags/${tag.slug}`}>
                                <a className="text-primary">{tag.name}</a>
                            </Link>
                        </div>
                    );
                })}
                {message2 && <p className="pt-4 text-muted font-italic">{message2}</p>}

                {results2.map((blog, i) => {
                    return (
                        <div key={i}>
                            <Link href={`/blogs/${blog.slug}`}>
                                <a className="text-primary">{blog.title}</a>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    };

    const searchForm = () => (
        <form onSubmit={searchSubmit}>
            <div className="row">
                <div className="col-md-8">
                    <input style={{ border: '1px solid black' }} type="search" className="form-control" placeholder="Search Interview Experiences" onChange={handleChange} />
                </div>

                <div className="col-md-4">
                    <button className="btn btn-block btn-outline-primary" type="submit">
                        Search
                    </button>
                </div>
            </div>
        </form>
    );

    return (
        <div className="container-fluid">
            <div className="pt-3 pb-5">{searchForm()}</div>
            {searched && <div style={{ marginTop: '-45px', marginBottom: '20px', height: '300px', overflowY: 'scroll', position: 'relative', zIndex: 1 }}>{searchedBlogs(results1, results2)}</div>}
        </div>
    );
};

export default Search;