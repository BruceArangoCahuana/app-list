import React,{FormEvent, Fragment,useState}from 'react';

interface Itarea{
  name:string;
  done:boolean;
}

function App() {
  const[tarea,setTarea] = useState<string>('')
  const[listado,setListado] = useState<Itarea[]>([])

  const registrar = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    addList(tarea)
    setTarea("")
  }

  const addList = (name: string) =>{
    const newTarea: Itarea[]= [...listado,{name,done:false}]
    setListado(newTarea)
  }
  const listo = (i:number):void =>{
    const newTarea: Itarea[] = [...listado]
    newTarea[i].done = !newTarea[i].done
    setListado(newTarea);
  }
  const remove = (i:number) =>{
    const newTarea: Itarea[] = [...listado]
    newTarea.splice(i,1)
    setListado(newTarea);
  }
  return (
    <Fragment>
       <div className="container-fluid">
            <div className='col-7 full__media m-auto mt-4 w-100'>
              <h1 className='text-center'>Lista de  tareas con typescript</h1>
                <form 
                onSubmit={registrar}
                className='bg-white p-4'>
                    <div className="form-group">
                      <label  className="text-black mt-4">Ingresar tarea</label>
                      <input type="text" 
                      className="form-control mt-3" 
                      placeholder="Ingresar tarea" 
                      onChange={e =>setTarea(e.target.value)}
                      value={tarea}
                      autoFocus
                      />
                    </div>
                    <div className="form-group mt-3">
                      <button className='btn btn-success w-100'>Registrar</button>
                    </div>
                </form>

                <div className="list-group mt-5">
                  {
                     listado.map((t: Itarea,i) =>(
                      <span 
                      key={i}
                      className="list-group-item list-group-item-action active d-flex justify-content-between align-items-center"
                      >
                        <p style={{textDecoration:t.done?'line-through':''}}>{t.name}</p>
                        <div className='d-flex justify-content-evenly align-items-center'>
                          <span 
                          onClick={()=>listo(i)}
                          style={{cursor:"pointer"}}
                          ><i className="fa-solid fa-eraser text-info me-4"></i></span>
                          <i 
                           onClick={()=>remove(i)}
                           style={{cursor:"pointer"}}
                          className="fa-solid fa-trash-can text-danger"></i>
                          </div>
                        
                        </span>

                      
                     ))
                  }
                </div>
            </div>
       </div>
    </Fragment>
   );
}

export default App;
