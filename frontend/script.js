document.getElementById('computeForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const response = await fetch('https://ukkjifvu2b.execute-api.eu-central-1.amazonaws.com/Prod/compute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'YOUR_API_KEY' // Replace with your actual API key if authentication is enabled
        },
        body: JSON.stringify({ a, b })
    });
    const data = await response.json();
    document.getElementById('result').innerText = `Result: ${data.c}`;
});
