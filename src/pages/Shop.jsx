import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Shop() {
  return (
    <>
        <div className='page-shop'>
            
            <div className="q">              
                <marquee behavior="" loop="10" direction="">
                    <img style={{paddingBottom:"10px"}} className='shop-img' src="https://feelgrounded.com/cdn/shop/files/AD_LOGO-07.png?height=60&v=1641928418" alt="" />
                    <img style={{paddingBottom:"10px"}} className='shop-img' src="https://feelgrounded.com/cdn/shop/files/TODAY_SHOW_LOGO-07.png?height=68&v=1641927652" alt="" />
                    <img className='shop-img' src="https://feelgrounded.com/cdn/shop/files/DistrictFraylogo-01.webp?height=80&v=1661457088" alt="" />
                    <img style={{paddingBottom:"18px"}} className='shop-img' src="https://feelgrounded.com/cdn/shop/files/ELLE_LOGO-07.png?height=48&v=1641929267" alt="" />
                    <img style={{paddingBottom:"15px"}} className='shop-img' src="https://feelgrounded.com/cdn/shop/files/MARTHAS_STEWART-07.png?height=52&v=1641929113" alt="" />
                    <img style={{paddingBottom:"18px"}} className='shop-img' src="https://feelgrounded.com/cdn/shop/files/COSMO-07.png?height=44&v=1641928919" alt="" />
                    <img className='shop-img' src="https://feelgrounded.com/cdn/shop/files/THE_SPRUCE-07.png?height=88&v=1641928718" alt="" />
                    <img style={{paddingBottom:"10px"}} className='shop-img' src="https://feelgrounded.com/cdn/shop/files/AD_LOGO-07.png?height=60&v=1641928418" alt="" />
                    <img style={{paddingBottom:"10px"}} className='shop-img' src="https://feelgrounded.com/cdn/shop/files/TODAY_SHOW_LOGO-07.png?height=68&v=1641927652" alt="" />
                    <img className='shop-img' src="https://feelgrounded.com/cdn/shop/files/DistrictFraylogo-01.webp?height=80&v=1661457088" alt="" />
                    <img style={{paddingBottom:"18px"}} className='shop-img' src="https://feelgrounded.com/cdn/shop/files/ELLE_LOGO-07.png?height=48&v=1641929267" alt="" />
                    <img style={{paddingBottom:"15px"}} className='shop-img' src="https://feelgrounded.com/cdn/shop/files/MARTHAS_STEWART-07.png?height=52&v=1641929113" alt="" />
                    <img style={{paddingBottom:"18px"}} className='shop-img' src="https://feelgrounded.com/cdn/shop/files/COSMO-07.png?height=44&v=1641928919" alt="" />
                    <img className='shop-img' src="https://feelgrounded.com/cdn/shop/files/THE_SPRUCE-07.png?height=88&v=1641928718" alt="" />
                    <img style={{paddingBottom:"10px"}} className='shop-img' src="https://feelgrounded.com/cdn/shop/files/AD_LOGO-07.png?height=60&v=1641928418" alt="" />
                    <img style={{paddingBottom:"10px"}} className='shop-img' src="https://feelgrounded.com/cdn/shop/files/TODAY_SHOW_LOGO-07.png?height=68&v=1641927652" alt="" />
                    <img className='shop-img' src="https://feelgrounded.com/cdn/shop/files/DistrictFraylogo-01.webp?height=80&v=1661457088" alt="" />
                    <img style={{paddingBottom:"18px"}} className='shop-img' src="https://feelgrounded.com/cdn/shop/files/ELLE_LOGO-07.png?height=48&v=1641929267" alt="" />
                    <img style={{paddingBottom:"15px"}} className='shop-img' src="https://feelgrounded.com/cdn/shop/files/MARTHAS_STEWART-07.png?height=52&v=1641929113" alt="" />
                    <img style={{paddingBottom:"18px"}} className='shop-img' src="https://feelgrounded.com/cdn/shop/files/COSMO-07.png?height=44&v=1641928919" alt="" />
                    <img className='shop-img' src="https://feelgrounded.com/cdn/shop/files/THE_SPRUCE-07.png?height=88&v=1641928718" alt="" /> 
                    <img style={{paddingBottom:"10px"}} className='shop-img' src="https://feelgrounded.com/cdn/shop/files/TODAY_SHOW_LOGO-07.png?height=68&v=1641927652" alt="" />
                    <img className='shop-img' src="https://feelgrounded.com/cdn/shop/files/DistrictFraylogo-01.webp?height=80&v=1661457088" alt="" />
                    <img style={{paddingBottom:"18px"}} className='shop-img' src="https://feelgrounded.com/cdn/shop/files/ELLE_LOGO-07.png?height=48&v=1641929267" alt="" />
                    <img style={{paddingBottom:"15px"}} className='shop-img' src="https://feelgrounded.com/cdn/shop/files/MARTHAS_STEWART-07.png?height=52&v=1641929113" alt="" />
                    <img style={{paddingBottom:"18px"}} className='shop-img' src="https://feelgrounded.com/cdn/shop/files/COSMO-07.png?height=44&v=1641928919" alt="" />
                    <img className='shop-img' src="https://feelgrounded.com/cdn/shop/files/THE_SPRUCE-07.png?height=88&v=1641928718" alt="" /> 
                </marquee>
            </div>

            <h1 className='arrivals'>New Arrivals</h1>

            <div className="shop-cards">

                <div className="card-1">

                <Card className='shop-item' >
                <CardMedia className='Shop-ithem-two'
                image="https://m.media-amazon.com/images/I/910gfB26YyL._AC_UF1000,1000_QL80_.jpg" style={{height:"200px"}}
                title="Jade Plant"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Jade Plant
                </Typography>
                <Typography variant="body2" color="text.secondary">
                $18.00 - $36.00 
                </Typography>
                </CardContent>
                <CardActions>
                <Button style={{backgroundColor:"gray"}} variant="contained">ADD TO CART</Button>
                </CardActions>
                </Card>
                </div>

                <div className="card-1">

                <Card className='shop-item' >
                <CardMedia className='Shop-ithem-two'
                image="https://www.getgreenbewell.com/wp-content/uploads/2017/06/Fungus-Gnats-Traps.jpg"  style={{height:"200px"}}
                title="Gnat Traps"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Gnat Traps
                </Typography>
                <Typography variant="body2" color="text.secondary">
                $12.00
                </Typography>
                </CardContent>
                <CardActions>
                <Button style={{backgroundColor:"gray"}} variant="contained">ADD TO CART</Button>
                </CardActions>
                </Card>
                </div>

                <div id='none' className="card-1">
                    
                <Card className='shop-item' >
                <CardMedia className='Shop-ithem-two'
                image="https://www.ikea.com/ae/en/images/products/dracaena-marginata-potted-plant-dragon-tree-2-stem__0768627_pe754505_s5.jpg?f=s"  style={{height:"200px"}}
                title="Dracaena Marginata"
                />
                <CardContent className='card-cntnt'>
                <Typography gutterBottom variant="h5" component="div">
                Dracaena Marginata
                </Typography>
                <Typography variant="body2" color="text.secondary">
                $18.00
                </Typography>
                </CardContent>
                <CardActions>
                <Button style={{backgroundColor:"gray"}} variant="contained">ADD TO CART</Button>
                </CardActions>
                </Card>
                </div>

                <div className="card-1">
                <Card className='shop-item' >
                <CardMedia className='Shop-ithem-two'
                image="https://rosysoil.com/cdn/shop/files/ROSY-CactusSucculentMockup_2_620x.png?v=1686842734"  style={{height:"200px"}}
                title="Rosy Cactus"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Rosy Cactus
                </Typography>
                <Typography variant="body2" color="text.secondary">
                $17.00 
                </Typography>
                </CardContent>
                <CardActions>
                <Button style={{backgroundColor:"gray"}} variant="contained">ADD TO CART</Button>
                </CardActions>
                </Card>
                </div>
            </div>

            {/* <div className="view-btn">
            <Button style={{backgroundColor:"grey"}} height={'100px'} className='btn-dark' variant="contained"> View All</Button>
            </div> */}


            
        </div>
        
    </>
  )
}

export default Shop