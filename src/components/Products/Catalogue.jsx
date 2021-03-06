/*eslint-disable*/
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard.jsx";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";
import { allProductsScores, allUserProducts } from "../../redux/actions/actionFront";

import "../../scss/containers/_catalogue.scss";


function Catalogue() {

  const dispatch = useDispatch();

  const allProduct = useSelector((store) => store.reducerProduct.allProductCache);
  const productsPerPage = useSelector((store) => store.reducerPagination.productsPerPage);
  const currentPage = useSelector((store) => store.reducerPagination.currentPage);
  const loading = useSelector((store) => store.reducerLoading.loading);
  const allScores = useSelector((store) => store.reducerProduct.allProductsScores)
  const userOrders = useSelector((store) => store.reducerOrderUser.userOrders);

  const allScoresStore = allProduct.map(product => { return { id: product.id, score: product.score } })
  const completedUserOrder = userOrders.filter(order => order.state === "completed")
  const userProducts = []    
  completedUserOrder.map(order => order.products.map(product => userProducts.push(product)))

  useEffect(() => {
    if (allScoresStore[0]) dispatch(allProductsScores(allScoresStore))
    if (allScores[0]) dispatch(allProductsScores(allScores)) 
  }, [allScoresStore[0]?.id] )

  useEffect(()=>{
    dispatch(allUserProducts(userProducts))
  },[userProducts[0]?.id])

  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProducts = allProduct.slice(indexFirstProduct, indexLastProduct);

  if (loading) {
    return (
      <div className="loader-container" id="Catalogue">
        <Loading />
      </div>
    );
  }else{
    return (
      <div id="Catalogue">
        <div className="catalogue-wrapper">
          {currentProducts && currentProducts.map((artwork, i) => artwork.available == true ? <ProductCard key={`${i}`} data={artwork} /> :null )}
        </div>
        <div className="paginate">
          <Pagination
            cardsPerPage={productsPerPage}
            totalCards={allProduct.length}
          />
        </div>
      </div>
    );
  }
}

export default Catalogue;
