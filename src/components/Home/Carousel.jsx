/* eslint-disable  */
import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import Loading from '../Loading/Loading.js';
import { getBackup } from '../../redux/actions/actionFront';


import '../../scss/components/_carousel.scss';


const Carousel = () => {
	
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(getBackup());
	},[])
	const loading = useSelector((store) => store.reducerLoading.loading);
	const products = useSelector((state) => state.reducerProduct.allProductCache);
	let idProduct = [];
	let srcPreview = [];
	products.forEach((x) => {
		srcPreview.push(x.preview);
		idProduct.push(x.id);
	});

	if (loading) {
		return (
			<div className="loader-container">
				<Loading />
			</div>
		);
	}
	
	return (
		<div id="Carousel">
			<div className="container-carousel">
				<div className="slider">
				<span className="titulo-vidriera"></span>
					<div className="slide-track">
						<div className="Slide">
							<Link  to={`/product/${idProduct[25]}`}><img className="img-carousel"src={srcPreview[25]} id={idProduct[25]} products={products[25]} /></Link></div>
						<div className="Slide">
							<Link  to={`/product/${idProduct[26]}`}><img className="img-carousel"src={srcPreview[26]} id={idProduct[26]} products={products[26]} /></Link>
						</div>
						<div className="Slide">
							<Link  to={`/product/${idProduct[35]}`}><img className="img-carousel"src={srcPreview[35]} id={idProduct[35]} products={products[35]} /></Link>
						</div>
						<div className="Slide">
							<Link  to={`/product/${idProduct[98]}`}><img className="img-carousel"src={srcPreview[98]} id={idProduct[98]} products={products[98]} /></Link>
						</div>
						<div className="Slide">
							<Link  to={`/product/${idProduct[5]}`}><img className="img-carousel"src={srcPreview[5]} id={idProduct[5]} products={products[5]} /></Link>
						</div>
						<div className="Slide">
							<Link  to={`/product/${idProduct[29]}`}><img className="img-carousel"src={srcPreview[29]} id={idProduct[29]} products={products[29]} /></Link>
						</div>
						<div className="Slide">
							<Link className="link" to={`/product/${idProduct[25]}`}><img className="img-carousel"src={srcPreview[25]} id={idProduct[25]} products={products[25]} /></Link>
						</div>
						<div className="Slide">
							<Link  to={`/product/${idProduct[26]}`}><img className="img-carousel"src={srcPreview[26]} id={idProduct[26]} products={products[26]} /></Link>
						</div>
						<div className="Slide">
							<Link  to={`/product/${idProduct[35]}`}><img className="img-carousel"src={srcPreview[35]} id={idProduct[35]} products={products[35]} /></Link>
						</div>
						<div className="Slide">
							<Link  to={`/product/${idProduct[98]}`}><img className="img-carousel"src={srcPreview[98]} id={idProduct[98]} products={products[98]} /></Link>
						</div>
						<div className="Slide">
							<Link  to={`/product/${idProduct[5]}`}><img className="img-carousel"src={srcPreview[5]} id={idProduct[5]} products={products[5]} /></Link>
						</div>
						<div className="Slide">
							<Link  to={`/product/${idProduct[29]}`}><img className="img-carousel"src={srcPreview[29]} id={idProduct[29]} products={products[29]} /></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
