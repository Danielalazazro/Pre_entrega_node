async function manejos_metodos_http(){
    const [,,method,endpoint,...args] = process.argv
    const endpoint_with_slash = endpoint.includes('/') ;
    console.log(endpoint)
    
    if (method ==='GET' && !endpoint_with_slash){
        try{
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.log(data);
        }catch(error){
            console.error("Error fetching data:", error);

        }
           
    }else if(method === 'GET' && endpoint_with_slash){
            try{
                const response = await fetch(`https://fakestoreapi.com/products/${endpoint.split('/')[1]}`);
                const data = await response.json();
                console.log(data);
            }catch(error){
               
                console.error("Error fetching data:", error);

            }
        
    }else if(method === 'POST'){        
        const [title,price, category] = args
        try{
            const product = {title:title, price:price, category:category}
            const response = await fetch('https://fakestoreapi.com/products',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
            })
            .then(response => response.json())
            .then(data => console.log(data))

        }catch{
            console.log("Error al ingresar nuevo eleemnto")
        }
    }else if(method === 'DELETE' && endpoint_with_slash){
        try{
            const response = await fetch(`https://fakestoreapi.com/products/${endpoint.split('/')[1]}`,{
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => console.log(data))

        }catch{
            console.log("Error al eliminar el elemento")
        }
    }else if(method === 'PUT' && endpoint_with_slash){
        const [title,price, category] = args
        const response = await fetch(`https://fakestoreapi.com/products/${endpoint.split('/')[1]}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({title:title, price:price, category:category})
        })
        .then(response => response.json())
        .then(data => console.log(data))

    }
    
    else{
        console.log("Metodo no soportado o formato incorrecto")
    }
}
manejos_metodos_http()

