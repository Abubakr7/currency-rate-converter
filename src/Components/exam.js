import React, { Component } from 'react';    
import tjk from './img/tjk.svg'
import europe from './img/europe.svg'
import usa from './img/usa.svg'
import russia from './img/russia.svg'
import Avatar from './avatar'
import Label from './label'


class Exam extends Component {

    constructor(props) {
        super(props);
        this.state = {
            option: 'somoni',
            rouble: '',
            dollar: '',
            euro: '',
            somoni: '',
            input: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value,
          rouble: '',
          dollar: '',
          somoni: '' ,
          euro: '',
          input: ''
        });
      }

     handleChange = (e) => {
         const target = e.target;
         const value = target.value;
         const name = target.name;
         
         this.setState(({rouble, dollar, euro, input}) => {
            let rub = '';
            let dol = '';
            let eur = '';
            let som = '';    
            if(name === 'somoni') {
                rub = toRuble(value, name);
                dol = toDollar(value, name);
                eur = toEuro(value, name);
            } else if(name === 'rouble') {
                som = toSomoni(value, name)
                dol = toDollar(value, name)
                eur = toEuro(value, name)
            } else if(name === 'dollar') {
                som = toSomoni(value, name)
                eur = toEuro(value, name)
                rub = toRuble(value, name);
            } else if(name === 'euro') {
                rub = toRuble(value, name);
                som = toSomoni(value, name);
                dol = toDollar(value, name);
            }

            return {
                rouble: rub,
                dollar: dol,
                euro: eur,
                somoni: som,
                input: value
            }
         })
     } 

    render() {
        const {option, rouble, dollar, euro, somoni, input} = this.state;
        let elements;
        let disabled ='disabled';
        let fm = 'form-control'    
        let lb = 'mr-3 text-center text-white'
        if(option === 'somoni') {
          elements = <>  
            <Label for='rub' className={lb} type='text' value={rouble} disabled={disabled} class={fm} name='rouble' title='Rouble' src={russia} width='30' height="30" alt='russia' />
            <Label for='usa' className={lb} type='text' value={dollar} disabled={disabled} class={fm} name='dollar' title='Dollar' src={usa} width='30' height="30" alt='usa' />
            <Label for='euro' className={lb} type='text' value={euro} disabled={disabled} class={fm} name='euro' title='Euro' src={europe} width='30' height="30" alt='europe' />    
            </>
        } else if(option === 'rouble') {
            elements = <> 
            <Label for='tjk' className={lb} type='text' value={somoni} disabled={disabled} class={fm} name='somoni' title='Somoni' src={tjk} width='30' height="30" alt='europe' />    
            <Label for='usa' className={lb} type='text' value={dollar} disabled={disabled} class={fm} name='dollar' title='Dollar' src={usa} width='30' height="30" alt='usa' />
            <Label for='euro' className={lb} type='text' value={euro} disabled={disabled} class={fm} name='euro' title='Euro' src={europe} width='30' height="30" alt='europe' />    
            </>
        } else if(option === 'dollar') {
            elements = <>  
            <Label for='rub' className={lb} type='text' value={rouble} disabled={disabled} class={fm} name='rouble' title='Rouble' src={russia} width='30' height="30" alt='russia' />
            <Label for='tjk' className={lb} type='text' value={somoni} disabled={disabled} class={fm} name='somoni' title='Somoni' src={tjk} width='30' height="30" alt='europe' />    
            <Label for='euro' className={lb} type='text' value={euro} disabled={disabled} class={fm} name='euro' title='Euro' src={europe} width='30' height="30" alt='europe' />    
            </>
        } else if(option === 'euro') {
            elements = <>  
            <Label for='rub' className={lb} type='text' value={rouble} disabled={disabled} class={fm} name='rouble' title='Rouble' src={russia} width='30' height="30" alt='russia' />
            <Label for='usa' className={lb} type='text' value={dollar} disabled={disabled} class={fm} name='dollar' title='Dollar' src={usa} width='30' height="30" alt='usa' />
            <Label for='tjk' className={lb} type='text' value={somoni} disabled={disabled} class={fm} name='somoni' title='Somoni' src={tjk} width='30' height="30" alt='somoni' />    
            </>
        }

        return (
            <>
            <div className='currency'>
            <h1 className="display-3 fontweight-bold text-center mb-4">Converter</h1>
            <div className='select mb-3'> 
            <select value={option} name='option' onChange={this.handleInputChange}>
              <option value="euro">Euro &#8364;</option>
              <option value="dollar">Dollar &#36;</option>
              <option value="rouble">Rouble &#8381;</option>
              <option value="somoni">Somoni</option>
            </select>
            </div>
            <div className='col-6 pos'>        
            <input type="number" name={option}  onChange={this.handleChange} value={input} className='form-control' />
            </div>
            <div className="inputs mb-3 mt-4 ml-5">
                {elements}
            </div>
            </div>
            </>
        );
    }
}

export default Exam;


function toSomoni(n, l) {
    if(l === 'rouble') {
        return (n * 0.1265).toFixed(2);
    } else if(l === 'dollar') {
        return (n * 10.20).toFixed(2);
    } else if(l === 'euro') {
        return (n * 10.96).toFixed(2);
    } else {
        return n;
    }
}

function toDollar(n, l) {
    if(l === 'rouble') {
        return (n / 80.63).toFixed(2);
    } else if(l === 'somoni') {
        return (n / 10.20).toFixed(2);
    } else if(l === 'euro') {
        return (n / 0.93).toFixed(2);
    } else {
        return n;
    }
}

function toRuble(n, l) {
    if(l === 'dollar') {
        return (n * 80.63).toFixed(2);
    } else if(l === 'somoni') {
        return (n / 0.13).toFixed(2);
    } else if(l === 'euro') {
        return (n * 86.65).toFixed(2);
    } else {
        return n;
    }
}

function toEuro(n, l) {
    if(l === 'dollar') {
        return (n / 1.07).toFixed(2);
    } else if(l === 'somoni') {
        return (n / 10.96).toFixed(2);
    } else if(l === 'rouble') {
        return (n / 86.65).toFixed(2);
    } else {
        return n;
    }
}


