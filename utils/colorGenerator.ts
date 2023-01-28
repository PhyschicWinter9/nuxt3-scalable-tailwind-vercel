export default function(): string {
    const colors = [
        // generate all colors in hex
        '#f44336',
        '#e91e63',
        '#9c27b0',
        '#673ab7',
        '#3f51b5',
        '#2196f3',
        '#03a9f4',
        '#00bcd4',
        '#009688',
        '#4caf50',
        '#8bc34a',
        '#cddc39',
        '#ffeb3b',
        '#ffc107',
        '#ff9800',
        '#ff5722',
        '#795548',
        '#9e9e9e',
        '#607d8b',
        '#000000',
        '#ffffff',
        "#FFC107",
        "#F44336",
        "#03A9F4",
        "#2196F3",
        "#4CAF50",
        "#FF9800",
        "#9C27B0",
        "#E91E63",
        "#009688",
        "#3F51B5",
        "#eab308",
        "#b91c1c",
        "#292524",
        "#0d6efd",
        "#6610f2",
        "#6f42c1",
        "#d63384",
        "#dc3545",
        "#fd7e14",
        "#ffc107",
        "#28a745",
        "#20c997",
      
        // generate all colors in rgb
    ];

    return colors[Math.floor(Math.random() * colors.length)];
    
}