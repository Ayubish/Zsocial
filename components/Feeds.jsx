import Header from "@/components/Header";
import Post from "@/components/Post";

const Feeds = () => {
  return (
    <div className="mt-10 flex flex-col">
      
      <Post
        profilepic="/img1.png"
        name="Ayub Nasir"
        username="ayubish"
        textpost="Welcome to Zsocial, The future social media platform, where you'll be in full control of your information and data!"
        pics={["/img2.png"]}
      />
      <Post
        profilepic="/img1.png"
        name="Ayub Nasir"
        username="ayubish"
        textpost="Welcome to Zsocial, The future social media platform, where you'll be in full control of your information and data!"
        pics={["/img2.png"]}
      />
      <Post
        profilepic="/img1.png"
        name="Ayub Nasir"
        username="ayubish"
        textpost="Welcome to Zsocial, The future social media platform, where you'll be in full control of your information and data!"
        pics={["/img2.png"]}
      />
      <Post
        profilepic="/img1.png"
        name="Ayub Nasir"
        username="ayubish"
        textpost="Welcome to Zsocial, The future social media platform, where you'll be in full control of your information and data!"
        pics={["/img2.png"]}
      />
    </div>
  );
};

export default Feeds;
