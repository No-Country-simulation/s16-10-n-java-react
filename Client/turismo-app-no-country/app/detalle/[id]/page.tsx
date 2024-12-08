'use client'; // Marca este archivo como un "Client Component"

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProductDetail from '../ProductDetail';

interface Product {
    id: number;
    name: string;
    href?: string;
    imageSrc: string;
    imageAlt: string;
    reach: string;
    price: string;
    color: string;
    address: string;
    coordinates: [number, number]; // Coordenadas como una tupla de dos números
}

const Page = () => {
    const params = useParams();
    const id = params?.id; // Obtén el ID del producto desde los parámetros de la ruta

    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            if (!id) return;

            try {
                const response = await fetch('/products.json');
                const data = await response.json();
                const productsArray = data as Product[];

                const productId = Number(id);
                const selectedProduct =
                    productsArray.find((p) => p.id === productId) || null;
                setProduct(selectedProduct);

                // Imprimir la información del producto para depuración
                console.log(
                    'Información del producto en Page:',
                    selectedProduct
                );
            } catch (error) {
                console.error('Error al cargar los datos del producto:', error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div>
            <ProductDetail product={product} />
        </div>
    );
};

export default Page;
