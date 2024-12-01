import Header from "@/components/Header";
import Post from "@/components/Post";

const Feeds = () => {
  return (
    <div className="w-full mt-8">
      <Header />
      <div className="flex justify-center gap-3 border-b">
        <button>Following</button>
        <button className="border-b-2 border-green-500">For you</button>
      </div>
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
