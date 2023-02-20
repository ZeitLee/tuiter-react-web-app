import post from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
        ${post.map(post => {
        return (PostItem(post));
    }).join('')}
   `);
}

export default PostList;

$('#wd-main-post').append(`${PostList()}`);

