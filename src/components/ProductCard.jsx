import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const ProductCard = ({ product }) => {
  const {
    nombre = "Sin nombre",
    descripcion = "Sin descripción",
    precio = "N/A",
    imagen,
  } = product || {};

  return (
    <Card className="product-card">
      <CardMedia component="img" height="180" image={imagen} alt={nombre} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
