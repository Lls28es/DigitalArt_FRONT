/*eslint-disable*/
import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './_salesProduct.scss';
import Azza from '../../../Filters/Azza';
import SearchBar from '../../../SearchBar/SearchBar';
import { removeProductForAdmin, deletAllProductsSales, getBackup } from '../../../../redux/actions/actionFront';
import { sendDiscountToBack } from '../../../../redux/actions/actionBack';
import Swal from 'sweetalert2';
import ReactCardFlip from 'react-card-flip';

const SalesProduct = () =>{
	const dispatch = useDispatch()
	const allProducts = useSelector((store) => store.reducerProduct.adminProducts);

	const [input, setInput] = useState({
		percent: 0,
		productId: [],
	});

 const [isFlipped, setIsFlipped] = useState(false);

	const handleclick = () => {
		setIsFlipped(!isFlipped);
	};
	

function onClose(g) {dispatch(removeProductForAdmin(g));}

	const Delete = () =>{dispatch(deletAllProductsSales());}

	const Send = () => {
		try{
			input.productId = allProducts.map((x) => {return x.id})
		Swal.fire({
			title: 'please wait',
			text: '',
			icon: 'info',
			confirmButtonText: 'Cool',
		});
		dispatch(sendDiscountToBack(input))
		

		}catch(err){
			console.error(err.message);
		}
	};
	const getAll = () =>{
		dispatch(getBackup());
	}


		const handleValue = (e) => {
			setInput({
				...input,
				percent: e.target.value,
			});
		};

		const ShowDiscount = ()=>{

		}


	let num = 1;
   return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
			<div>
				<tbody>
					<th>
						<h1 className="title">List de productos para aplicar descuento</h1>
					</th>
				</tbody>

				<table id="products">
					<td>
						<SearchBar />
						<Azza />
					</td>
					<td onClick={() => handleclick()} className="delete-td">
						descuento aplicados
					</td>
					<td onClick={() => Delete()} className="delete-td">
						Delete <br />
						All
					</td>
					<td onClick={() => getAll()} className="getall-td">
						Select <br />
						All
					</td>
				</table>
				<br />

				<table id="products">
					<tr id="trHeader">
						<td>Delete</td>
						<td></td>
						<td>Product Name</td>
						<td>Author Name</td>
						<td>Categorie</td>
						<td>Regular Price</td>
						<td>Precio con descuento</td>
						<td>
							Descuento %
							<select onChange={handleValue}>
								<option default value="0">
									%
								</option>
								<option name={input.percent} value="5">
									5
								</option>
								<option name={input.percent} value="10">
									10
								</option>
								<option name={input.percent} value="15">
									15
								</option>
								<option name={input.percent} value="20">
									20
								</option>
								<option name={input.percent} value="25">
									25
								</option>
								<option name={input.percent} value="30">
									30
								</option>
								<option name={input.percent} value="35">
									35
								</option>
								<option name={input.percent} value="40">
									40
								</option>
								<option name={input.percent} value="45">
									45
								</option>
								<option name={input.percent} value="50">
									50
								</option>
							</select>
						</td>
					</tr>
					{allProducts &&
						[...allProducts].map((g) => {
							return (
								<>
									<tr key={g.id}>
										<td>
											<button onClick={() => onClose(g.id)}>
												<i className="fas fa-trash"></i>
											</button>
										</td>
										<td>{num++}</td>
										<td>{g?.name}</td>
										<td>{g?.author.name}</td>
										<td>
											{g?.categories.map((x) => {
												return x.name;
											})}
										</td>
										<td>{g?.price}</td>
										<td className={g && g.discountPrice ? null : 'disable'}>
											{g && g.discountPrice ? g.discountPrice : 0}
										</td>
										<td>% {input.percent}</td>
									</tr>
								</>
							);
						})}
				</table>
				<button onClick={() => Send()}>Apply</button>
				<button onClick={() => SaveDiscountPrice()}>Save</button>
			</div>
			<div>
				<h1>hola</h1>
				<button onClick={handleclick}>back</button>
			</div>
		</ReactCardFlip>
   );
}

export default SalesProduct;
