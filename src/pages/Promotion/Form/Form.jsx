import { useParams } from 'react-router-dom' 



const PagePromotionForm = () => {
    const { id } = useParams();

    return(
    <div>
        Olá
        {id && <div>id: {id}</div>}
        </div>
    )
}


export default PagePromotionForm