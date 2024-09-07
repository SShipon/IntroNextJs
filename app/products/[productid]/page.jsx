import React from 'react';

const DynamicPage = ({params, searchParams}) => {
    console.log(searchParams)
    return (
        <div>
               <h2>Dynamic Products pages{searchParams.productid}</h2>
        </div>
    );
};

export default DynamicPage;