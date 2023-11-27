interface InputBoxProps {
    label: string;
    type: string;
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required: boolean;
};

export default function InputBox({ label, type, id, name, value, onChange, required }: InputBoxProps): JSX.Element {
    return (
      <tr>
        <td><label htmlFor={id}>{label}:</label></td>
        <td><input type={type} id={id} name={name} value={value} onChange={onChange} required={required} /></td>
      </tr>
    );
};