import React from 'react';
const Dropdownf = ({list, addItem}) => {
    return (<div id="dropdown" className="absolute shadow top-100 bg-white z-40 w-full lef-0 rounded  overflow-y-auto ">
    <div className="flex flex-col w-full">
        { list.map((item, key) => {
            return <div key={key} 
            className="cursor-pointer w-full border-gray rounded-t border-b hover:bg-gray-100" 
            onClick={() => addItem(item)}>
            <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-gray-100" >
                <div className="w-full items-center flex">
        <   div className="text-sm text-gray p-2 hover:bg-opacity-50">
            { item }
           </div>
          </div>
         </div>
        </div>
        })}
    </div>
</div>);

};

export default Dropdownf;