function updateRateValue(value) {
    document.getElementById('rateValue').innerText = value;
}

$(document).ready(function () {
    $('#year').datepicker({
        format: "yyyy",
        viewMode: "years",
        minViewMode: "years",
        startDate: '1850',
        endDate: new Date().getFullYear().toString()
    });

    const submitButton = document.querySelector("#submitButton");
    const clearButton = document.querySelector("#clearButton");
    const titleInput = document.querySelector("#title");
    const yearInput = document.querySelector("#year");
    const directorInput = document.querySelector("#director");
    const hoursInput = document.querySelector("#hours");
    const minutesInput = document.querySelector("#minutes");
    const rateInput = document.querySelector("#rate");
    const posterInput = document.querySelector("#poster");


    function getSelectedGenres() {
        const checkboxes = document.querySelectorAll('.form-check-input');
        return Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
    }

    async function handleSubmitClick(event) {
        event.preventDefault();

        const title = titleInput.value.trim();
        const year = yearInput.value.trim();
        const director = directorInput.value.trim();
        const duration = `${hoursInput.value.trim()}h ${minutesInput.value.trim()}min`;
        const genre = getSelectedGenres();
        const rate = rateInput.value.trim();
        const poster = posterInput.value.trim();

        if (!title || !year || !director || !hoursInput.value.trim() || !minutesInput.value.trim() || genre.length === 0 || !rate || !poster) {
            return alert("Todos los campos son obligatorios");
        }

        const objMovie = {
            title,
            year,
            director,
            duration,
            genre,
            rate,
            poster
        };

        try {
            const response = await axios.post("http://localhost:3001/Movies", objMovie);
            window.location.href = "index.html";
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            alert("Hubo un problema al enviar los datos. Por favor, inténtalo de nuevo.");
        }
    }

    function handleClearClick(event) {
        event.preventDefault();
        $('#movieForm')[0].reset();
        $('#rateValue').text('0');
        $('#year').datepicker('update', '');
    }

    submitButton.addEventListener("click", handleSubmitClick);
    clearButton.addEventListener("click", handleClearClick);
});
