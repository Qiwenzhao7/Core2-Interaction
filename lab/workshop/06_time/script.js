document.addEventListener('DOMContentLoaded', function() {
    // Function to update time and background color
    function updateTime() {
      fetch('https://worldtimeapi.org/api/ip')
        .then(response => response.json())
        .then(data => {
          const currentTime = new Date(data.utc_datetime);
          const hours = currentTime.getHours();
          const minutes = currentTime.getMinutes();
          const seconds = currentTime.getSeconds();
  
          document.getElementById('time').textContent = `Current time: ${hours}:${minutes}:${seconds}`;
          if (hours >= 6 && hours < 18) {
            document.body.style.backgroundColor = '#DCA243'; // Daytime color
          } else {
            document.body.style.backgroundColor = '#4368B2'; // Nighttime color
          }
        })
        .catch(error => {
          console.error('Error fetching time:', error);
        });
    }
  
    updateTime();
    setInterval(updateTime, 1000);
  });
  