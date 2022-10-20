export interface DisplayProps {
    numberToDisplay: number;
}

export interface ManipulatorProps {
    setCount: (value: number | ((prevState: number) => number)) => void;
}