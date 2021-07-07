/*eslint-disable*/
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';
import LibraryDetail from './User-LibraryDetail'

// import "../../../scss/components/_userLibrary.scss";
import "./_UserStyle.scss";


export default function UserLibrary() {

    var userProducts = []
    const userOrders = useSelector((store) => store.reducerOrderUser.userOrders);
    const completedUserOrder = userOrders.filter(order => order.state === "completed")
    completedUserOrder.map(order => order.products.map(product => userProducts.push(product)))

    const loading = useSelector((store) => store.reducerLoading.loading)

    const [products, setProducts] = useState([])
    const [ preview, setPreview ] = useState(false)

    useEffect(() => {
        if (completedUserOrder[0]) {
            setProducts(userProducts)
        }
    }, [completedUserOrder[0]?.id])


    const openPreview = (e, image) => {
e.preventDefault()
console.log(image)
setPreview(image)

    }

    return (
        <div id="UserLibrary">
            {
                    preview !== false ? <LibraryDetail preview={preview} setPreview={setPreview} /> : null
                }

            <div className="profile-UserStyle">
                <div className="title-UserStyle">
                    <h1>My products</h1>
                </div>
                <hr className="divisor-UserStyle" />

                

                <table className="table-UserStyle" id="boleta" border="0">
                    <tr className="headtable-UserStyle">
                        <td className="tdheadtable-UserStyle">
                            <th>Preview</th>
                        </td>
                        <td className="tdheadtable-UserStyle"/*"libraryNameTitle"*/>
                            <th>Name</th>
                        </td>
                        <td className="tdheadtable-UserStyle">
                            <th>Download / Detail</th>
                        </td>                 
                    </tr>
                    {products.length !== 0 &&
                        products.map((product, index) => (
                            <>
                                <tr className="bodytable-UserStyle" >
                                    <td>
                                        <th className="thimage-UserStyle">
                                            <img className="ing-UserStyle" src={product.preview} alt="" onClick={(e) => openPreview(e, product.preview)}/>
                                        </th>                
                                    </td>                               
                                    <td >
                                        <th className="thname-UserStyle"> {product.name}</th>
                                    </td>
                                    <td>
                                        <th className="seemore-UserStyle"> 
                                            <a className="seemoreDownload-UserStyle" download href={product.fileLink}>
                                                <AiIcons.AiOutlineDownload />
                                            </a>
                                            <br/>
                                            <Link className="orderIDVisualize"  to={`/product/${product.id}`}>
                                                <AiIcons.AiFillEye />
                                            </Link>
                                        </th>
                                    </td>
              
                                </tr>                            
                            </>
                        ))}

                </table>



                {/* <table className="tableUser" id="boleta" border="0">
                    <tr className="latabla">
                        <th className="uno">
                            <h4>Preview</h4>
                        </th>
                        <th className="libraryNameTitle">
                            <h4>Name</h4>
                        </th>
                        <th>
                            <h4>Download / Detail</h4>
                        </th>                 
                    </tr>
                    <div className="myProductsResults">
                    {products.length !== 0 &&
                        products.map((product, index) => (
                            <>
                                <tr className="libraryPreview" >
                                    <th className="divImage">
                                        <img className="myProductsImage" src={product.preview} alt="" onClick={(e) => openPreview(e, product.preview)}/>                                    
                                    </th>                               
                                    <th className="libraryProductName">
                                        <h4> {product.name}</h4>
                                    </th>
                                    <th className="libraryDownload"> 
                                    <a download className="orderID1" href={product.fileLink}><AiIcons.AiOutlineDownload /></a>                                   
                                        <Link to={`/product/${product.id}`}>
                                            <AiIcons.AiFillEye />
                                        </Link>
                                    </th>
                                </tr>                            
                            </>
                        ))}
                    </div>

                </table> */}

                {/* 
                
                <div className="tableheader">
                    <div className="libraryPreviewTitle"><h4>Preview</h4></div>
                    <div className="libraryNameTitle"><h4>Name</h4></div>
                    <div><h4>Download / Detail</h4></div>                 
                </div>
                
                <div className="myProductsResults">
                    {products.length !== 0 &&
                        products.map((product, index) => (
                            <>
                                <div className="libraryPreview" >
                                    <div className="divImage">
                                        <img className="myProductsImage" src={product.preview} alt="" onClick={(e) => openPreview(e, product.preview)}/>                                    
                                    </div>                               
                                    <div className="libraryProductName">
                                        <h4> {product.name}</h4>
                                    </div>
                                    <div className="libraryDownload"> 
                                    <a download className="orderID1" href={product.fileLink}><AiIcons.AiOutlineDownload /></a>                                   
                                        <Link to={`/product/${product.id}`}>
                                            <AiIcons.AiFillEye />
                                        </Link>
                                    </div>
                                </div>                            
                            </>
                        ))}
                </div> */}

                
            </div>
        </div>
    )
}
