import './img.css';

const Img = ({src, alt = ''}) => {
    return (
        <div className= "img">
        <img src={src} alt={alt} />
        </div>
    );
};

export default Img;