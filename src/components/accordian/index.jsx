import { useState } from "react";
import data from "./data"

const Accordian = () => {


    const [selected, setSelected] = useState(null)

    function handleSingleSelection ( getCurrentId ) {
        setSelected(getCurrentId == selected ? null : getCurrentId );
    }

  return (
    <>
        <div className="wrapper w-full flex items-center flex-col gap-5 ">
            <div className="w-full flex justify-start items-center gap-10 ">
                <button className="px-3 py-1 w-fit h-full  bg-orange-500 text-white rounded-lg">multi selection</button>
                <button className="px-3 py-1 w-fit h-full  bg-orange-500 text-white rounded-lg">single selection</button>
            </div>
            
                {
                    data && data.length > 0 ? 
                    
                    data.map(dataItem => (
                        <div key={dataItem.id} className="item cursor-pointer w-full">
                         
                                
                            <div className=" w-full flex items-center flex-col border-2 border-red-400 p-5">
                                <div onClick={() => handleSingleSelection(dataItem.id)}  className="w-full h-fit title flex justify-between items-center    my-2">
                                    {/* <div className="w-1/4">{dataItem.id}</div> */}
                                    <h4 className="w-1/2">{dataItem.question}</h4>
                                    <div className="w-1/4">+</div>
                                    
                                </div>
                                {
                                    selected == dataItem.id ? 
                                    <div>
                                        <span>{dataItem.answer}</span>
                                    </div>
                                    : null
                                }
                            </div>
                                
                          


                        </div>
                    ))
                    
                    
                    : <div className="error">
                        <span className="text-red-700 text-xl">Data not found</span>
                    </div>
                }
            
        </div>
    </>
  )
}

export default Accordian

//16:40