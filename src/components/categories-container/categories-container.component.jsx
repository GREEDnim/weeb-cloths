import Category from '../category-item/category-item.component';
import './categories-container.styles.scss';

const CategoriesContainer=(props)=>{
 
const {category} =props;

return (
    <div className="categories-container">
      {category.map(
        (category)=>
          <Category key={category.id} category={category}></Category>
        )
      }
    </div>
)

}
export default CategoriesContainer;