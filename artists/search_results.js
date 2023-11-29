document.addEventListener("DOMContentLoaded", function () {
    // Get the search query from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("query");

    // Get the search results container
    const searchResultsContainer = document.getElementById("search-results");

    // Function to display search results
    function displaySearchResults() {
        
        const results = performSearch(query);

        // Display the results
        if (results.length > 0) {
            results.forEach(result => {
                const resultCard = document.createElement("div");
                resultCard.classList.add("artist-card");

                const resultImage = document.createElement("img");
                resultImage.src = result.image;
                resultImage.alt = result.name;

                const resultName = document.createElement("h2");
                resultName.textContent = result.name;

                // Create a link to the artist's page
                const artistLink = document.createElement("a");
                artistLink.href = result.pageLink;
                artistLink.appendChild(resultCard);
                resultCard.appendChild(resultImage);
                resultCard.appendChild(resultName);
                searchResultsContainer.appendChild(artistLink);
            });
        } else {
            const noResultsMessage = document.createElement("p");
            noResultsMessage.textContent = "No results found.";
            searchResultsContainer.appendChild(noResultsMessage);
        }
    }

    // Simulated search function - Replace this with your actual search logic
    function performSearch(query) {
        // This is a placeholder. You should replace it with your actual data and logic.
        const mockResults = [
            { name: "Yo Yo Honey Singh", image: "/Rasika.io/artists/honeysingh/profile_honey.jpg", pageLink: "/Rasika.io/artists/honeysingh/yo yo honey.html" },
            { name: "Arijit Singh", image: "/Rasika.io/artists/ArijitSingh/profile_Arijit.jpg", pageLink: "/Rasika.io/artists/ArijitSingh/arijitsingh.html" },
            { name: "Alan Walker", image: "/Rasika.io/artists/Alan_walker/profile_alan.jpg", pageLink: "/Rasika.io/artists/Alan_walker/Alan_walker.html" },
            {name: "AKhil", image: "/Rasika.io/artists/Akhil/profile_Akhil.jpg", pageLink: "/Rasika.io/artists/Akhil/akhil.html"},
            {name: "Justin Bieber", image: "/Rasika.io/artists/justin bieber/Justin_Bieber_in_2015.jpg", pageLink: "/Rasika.io/artists/justin bieber/justin.html"},
            {name: "Jubin Nautiyal", image: "/Rasika.io/artists/Jubin Nautiyal/profile_Jubin.jpg", pageLink: "/Rasika.io/artists/Jubin Nautiyal/jubin.html"},
            {name: "Diljit Dosanjh", image: "/Rasika.io/artists/Diljit Dosanjh/profile_Diljit.jpg", pageLink: "/Rasika.io/artists/Diljit Dosanjh/diljit.html"},
            {name: "Neha Kakkar", image: "/Rasika.io/artists/Neha Kakkar/images.jpg", pageLink: "/Rasika.io/artists/Neha Kakkar/neha.html"},
            {name: "Dhvani Bhanushali", image: "/Rasika.io/artists/Dhvani Bhanushali/profife_dhavani.jpg", pageLink: "/Rasika.io/artists/Dhvani Bhanushali/dhvani.html"}
            
            
        ];

        return mockResults.filter(result =>
            result.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    // Display search results when the page loads
    displaySearchResults();
});
