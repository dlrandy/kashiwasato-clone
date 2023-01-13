import "./footer.css";
import LazyLoad from 'react-lazyload';
function Card({ id, image, title, descriptions = [] }) {
  return (
    <a
      className=" w-auto   text-ellipsis  text-effect mt-[14px] min-h-[1%] block leading-[1.3em] whitespace-nowrap overflow-hidden  "
      href={`/project/${id}`}
    >
      <div className="img bg-[#f6f6f6] ">
        <LazyLoad>
        <img
          className=" brightness-[0.98] "
          src={`/cms/wp-content/uploads/2016/01/${image}`}
        /></LazyLoad>
      </div>
      <div className="text">
        <span
          className={`project-name effect-text mt-[24px] mr-[25px] mb-[17px] 
                ml-[25px] text-[18px] tracking-wider block overflow-hidden text-ellipsis 
                md:mt-[23px] md:ml-0 md:mb-[14px] md:mr-0 md:text-[15px] md:leading-[1.6em]
                `}
          data-text={title}
        >
          {title}
        </span>
        <div className="project-desc  my-0 mx-[26px] inline-block text-[12px] leading-[1.6em] w-[calc(100%-50px)]]  !whitespace-[initial] overflow-hidden text-[#999]  relative md:ml-0 ">
          {descriptions.map((description) => (
            <p key={description}>{description}</p>
          ))}
          <p className="more mt-3 text-black text-[12px] ">
            READ MORE {' '} +
          </p>
        </div>
      </div>
    </a>
  );
}

export default Card;
