import * as React from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';

export default function CardGrid() {
  const { title } = useParams();

  const Product_Information = {
    "Pak_Jamadi": {
      fullName: "Pak Jamadi",
      Name: ['Ceirbon Pot', 'Ceirbon Plate', 'Ceirbon Mug'],
      description: ['Made with ...', 'Something something', 'Something something'],
      imageUrl: ['https://miro.medium.com/v2/resize:fit:828/format:webp/0*L7QNmjIOZCn6MeM3','https://images.prismic.io/xometry-marketing/57abb083-8a2c-4a24-9a10-c93815ac1905_ceramic-examples.jpg?auto=format%2Ccompress&rect=100%2C0%2C800%2C800&w=486&h=486&fit=max&fm=webp','https://i0.wp.com/fajarcirebon.com/wp-content/uploads/2020/09/thumbnail-5.jpg?w=1280&ssl=1','https://miro.medium.com/v2/resize:fit:828/format:webp/0*L7QNmjIOZCn6MeM3','https://images.prismic.io/xometry-marketing/57abb083-8a2c-4a24-9a10-c93815ac1905_ceramic-examples.jpg?auto=format%2Ccompress&rect=100%2C0%2C800%2C800&w=486&h=486&fit=max&fm=webp','https://i0.wp.com/fajarcirebon.com/wp-content/uploads/2020/09/thumbnail-5.jpg?w=1280&ssl=1',]
    },
    "Pak_Jamal": {
      fullName: "Pak Jamal",
      Name: ['Ceirbon Pot', 'Ceirbon Plate', 'Ceirbon Mug','Ceirbon Pot', 'Ceirbon Plate', 'Ceirbon Mug'],
      description: ['Made with ...', 'Something something', 'Something something','Made with ...', 'Something something', 'Something something'],
      imageUrl: ['https://miro.medium.com/v2/resize:fit:828/format:webp/0*L7QNmjIOZCn6MeM3','https://images.prismic.io/xometry-marketing/57abb083-8a2c-4a24-9a10-c93815ac1905_ceramic-examples.jpg?auto=format%2Ccompress&rect=100%2C0%2C800%2C800&w=486&h=486&fit=max&fm=webp','https://i0.wp.com/fajarcirebon.com/wp-content/uploads/2020/09/thumbnail-5.jpg?w=1280&ssl=1','https://miro.medium.com/v2/resize:fit:828/format:webp/0*L7QNmjIOZCn6MeM3','https://images.prismic.io/xometry-marketing/57abb083-8a2c-4a24-9a10-c93815ac1905_ceramic-examples.jpg?auto=format%2Ccompress&rect=100%2C0%2C800%2C800&w=486&h=486&fit=max&fm=webp','https://i0.wp.com/fajarcirebon.com/wp-content/uploads/2020/09/thumbnail-5.jpg?w=1280&ssl=1',]
    },
    "Pak_Simone": {
      fullName: "Pak Simone",
      Name: ['Ceirbon Pot', 'Ceirbon Plate', 'Ceirbon Mug','Ceirbon Pot', 'Ceirbon Plate', 'Ceirbon Mug'],
      description: ['Made with ...', 'Something something', 'Something something','Made with ...', 'Something something', 'Something something'],
      imageUrl: ['https://miro.medium.com/v2/resize:fit:828/format:webp/0*L7QNmjIOZCn6MeM3','https://images.prismic.io/xometry-marketing/57abb083-8a2c-4a24-9a10-c93815ac1905_ceramic-examples.jpg?auto=format%2Ccompress&rect=100%2C0%2C800%2C800&w=486&h=486&fit=max&fm=webp','https://i0.wp.com/fajarcirebon.com/wp-content/uploads/2020/09/thumbnail-5.jpg?w=1280&ssl=1','https://miro.medium.com/v2/resize:fit:828/format:webp/0*L7QNmjIOZCn6MeM3','https://images.prismic.io/xometry-marketing/57abb083-8a2c-4a24-9a10-c93815ac1905_ceramic-examples.jpg?auto=format%2Ccompress&rect=100%2C0%2C800%2C800&w=486&h=486&fit=max&fm=webp','https://i0.wp.com/fajarcirebon.com/wp-content/uploads/2020/09/thumbnail-5.jpg?w=1280&ssl=1',]
    }
  };

  const Product = Product_Information[title] || { fullName: "Unknown", Name: [], description: [], imageUrl: [] };

  return (
    <Grid
      container
      spacing={5}
      justifyContent="center"
      alignItems="center"
    >
      {Product.Name.map((name, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ maxWidth: '350px', margin: 'auto', marginBottom: '10px'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={Product.imageUrl[index]}
                alt={name}
              />
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}