import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`
    }
}

export default function Gallary() {
    return (
        <ImageList
          sx={{ width: 800, mx: 'auto' }}
          variant='quilted'
          cols={4}
          rowHeight={150}
        >
            {itemData.map((item) => (
                <ImageListItem
                  key={item.image}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                    <img
                      {...srcset(item.image, 150, item.rows, item.cols)}
                      alt={item.title}
                      loading='lazy'
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

const itemData = [
    {
        image: './images/appetizer-1.webp',
        title: 'Baba Ganoush',
        rows: 2,
        cols: 2
    },
    {
        image: './images/appetizer-2.webp',
        title: 'Falafel'
    },
    {
        image: './images/appetizer-3.webp',
        title: 'Hummus Joy'
    },
    {
        image: './images/appetizer-4.webp',
        title: 'Cucumber Dill Dip',
        cols: 2
    },
    {
        image: './images/appetizer-5.webp',
        title: 'Dolmeh Grape Leaves',
        cols: 2
    },
    {
        image: './images/dish-1.webp',
        title: 'Gyro Beef with Basmati Rice',
        rows: 2,
        cols: 2
    },
    {
        image: './images/dish-2.webp',
        title: 'Chicken Shawarma Plate'
    },
    {
        image: './images/dish-3.webp',
        title: 'Falafel Plate'
    },
    {
        image: './images/dish-4.webp',
        title: 'Chicken Curry with Rice',
        rows: 2,
        cols: 2
    },
    {
        image: './images/dish-5.webp',
        title: 'Beef Shawarma Plate'
    },
    {
        image: './images/dish-6.webp',
        title: 'Beef Shawarma Sandwich'
    },
    {
        image: './images/breakfast-1.webp',
        title: 'Falafel with Eggs',
        cols: 2
    },
    {
        image: './images/breakfast-2.webp',
        title: 'Beef Gyro with Eggs',
        cols: 2
    },
    {
        image: './images/dessert-1.webp',
        title: 'Baklava',
        rows: 2,
        cols: 2
    },
    {
        image: './images/drink-1.webp',
        title: 'Hibiscus Tea'
    },
    {
        image: './images/drink-2.webp',
        title: 'Lemonade Refreshing Iced Tea'
    }
]