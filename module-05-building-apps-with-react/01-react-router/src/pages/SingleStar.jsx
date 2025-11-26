import { Link, useOutletContext, useParams } from "react-router";

const SingleStar = () => {
  const { slug } = useParams();
  // console.log("PARAMS: ", params);

  const stars = useOutletContext();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await starsLoader();
  //     console.log(data);
  //     const s = data.find((star) => star.id === Number(id));
  //     setStar(s);
  //   };
  //   fetchData();
  // }, [id]);

  const star = stars.find((s) => s.slug === slug);

  return (
    star && (
      <Link to="/" className="star">
        <img src={star.url} alt={star.heading} className="star__img" />
        <h1 className="star__heading">{star.heading}</h1>
        <p className="star__description">{star.description}</p>
      </Link>
    )
  );
};
export default SingleStar;
