import { forwardRef, useState } from "react";
import { IMaskInput } from "react-imask";
interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
  }

const TextMaskCustom = forwardRef<HTMLInputElement, CustomProps>(
    function TextMaskCustom(props, ref) {
      const { onChange, ...other } = props;
      const [maskedValue, setMaskedValue] = useState('');
      const handleMaskAccept = (value: string) => {
        // Apply your custom masking logic here
        setMaskedValue(value);
        onChange({ target: { name: props.name, value } }); // Pass the masked value to the parent component
        console.log(maskedValue)
      };
      return (
        <IMaskInput
        {...other}
        mask="(#00) 0000-0000"
        definitions={{ "#": /[1-9]/ }}
        onAccept={(value) =>
          handleMaskAccept(value)
        }
        overwrite
      />
      );
    }
  );
  export default TextMaskCustom;
