// dateInfo
const currentDate = new Date();

  const daysOfWeek = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
  const dayOfWeek = daysOfWeek[currentDate.getDay()];

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; 
  const year = currentDate.getFullYear();

  const dateInfoElement = document.getElementById('dateInfo');
  dateInfoElement.textContent = `${dayOfWeek} ${day}/${month}/${year}`;
// End dateInfo