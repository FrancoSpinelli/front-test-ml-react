import React from 'react'

function Breadcrumb(props) {

    let { categories } = props;
    
    if (categories) {
        categories = categories.map((category, i) => {
            if (i !== categories.length - 1){
                return `${category} / `
            } else {
                return category
            }
        })
    }
    return (
        <div className="breadcrumb">
            { categories || "" }
        </div>
    )
}

export default Breadcrumb