export function formatDate(date) {
    
    const dateObj = (date instanceof Date) ? date : new Date(date);

    return dateObj.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });
}
