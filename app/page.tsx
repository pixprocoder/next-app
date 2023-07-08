import Categories from "@/components/Categories";
import Head from "next/head";

const Home = () => {
  return (
    <section className="flex-start flex-col paddings mb-16">
      <Categories />
      <h1>Posts</h1>
      <h1>Load more</h1>
    </section>
  );
};
export default Home;
