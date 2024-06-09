import { useState } from "react";
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

    const BlogPosts = [
        {
            id: 1,
            title: "All Steps to Use Back-End (PHP/Apache Server) on Android Devices",
            date: "June 3, 2024",
            intro: "This guide provides detailed instructions on setting up and running a PHP/Apache back-end server on your Android device. By following these steps, you can develop and test web applications directly on your mobile device, making development more flexible.",
            content: `
              <h2>Prerequisites</h2>
              <ul>
                <li>An Android device running version 6.0 (Marshmallow) or higher.</li>
                <li>Stable internet connection for downloading the required apps.</li>
                <li>Basic understanding of PHP and web server concepts.</li>
              </ul>
              <h2>Step 1: Code Editor</h2>
              <p>For coding, I recommend the following two apps:</p>
              <ol>
                <li>
                  <img src="https://play-lh.googleusercontent.com/dVZocgiXxeXnppeSz2BQunEoDdEmlOeDUBTABwLv6RmzlnnuIgDyT21uuYxkv0i6ng" alt="TrebEdit" width="30px" />
                  <strong>TrebEdit Pro</strong> - Easy to use with a responsive tool. <a href="https://drive.google.com/file/d/1SANFaz7rYJFZy-VS3SL_Lm5En1o29i0J/view?usp=drivesdk">Download free from Google Drive</a>
                </li>
                <li>
                  <img src="https://play-lh.googleusercontent.com/tBmfTr_TyGtv24MzhVzW1ajjppSw9KjzunMRBFdxHZ10AmvlEokombjZabATWBuH3lk" alt="Acode Pro" width="30px" />
                  <strong>Acode Pro</strong> - Great for PHP, with support for plugins. <a href="https://drive.google.com/file/d/1TEKzanUoC9aGUUlwMHRM9tB-bRgZi7Cy/view?usp=drivesdk">Download free from Google Drive</a>
                </li>
              </ol>
              <h2>Step 2: Server Side</h2>
              <p>To run an Apache server on your Android device, I recommend using the KSWeb Pro version.</p>
              <p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThMfTwrcQCLam9N5zDJgy-Yvywdf9GMNUZnURBR9hlDg&s" alt="KSWeb" width="30px" /> <a href="https://drive.google.com/file/d/1SqrzEvtd9hYSBj1sRD1rh-d-fIvq5-ET/view?usp=drivesdk">Download from Google Drive</a>
              </p>
              <h3>How to Use:</h3>
              <ol>
                <li>Place your project folder in the <code>htdocs</code> directory.</li>
                <li>Turn on Apache, MySQL, and PHP servers.</li>
              </ol>
              <h2>Step 3: Run Your PHP</h2>
              <p>You're all set! Use the following links to access localhost and phpMyAdmin for database management with SQL.</p>
              <h2>Troubleshooting</h2>
              <p><strong>Issue:</strong> Pages stop working.</p>
              <p><strong>Solution:</strong> This typically indicates a disconnected connection between the browser and the server. Open the KSWeb app and exit to restore normal operation.</p>
              <p><strong>Issue:</strong> Cannot access phpMyAdmin.</p>
              <p><strong>Solution:</strong> Use the Desktop site option in your browser for better control.</p>
             
              <h2>Contributing</h2>
              <p>Contributions are welcome! Please fork the repository and submit a pull request.</p>
              <h2>Contact</h2>
              <p>For any questions, contact me via email at <a href="mailto:bonmobp@gmail.com">bonmobp@gmail.com</a>.</p>
              <p>Feel free to reach out if you have any questions or need further assistance!</p>
              <h2>Hashtags</h2>
              <p>#AndroidDevelopment #PHPServers #ApacheServer #MobileCoding #KSWeb #TrebEdit #AcodePro #MobileDevelopment #AndroidBackend #WebDevelopment #CodingOnAndroid #ServerSetup #MySQL #PHPMyAdmin #AndroidProgramming #BackendDevelopment #MobileApps #WebServer #CodeEditors #ProgrammingTools</p>
            `
        }
        // Add more blog posts here if needed...
    ];

    return (
        <div className="blogCon">
            <p onClick={zoomOut} className="closeButton">
                &times;
            </p>
            <div className="imgDiv">
                <img src="/img/ufo.gif" alt="ufo" className="ufoImg" />
            </div>
            <p className="mainTitle">Blogs</p>
            {BlogPosts.map(post => (
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
