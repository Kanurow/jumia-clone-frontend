export function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
  
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr",
      "May", "Jun", "Jul", "Aug", 
      "Sep", "Oct", "Nov", "Dec"
    ];
  
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
  
    return date.getDate() + ' ' + monthNames[monthIndex] + ' ' + year + ' - ' + (date.getHours() + 1)  + ':' + date.getMinutes();
  } 