import { PictureSelection } from "../UserForm.style";
import FileField from "../../FileField/FileField";
import { useFormContext, Controller } from "react-hook-form";

export const PictureForm = () => {
    const { control } = useFormContext();

    return <PictureSelection>
        <Controller
            name={'usuario.foto_documento'}
            defaultValue={''}
            control={control}
            render={({ field }) => (
                < FileField
                    onChange={(files) => field.onChange(files[0])}
                    inputProps={{
                        accept: '.jpeg, .jpg, .png',
                    }
                    }
                />
            )}
        />
    </PictureSelection>
}