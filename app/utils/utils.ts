export const formattedName = (uname: any) => {
    if (!uname) return;
    // Extract the part before the @ symbol
    const namePart = uname.split("@")[0];
    // // Replace . with a space
    const formatted = namePart.replace(".", " ");
    // // Capitalize each word
    return formatted
        .split(" ")
        .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");

}
