import React, {useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Container, Grid } from "@mui/material";

function Products() {

  const [products, setproducts] = useState([]);

  useEffect(() => {

    loadData();
    console.log(products)

  }, [])

  const loadData = () => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setproducts(res.data);
      })
      .catch(err => {

      })
  }

  return (
    <div> <Container>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
      {products.map((product) => (
        <Grid item xs={3} style={{ padding: 20 }}>
          <Card sx={{ maxWidth: 345 }} style={{ height: '100%',  padding: 10 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="150px"
              style={{ width: 200, margin: '0 auto', objectFit: "contain" }}
              image={product.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",fontSize:18 }}>
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price}$
            </Typography>
            </CardContent>
    
          </Card>
        </Grid>

      ))
      }
    </Grid>
  </Container>
     
    </div>
  )
}

export default Products