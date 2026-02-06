export function getColorClass(temp) {
    const t = Number(temp);
    if (Number.isNaN(t) || t < 0) {
        console.log("Invalid temperature");
        return 't14';
    }
    const temps = 
    [90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 0];
    for (let i = 0; i < temps.length; i++) {
        if (t >= temps[i]) {
            return `t${i}`;
        }
    }
    return 't14';
}