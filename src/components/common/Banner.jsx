import bannerImage from '../../assets/images/page-banner.jpg'


const Banner = ({ data = [] || null }) => {

  return (
    <section className="relative w-full ">
      {/* <div
        className="bg-contain no-repeat bg-right right-0 top-0 w-full h-auto "
        style={{
          background: ` linear-gradient(to right, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.2)), url(${data?.image || bannerImage}) no-repeat center center/cover`,
        }}
      >
        <div className="relative z-10  ">
          <div className="container flex justify-between items-end mx-auto py-8 sm:py-12 md:py-24" >
            <div className=" text-left text-white">
              <h2 className="text-3xl md:text-5xl font-semibold mb-4">{data?.title}</h2>
              <p className="text-base md:text-xl leading-relaxed ">
                {data?.description}
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className='flex justify-between gap-4 container'>
        <div className='flex flex-col justify-end'>
          <h3 className="text-2xl md:text-5xl font-semibold text-black mb-4 leading-tight">
            {data?.title || ""} <span className="text-webprimary font-sourcePro">{data?.title2 || ""}</span>
          </h3>
        </div>
        <div>
          <img src={data?.image || bannerImage} alt="banner image" />
        </div>
      </div>
    </section >
  );
};

export default Banner;
