import Card from "../components/Card";
import data from "./home.json";

function Home() {
  return (
    <main className=" content-thumb mb-20 mt-0 w-auto  md:mt-0  md:mb-20 md:max-xlg:ml-5 md:max-xlg:mr-5  ">
      <div className="project-group grid gap-0 gap-y-[14px] md:grid-cols-2 md:gap-5 md:gap-y-0 xlg:grid-cols-3  xlg:gap-x-[65px] xll:grid-cols-4 xll:gap-x-[65px] ">
        {data.map((d) => {
          const id = d.ID;
          const filepaths =
            d.acf.mobile_image.sizes["mobile-thumbnail"].split("/");
          const image = filepaths[filepaths.length - 1];
          const title = d.acf.header_image.title;
          const descriptions = (d.acf.credits_thumb || d.acf.credits)
            .map((credit) => {
              return `${credit.title}:${credit.name}`;
            })
            .slice(0, 4);

          return (
            <Card
              key={id}
              id={id}
              image={image}
              title={title}
              descriptions={descriptions}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Home;
