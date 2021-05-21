import { useParams } from "react-router-dom";
import PromotionForm from "../../../components/Promotion/Form//Form";
import UIContainer from "../../../components/UI/Container/Container";

const PagePromotionForm = () => {
  const { id } = useParams();

  return (
    <UIContainer>
      <PromotionForm id={id ? Number.parseInt(id) : null}/>
    </UIContainer>
  );
};

export default PagePromotionForm;
