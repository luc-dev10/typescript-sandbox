const post: { title: String; days: number; isPublished: boolean } = {
  title: "Hello There",
  days: 1,
  isPublished: true,
};

// using interface to avoid long object annotation
interface Post {
  title: string;
  days: number;
  isPublished: boolean;
}

const firstPost: Post = {
  title: "hello there",
  days: 43,
  isPublished: true,
};

const printPost = (post: Post) => {
  console.log(`Post Title: ${post.title}`);
  console.log(`Days: ${post.days}`);
  console.log(`Is Published?: ${post.isPublished}`);
};

printPost(firstPost);
