export default function Entry(props) {
  console.log(props);
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={props.img.src} alt={props.img.alt} />
      </div>

      <div className="info-container">
        <img className="marker" src="../images/marker.png" alt="marker icon" />
        <span className="country">{props.country}</span>
        <a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">
          View on Google Maps
        </a>
        <h2 className="entry-title">{props.title}</h2>
        <p className="trip-dates">{props.dates}</p>
        <p className="entry-text">
          {props.text}
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </article>
  );
}
