function X({ width = "24px", height = "24px", color = "#e6f9fc", stroke = "black", strokeWidth = 25 }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={width} 
            height={height} 
            viewBox="0 -960 960 960" 
            fill={color} 
            stroke={stroke} 
            strokeWidth={strokeWidth}
        >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
        </svg>
    );
}

export default X;
