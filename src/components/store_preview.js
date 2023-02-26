
function StorePreview({name, description, address}) {
    return (
        <div className="flex items-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://www.expatrio.com/sites/default/files/inline-images/aldi-grocery-store-company.jpg" alt="Sunset in the mountains" />
                <div className="flex flex-wrap -mx-3 mb-2">
            
                    <div className="md:w-full p-2 mb-6 md:mb-0 content-start">
                        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2">
                            { (address.street + ',') } {address.zip} {address.city}
                        </span>
                    </div>
                </div>


                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>

                <div className="px-6 py-4">
                    <a target="_blank" href={"https://www.google.com/maps?q="+ name + " " + address.street +",+"+ address.zip +",+"+ address.city} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Gjeje ne harte
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default StorePreview;