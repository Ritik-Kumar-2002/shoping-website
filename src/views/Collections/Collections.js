import React, {useState} from 'react'
import { Box } from '@mui/material';
import { TuneSharp, ArrowForwardIos , ArrowBackIos } from '@mui/icons-material';
import ShoeCategory from '../Home/Components/ShoeCategory';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCartData } from '../../store/action/CartActions';
import { Card, CardContent } from '@mui/material';
import FilterSort from './FilterAndSort';

const Collections = () => {
    console.log('collection page of the website', ShoeCategory);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showFilters, setShowFilter] = useState(true);
    const FilterHandler = () =>{
         
        setShowFilter(!showFilters);
        console.log("showFilters toogle is ", showFilters);
    }
    return (
        <>
            <h1> this is Collections collection page of the website </h1>
            <Box>
                <div className='filter-wrap' onClick={()=> FilterHandler()}>
                    <TuneSharp />
                    <h3 className="heading3"> Filter </h3>
                    { showFilters ? <ArrowForwardIos /> : <ArrowBackIos />}
                   
                </div>
                <div className="Wrap-Style">
                    { showFilters ? <FilterSort /> : null } 
                    <div container className={"collection-wrap-box"} >
                        {ShoeCategory.map((data) => {

                            return (
                                <div key={data.id} >
                                    <div className="Card-Style"
                                        onClick={() => {
                                            navigate('productDetail')
                                            dispatch(setCartData(data))
                                        }}>

                                        <Card elevation={5}>
                                            <div className="Card-Image-wrap">
                                                <img src={data.image} className="Card-Image" />
                                            </div>
                                            <CardContent >
                                                <p variant="body2"> {data.price} </p>
                                                <p variant="subheading2"> {data.name} </p>
                                                {/* <p variant="body2"> {data.description} </p> */}
                                            </CardContent>
                                        </Card>
                                    </div >
                                </div>
                            );
                        })}

                    </div>
                </div>
            </Box>
        </>
    );
}
export default Collections;