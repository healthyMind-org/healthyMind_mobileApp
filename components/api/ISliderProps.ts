export interface ISliderProps {
    text: string;
    value: number,
    onValueChange: (value: number) => void,
    step?: number
}

