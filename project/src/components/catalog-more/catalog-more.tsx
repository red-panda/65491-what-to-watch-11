type CatalogMoreProps = {
  onShowMoreClick: () => void;
}
function CatalogMore({onShowMoreClick}: CatalogMoreProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onShowMoreClick}>Show more</button>
    </div>
  );
}

export default CatalogMore;
