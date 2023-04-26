import Post from "./Post"


export default function RecentPosts() {

    const fakeData = [
        {content: "Monday"},
        {content: "Tuesday"},
        {content: "Wednesday"}
    ]

    return (
        <div>
            <h2>Recent Posts</h2>
            {fakeData.map((item, index) => (
                <Post key={index}>{item}</Post>
            ))}
        </div>
    )
}