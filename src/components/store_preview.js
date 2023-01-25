
function StorePreview({name, description, address}) {
    return (
        <div className="flex items-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://source.unsplash.com/random/1600x900" alt="Sunset in the mountains" />
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="md:w-full mx-5 px-3 mb-6 md:mb-0 content-start">
                       <span className="inline-block rounded-full ">
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round"
                                 className="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                                <path
                                    d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z"/>
                                <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                            </svg>
                       </span>
                        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
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
                    Konfirmuar nga <b>42</b>
                 <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                     🇽🇰
                 </span>
                </div>
            </div>
        </div>
    )
}

export default StorePreview;