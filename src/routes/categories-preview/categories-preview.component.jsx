import { Fragment, useContext } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';
import { CategoriesContext } from '../../contexts/categories.context';

const CategoriesPreview = () => {
  const { categoriesMap, loading } = useContext(CategoriesContext);

  return (
    <Fragment>
      {loading ? (<Spinner />) :
        (
          Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            )
          })
        )}
    </Fragment>
  );
};

export default CategoriesPreview;
