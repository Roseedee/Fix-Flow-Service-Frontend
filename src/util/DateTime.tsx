export function getCurrentDate() {
    const today = new Date();

    const formattedForInput = today.toISOString().split('T')[0]; // yyyy-MM-dd

    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = String(today.getFullYear()).slice(-2);
    const displayDate = `${day}/${month}/${year}`;

    return formattedForInput;
}

export function getCurrentTime() {
    const today = new Date();
    return today.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
}