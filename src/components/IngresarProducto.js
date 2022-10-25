import React, {Component} from "react";
import axios from "axios";
import { createProduct } from "../converters/productConverter";
import { Apiproduct1 } from "../services/apirest";
import swal from 'sweetalert';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'


class IngresarProducto extends Component{



  state = {
    form:{
            "id": "",
            "name": "",
            "stock": "",
                                
    },
    error:false,
    errorMsg:""
}




    manejadorChange = async (e) => {
        await this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
      };


      manejadorSubmit = (e) => {
        e.preventDefault();
      };



      post = () => {
        let url = Apiproduct1;
        console.log(this.state);
        const body = createProduct(this.state.form);
        axios
          .post(url, body)
          .then((response) => {
            swal(
              'Producto creado',
              'Producto registrado con éxito.',
              'success' 
          )
            console.log(response.data);
            this.props.history.push("/productos");
          })
          .catch((error) => console.log(error.response.data));
      };
    
  
      firstMethod(e) {
        const re = /[0123456789kK]+/g;
        if (!re.test(e.key)) {
          e.preventDefault();
        }
      }



      numeros(e) {
        const re = /[0123456789]+/g;
        if (!re.test(e.key)) {
          e.preventDefault();
        }
      }


      fourthMethod(e) {
        const re = /[a-zA-Z" "ñÑ]+/g;
        if (!re.test(e.key)) {
          e.preventDefault();
        }
      }



      
    render(){   
      const form = this.state.form;
        return(
               
          <React.Fragment>

          <br/>
          
          <div className="container">
          <a id="volver" className="btn btn-dark" href="/productos" > <FontAwesomeIcon  icon={faArrowAltCircleLeft}/> Volver</a>
<hr></hr>
                     <h3><strong>Ingresar Producto </strong></h3>
          </div>
          <br/>
          <div className="container">
          <form className="form-horizontal" onSubmit={this.manejadorSubmit}>
        
         
 
                 <div className="row">
                      <div className="col-sm-8">
                     <label className="col-md-2 control-label">Nombre&nbsp;del&nbsp;producto</label>
                     <div className="col-md-6">
                         <input className="form-control" name="name" placeholder="Nombre del producto" type="text" 
                         value={form.name  || ''}
                         onChange={this.manejadorChange}
                         onKeyPress={(e) => this.fourthMethod(e)}
                        
                         maxLength={20}
                         />
                       </div>
                </div>
                 </div>
                 <br/>
 
                 
          <div className="row">
                      <div className="col-sm-8">
                     <label className="col-md-2 control-label">Cantidad</label>
                     <div className="col-md-4">
                         <input className="form-control" name="stock" placeholder="Cantidad" type="text" 
                         value={form.stock  || ''}
                         onChange={this.manejadorChange}
                         onKeyPress={(e) => this.numeros(e)}
                        
                         maxLength={3}
                       
                   
                         />
                       </div>
                </div>
                 </div>
                 <br/>
 
 
 
           <br/>
 
               <button 
               type="submit"
                className="btn btn-primary"
                 style={{ marginRight: "10px" }}
                 onClick={() => this.post()}
                 >
                   Agregar producto
                 </button>
 
             
               
           
           </form>
           </div>
         </React.Fragment>
        
               
        );
    }

}


export default IngresarProducto;