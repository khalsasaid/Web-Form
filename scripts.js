// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the country dropdown
    var countrySelect = document.getElementById('country');
    // Select the city dropdown
    var citySelect = document.getElementById('city');

    // Define city options for each country
    var cities = {
        om: ['Muscat', 'Salalah', 'Sohar'],
        qa: ['Doha', 'Al Wakrah', 'Al Khor'],
        uae: ['Dubai', 'Abu Dhabi', 'Sharjah'],
        sa: ['Riyadh', 'Jeddah', 'Dammam'],
        bh: ['Manama', 'Muharraq', 'Riffa'],
        kw: ['Kuwait City', 'Hawalli', 'Al Ahmadi'],
        jo: ['Amman', 'Zarqa', 'Irbid'],
        lb: ['Beirut', 'Tripoli', 'Sidon'],
        ps: ['Ramallah', 'Gaza', 'Nablus'],
        iq: ['Baghdad', 'Basra', 'Mosul']
    };

    // Function to update cities based on selected country
    function updateCities() {
        // Get selected country value
        var selectedCountry = countrySelect.value;
        // Clear previous options
        citySelect.innerHTML = '';
        // Add new options based on selected country
        cities[selectedCountry].forEach(function(city) {
            var option = document.createElement('option');
            option.value = city.toLowerCase();
            option.textContent = city;
            citySelect.appendChild(option);
        });
        // Show city dropdown
        document.getElementById('city-group').style.display = 'block';
    }

    // Initial population of cities based on default selected country
    updateCities();

    // Event listener for country selection change
    countrySelect.addEventListener('change', updateCities);
});
