export const createProduct = (ProductForm)=>{
    return {
   
       
            "product": {
                "id": "",
                "name": ProductForm.name,
                "stock": ProductForm.stock
            }
        }

    }