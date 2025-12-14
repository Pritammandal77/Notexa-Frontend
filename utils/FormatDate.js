export const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    return formattedDate;
}