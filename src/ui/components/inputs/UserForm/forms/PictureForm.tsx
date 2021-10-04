import {PictureSelection} from "../UserForm.style";
import FileField from "../../FileField/FileField";
import {useFormContext, Controller} from "react-hook-form";

export const PictureForm = () => {
    const {control} = useFormContext();
    
    return <PictureSelection>
            <FileField
                inputProps={{
                    accept: '.jpeg, .jpg, .png',
                    
                }}    
                onChange={}
            />
        
    </PictureSelection>
    
}