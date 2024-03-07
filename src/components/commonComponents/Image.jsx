const Image = ({ src, className, alt = "image" }) => {
  return (
    <picture>
      <img className={className} src={src} alt={alt} />
    </picture>
  );
};

export default Image;
