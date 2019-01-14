---
layout: post
title: Get Adress || Postode || City with Google map Geocoding API and HTML5 Geolocation
date: 2019-01-14 00:00:00 +0000
categories:
- Javascript

---
Exemple on how to get the user current postcode using Google map Geocoding API and HTML5 Geolocation (Navigator.geolocation).

```html
<script src="https://maps.googleapis.com/maps/api/js?key=[Your Key]"
            async defer></script>
```

---

```js
(function () {
    document.addEventListener("DOMContentLoaded", (event) => {
        if (navigator.geolocation) {
            getCurrentLocation.location();
        }
    });

    const getCurrentLocation = {
        success: function (position) {
            const _this = this;
            const geocoder = new google.maps.Geocoder;
            const latlng = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            let result = {
                error: false,
                value: ""
            };

            geocoder.geocode({ "location": latlng }, (results, status) => {
                if (status === 'OK') {
                    if (results[0]) {
                        const resultsData = results[0].address_components;

                        for (let addressComponent of resultsData) {
                            if (addressComponent.types.indexOf("postal_code") > -1) {
                                result.value = addressComponent.long_name;
                                console.log(result.value);
                            }
                        }

                    } else {
                        result.error = true;
                        _this.error(result.error);
                    }
                } else {
                    result.error = true;
                    _this.error(result.error);
                }
            });
        },
        error: function (error = true) {
            if (error.code > 0 || error === true) {
                console.log("Sorry we couldn't find your current location");
            }
        },
        location: function () {
            const _this = this;

			navigator.geolocation.getCurrentPosition((position) => {
                _this.success(position);
            }, (positionError) => {
                _this.error(positionError);
            });
        }
    };
})();
```

## Sources

* [Navigator.geolocation - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation)
* [Geocoding API - Google](https://developers.google.com/maps/documentation/geocoding/start)