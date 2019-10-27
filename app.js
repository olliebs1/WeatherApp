window.addEventListener('load', () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;


      const api = `https://api.darksky.net/forecast/d8506f2317738a48a1b0ea93b90bae47/${lat},${long}`;

      fetch(api).then(response => {
        return response.json();
      }).then(data => {
        console.log(data)
      })
    });

  }
  else {
    h1.textContent = "Please allow location services for this page.";
  }
});