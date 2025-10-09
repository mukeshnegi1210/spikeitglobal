export default function MarqueText1() {
  return (
    <>
      <section className="section-marque-text bb-blog">
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider">Strategy and Consultation</span>
                <i className="icon-asterisk" />
                <span className="text-slider">Cloud Transformation </span>
                <i className="icon-asterisk" />
                <span className="text-slider">Data & AI</span>
                <i className="icon-asterisk" />
                <span className="text-slider">Cyber Security </span>
                <i className="icon-asterisk" />
                <span className="text-slider">
                  {" "}
                  Application & Web Development
                </span>
                <i className="icon-asterisk" />
                <span className="text-slider">IT Services Management</span>
                <i className="icon-asterisk" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
