import './category-item.styles.scss'
const Category=(props)=>{

    return(
        <div className="category-container"  >
        <div className="background-image" style={{
          backgroundImage:`url(${props.category.imageUrl})`
        }}/>
        <div className="category-body-container">
          <h2>{props.category.title}</h2>
          <p>buy now</p>
        </div>
      </div>
    )
}
export default Category;