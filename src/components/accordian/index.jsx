import { useState } from "react";
import data from "./data"

const Accordian = () => {


    const [selected, setSelected] = useState(null);

  return (
    <>
        <div className="wrapper">
            <div className="accordain">
                {
                    data && data.length > 0 ? 
                    
                    data.map(dataItem => (
                        <div key={dataItem.id}>
                            <div  className="title">
                                <h4 className="">{dataItem.question}</h4>
                                <span>+</span>
                            </div>

                            <div className=""></div>
                        </div>
                    ))
                    
                    
                    : <div className="error">
                        <span className="text-red-700 text-xl">Data not found</span>
                    </div>
                }
            </div>
        </div>
    </>
  )
}

export default Accordian