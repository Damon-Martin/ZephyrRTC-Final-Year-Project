'use client'

type PageLoadingProps = {
    width?: number;
    height?: number;
};

export default function PageLoading(props: PageLoadingProps) {
    let widthInput = props.width;
    let heightInput = props.height;

    return (
        <div>
            <h1 className="text-4xl">🌀 Loading...</h1>
        </div>
    );
}