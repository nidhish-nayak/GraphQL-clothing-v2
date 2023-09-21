import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';


import { gql, useQuery } from '@apollo/client';
import Spinner from '../../components/spinner/spinner.component';
import { CategoryContainer, Title } from './category.styles';

const GET_CATEGORY = gql`
  query($title: String!) {
	getCollectionsByTitle(title: $title) {
    id
    title
    items {
      id
      name
      price
      imageUrl
    }
  }
}
`

const Category = () => {

  const { category } = useParams();
  const { loading, data } = useQuery(GET_CATEGORY, {
    variables: {
      title: category
    }
  });

  useEffect(() => {
    if (data) {
      const { getCollectionsByTitle: { items } } = data;
      setProducts(items);
    }
  }, [category, data])

  const [products, setProducts] = useState([]);

  return (
    <Fragment>
      {loading ? (<Spinner />) : (
        <Fragment>
          <Title>{category.toUpperCase()}</Title>
          <CategoryContainer>
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </CategoryContainer></Fragment>
      )}
    </Fragment>
  );
};

export default Category;
