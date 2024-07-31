import Button from "./components/Button";

export default function Home() {
  return (
    <div className="mt-32 ">
      <div className="flex-col text-center mb-52">
        <h1 className="text-6xl font-bold">
          Become a better <br /> business with us.
        </h1>
        <p className="text-xl mt-5 font-normal mb-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nullam
          turpis tortor, ultricies ut justo eu.
        </p>
        <Button />
      </div>
      <div className="flex-col text-center mb-52">
        <img className="w-screen mb-52" src="/photo.png" alt="girl" />
        <h1 className="text-6xl font-bold">Here is what’s happening in <br /> the world of talk business.</h1>
      </div>
      <div className="flex gap-36 justify-center text-center mb-32">
        <div className="gap-14">
          <h4 className="font-medium text-xl text-violet-600">May 2021</h4>
          <p className="text-2xl text-wrap">Agile focused <br /> business services <br /> and more.</p>
        </div>
        <img src="/photos.png" alt="room" />
      </div>
      <div className="flex gap-36 justify-center text-center mb-32">
        <div className="gap-14">
          <h4 className="font-medium text-xl text-violet-600">May 2021</h4>
          <p className="text-2xl text-wrap">Agile focused <br /> business services <br /> and more.</p>
        </div>
        <img src="/photos.png" alt="room" />
      </div>
      <div className="flex gap-36 justify-center text-center mb-32">
        <div className="gap-14">
          <h4 className="font-medium text-xl text-violet-600">May 2021</h4>
          <p className="text-2xl text-wrap">Agile focused <br /> business services <br /> and more.</p>
        </div>
        <img src="/photos.png" alt="room" />
      </div>
    </div>
  );
}
