import { useState } from "react";
import { blogPosts } from "./data/blogsdata";
import { useRouter } from "next/router";

const Blog = () => {
    const router = useRouter();

    const zoomOut = e => {
        e.preventDefault();
        router.push("/");
    };
    const [expandedPosts, setExpandedPosts] = useState({});

    const handleReadMore = postId => {
        setExpandedPosts(prev => ({
            ...prev,
            [postId]: !prev[postId]
        }));
    };

    return (
        <div className="blogCon">
            <p onClick={zoomOut} className="closeButton">
                &times;
            </p>
            <div className="imgDiv">
                <img src="/img/ufo.gif" alt="ufo" className="ufoImg" />
            </div>
              <p className="mainTitle">Blogs</p>
            {blogPosts.map(post => (
                <div
                    key={post.id}
                    className={`post ${
                        expandedPosts[post.id] ? "expanded" : ""
                    }`}
                >
                    <h1 className="blogsTitle">{post.title}</h1>
                    <p className="date">{post.date}</p>
                    <div className="intro">
                        <h2>Introduction</h2>
                        <p>{post.intro}</p>
                    </div>
                    <div
                        className="transition"
                        style={{
                            maxHeight: expandedPosts[post.id] ? "1000px" : "0px"
                        }}
                    >
                        <div
                            className="fullContent"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                    <button
                        className="readMore"
                        onClick={() => handleReadMore(post.id)}
                    >
                        {expandedPosts[post.id] ? "Read less" : "Read more"}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Blog;
