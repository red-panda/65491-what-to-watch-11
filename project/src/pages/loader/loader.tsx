function Loader(): JSX.Element {
  return (
    <div style={{'width':'100%','height':'100%','backgroundImage':'linear-gradient(-180deg,#180202 0%,#000 100%)','opacity':'0.8','color':'#c9b37e','position':'absolute','top':'0','left':'0','minHeight':'100vh', 'zIndex': 5}}>
      <svg style={{'position':'fixed','top':'50vh','left':'50%','transform':'translate(-50%, -50%)'}} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="100" height="100" viewBox="0 0 50 50">
        <path fill="#c9b37e" d="M43.935 25.145c0-10.318-8.364-18.683-18.683-18.683-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615s14.615 6.543 14.615 14.615h4.068z">
          <animateTransform attributeName="transform" attributeType="xml" dur="0.6s" from="0 25 25" repeatCount="indefinite" to="360 25 25" type="rotate"/>
        </path>
      </svg>
    </div>
  );
}

export default Loader;
