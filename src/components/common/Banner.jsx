import bannerImage from '../../assets/images/page-banner.jpg'


const Banner = ({ data = [] || null }) => {

  return (
    <section className="relative w-full "> 
      <div
        className="bg-contain no-repeat bg-right right-0 top-0 w-full h-auto "
        style={{
          background: ` linear-gradient(to right, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.2)), url(${data?.image || bannerImage}) no-repeat center center/cover`,
        }}
      >
        {/* <div className=" flex justify-end  absolute w-full left-0 top-0 h-[400px] "
          style={{ backgroundImage: 'url(linear-gradient(to right, rgba(0, 0, 0, 0.5), #090909))' }}
        >
          <img src={data?.image} alt="" className="max-w-full h-[300px]" />

        </div> */}

        {/* <div className="absolute inset-0 bg-black/50" /> */}

        {/* Content */}
        <div className="relative z-10  ">
          {/* Text */}
          <div className="container flex justify-between items-end mx-auto py-8 sm:py-12 md:py-24" >

            <div className=" text-left text-white">
              <h2 className="text-3xl md:text-5xl font-semibold mb-4">{data?.title}</h2>
              <p className="text-base md:text-xl leading-relaxed ">
                {data?.description}
              </p>
            </div>


          </div>
        </div>

      </div>
    </section >
  );
};

export default Banner;
