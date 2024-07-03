document.getElementById('computeForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById('result').innerText = 'Please enter valid numbers for both a and b.';
        return;
    }

    try {
        const response = await fetch('https://ukkjifvu2b.execute-api.eu-central-1.amazonaws.com/Prod/compute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ a, b })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        document.getElementById('result').innerText = `Result: ${data.c}`;
    } catch (error) {
        document.getElementById('result').innerText = 'Error: ' + error.message;
    }
});
