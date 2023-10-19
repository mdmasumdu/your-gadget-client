import Banner from "../Banner/Banner";
import BestSelling from "../BestSelling/BestSelling";
import Brand from "../Brands/Brand";
import Why from "../Why/Why";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <BestSelling></BestSelling>
            <Why></Why>
        </div>
    );
};

export default Home;